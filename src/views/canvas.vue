<template>
    <canvas ref="canvas" width="600px" height="800px"></canvas>
</template>

<script>
    export default {
        name: 'Canvas',
        data(){
            return ({

            })
        },
        mounted(){
            const canvas = this.$refs.canvas
            const ctx = canvas.getContext('2d')
            // 渐变
            // const _linerGradient = ctx.createLinearGradient(0,0,200,100)
            // _linerGradient.addColorStop(0.4,'red')
            // _linerGradient.addColorStop(0.7,'green')
            // _linerGradient.addColorStop(1,'yellow')
            // ctx.fillStyle = _linerGradient
            // ctx.fillRect(100,100,200,200)

            const _radioGradient = ctx.createRadialGradient(100,80,10,100,100,30)
            _radioGradient.addColorStop(0.4, 'red')
            _radioGradient.addColorStop(0.7, 'green')
            _radioGradient.addColorStop(1, 'yellow')
            ctx.fillStyle=_radioGradient;
            ctx.fillRect(10,10,200,200);

            // 正方形
            // ctx.moveTo(100,100)
            // ctx.lineTo(100,300)
            // ctx.lineTo(300,300)
            // ctx.lineTo(300,100)
            // ctx.lineTo(100,100)
            // ctx.strokeStyle = 'green';
            // ctx.lineWidth = 1
            // ctx.stroke()
            // ctx.fillStyle = 'red'
            // ctx.fillRect(100,100,200,200)
            // ctx.clearRect(0,0,canvas.width,canvas.height)
        },
        methods: {

        }
    }
</script>