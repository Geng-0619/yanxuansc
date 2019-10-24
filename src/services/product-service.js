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
   
    dxyz(phone){
        return _http.request({
            type: 'post',
            url: 'verification/sms/get',
            data:{
                phone: phone
            }
        })
    }

    shangpinxq(productId){
        return _http.request({
            type: 'post',
            url: 'shop/goods/detail',
            data:{
                id: productId
            }
        })
    }

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