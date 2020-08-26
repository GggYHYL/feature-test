<template>
    <div class="waterfall-container">
        <img :ref="'img_'+index" :key="item" v-for="(item,index) in arr" :src="item" alt="">
    </div>
</template>
<script>
const imgs = [
    require('../assets/waterfall/timg.jpg'),
    require('../assets/waterfall/timg2.jpg'),
    require('../assets/waterfall/timg1.jpg'),
    require('../assets/waterfall/timg4.jpg'),
    require('../assets/waterfall/timg5.jpg'),
    require('../assets/waterfall/timg6.jpg'),
    require('../assets/waterfall/timg7.jpg'),
    require('../assets/waterfall/timg8.jpg'),
    require('../assets/waterfall/timg9.gif'),
]
export default {
    name: 'WaterFall',
    data(){
        return ({
            arr:[],
        })
    },
    created(){
    },
    mounted(){
        this.$nextTick(() => this.setImgs())
    },
    methods:{
        setImgs(column = 2, imgWidth = 200){
            for(let i = 0; i < imgs.length; i++){
                if(i < column){
                    this.arr.push(imgs[i])
                    this.$nextTick(() => {
                        this.$refs['img_'+i][0].style.width = imgWidth + 'px'
                        this.$refs['img_'+i][0].style.left = imgWidth * i + 'px'
                        this.$refs['img_'+i][0].style.top = 0 + 'px'
                    })
                }else {
                }
            }
        }
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
    }
</style>