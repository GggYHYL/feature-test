import {post} from "./http"

export const getUserInfo = ({ userName, userPwd }) => {
    return post('/wxApplet/appletVideoList.do',{userId: '84651f1ca50948e2ab6b98a449375ad4',
        page: 1,
        rows: 10
    })
}