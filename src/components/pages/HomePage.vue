

<template>
<h2>তালোড়া বাইগুনী পশ্চিমপাড়া গভীর নলকূপ</h2>
  <button @click="goToHalkhata">হালখাতার হিসাব করতে এখানে ক্লিক করুন</button>
  <br>
  <button @click="goToContact">Contact Us</button>
</template>

<script setup>

import {useRouter} from "vue-router";

const router = useRouter()

const goToHalkhata = ()=> {
  router.push('/halkhata')
}

const goToContact = ()=>{
  router.push('/contact')
}

</script>

<style scoped>
 button {
   margin: 10px;
 }
</style>