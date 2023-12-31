import { SettingOutlined, UserOutlined } from '@ant-design/icons';
// import { useModel } from '@umijs/max';
import type { MenuInfo } from 'rc-menu/lib/interface';
import React, { useCallback, useState } from 'react';
import { flushSync } from 'react-dom'; //强制执行一次同步渲染
import HeaderDropdown from '../HeaderDropdown';
import useStore from '@/store';
export type ChangeThemeTypeProps = {
  children: React.ReactNode;
  onThemeChange: (text: string) => void;
};

const ChangeTheme: React.FC<ChangeThemeTypeProps> = ({ children, onThemeChange }) => {
  const setInitialState = useStore(state => state.setInitialState)
  // const { initialState, setInitialState } = useModel('@@initialState');
  const [selectKey, setSelectKey] = useState<string[]>(['light']);
  const onMenuClick = useCallback(
    (event: MenuInfo) => {
      // debugger
      const { key, keyPath } = event;
      setSelectKey(keyPath);
      const text = menuItems.filter((item) => item.key === key)[0].label;
      onThemeChange(text);
      flushSync(() => {
        setInitialState(key);
      });
    },
    [setInitialState],
  );

  const menuItems = [
    {
      key: 'light',
      icon: <UserOutlined />,
      label: '默认风格',
    },
    {
      key: 'dark',
      icon: <SettingOutlined />,
      label: '黑暗风格',
    },
  ];
  return (
    <HeaderDropdown
      menu={{
        selectedKeys: selectKey,
        onClick: onMenuClick,
        items: menuItems,
      }}
    >
      {children}
    </HeaderDropdown>
  );
};

export default ChangeTheme;
