const jsonToRul = (data: { [key: string]: any }) => {
  Object.keys(data).map((item: string) => {
    return `${encodeURIComponent(item)} = ${data[item] !== undefined && data[item] !== null ? encodeURIComponent(data[item]) : ''}`
  }).join('&')
}

export {
  jsonToRul
}