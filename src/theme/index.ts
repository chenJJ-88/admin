const themeToken: { [key: string]: any } = {
  // 默认风格
  light: {

    colorBgElevated: '#fff',
    colorPrimary: '#0052ef',
    colorSuccess: '#18c475',
    colorWarning: '#ff8411',
    colorError: '#f72727',
    colorPrimaryBg: '#f0f3fb',
    colorTextBase: '#626262',
    sizeStep: 4,
    header: {
      // 头部token
      colorBgHeader: '#fff',
      colorHeaderTitle: '#000',
    },
    sider: {
      colorMenuBackground: '#fff',
      colorTextMenu: '#000',
      colorBgCollapsedButton: '#fff',
      colorTextCollapsedButton: '#000'
    },
    pageContainer: {
      paddingBlockPageContainerContent: 16,
      paddingInlinePageContainerContent: 16,
      colorBgPageContainer: '#eaeef4',
    },
    proCard: {
      bgColor: '#fff',
    }
  },
  // 黑暗风格
  dark: {
    colorBgElevated: '#141c2b',
    colorPrimary: '#3a8afb',
    colorPrimaryBg: '#141c2b',
    colorPrimaryBgHover: '#192944',
    colorPrimaryBorder: '#1f3759',
    colorPrimaryBorderHover: '#25497c',
    colorPrimaryHover: '#5b9ae8',
    colorPrimaryActive: '#2d61aa',
    colorPrimaryTextHover: '#5b9ae8',
    colorPrimaryText: '#3478d8',
    colorPrimaryTextActive: '#2d61aa',
    colorSuccess: '#18c475',
    colorWarning: '#ff8411',
    colorError: '#f72727',
    colorTextBase: '#fff',
    sizeStep: 4,
    header: {
      // 头部token
      colorBgHeader: '#141c2b',
      colorHeaderTitle: '#fff',

    },
    sider: {
      colorMenuBackground: '#141c2b',
      colorTextMenu: '#fff',
      colorBgMenuItemSelected: '#0052ef',
      colorBgCollapsedButton: '#000',
      colorTextCollapsedButton: '#fff'
    },
    pageContainer: {
      paddingBlockPageContainerContent: 16,
      paddingInlinePageContainerContent: 16,
      colorBgPageContainer: '#000',
    },
    proCard: {
      bgColor: '#000',
    }
  },
};


export default themeToken
