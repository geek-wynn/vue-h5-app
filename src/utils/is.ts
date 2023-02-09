// 是否是手机号
export function isTel(value: string): boolean {
  return /^[1][0-9]{10}$/.test(value);
}
