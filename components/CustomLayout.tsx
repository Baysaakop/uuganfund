import React, { ReactNode } from 'react'
import { Grid, Layout, Menu } from 'antd'
import Head from 'next/head'
import CustomMenu from './CustomMenu'

const { Header, Content, Footer } = Layout
const { useBreakpoint } = Grid

type LayoutProps = {children?: ReactNode}

const CustomLayout = ({ children }: LayoutProps) => {

    const screens = useBreakpoint()

    return (
        <div>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta name='keywords' content='' />
                <meta name='description' content='' />
                <meta charSet='utf-8' />            
                <title>Badar-Uugan</title>
            </Head>
            <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10%' }}>
                    <div style={{ color: '#fff' }}>
                        Logo
                    </div>
                    <div>
                        <CustomMenu />
                    </div>
                </div>                          
            </Header>
            <Content className="site-layout" style={{ padding: '0 50px' }}>
                <div style={{ padding: 24, minHeight: 380 }}>
                    {children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </div>
    )
}

export default CustomLayout