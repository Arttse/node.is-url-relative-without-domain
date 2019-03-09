/**
 * Checks if a URL is relative without domain
 *
 * @param str - string for check
 * @param domains - your custom list of domains in Unicode for check.
 *                  By default using package `domains` as optional dependency
 *                  or empty array without optional dependency
 *
 * @returns true if URL is relative without domain
 */
declare const isUrlRelativeWithoutDomain: (str: string, domains?: Array<string>) => Boolean;
export default isUrlRelativeWithoutDomain;
