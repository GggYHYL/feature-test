import {post} from "./http"

export const testApi = () => {
    post('wechatShop/getShopUserModel.do', {
        shopPath:'gz',
    })
}