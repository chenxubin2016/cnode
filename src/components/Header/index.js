import {Layout, Menu, Row, Col} from 'antd';
import routers from '@/router/routers'
import {NavLink,useLocation} from 'react-router-dom'

export default function Header() {
  const {pathname}=useLocation()
  const defaultSelectedKeys=routers.filter(item=>item.isNav).findIndex(item=>item.path===pathname).toString()
  return (
    <Layout.Header style={{position: 'fixed', zIndex: 1, width: '100%', height: '50px'}}>
      <Row>
        <Col span={12}>
          <div className="left">
            <NavLink className='logo' to='/'>
              <img src={require('@assets/img/logo.svg').default} alt="" width='120'/>
            </NavLink>
            <input className='search-form' type="text"/>
          </div>
        </Col>
        <Col span={12}>
          <Menu theme="dark" mode="horizontal" selectedKeys={[defaultSelectedKeys]} defaultSelectedKeys={[defaultSelectedKeys]} className='header-nav'>
            {
              routers.filter(item => item.isNav).map((item, index) => {
                return (
                  <Menu.Item key={index}>
                    <NavLink to={item.path}>{item.title}</NavLink>
                  </Menu.Item>
                )
              })
            }
          </Menu>
        </Col>
      </Row>
    </Layout.Header>
  )
}
