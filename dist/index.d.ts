/**
 * A promise-based wrapper for chrome.cookies API.
 */
export declare class WebExtCookies {
    /**
     * Retrieves information about a single cookie.
     */
    static get(details: {
        name: string;
        url: string;
        storeId?: string;
    }): Promise<chrome.cookies.Cookie | null>;
    /**
     * Retrieves all cookies from a single cookie store that match given information.
     */
    static getAll(details?: chrome.cookies.GetAllDetails): Promise<chrome.cookies.Cookie[]>;
    /**
     * Sets a cookie with the given cookie data; may overwrite equivalent cookies if they exist.
     */
    static set(details: chrome.cookies.SetDetails): Promise<chrome.cookies.Cookie | null>;
    /**
     * Deletes a cookie by name.
     */
    static remove(details: {
        name: string;
        url: string;
        storeId?: string;
    }): Promise<{
        name: string;
        url: string;
        storeId?: string;
    } | null>;
    /**
     * Lists all existing cookie stores.
     */
    static getAllCookieStores(): Promise<chrome.cookies.CookieStore[]>;
    /**
     * Fired when a cookie is set or removed.
     */
    static onChanged(callback: (changeInfo: chrome.cookies.CookieChangeInfo) => void): void;
    /**
     * Removes a listener for onChanged events.
     */
    static offChanged(callback: (changeInfo: chrome.cookies.CookieChangeInfo) => void): void;
}
