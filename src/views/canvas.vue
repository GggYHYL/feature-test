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
        let ctx = canvas.getContext('2d')
        // canvas.width = 1000
        // canvas.height = 1000
        ctx.moveTo(100,100)
        ctx.lineTo(100,300)
        ctx.lineTo(300,300)
        ctx.lineTo(300,100)
        ctx.lineTo(100,100)
        ctx.strokeStyle = 'green';
        ctx.lineWidth = 1
        ctx.stroke()
        ctx.fillStyle = 'red'
        ctx.fillRect(100,100,200,200)
        // ctx.clearRect(0,0,canvas.width,canvas.height)
    },
    methods: {

    }
}
</script>