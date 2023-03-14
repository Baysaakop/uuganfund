import React, { useState } from 'react'
import type { MenuProps } from 'antd'
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'

const items: MenuProps['items'] = [
    {
        label: 'Home',
        key: 'home',        
    },
    {
        label: 'About',
        key: 'about',
    },
    {
        label: 'Gallery',
        key: 'gallery',        
    },
    {
        label: 'Contacts',
        key: 'contacts',        
    },
];

function CustomMenu() {

    const [current, setCurrent] = useState('home');

    const onClick: MenuProps['onClick'] = (e) => {        
        setCurrent(e.key);
    };

  return (
    <Menu 
        onClick={onClick} 
        selectedKeys={[current]} 
        mode="horizontal" 
        items={items} 
        theme='dark'
    />
  )
}

export default CustomMenu