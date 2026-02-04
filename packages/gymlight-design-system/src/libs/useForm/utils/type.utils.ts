import { RefTargetType } from "../types";

/**
 * 주어진 값이 문자열인지 확인합니다.
 * @param {unknown} value - 확인할 값입니다.
 * @returns {value is string} 값이 문자열이면 true, 아니면 false를 반환합니다.
 */
export function isString(value: unknown): value is string {
  return typeof value === "string";
}

/**
 * 주어진 대상이 HTMLSelectElement인지 확인합니다.
 * @param {RefTargetType} target - 확인할 대상입니다.
 * @returns {target is HTMLSelectElement} 대상이 HTMLSelectElement이면 true, 아니면 false를 반환합니다.
 */
export function isSelectElement(
  target: RefTargetType,
): target is HTMLSelectElement {
  return target.tagName === "SELECT";
}

/**
 * 주어진 대상이 HTMLInputElement이며 타입이 checkbox인지 확인합니다.
 * @param {RefTargetType} target - 확인할 대상입니다.
 * @returns {target is HTMLInputElement} 대상이 HTMLInputElement이고 타입이 checkbox이면 true, 아니면 false를 반환합니다.
 */
export function isCheckboxElement(
  target: RefTargetType,
): target is HTMLInputElement {
  return target.type === "checkbox";
}
