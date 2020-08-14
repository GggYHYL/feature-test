<template>
    <div class="login-container">
        <div class="title">测试功能</div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="50px">
            <el-form-item
                label="名称"
                prop="userName"
            >
                <el-input type="userName" v-model="ruleForm.userName"></el-input>
            </el-form-item>
            <el-form-item
                label="密码"
                prop="userPwd"
            >
                <el-input type="userPwd" v-model="ruleForm.userPwd"></el-input>
            </el-form-item>
            <el-button class="login-btn" type="primary" @click="submit('ruleForm')">登录</el-button>
        </el-form>
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
            rules: {
                userName:[{required: true,message:'请输入名称',trigger:'blur'}],
                userPwd:[{required: true,message:'请输入密码',trigger:'blur'}],
            }
        })
    },
    methods:{
        submit(formName){
            this.$refs[formName].validate((valid) => {
                if(valid){
                    getUserInfo(this.ruleForm)
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
        height: 300px;
        width: 300px;
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
    .el-form {
      padding: 20px;
    }
    .login-btn{
        width: 100%;
    }
</style>