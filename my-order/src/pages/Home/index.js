import React from 'react'
import {Layout, Menu, Breadcrumb, Button} from 'antd';
// import {Link, Route, NavLink} from 'react-router-dom'
import {Link} from 'react-router-dom'
import OrderList from "@/components/OrderList";
import './style.css'
import {
  ShoppingCartOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

export default class Index extends React.Component {
  constructor(props) {
    // 第一种情况，super作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次super函数。
    super(props) // 相当于React.Component.prototype.constructor.call(this)
    this.state = {
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
      ],
      date: new Date(),
      counter: 0,
      goods: [
        {
          id: 1,
          img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
          name: 'Lydia',
          price: 19.9

        },
        {
          id: 2,
          img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
          name: 'Lydia',
          price: 19.9

        },
        {
          id: 3,
          img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
          name: 'Lydia',
          price: 19.9

        },
        {
          id: 4,
          img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
          name: 'Lydia',
          price: 19.9

        },
        {
          id: 5,
          img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
          name: 'Lydia',
          price: 19.9

        },
      ]
    }
  }

  onCollapse = collapsed => {
    //  setState 是批量执行，合并操作，提高更新速率
    this.setState({collapsed});
  }

  componentDidMount() {
    // this.timer = setInterval(() => {
    this.setState({date: new Date()})
    // 直接修改无效，状态不会更新
    // this.state.counter = 1
    // 正确写法
    // this.setState({counter: this.state.counter + 1})
    // 或者函数式写法 推荐使用
    this.setState(preState => {
      return {counter: preState.counter + 1}
    })
    // }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  routerpush = () => {
    this.props.history.push('/reduxTest')
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
          <Header className="site-layout-background" style={{padding: 0}}>
            <Link style={{marginLeft: 20}} to='/page1'> <Button>Link</Button> </Link>
            <Link to='/page1'> <Button>{this.state.date.toLocaleTimeString()}</Button> </Link>
            <Link to='/reduxTest'> <Button>ReduxTest</Button> </Link>
            <Button onClick={this.routerpush}>routerpush</Button>
            <Button>购物车<ShoppingCartOutlined/> {this.state.counter}</Button>
          </Header>
          <Content style={{margin: '0 16px'}}>
            <Breadcrumb style={{margin: '16px 0'}}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
              <OrderList goods={this.state.goods}></OrderList>
            </div>
          </Content>
          <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
}