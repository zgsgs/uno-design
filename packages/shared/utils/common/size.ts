import type { UtilsSizeChangeInterface } from '../../types'

/**
 * 将数字尺寸改为字符串
 * @param size 尺寸
 * @param target 单位
 * @returns
 */
export const sizeChange: UtilsSizeChangeInterface = (size: string | number, target = 'px'): string => {
  return typeof size === 'string' ? size : size + target
}
