import React from 'react'
import {Layout, Menu, Breadcrumb} from 'antd';
import OrderList from "../OrderList";
import './style.css'
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

export default class Index extends React.Component {
    state = {
        collapsed: false,
        defaultSelectedKeys: ['22'],
        menu: [
            {id: 1, title: '基础数据', icon: 'PieChartOutlined', url: '', 'sub': null},
            {
                id: 2, title: '生产执行', icon: 'PieChartOutlined', url: '', 'sub': [
                    {id: 21, title: '生产订单', icon: 'PieChartOutlined', url: ''},
                    {id: 22, title: '生产计划', icon: 'PieChartOutlined', url: ''},
                    {id: 23, title: '下线报工', icon: 'PieChartOutlined', url: ''}
                ]
            },
            {id: 3, title: '质量管理', icon: 'PieChartOutlined', url: '', 'sub': null},
            {id: 4, title: '设备管理', icon: 'PieChartOutlined', url: '', 'sub': null},
            {
                id: 5, title: '物流管理', icon: 'PieChartOutlined', url: '', 'sub': [
                    {id: 51, title: '线边仓管理', icon: 'PieChartOutlined', url: ''},
                    {id: 52, title: '物流拉动', icon: 'PieChartOutlined', url: ''},
                    {id: 53, title: '物料管理', icon: 'PieChartOutlined', url: ''}
                ]
            }
        ]
    }
    onCollapse = collapsed => {
        this.setState({collapsed});
    }

    render() {
        return (
            <Layout style={{minHeight: '100vh'}}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo">
                        GEELY
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={this.state.defaultSelectedKeys} mode="inline">
                        {this.state.menu.map(item => !item.sub ? <Menu.Item key={item.id} icon={<PieChartOutlined/>}>
                                {item.title}</Menu.Item> :
                            <SubMenu key={item.id} icon={<UserOutlined/>} title={item.title}>
                                {item.sub.map(sub => <Menu.Item icon={<UserOutlined/>}
                                                                key={sub.id}>{sub.title}</Menu.Item>)}
                            </SubMenu>)}
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{padding: 0}}/>
                    <Content style={{margin: '0 16px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>

                        <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                            {/*Bill is a cat.*/}
                            <OrderList></OrderList>
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}