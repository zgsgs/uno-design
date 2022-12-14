/** replace的第二个参数为函数
 * 参数一：正则匹配的结，即-x
 * 参数二：为\w
 * replace的函数回调有个特点，正则里面只要有()包裹的，判断为分组($1)，都会单独返会一个结果，所以这里参数2是-后的字母，如果(\w)换成\w，那参数2会是匹配结果的下标
 */

/**
 * @description: 转camel
 * 例：kebab-case -> kebabCase; KebabCase -> kebabCase
 * @access: public
 * @param {*} str
 * @return {*}
 */
export function camelize(str: string) {
  if (!str.trim())
    return ''
  const result = str.replace(/-(\w)/g, (_, char) => {
    return char.toUpperCase()
  })
  return result.replace(result[0], result[0].toLowerCase())
}

/**
 * @description: 转pascal
 * 例：kebab-case -> KebabCase; kebabCase -> KebabCase
 * @access: public
 * @param {*} str
 * @return {*}
 */
export function getPascal(str: string) {
  if (!str.trim())
    return ''
  const result = str.replace(/-(\w)/g, (_, char) => {
    return char.toUpperCase()
  })
  return result.replace(result[0], result[0].toUpperCase())
}

/**
 * @description: 转kebab-case
 * 例：kebabCase -> kebab-case; KebabCase -> kebab-case
 * @access: public
 * @param {*} str
 * @return {*}
 */
export function getKebabCase(str: string) {
  if (!str.trim())
    return ''
  const result = str.replace(/([A-Z])/g, (char) => {
    return `-${char.toLowerCase()}`
  })
  if (result.indexOf('-') === 0)
    return result.substring(1)

  return result
}

/**
 * @description: 首字母转大写
 * @access: public
 * @param {string} str
 * @return {*}
 */
export function capitalize(str: string) {
  return str.trim() ? str.replace(str[0], str[0].toUpperCase()) : ''
}

/**
 * @description: 首字母转小写
 * @access: public
 * @param {*} str
 * @return {*}
 */
export function lowercase(str: string) {
  return str.trim() ? str.replace(str[0], str[0].toLowerCase()) : ''
}
/**
 * @description: 判断空字符
 * @access: public
 * @param {*} str
 * @return {*}
 */
export function isEmptyString(str: string) {
  return !str || str.trim() === ''
}

/**
 * @description: 校验pascal
 * @access: public
 * @param {string} str
 * @return {*}
 */
export function validatePascal(str: string) {
  return /^[A-Z][a-z0-9]+([A-Z][a-z0-9]+)*/.test(str)
}

/**
 * @description: 校验camel
 * @access: public
 * @param {string} str
 * @return {*}
 */
export function validateCamel(str: string) {
  return /^[a-z][a-z0-9]+([A-Z][a-z0-9]+)*/.test(str)
}

/**
 * @description: 校验kebab-case
 * @access: public
 * @param {string} str
 * @return {*}
 */
export function validateKebabCase(str: string) {
  return /^[a-z]+(-[a-z]+)*/.test(str)
}

