import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout } from 'antd';


import WsHeader from './WsHeader';
import WsSideBar from './WsSideBar';
import WsFooter from './WsFooter';
import WsMainContent from './WsMainContent';
import Theme from '../../../theme/theme';


const { Footer } = Layout;

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const App = () => {

  return (
    <Layout style={{
      minHeight: '100vh',
      background: Theme.PrimaryDarkBackground
    }}  >
      <WsHeader />
      <Layout>
        <WsSideBar />
        <WsMainContent />
      </Layout>

      {/* <WsFooter /> */}
    </Layout>
  );
};
export default App;