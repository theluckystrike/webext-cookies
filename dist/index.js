/**
 * A promise-based wrapper for chrome.cookies API.
 */
export class WebExtCookies {
    /**
     * Retrieves information about a single cookie.
     */
    static get(details) {
        return new Promise((resolve) => {
            chrome.cookies.get(details, (cookie) => {
                resolve(cookie || null);
            });
        });
    }
    /**
     * Retrieves all cookies from a single cookie store that match given information.
     */
    static getAll(details = {}) {
        return new Promise((resolve) => {
            chrome.cookies.getAll(details, (cookies) => {
                resolve(cookies || []);
            });
        });
    }
    /**
     * Sets a cookie with the given cookie data; may overwrite equivalent cookies if they exist.
     */
    static set(details) {
        return new Promise((resolve) => {
            chrome.cookies.set(details, (cookie) => {
                resolve(cookie || null);
            });
        });
    }
    /**
     * Deletes a cookie by name.
     */
    static remove(details) {
        return new Promise((resolve) => {
            chrome.cookies.remove(details, (removedDetails) => {
                resolve(removedDetails || null);
            });
        });
    }
    /**
     * Lists all existing cookie stores.
     */
    static getAllCookieStores() {
        return new Promise((resolve) => {
            chrome.cookies.getAllCookieStores((stores) => {
                resolve(stores || []);
            });
        });
    }
    /**
     * Fired when a cookie is set or removed.
     */
    static onChanged(callback) {
        chrome.cookies.onChanged.addListener(callback);
    }
    /**
     * Removes a listener for onChanged events.
     */
    static offChanged(callback) {
        chrome.cookies.onChanged.removeListener(callback);
    }
}
