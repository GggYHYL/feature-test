import {post} from "./http"

export const testApi = () => {
    return post('wechatShop/getShopUserModel.do', {
        shopPath:'gz',
    })
}