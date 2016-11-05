/**
 * 创建于：2016-5-11
 * 创建人：杨骐彰
 * 说明： 主页面侧边菜单栏
 * 修改：2016-10-21
 * 修改人：王槐泾
 * 说明：重构
 */
import React,{Component} from 'react'
import {Link} from 'react-router'
import './sidebar.scss'
import icons from 'icons'
//import auth from 'auth'
//import {withRouter} from 'react-router'
//分类菜单
const MenuBlock = (props)=>{
  const {block,index,path} = props;
  let src=null;
  var num = null;
  console.log(path)
  block.list.map((item,i)=>{
    if(item.href==path)num=index;

  })
  num==index?src=block.iconChecked:src=block.icon;
  return (
    <div className="menu-block">
      <div className="menu-title" style={num==index?{color:"#fff"}:{}}>
        <i className={"menu-icon "} style={{backgroundImage:`url(${src})`}}>
        </i>
        {block.title}
      </div>
      <ul className="menu-list">
        {
          block.list.map((item, i)=> {
            return (
              <li key={i} >
                <Link to={item.href} activeClassName="active">
                  {item.title}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
MenuBlock.propTypes = {
    block: React.PropTypes.object
};
const blocksSuper =[
    {
        id:1,
        title: '能效信息',
        icon: icons.efficiency,
        iconChecked:icons.efficiencyChecked,
        list: [{
            title: '当前用电统计',
            href: '/home/efficiency/currentstatistics'
        }, {
            title: '历史用电分析',
            href: '/home/efficiency/historyanalysis'
        }, {
            title: '设备用电明细',
            href: '/home/efficiency/detail'
        }, {
            title: '用电信息对比',
            href: '/home/efficiency/compare'
        }]
    },
    {
        id:2,
        title: '设备管理',
        icon: icons.device,
        iconChecked: icons.deviceChecked,
        list: [{
            title: '设备列表',
            href: '/home/device/list'
        }, {
            title: '设备分组',
            href: '/home/device/group'
        }, {
            title: '设备控制',
            href: '/home/device/control'
        }]
    },
    {
        id:3,
        title: '系统管理',
        icon: icons.system,
        iconChecked:icons.systemChecked,
        list: [{
            title: '用户管理',
            href: '/home/system/usermanage'
        }, {
            title: '角色管理',
            href: '/home/system/rolemanage'
        },{
            title:'小区管理',
            href:'/home/system/community'
        }]
    },
    {
        id:4,
        title:'需求响应',
        icon:icons.system,
        iconChecked:icons.systemChecked,
        list:[{
            title:'发布新需求',
            href:'/home/requirement/public'
        },{
            title:'需求方案表',
            href:'/home/requirement/scheme'
        },{
            title:'响应统计',
            href:'/home/requirement/statistics'
        }]
    }
]
const blocksManager = [
    {
        id:1,
        title: '能效信息',
        icon: icons.efficiency,
        iconChecked:icons.efficiencyChecked,
        list: [{
            title: '当前用电统计',
            href: '/main/counter'
        }, {
            title: '历史用电分析',
            href: '/home/efficiency/historyanalysis'
        }, {
            title: '设备用电明细',
            href: '/home/efficiency/detail'
        }, {
            title: '用电信息对比',
            href: '/home/efficiency/compare'
        }]
    },
    {
        id:2,
        title: '设备管理',
        icon: icons.device,
        iconChecked: icons.deviceChecked,
        list: [{
            title: '设备列表',
            href: '/main/home'
        }, {
            title: '设备分组',
            href: '/home/device/group'
        }, {
            title: '设备控制',
            href: '/home/device/control'
        }]
    }
]


const SideBar =(props)=>{
  let blocks = blocksManager;
/*  const userInfo = auth.getUser();
  if(userInfo.Type==128){
    blocks = blocksSuper;
  }*/
  return (
    <div className="sem-sidebar">
      <div className="sem-menu-blocks">
        {
          blocks.map((block, i)=> {
            return <MenuBlock key={i} block={block} index={i}  path={props.path}
            />
          })
        }
      </div>
    </div>
  )
}

export default SideBar;
