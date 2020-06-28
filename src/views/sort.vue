<script>
export default {
    name: 'Sort',
    data(){
        return ({
            arr: [12,34,21,45,66,1,3,5,2,4,78,99,88]
        })
    },
    created(){
        this.getSort()
    },
    methods:{
        // 排序
        getSort(){
            console.log(this.arr,1111111);
            for(let i = 0; i < this.arr.length; i++){
                for(let j = 0; j < this.arr.length - i; j++){
                    if(this.arr[j] > this.arr[j+1]){
                        let temp = this.arr[j+1]
                        this.arr[j+1] = this.arr[j]
                        this.arr[j] = temp
                    }
                }
            }
            console.log(this.arr,2222222);
        },
    }
}
</script>