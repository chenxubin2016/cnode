import React from 'react';
import {Menu} from 'antd'
import {NavLink} from 'react-router-dom'

const category = [
  {
    key: 'all',
    title: '全部'
  },
  {
    key: 'good',
    title: '精华'
  },
  {
    key: 'share',
    title: '分享'
  },
  {
    key: 'ask',
    title: '问答'
  },
  {
    key: 'job',
    title: '招聘'
  },
  {
    key: 'dev',
    title: '客户端测试'
  }
];
export default function ListHeader() {
  return (
    <Menu mode='horizontal' defaultSelectedKeys={['0']}>
      {
        category.map((item, index) => {
          return <Menu.Item key={index}>
            <NavLink to={() => {
              return `?tab=${item.key}`
            }}>{item.title}</NavLink>
          </Menu.Item>
        })
      }
    </Menu>
  )
}
