
import { MenuDataItem } from '@ant-design/pro-components'
const jsonToRul = (data: { [key: string]: any }) => {
  Object.keys(data).map((item: string) => {
    return `${encodeURIComponent(item)} = ${data[item] !== undefined && data[item] !== null ? encodeURIComponent(data[item]) : ''}`
  }).join('&')
}
const filterMenuData = (data: MenuDataItem[]): MenuDataItem[] => {
  return data.reduce<MenuDataItem[]>((acc, item) => {
    if (item.routes && item.routes.length) {
      const filteredRoutes = filterMenuData(item.routes);
      if (filteredRoutes.length > 0 || !item.hideInMenu) {
        acc.push({
          ...item,
          routes: filteredRoutes,
        });
      }
    } else if (!item.hideInMenu) {
      acc.push(item);
    }
    return acc;
  }, []);
};
export {
  jsonToRul,
  filterMenuData
}