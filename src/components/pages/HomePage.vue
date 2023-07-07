

<template>
<h1>HomePage</h1>
  <button @click="goToHalkhata">Go to About</button>
</template>

<script setup>

import {useRouter} from "vue-router";

const router = useRouter()

const goToHalkhata = ()=> {
  router.push('/halkhata')
}

</script>

<style scoped>

</style>