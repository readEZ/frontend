import { Menu } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React from 'react'
import ExportedObj from '../../../../Assets';

const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));

const WsHeader = () => {
    return (
        <>
            <h3>Header</h3>
        </>
    )
}

export default WsHeader