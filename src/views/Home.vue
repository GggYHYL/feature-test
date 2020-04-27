<template>
  <div class="home">
    <img @click="testApi" alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld";
import * as apis from "@/request/api"
export default {
  name: "Home",
  components: {
    HelloWorld
  },
  methods: {
    testApi(){
      apis.testApi()
    }
  }
};
</script>
