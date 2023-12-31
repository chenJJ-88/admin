import themeToken from '@/theme';
// import { useModel } from '@umijs/max';
import React, { useState } from 'react';
import ChangeTheme from '../ChangeTheme';
import './index.less';
import useStore from '@/store';
const HeaderContent: React.FC = () => {
  const [text, setText] = useState<string>('默认风格');
  const initialState = useStore(state => state.initialState);
  // const { initialState } = useModel('@@initialState');
  const headerToken = themeToken[initialState || 'light'].header;
  // const headerToken = themeToken['light'].header;

  const onThemeChange = (theme: string): void => {
    setText(theme);
  };
  return (
    <div className="header-content-container">
      <ChangeTheme onThemeChange={onThemeChange}>
        <span style={{ color: headerToken.colorHeaderTitle }}>{text}</span>
      </ChangeTheme>
    </div>
  );
};

export default HeaderContent;
