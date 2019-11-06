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
    
    Dizlb(token){
        return _http.request({
            type: 'post',
            url: 'user/shipping-address/list',
            data:{
                token: token
            }
        })
    }

    Paydz(token){
        return _http.request({
            type: 'post',
            url: 'user/shipping-address/default',
            data:{
                token: token
            }
        })
    }

    Myhome(token){
        return _http.request({
            type: 'post',
            url: 'user/detail',
            data:{
                token: token
            }
        })
    }

    Dgxq(token){
        return _http.request({
            type: 'post',
            url: '/order/list',
            data:{
                token: token
            }
        })
    }

    
    Fkj(n){
        return _http.request({
            type: 'post',
            url: 'shop/goods/kanjia/join',
            data:{
                kjid:n.kjid,
                token:n.token
            }
        })
    }

    Kjxq(n){
        return _http.request({
            type: 'post',
            url: 'shop/goods/kanjia/help',
            data:{
                token:n.token,
                kjid:n.kjid,
                joinerUser:n.joinerUser
            }
        })
    }
   

    Login(n){
        return _http.request({
            type: 'post',
            url: 'user/m/login',
            data:{
                deviceId:n.deviceId,
                deviceName:n.deviceName,
                mobile:n.mobile,
                pwd:n.pwd
            }
        })
    }

    kjid(){
        return _http.request({
            // type: 'post',
            url: 'shop/goods/kanjia/list'
        })
    }

}
export default Product