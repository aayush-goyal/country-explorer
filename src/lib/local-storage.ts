'use client';

// Import global from third party libraries.
import * as CryptoJS from 'crypto-js';

// Import custom utility classes.

// Import custom types.

// Import custom components.

// Import styles.

/**
 * This function is a custom Hooks definition for working with LocalStorage of the browser.
 * This function encrypts/decrypts the value before saving/loading the value to/from local storage for security purposes.
 */
const secretKey = 'a84d27b2a34d3e08a52e52d7da7dabea';

/**
 * This function retrieves data from the LocalStorage of the browser.
 *
 * @param key The key under which the value is stored in LocalStorage.
 * @returns The decrypted value stored in LocalStorage under the specified key, or null if no value is found.
 */
const getDataFromLocalStorage = (key: string): string | null => {
    const encryptedValue = window.localStorage.getItem(key);
    if (encryptedValue) {
        const bytes = CryptoJS.AES.decrypt(encryptedValue, secretKey);
        const decryptedValue = bytes.toString(CryptoJS.enc.Utf8);
        return decryptedValue;
    }
    return null;
};

/**
 * This function sets data in the LocalStorage of the browser.
 *
 * @param key The key under which the value is to be stored in LocalStorage.
 * @param value The value to be stored in LocalStorage. This value will be encrypted before storing.
 */
const setDataInLocalStorage = (key: string, value: string): void => {
    const encryptedValue = CryptoJS.AES.encrypt(value, secretKey).toString();
    return window.localStorage.setItem(key, encryptedValue);
};

export { getDataFromLocalStorage, setDataInLocalStorage };
