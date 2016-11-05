/**
 * 创建于：2016-5-11
 * 创建人：杨骐彰
 * 说明： 主页面
 * 修改：2016-10-21
 * 修改人：王槐泾
 * 说明：重构
 */

import React,{Component} from 'react'
import NavBar from 'navbar'
import SideBar from 'sidebar'
import MainBody from 'mainbody'
//import auth from 'auth'
//import { connect }  from 'react-redux';

const Home =({children})=>{
  return(
  <div>
    <NavBar/>
    <SideBar path={children.props.location.pathname}/>
    <MainBody>
      {children}
    </MainBody>
  </div>
)};
export default Home
