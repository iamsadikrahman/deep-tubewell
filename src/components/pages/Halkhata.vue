<template>
  <main class="flex flex-col container mx-auto w-11/12 gap-5">
   <header>
    <h2 class="mt-5 text-center">তালোড়া বাইগুনী পশ্চিমপাড়া গভীর নলকূপ</h2>

  </header>

<!--    Potato Start-->
    <section id="potato" class="border-2 rounded-2xl p-3">
        <h3 class="text-center pb-5">আলু মৌসুমের হিসাব</h3>
        <div class="season-calculation flex justify-center gap-3">

          <div>
            <label class="block mb-3">
              <span class="block text-sm font-medium text-slate-700">আলুর মোট জমির পরিমাণঃ</span>
              <input type="text" name="potato-field" v-model="potatoField" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" >
            </label>

            <label class="block">
              <span class="block text-sm font-medium text-slate-700">আলু প্রতি শতক সেচ খরচঃ</span>
              <input type="text" name="potato-per-unit-cost" v-model="potatoPerUnitCost" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">
            </label>
          </div>

          <div class="bg-orange-200 flex flex-col justify-center pl-3 pr-3 rounded-2xl items-center w-5/12">
            <p class="potato-total-cost text-center">আলু মৌসুমের <br> মোট সেচ খরচঃ</p>
            <h4> {{ potatoTotalCost }} টাকা</h4>
          </div>

        </div>
    </section>
<!--Potato End-->

<!--    Paddy Start-->
    <section id="potato" class="border-2 rounded-2xl p-3">
      <h3 class="text-center pb-5">ইরি মৌসুমের হিসাব</h3>
      <div class="season-calculation flex justify-center gap-3 ">

        <div>
          <label class="block mb-3">
            <span class="block text-sm font-medium text-slate-700">ইরির মোট জমির পরিমাণঃ</span>
            <input type="text" name="potato-field" v-model="paddyField" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" >
          </label>

          <label class="block">
            <span class="block text-sm font-medium text-slate-700">ইরি প্রতি শতক সেচ খরচঃ</span>
            <input type="text" name="potato-per-unit-cost" v-model="paddyPerUnitCost" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">
          </label>
        </div>

        <div class="bg-sky-200 flex flex-col justify-center pl-3 pr-3 rounded-2xl items-center w-5/12">
          <p class="text-center">ইরি মৌসুমের <br> মোট সেচ খরচঃ</p>
          <h4> {{ paddyTotalCost }} টাকা</h4>
        </div>

      </div>
    </section>
<!--    Paddy End-->
    <section class="final-calculation border-2 rounded-2xl p-3">
        <h3 class="text-center pb-5">সর্বশেষ হিসাব</h3>

      <div class="final-calculation-area">
        <h4>মোট সেচ খরচঃ {{totalCost}} টাকা</h4>
        <label for="advance-paid">অগ্রীম জমার পরিমাণঃ</label>
        <input type="text" name="advance-paid" v-model="advancePaid">
        <h4>বর্তমান বকেয়াঃ {{totalCurrentDue}} টাকা</h4>
        <label for="halkhata-paid">হালখাতায় জমার পরিমাণঃ</label>
        <input type="text" name="halkhata-paid" v-model="halkhataPaid">
        <h4 id="final-due">সর্বশেষ বকেয়াঃ {{finalTotalDue}} টাকা</h4>
      </div>
    </section>
    <button class="reset-btn" @click="allReset" type="reset">রিসেট করুন</button> 

  </main>
</template>

<script setup>

import {ref, computed} from "vue";

const potatoField = ref('')
const paddyField = ref('')
const potatoPerUnitCost = ref(25)
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