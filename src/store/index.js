import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        itemToken: '',
        CartItem: [],
        NumStore: '',
        Allprice: 0,
        Allch: false,
        Shouhuo:[]
    },
    mutations: {
        AddCartI(state, n) {
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
                state.CartItem[index].numGoods += n.numGoods
                localStorage.setItem('Cart', JSON.stringify(state.CartItem))
            }
            // console.log(state.CartItem)
            let aa = 0;
            state.CartItem.map(item => {
                aa += Number(item.numGoods)
            })
            state.NumStore = aa
            // console.log(state.NumStore)
            state.CartItem.map(item => {
                if (item.Goodscheck == true) {
                    state.AllPrice += item.numGoods * item.priceGoods
                }
            })
            // console.log(state.AllPrice)
        },
        Allcheck(state, n) {
            state.Allch = n
            // console.log(n)
            let a = 0;
            state.CartItem.map(item => {
                item.Goodscheck = n
                if (item.Goodscheck) {
                    a += item.numGoods * item.priceGoods
                }
            })
            state.Allprice = a
            localStorage.setItem('Cart', JSON.stringify(state.CartItem))
        },
        goodsCheck(state, n) {
            let b = 0;
            state.CartItem.map(item => {
                if (item.Goodscheck == true) {
                    b += item.numGoods * item.priceGoods
                }
            })
            state.Allprice = b
        },
        jian(state, n) {
            if (state.CartItem[n].numGoods > 0) {
                state.CartItem[n].numGoods--;
            } else {
                state.CartItem[n].numGoods = 0;
                return state;
            }
            let c = 0;
            state.CartItem.map(item => {
                if (item.Goodscheck == true) {
                    c += item.numGoods * item.priceGoods
                }
            })
            state.Allprice = c
        },
        jia(state, n) {
            state.CartItem[n].numGoods++;
            let d = 0;
            state.CartItem.map(item => {
                if (item.Goodscheck == true) {
                    d += item.numGoods * item.priceGoods
                }
            })
            state.Allprice = d
        },
        Shouhuodz(state,n){
            // console.log(n)
            state.Shouhuo.push(n)
            localStorage.setItem('DiZhi',JSON.stringify(state.Shouhuo))
        }
    }
})
export default store;