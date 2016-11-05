/**
 * 创建于：2016-5-11
 * 创建人：杨骐彰
 * 说明： 主页面页面顶部
 * 修改：2016-10-21
 * 修改人：王槐泾
 * 说明：重构
 */
import React,{Component} from 'react'
import {withRouter} from 'react-router'
import './navbar.scss'
//import auth from 'auth'
import icons from 'icons'
export const Header = (props)=>(
  <div className="sem-navbar">
    <div className="brand">
      <div className="name">
        智慧能源管理系统
      </div>
    </div>
    <ul className="nav">
      <li className="split">
      </li>
      <li className="user">
        <a href="javascript:;">
          <img className="icon" src={icons.administrator}/>
          管理员
        </a>
      </li>
      <li className="split">
      </li>
      <li className="logout">
        <a href="javascript:;">
          <img className="icon" src={icons.logout}/>
          退出
        </a>
      </li>
    </ul>
  </div>
)
export default Header;
