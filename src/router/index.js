import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/common/login'
import index from '@/components/index'
import BKGoods from '@/components/index/BKGoods'
import myOrder from '@/components/myOrder'
import orderDetail from '@/components/myOrder/detail'
import buy from '@/components/buy'
import applyBuyAfter from '@/components/myOrder/applyBuyAfter'
import returnMoney from '@/components/myOrder/returnMoney'
import againToGoods from '@/components/myOrder/againToGoods'
import compensate from '@/components/myOrder/compensate'
import teamOrder from '@/components/teamOrder'
import countOrder from '@/components/countOrder'
import countDetail from '@/components/countOrder/detail'
import ManageUser from '@/components/ManageUser'
import inviteUser from '@/components/inviteUser'
import inviteCode from '@/components/inviteCode'
import returnAndChangeGoods from '@/components/returnAndChangeGoods'
import myWallet from '@/components/myWallet'
import financeDeatils from '@/components/financeDeatils'
import accountMange from '@/components/accountMange'
import changePsd from '@/components/changePsd'
import recharge from '@/components/financeDeatils/recharge'

Vue.use(Router)

export default new Router({
    routes: [
        {
        path: '/',
        name: 'index',
        component: index
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
        path: '/BKGoods',
        name: 'BKGoods',
        component: BKGoods
        },
        {
        path: '/myOrder',
        name: 'myOrder',
        component: myOrder
        },
        {
        path: '/orderDetail',
        name: 'orderDetail',
        component: orderDetail
        },
        {
        path: '/applyBuyAfter',
        name: 'applyBuyAfter',
        component: applyBuyAfter
        },
        {
        path: '/returnMoney',
        name: 'returnMoney',
        component: returnMoney
        },
        {
        path: '/againToGoods',
        name: 'againToGoods',
        component: againToGoods
        },
        {
        path: '/compensate',
        name: 'compensate',
        component: compensate
        },
        
        {
        path: '/teamOrder',
        name: 'teamOrder',
        component: teamOrder
        },
        {
        path: '/countOrder',
        name: 'countOrder',
        component: countOrder
        },
        {
        path: '/countDetail',
        name: 'countDetail',
        component: countDetail
        },
        {
        path: '/ManageUser',
        name: 'ManageUser',
        component: ManageUser
        },
        {
        path: '/inviteUser',
        name: 'inviteUser',
        component: inviteUser
        },
        {
        path: '/inviteCode',
        name: 'inviteCode',
        component: inviteCode
        },
        {
        path: '/returnAndChangeGoods',
        name: 'returnAndChangeGoods',
        component: returnAndChangeGoods
        },
        {
        path: '/myWallet',
        name: 'myWallet',
        component: myWallet
        },
        {
        path: '/financeDeatils',
        name: 'financeDeatils',
        component: financeDeatils
        },
        {
        path: '/accountMange',
        name: 'accountMange',
        component: accountMange
        },
        {
        path: '/changePsd',
        name: 'changePsd',
        component: changePsd
        },
        {
        path: '/recharge',
        name: 'recharge',
        component: recharge
        },
        {
        path: '/buy',
        name: 'buy',
        component: buy
        },
        
    ]
    
})