/**
 * 创建于：2016-5-12
 * 创建人：杨骐彰
 * 说明： 主页面内容容器
 * 修改：2016-10-21
 * 修改人：王槐泾
 * 说明：重构
 */
import React,{Component} from 'react'
import './mainbody.scss'
export const MainBody =(props)=>(
  <div className="sem-main-body">
    {props.children}
  </div>
)

export default MainBody
