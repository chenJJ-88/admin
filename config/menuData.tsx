
// routesConfig.js
import { SmileFilled, CrownFilled } from '@ant-design/icons';
const menuData = [
  {
    path: '/home/welcome',
    name: '欢迎',
    icon: <SmileFilled />,
  },
  {
    path: '/home/admin',
    name: '管理页',
    icon: <CrownFilled />,
    access: './canAdmin',
    routes: [
      {
        path: '/home/admin/sub-page1',
        name: '一级页面',
        icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
      },
      // 其他子页面的配置
    ],
  },
  // 其他路由配置
];

export { menuData };
