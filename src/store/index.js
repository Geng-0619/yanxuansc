import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        itemToken:'',
        CartItem:[],
        NumStore:'',
    },
    mutations:{
        AddCartI(state,n){
            let index = state.CartItem.findIndex(v => {
                return v.nameGoods == n.nameGoods
            })
            if (index == -1) {
                let arr = JSON.parse(localStorage.getItem('Cart'))
                arr.push(n)
                state.CartItem = arr
                localStorage.setItem('Cart', JSON.stringify(state.CartItem))
                // state.CartItem.push(n)
            } else {
                state.CartItem[index].numGoods+=n.numGoods
                localStorage.setItem('Cart', JSON.stringify(state.CartItem))
            }
            // console.log(state.CartItem)
            let aa = 0;
            state.CartItem.map(item => {
                 aa+= Number(item.numGoods)
            })
            state.NumStore = aa
            // console.log(state.NumStore)
            state.CartItem.map(item => {
                if(item.Goodscheck == true){
                    state.AllPrice += item.numGoods * item.priceGoods
                }
            })
            // console.log(state.AllPrice)
        },
        Allcheck(state,n){
            // console.log(n)
            state.CartItem.map(item => {
                item.Goodscheck = n
            })
            localStorage.setItem('Cart', JSON.stringify(state.CartItem))
        }
    }
})
export default store;