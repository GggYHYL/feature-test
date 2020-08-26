import {post} from "./http"

export const getUserInfo = ({ userName, userPwd }) => {
    return post('/apiTerminalUser/login.do', { userName, userPwd })
}