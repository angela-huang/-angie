import React from 'react';

import { ConfigProvider } from 'antd';

const theme = {
  token: {
    colorPrimary: '#1DA57A', // 主题色
  },
};

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
};

export default ThemeProvider;