import React from 'react'
import {Switch, Route} from 'react-router-dom'
import routers from './routers'

export default function RouterList() {
  return (
    <Switch>
      {
        routers.map((item, index) => {
          return <Route key={index} exact={item.exact} render={item.render}/>
        })
      }
    </Switch>
  )
}
