import {post} from "./http"

export const getUserInfo = ({ userName, userPwd }) => {
    return post('/wxApplet/appletVideoList.do',{userId: '',
        page: 1,
        rows: 10
    })
}