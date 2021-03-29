import '@assets/less/index.less'
import Router from '@/router/index'
import {Layout} from 'antd'
import Header from '@components/Header/index'

const {Content} = Layout;


function App() {
  return (
    <Layout>
      <Header/>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 50 }}>
        <Router/>
      </Content>
    </Layout>
  );
}

export default App;
