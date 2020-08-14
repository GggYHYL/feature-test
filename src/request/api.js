import {post} from "./http"

export const getUserInfo = ({ userName, userPwd }) => {
    return post('login', { userName, userPwd })
}