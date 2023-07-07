<template>
  <header>
    <h2 class="title">তালোড়া বাইগুনী পশ্চিমপাড়া গভীর নলকূপ</h2>
    <div class="halkhata">
      <h3>শুভ হালখাতা! শুভ হালখাতা! শুভ হালখাতা!</h3>
      <h4>সময়ঃ ১১ জুলাই ২০২৩ ইং । রোজঃ মঙ্গলবার</h4>
    </div>

  </header>

  <main>
    <section id="potato">
        <h3 class="title">আলুর সেচ হিসাব</h3>
        <div class="season-calculation">

          <label for="potato-field">আলুর মোট জমির পরিমাণঃ</label>
          <input type="text" name="potato-field" v-model="potatoField">
          <br>
          <label for="potato-per-unit-cost">আলু প্রতি শতকঃ</label>
          <input type="text" name="potato-per-unit-cost" v-model="potatoPerUnitCost">

          <br>
          <h4 class="potato-total-cost">আলুর মোট সেচ খরচঃ {{ potatoTotalCost }} টাকা</h4>

        </div>
    </section>
    <section id="paddy">
      <h3 class="title">ইরির সেচ হিসাব</h3>
      <div class="season-calculation">

        <label for="paddy-field">ইরির মোট জমির পরিমাণঃ</label>
        <input type="text" name="paddy-field" v-model="paddyField">
        <br>
        <label for="paddy-per-unit-cost">ইরির প্রতি শতকঃ</label>
        <input type="text" name="paddy-per-unit-cost" v-model="paddyPerUnitCost">

        <br>
        <h4 class="paddy-total-cost">ইরির মোট সেচ খরচঃ {{ paddyTotalCost }} টাকা</h4>

      </div>
    </section>
    <section class="final-calculation">
        <h3 class="title">সর্বশেষ হিসাব</h3>

      <div class="final-calculation-area">
        <h4>মোট সেচ খরচঃ {{totalCost}} টাকা</h4>
        <label for="advance-paid">অগ্রীম জমার পরিমাণঃ</label>
        <input type="text" name="advance-paid" v-model="advancePaid">
        <h4>বর্তমান বকেয়াঃ {{totalCurrentDue}} টাকা</h4>
        <label for="halkhata-paid">হালখাতায় জমার পরিমাণঃ</label>
        <input type="text" name="halkhata-paid" v-model="halkhataPaid">
        <h4>সর্বশেষ বকেয়াঃ {{finalTotalDue}} টাকা</h4>
      </div>
    </section>

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

const advancePaid = ref()
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

</script>

<style scoped>

.title{
  text-align: center;
  padding: 8px 2px;
  border-radius: 5px;
  background-color: darkgrey;
  font-size: 20px;
}

.halkhata {
  text-align: center;

}



</style>