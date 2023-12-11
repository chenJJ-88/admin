

const jsonToRul = (data: { [key: string]: any }) => {
  Object.keys(data).map((item: string) => {
    return `${encodeURIComponent(item)} = ${data[item] !== undefined && data[item] !== null ? encodeURIComponent(data[item]) : ''}`
  }).join('&')
}
/**
 * @description 数据验证结果
 * @param {any} obj 
 * @returns {String}
 */
const typeOf = function (obj: any): string {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}

/**
 * @description 解析URL参数  https://xxxx.com/index?id=154513&age=18;
 * @returns {Object} {id: "154513", age: "18"}
 */
const getSearchParams = (): object => {
  const searchPar = new URLSearchParams(window.location.search)
  const paramsObj: { [key: string]: any } = {}
  for (const [key, value] of searchPar.entries()) {
    paramsObj[key] = value
  }
  return paramsObj
}

/**
 * @description 获取uuid
 * @returns {String}
 */
const uuid = (): string => {
  const temp_url = URL.createObjectURL(new Blob())
  const uuid = temp_url.toString()
  URL.revokeObjectURL(temp_url) //释放这个url
  return uuid.substring(uuid.lastIndexOf('/') + 1)
}


/**
 * @description: 根据code去重数组
 * @param {Array} array
 * @param {string} property
 * @return {Array}
 */
function removeDuplicatesById<T>(array: T[], property: keyof T): T[] {
  const uniqueObjects: { [key: string]: T } = {};
  const result: T[] = [];

  for (const item of array) {
    const itemId = String(item[property]);

    if (!uniqueObjects[itemId]) {
      uniqueObjects[itemId] = item;
      result.push(item);
    }
  }

  return result;
}
/**
 * @description 判断是不是JSON
 * @param {string} str 
 * @returns boolean
 */
function IsJsonString(str: string) {
  try {
    const obj = JSON.parse(str);
    return typeof obj === "object" && obj !== null;
  } catch (e) {
    return false;
  }
}
export {
  jsonToRul,
  typeOf,
  getSearchParams,
  uuid,
  removeDuplicatesById,
  IsJsonString
}