import { Layout, Menu, theme } from 'antd'
import Sider from 'antd/es/layout/Sider'
import React, { useState } from 'react'
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined
} from '@ant-design/icons';

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('Upload pdf', '1', <PieChartOutlined />),
    // getItem('Option 2', '2', <DesktopOutlined />),
    // getItem('User', 'sub1', <UserOutlined />, [
    //     getItem('Tom', '3'),
    //     getItem('Bill', '4'),
    //     getItem('Alex', '5'),
    // ]),
    // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    // getItem('Files', '9', <FileOutlined />),
];

const WsSideBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (

        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="demo-logo-vertical" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>

    )
}

export default WsSideBar