import React, {useEffect} from 'react';
import {Layout, List} from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import {useLocation} from 'react-router-dom'
import {getList} from "@store/actions";
import ListHeader from './components/ListHeader'
import ListItem from './components/ListItem'

import('@assets/less/home.less');

const {Sider, Content} = Layout;

export default function Home() {
  const {data, loading} = useSelector(state => state.list);
  const {search} = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getList(search))
  }, [search,dispatch]);
  return (
    <Layout>
      <Content>
        <List header={<ListHeader/>}
              gutter={0}
              loading={loading}
              dataSource={data}
              size="small"
              bordered
              renderItem={item => (
                <ListItem {...item}/>
              )}/>
      </Content>
      <Sider>Sider</Sider>
    </Layout>
  )
}
