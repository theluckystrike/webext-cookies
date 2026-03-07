import { describe, it, expect, vi, beforeEach } from 'vitest';
import { WebExtCookies } from './index';

describe('WebExtCookies', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // @ts-ignore
    global.chrome = {
      cookies: {
        get: vi.fn(),
        getAll: vi.fn(),
        set: vi.fn(),
        remove: vi.fn(),
        getAllCookieStores: vi.fn(),
        onChanged: {
          addListener: vi.fn(),
          removeListener: vi.fn(),
        },
      },
    };
  });

  it('should call get with correct details', async () => {
    const details = { name: 'test', url: 'http://example.com' };
    const mockCookie = { name: 'test', value: 'value' };
    (chrome.cookies.get as any).mockImplementation((d: any, cb: any) => cb(mockCookie));

    const result = await WebExtCookies.get(details);
    expect(chrome.cookies.get).toHaveBeenCalledWith(details, expect.any(Function));
    expect(result).toEqual(mockCookie);
  });

  it('should return null if get returns no cookie', async () => {
    (chrome.cookies.get as any).mockImplementation((d: any, cb: any) => cb(null));
    const result = await WebExtCookies.get({ name: 'test', url: 'http://example.com' });
    expect(result).toBeNull();
  });

  it('should call getAll with correct details', async () => {
    const details = { domain: 'example.com' };
    const mockCookies = [{ name: 'test', value: 'value' }];
    (chrome.cookies.getAll as any).mockImplementation((d: any, cb: any) => cb(mockCookies));

    const result = await WebExtCookies.getAll(details);
    expect(chrome.cookies.getAll).toHaveBeenCalledWith(details, expect.any(Function));
    expect(result).toEqual(mockCookies);
  });

  it('should return empty array if getAll returns null', async () => {
    (chrome.cookies.getAll as any).mockImplementation((d: any, cb: any) => cb(null));
    const result = await WebExtCookies.getAll();
    expect(result).toEqual([]);
  });

  it('should call set with correct details', async () => {
    const details = { name: 'test', value: 'value', url: 'http://example.com' };
    const mockCookie = { name: 'test', value: 'value' };
    (chrome.cookies.set as any).mockImplementation((d: any, cb: any) => cb(mockCookie));

    const result = await WebExtCookies.set(details);
    expect(chrome.cookies.set).toHaveBeenCalledWith(details, expect.any(Function));
    expect(result).toEqual(mockCookie);
  });

  it('should call remove with correct details', async () => {
    const details = { name: 'test', url: 'http://example.com' };
    const removedDetails = { name: 'test', url: 'http://example.com' };
    (chrome.cookies.remove as any).mockImplementation((d: any, cb: any) => cb(removedDetails));

    const result = await WebExtCookies.remove(details);
    expect(chrome.cookies.remove).toHaveBeenCalledWith(details, expect.any(Function));
    expect(result).toEqual(removedDetails);
  });

  it('should call getAllCookieStores', async () => {
    const mockStores = [{ id: '0', incognito: false }];
    (chrome.cookies.getAllCookieStores as any).mockImplementation((cb: any) => cb(mockStores));

    const result = await WebExtCookies.getAllCookieStores();
    expect(chrome.cookies.getAllCookieStores).toHaveBeenCalled();
    expect(result).toEqual(mockStores);
  });

  it('should add listener to onChanged', () => {
    const callback = vi.fn();
    WebExtCookies.onChanged(callback);
    expect(chrome.cookies.onChanged.addListener).toHaveBeenCalledWith(callback);
  });

  it('should remove listener from onChanged', () => {
    const callback = vi.fn();
    WebExtCookies.offChanged(callback);
    expect(chrome.cookies.onChanged.removeListener).toHaveBeenCalledWith(callback);
  });

  it('should handle set failure by returning null', async () => {
    (chrome.cookies.set as any).mockImplementation((d: any, cb: any) => cb(null));
    const result = await WebExtCookies.set({ name: 'test', value: 'v', url: 'http://x.com' });
    expect(result).toBeNull();
  });
});
