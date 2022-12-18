<script setup>
import {ref} from 'vue'
import ItemSelect from './components/ItemSelect.vue'
import ComparisonSummary from './components/ComparisonSummary.vue'
const products = ref([])

const getProducts = async() => {
  const results = await fetch('https://dummyjson.com/products');
  const json = await results.json()
  products.value = json.products
}
getProducts()
</script>

<template>
  <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
    <h1 class="text-4xl font-bold">Select items to compare</h1>
    <div class="flex flex-col gap-5 justify-center">
      <ItemSelect :products="products" />
      <ItemSelect :products="products" />
    </div>
    <ComparisonSummary />
  </div>
</template>
