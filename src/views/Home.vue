<template>
  <div class="home">
    <img @click="testApi" alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";
import * as apis from "@/request/api"
export default {
  name: "Home",
  components: {
    HelloWorld
  },
  methods: {
    async testApi(){
      const result = await apis.testApi()
      console.log(result, 222222)
    }
  }
};
</script>
