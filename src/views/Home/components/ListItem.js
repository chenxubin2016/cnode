import React from 'react'
import {NavLink} from 'react-router-dom'
import Avatar from '@components/Avatar'
import getElapsedTime from '@assets/utils/getElapsedTime'
const tabs = [
  {key: 'top', title: '置顶'},
  {key: 'share', title: '分享'},
  {key: 'ask', title: '问答'},
  {key: 'good', title: '精华'}
]
export default function ListItem(props) {
  // console.log(props)
  const {author: {avatar_url, loginname}, last_reply_at, reply_count, visit_count, top, title, tab, good} = props
  return (
    <li className='list-item'>
      <NavLink to='/' className="user_avatar">
        <Avatar src={avatar_url} width='30' title={loginname}/>
      </NavLink>
      <div className="reply_count">
        <span>{reply_count}/</span>
        <span>{visit_count}</span>
      </div>
      <div className="topic_title_wrapper">
        {(() => {
          if (top) {
            return <div className="put_top">{tabs.find(em => em.key === 'top').title}</div>
          } else if (good) {
            return <div className="put_top">{tabs.find(em => em.key === 'good').title}</div>
          } else {
            return <div className="topiclist-tab">{tabs.find(em => em.key === tab).title}</div>
          }
        })()}
        <NavLink className='topic_title' to='/'>{title}</NavLink>
      </div>
      <NavLink to='/' className="last_time">
        <Avatar src={avatar_url} width='18' title={loginname}/>
        <span className="last_active_time">{getElapsedTime(new Date(last_reply_at.split('.')[0].replace(/T/g,' ')).getTime())}</span>
      </NavLink>
    </li>
  )
}
