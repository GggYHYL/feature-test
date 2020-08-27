<template>
    <div class="login-container">
        <div class="title">测试功能</div>
        <van-form @submit="onSubmit">
            <van-field
                v-model="ruleForm.username"
                name="用户名"
                label="用户名"
                placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                v-model="ruleForm.userPwd"
                type="password"
                name="密码"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div>
                <van-button round block type="info" native-type="submit">
                提交
                </van-button>
            </div>
        </van-form>
    </div>
</template>
<script>

import { Form } from 'vant';

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

    async created() {
        console.log(await getUserInfo(this.ruleForm))
    },

    methods:{
        submit(formName){
            this.$refs[formName].validate((valid) => {
                if(valid){
                }else {
                    return null
                }

            })
        },
    }
}
</script>
<style lang="scss">
    .login-container {
        padding: 20px;
        box-sizing: border-box;
        width: 100%;
        border: 1px solid #dcdcdc;
        position: absolute;
        margin: auto;
        right: 0;
        left: 0;
        top:0;
        bottom:0;
    }
    .title {
        color:#fff;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        padding:20px 0;
        background-color: #409EFF;
    }
</style>