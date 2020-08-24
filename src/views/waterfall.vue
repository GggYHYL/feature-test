<template>
    <div class="waterfall-container">
    </div>
</template>
<script>
export default {
    name: 'WaterFall',
    data(){
        return ({
            imgs:[
                '../assets/waterfall/timg.jpg',
                '../assets/waterfall/timg1.jpg',
                '../assets/waterfall/timg2.jpg',
                '../assets/waterfall/timg4.jpg',
                '../assets/waterfall/timg5.jpg',
                '../assets/waterfall/timg6.jpg',
                '../assets/waterfall/timg7.jpg',
                '../assets/waterfall/timg8.jpg',
                '../assets/waterfall/timg9.gif',
            ]
        })
    },
    created(){
    },
    mounted(){
    },
    methods:{
        
    }
}
</script>
<style lang="scss">
    .waterfall-container {
        position: relative;
        width:650px;
        min-height: 200px;
        margin:auto;
    }
    img{
        position: absolute;
        width:200px;
    }
</style>