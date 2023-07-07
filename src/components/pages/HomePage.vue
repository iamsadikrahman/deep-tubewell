

<template>
<main class="container mx-auto  min-h-full">

  <section class="flex flex-col justify-evenly align-middle items-center  content-center bg-sky-200 h-screen">
    <p class="text-center text-2xl text-red-600	my-10 underline">তালোড়া বাইগুনী পশ্চিমপাড়া গভীর নলকূপ</p>
    <button  @click="goToHalkhata" class="text-center bg-emerald-400 p-3 rounded-2xl text-black">হালখাতার হিসাব করতে এখানে ক্লিক করুন</button>
    <br>
    <button @click="goToContact" class="text-center bg-yellow-400 p-3 rounded-2xl">আমাদের সাথে যোগাযোগ করুন</button>
  </section>
</main>

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