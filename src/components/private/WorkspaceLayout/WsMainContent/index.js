import { Layout, theme } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import React from 'react'
import WsFooter from '../WsFooter';

const WsMainContent = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>

            <Content style={{
                minHeight: "calc(100vh - 140px)",
                background: colorBgContainer,
                padding: "20px"
            }}>

                Bill is a cat.
            </Content>
            <WsFooter />
        </Layout>
    )
}

export default WsMainContent