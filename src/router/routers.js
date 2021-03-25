import Home from '@/views/Home/index'
import Start from '@/views/Start/index'
import About from '@/views/About/index'
import Topic from '@/views/Topic/index'
import User from '@/views/User/index'
import Article from '@/views/Article/index'
import View404 from '@/views/View404/index'

const routes = [
  {
    title: '首页',
    path: '/',
    exact: true,
    isNav: true,
    render(props) {
      return <Home {...props}/>
    }
  },
  {
    title: '新手入门',
    path: '/getStart',
    exact: false,
    isNav: true,
    render(props) {
      return <Start {...props}/>
    }
  },
  {
    title: '关于',
    path: '/about',
    exact: false,
    isNav: true,
    render(props) {
      return <About {...props}/>
    }
  },
  {
    title: '文章详情',
    path: '/toPic',
    exact: false,
    isNav: false,
    render(props) {
      return <Topic {...props}/>
    }
  },
  {
    title: '用户详情',
    path: '/user/:username',
    exact: false,
    isNav: false,
    render(props) {
      return <User {...props}/>
    }
  },
  {
    title: '文章详情',
    path: '/article/:id',
    exact: false,
    isNav: false,
    render(props) {
      return <Article {...props}/>
    }
  },
  {
    title: '404',
    path: '',
    exact: false,
    isNav: false,
    render(props) {
      return <View404 {...props}/>
    }
  }
]
export default routes
