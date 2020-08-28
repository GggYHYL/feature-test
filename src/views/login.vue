<template>
    <div class="login-container">
        <van-form @submit="onSubmit">
            <van-field
                v-model="ruleForm.username"
                required
                label="用户名"
                placeholder="用户名"
                :rules="[{ required: true, message: '请输入用户名' }]"
            />
            <van-field
                v-model="ruleForm.userPwd"
                required
                type="password"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请输入密码' }]"
            />
            <div>
                <van-button round block type="info" native-type="submit">提交</van-button>
            </div>
        </van-form>
    </div>
</template>
<script>
import {getUserInfo} from "../request/api"
export default {
    name: 'Login',
    data(){
        return ({
            ruleForm: {
                userName: '',
                userPwd: ''
            },
        })
    },
    methods:{
        async onSubmit(){
            const result = await getUserInfo(this.ruleForm)
            localStorage.setItem('token', '234234234')
        },  
    }
}
</script>
<style lang="scss">
    .login-container {
        padding: 20px;
        box-sizing: border-box;
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translate(0, -50%);
    }

    .van-cell.van-field {
        margin-bottom: 20px;
    }
</style>