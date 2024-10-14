import React from 'react';
import { App, ConfigProvider } from 'antd';
import { useOutlet } from 'dumi';


const GlobalLayout = () => {
  const outlet = useOutlet();
  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#54b180'}}}>
      <App>
        {outlet}
      </App>
    </ConfigProvider>
  );
}
export default GlobalLayout