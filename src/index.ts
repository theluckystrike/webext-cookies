/**
 * A promise-based wrapper for chrome.cookies API.
 */
export class WebExtCookies {
  /**
   * Retrieves information about a single cookie.
   */
  static get(details: { name: string; url: string; storeId?: string }): Promise<chrome.cookies.Cookie | null> {
    return new Promise((resolve) => {
      chrome.cookies.get(details, (cookie) => {
        resolve(cookie || null);
      });
    });
  }

  /**
   * Retrieves all cookies from a single cookie store that match given information.
   */
  static getAll(details: chrome.cookies.GetAllDetails = {}): Promise<chrome.cookies.Cookie[]> {
    return new Promise((resolve) => {
      chrome.cookies.getAll(details, (cookies) => {
        resolve(cookies || []);
      });
    });
  }

  /**
   * Sets a cookie with the given cookie data; may overwrite equivalent cookies if they exist.
   */
  static set(details: chrome.cookies.SetDetails): Promise<chrome.cookies.Cookie | null> {
    return new Promise((resolve) => {
      chrome.cookies.set(details, (cookie) => {
        resolve(cookie || null);
      });
    });
  }

  /**
   * Deletes a cookie by name.
   */
  static remove(details: { name: string; url: string; storeId?: string }): Promise<{ name: string; url: string; storeId?: string } | null> {
    return new Promise((resolve) => {
      chrome.cookies.remove(details, (removedDetails) => {
        resolve(removedDetails || null);
      });
    });
  }

  /**
   * Lists all existing cookie stores.
   */
  static getAllCookieStores(): Promise<chrome.cookies.CookieStore[]> {
    return new Promise((resolve) => {
      chrome.cookies.getAllCookieStores((stores) => {
        resolve(stores || []);
      });
    });
  }

  /**
   * Fired when a cookie is set or removed.
   */
  static onChanged(callback: (changeInfo: chrome.cookies.CookieChangeInfo) => void): void {
    chrome.cookies.onChanged.addListener(callback);
  }

  /**
   * Removes a listener for onChanged events.
   */
  static offChanged(callback: (changeInfo: chrome.cookies.CookieChangeInfo) => void): void {
    chrome.cookies.onChanged.removeListener(callback);
  }
}
