<template>
    <img ref="img" :src="img" alt=""/>
</template>
<script>
export default {
    name: 'CompressImg',
    data(){
        return ({
            img: 'http://culturecloud.oss-cn-hangzhou.aliyuncs.com/H5/2020628165731yBXLtFs61jfTzpz8eM29GiwIKcJozb.gif'
        })
    },
    mounted(){
        this.onChangeImgSize()
    },
    methods:{
        onChangeImgSize(maxWidth = 200, maxHeight = 100){
            // 原图宽高
            const _width = this.$refs.img.width
            const _height = this.$refs.img.height
            // 置顶缩放宽高
            const _maxWidth = maxWidth
            const _maxHeight = maxWidth
            // 设置图片大小
            let _setWidthSize = 0
            let _setHeightSize = 0
            // 图片宽度 > 高度
            if(_width / _height > _maxWidth / _maxHeight){
                if(_width > _maxWidth){
                    _setWidthSize = _maxWidth
                    _setHeightSize = _height * _maxWidth / _width
                }else {
                    _setWidthSize = _width
                    _setHeightSize = _height
                }
            }else {
                if(_height > maxHeight){
                    _setHeightSize = maxHeight
                    _setWidthSize = _width * _maxHeight / _height
                }else {
                    _setWidthSize = _width
                    _setHeightSize = _height
                }
            }
            this.$refs.img.width = _setWidthSize
            this.$refs.img.height = _setHeightSize
        }
    }
}
</script>