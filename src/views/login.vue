<template>
    <div class="login-container">
        <div class="title">测试功能</div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="50px">
            <el-form-item
                label="名称"
                prop="name"
            >
                <el-input type="name" v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item
                label="密码"
                prop="pwd"
            >
                <el-input type="pwd" v-model="ruleForm.pwd"></el-input>
            </el-form-item>
            <el-form-item class="clearfix">
                <el-button type="primary" @click="submit('ruleForm')">提交</el-button>
                <el-button class="cancel-btn" @click="cancel('ruleForm')">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import {testApi} from "../request/api"
export default {
    name: 'Login',
    data(){
        return ({
            ruleForm: {
                name: '',
                pwd: ''
            },
            rules: {
                name:[{required: true,message:'请输入名称',trigger:'blur'}],
                pwd:[{required: true,message:'请输入密码',trigger:'blur'}],
            }
        })
    },
    methods:{
        submit(formName){
            this.$refs[formName].validate((valid) => {
                if(valid){
                    console.log('111111111111');
                    testApi()
                }else {
                    return null
                }

            })
        },
        cancel(formName){
            this.$refs[formName].resetFields()
        }
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
    .clearfix {
        display: block;
        content: "";
        clear: both;
    }
    .cancel-btn {
        float: right;
    }
    .el-form {
      padding: 20px;
    }
</style>