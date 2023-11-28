/**
 * @param {string} selector
 * @param parent
 * @returns
 */
export function queryElement<T extends HTMLElement>(
  selector: string,
  parent?: HTMLElement | Document
): T | null {
  return (parent || document).querySelector(selector) as T | null;
}
