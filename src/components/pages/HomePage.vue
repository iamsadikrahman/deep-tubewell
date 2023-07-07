<template>
  <header>
    <h2 class="title">তালোড়া বাইগুনী পশ্চিমপাড়া গভীর নলকূপ</h2>
    <div class="halkhata">
      <h3>শুভ হালখাতা</h3>
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
  </main>
</template>

<script setup>

import {ref, computed, watch} from "vue";

const potatoField = ref('')
const paddyField = ref('')
const potatoPerUnitCost = ref(25)
const paddyPerUnitCost = ref(45)
let totalPotatoCost;
let totalPaddyCost;


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