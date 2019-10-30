import config from '../config/config'
import Axios from 'axios'
import Qs from 'qs'
class HTTP{
    request(params) {
        // console.log(params)
        return new Promise((resolve,reject)=>{
            Axios({
                method: params.type || 'get',
                url: config.baseUrl + params.url,
                data: Qs.stringify(params.data)
            }).then(res=>{
                // console.log(res)
                if(!res.code){
                    // alert('请求成功')
                }
                resolve(res)
            })
        })
    }
}
export default HTTP