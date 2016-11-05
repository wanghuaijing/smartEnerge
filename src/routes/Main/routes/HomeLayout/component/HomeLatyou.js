/**
 * Created by whj57 on 2016/10/21.
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
      <SideBar />
      <MainBody>
        {children}
      </MainBody>
    </div>
  )}
export default Home
