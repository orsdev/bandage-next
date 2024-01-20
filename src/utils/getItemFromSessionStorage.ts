/**
 * Retrieves an item from the session storage by its name and parses it as a JSON object.
 *
 * @template T - The type of the item to retrieve.
 * @param {string} name - The name of the item in session storage.
 * @returns {T | null} - The parsed item from session storage, or null if the item does not exist.
 */
export const getItemFromSessionStorage = <T>(name: string): T | null => {
  const storageData = sessionStorage.getItem(name);

  if (storageData) {
    return JSON.parse(storageData) as T;
  }

  return null;
};
