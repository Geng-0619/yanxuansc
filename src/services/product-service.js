import HTTP from '../utils/http'
const _http = new HTTP()
class Product {
    arr(){
        return _http.request({
            url: 'banner/list'
        })
    }
    propTj(){
        return _http.request({
            url: 'shop/goods/list'
        })
    }
    propZt(){
        return _http.request({
            url: 'cms/news/list'
        })
    }

    detail(productId){
        return _http.request({
            type: 'post',
            url: 'shop/goods/detail',
            data:{
                id: productId
            }
        })
    }

    Ztxq(productId){
        return _http.request({
            type: 'post',
            url: 'cms/news/detail',
            data:{
                id: productId
            }
        })
    }

    fenlei(){
        return _http.request({
            // type: 'post',
            url: 'shop/goods/category/all'
        })
    }

    Pingjia(productId){
        return _http.request({
            type: 'post',
            url: 'shop/goods/reputation',
            data:{
                goodsId: productId
            }
        })
    }
   
    dxyz(phone){
        return _http.request({
            type: 'post',
            url: 'verification/sms/get',
            data:{
                phone: phone
            }
        })
    }

    Cjdd(n){
        return _http.request({
            type: 'post',
            url: 'order/create',
            data:{
                token:n.token,
                goodsJsonStr:n.goodsJsonStr,
                // number:n.number,
                // logisticsType:0
            }
        })
    }

    pinjiejiage(n){
        return _http.request({
            type: 'post',
            url: 'shop/goods/price',
            data:{
                goodsId:n.GoodsId,
                propertyChildIds:n.ColId+','+n.SizeId
            }
        })
    }

    pinjiejiage1(n){
        return _http.request({
            type: 'post',
            url: 'shop/goods/price',
            data:{
                goodsId:n.GoodsId,
                propertyChildIds:n.ColId+','+n.SizeId+','+n.ColId1+','+n.SizeId1
            }
        })
    }

    Tok(token){
        return _http.request({
            type: 'post',
            url: 'order/list',
            data:{
                token: token
            }
        })
    }

    // shangpinxq(productId){
    //     return _http.request({
    //         type: 'post',
    //         url: 'shop/goods/detail',
    //         data:{
    //             id: productId
    //         }
    //     })
    // }

    // tuxingyanz(){
    //     return _http.request({
    //         type: 'post',
    //         url: 'verification/pic/get',
    //         // data:{
    //         //     phone: phone
    //         // }
    //     })
    // }

    // relogin(phone,pass,user){
    //     return _http.request({
    //         type: 'post',
    //         url: 'user/m/register',
    //         data:{
    //             phone:phone,
    //             pass:pass,
    //             user:user,
    //         }
    //     })
    // }
}
export default Product