/**
 * @param selector
 * @param parent
 * @returns
 */

export function queryElements<T extends HTMLElement>(
  selector: string,
  parent?: Element | Document
): T[] {
  return Array.from((parent || document).querySelectorAll(selector)) as T[];
}
