<template>
  <main class="flex flex-col container mx-auto w-11/12 gap-3">
   <header>
    <h2 class="mt-3 text-center">তালোড়া বাইগুনী পশ্চিমপাড়া গভীর নলকূপ</h2>

  </header>

<!--    Potato Start-->
    <section id="potato" class="border-2 rounded-2xl p-3">
        <h3 class="text-center pb-3">আলু মৌসুমের হিসাব</h3>
        <div class="season-calculation flex justify-center gap-3">

          <div>
            <label class="block mb-3">
              <span class="block text-sm font-medium text-slate-700">আলুর মোট জমির পরিমাণঃ (শতক)</span>
              <input type="text" name="potato-field" v-model="potatoField" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" >
            </label>

            <label class="block">
              <span class="block text-sm font-medium text-slate-700">আলু প্রতি শতক সেচ খরচঃ (টাকা)</span>
              <input type="text" name="potato-per-unit-cost" v-model="potatoPerUnitCost" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">
            </label>
          </div>

          <div class="bg-orange-200 flex flex-col justify-center pl-3 pr-3 rounded-2xl items-center w-5/12 gap-3">
            <p class="text-center text-sm font-medium">আলু মৌসুমের <br> মোট সেচ খরচঃ</p>
            <p class="text-center text-sm font-medium rounded-full bg-stone-300 px-5 py-2 text-black"> {{ potatoTotalCost }} ৳</p>
          </div>

        </div>
    </section>
<!--Potato End-->

<!--    Paddy Start-->
    <section id="potato" class="border-2 rounded-2xl p-3">
      <h3 class="text-center pb-3">ইরি মৌসুমের হিসাব</h3>
      <div class="season-calculation flex justify-center gap-3 ">

        <div>
          <label class="block mb-3">
            <span class="block text-sm font-medium text-slate-700">ইরির মোট জমির পরিমাণঃ (শতক)</span>
            <input type="text" name="potato-field" v-model="paddyField" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" >
          </label>

          <label class="block">
            <span class="block text-sm font-medium text-slate-700">ইরি প্রতি শতক সেচ খরচঃ (টাকা)</span>
            <input type="text" name="potato-per-unit-cost" v-model="paddyPerUnitCost" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">
          </label>
        </div>

        <div class="bg-pink-200 flex flex-col justify-center pl-3 pr-3 rounded-2xl items-center w-5/12 gap-3">
          <p class="text-center text-sm font-medium">ইরি মৌসুমের <br> মোট সেচ খরচঃ</p>
          <p class="text-center text-sm font-medium rounded-full bg-sky-200 px-5 py-2 text-black"> {{ paddyTotalCost }} ৳</p>
        </div>

      </div>
    </section>
<!--    Paddy End-->
    <section class="final-calculation border-2 rounded-2xl p-3">
        <h3 class="text-center pb-3">সর্বশেষ হিসাব</h3>

      <div class="final-calculation-area flex gap-3 justify-center">
        <div class="flex flex-col gap-6">
          <span class="block text-sm font-medium text-black">মোট সেচ খরচঃ <span class="rounded-full bg-emerald-300 px-2 py-2">{{totalCost}} ৳</span></span>

          <label class="block">
            <span class="block text-sm font-medium text-slate-700">অগ্রীম জমাঃ (টাকা)</span>
            <input type="text" name="advance-paid" v-model="advancePaid" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">
          </label>
        </div>

        <div class="flex flex-col  gap-6">
          <span class="block text-sm font-medium text-slate-700 ">বর্তমান বকেয়াঃ <span class="rounded-full bg-red-200 px-2 py-2 text-black">{{totalCurrentDue}} ৳</span></span>

          <label class="block">
            <span class="block text-sm font-medium text-slate-700">হালখাতায় জমাঃ (টাকা)</span>
            <input type="text" name="halkhata-paid" v-model="halkhataPaid" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">
          </label>
        </div>



      </div>
      <h4 class="text-center mt-6" >সর্বশেষ বকেয়াঃ <span class="rounded-full bg-red-500 px-5 py-2 text-white">{{finalTotalDue}} ৳</span> </h4>
    </section>
    <button class="text-center bg-yellow-400 p-3 rounded-2xl" @click="allReset" type="reset">রিসেট করুন</button>

  </main>
</template>

<script setup>

import {ref, computed} from "vue";

const potatoField = ref('')
const paddyField = ref('')
const potatoPerUnitCost = ref(30)
const paddyPerUnitCost = ref(45)
let totalPotatoCost;
let totalPaddyCost;
let totalIrrigationCost;

const advancePaid = ref('')
let  currentDue;
const halkhataPaid = ref('')
let finalDue;





// Potato Calculation
const potatoTotalCost = computed(()=>{
  const totalPotatoField = parseInt(potatoField.value)
  const perUnitCostPotato = potatoPerUnitCost.value

  if (isNaN(totalPotatoField) || isNaN(perUnitCostPotato)) {
    totalPotatoCost = 0
    return totalPotatoCost;
  }
  totalPotatoCost = totalPotatoField * perUnitCostPotato;
  return totalPotatoCost
})

// Paddy Calculation
const paddyTotalCost  = computed(()=>{
  const totalPaddyField = parseInt(paddyField.value)
  const perUnitCostPaddy = paddyPerUnitCost.value

  if(isNaN(totalPaddyField) || isNaN(perUnitCostPaddy)){
    totalPaddyCost = 0
    return totalPaddyCost
  }
  totalPaddyCost = totalPaddyField * perUnitCostPaddy
  return totalPaddyCost

})

// Total Cost
const totalCost = computed(() => {
  totalIrrigationCost = potatoTotalCost.value + paddyTotalCost.value
  return totalIrrigationCost;
})


// Final Calculation

const totalCurrentDue = computed(()=> {
  const totalAdvancePaid = parseInt(advancePaid.value)
  if(isNaN(totalAdvancePaid)){
    currentDue = 0
    return  currentDue
  }
 currentDue = totalIrrigationCost - totalAdvancePaid
  return currentDue
})

const finalTotalDue = computed(()=>{
  const halkhataDayPaid = parseInt(halkhataPaid.value)

  if(isNaN(halkhataDayPaid)) {
    finalDue = 0
    return finalDue
  }
  finalDue = currentDue - halkhataDayPaid
  return finalDue


})

// Reset Button

const allReset = ()=> {
  potatoField.value = ''
  potatoPerUnitCost.value = 25
  paddyField.value = ''
  paddyPerUnitCost.value = 45
  advancePaid.value = ''
  halkhataPaid.value = ''
}


</script>

<style scoped>




</style>
