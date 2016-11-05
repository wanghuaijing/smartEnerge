/**
 * 创建于：6/1/16
 * 创建人：杨骐彰
 * 说明：登录验证模块
 */

import {http} from 'utils'
import store from 'store'

export const TOKEN_KEY = 'ef_token';
export const USER_KEY = 'ef_user';

var Auth = {
    /**
     * 登录
     * @param uname
     * @param psd
     * @param cb
     */
    authorize(uname, psd, cb){
        let data = {
            CurPwd: psd,
            ClientId: 3,
            Role: 0
        };
        //电话登录
        if (/^\d*$/gi.test(uname)) {
            Object.assign(data, {
                LoginType: 2,
                Phone: uname
            })
        }
        //邮箱登录
        else if(/[^@\.]+@[^@\.]+\.[^@\.]+$/gi.test(uname)) {
            Object.assign(data, {
                LoginType: 3,
                Email: uname
            })
        }
        else{
            Object.assign(data, {
                LoginType: 1,
                Name: uname
            })
        }


        http({
            type: 'post',
            url: '/Account/Login?misc=UserInfo',
            data: data
        }).promise
            .then((res) => {
                let data = res.Data;
                store.set(TOKEN_KEY, data.Token);
                store.set(USER_KEY, data.Extra.UserInfo);
                cb(null, data);
            })
            .catch((err)=> {
                cb(err);
            });
    },

    /**
     * 是否已登录
     */
    isAuthorized(){
        if (store.get(TOKEN_KEY)) {
            return true;
        }
        else
            return false;
    },

    /**
     * 退出登录
     */
    unAuthorize(cb){
        store.remove(TOKEN_KEY);
        store.remove(USER_KEY);
        cb();
    },

    /**
     * 获取token
     * @returns {*}
     */
    getToken(){
        return store.get(TOKEN_KEY);
    },

    /**
     * 获取用户信息
     * @returns {*|{}}
     */
    getUser(){
        return store.get(USER_KEY) || {};

    }
};

export default Auth;