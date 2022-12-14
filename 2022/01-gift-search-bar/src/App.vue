<script setup>
import { ref, watch } from 'vue'
import { useDebounceFn } from '@vueuse/core'

const api = `https://dummyjson.com/products/search`

const searchTerm = ref('')
const products = ref([])

const findProducts = async term => {
  if (!term) return
  const result = await fetch(`${api}?q=${term}`)
  const json = await result.json()
  products.value = json.products
}

watch(products, newproducts => {
  if (!newproducts.length) {
    window.alert('No products found')
  }
})
watch(searchTerm, useDebounceFn(findProducts, 300))
</script>

<template>
  <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
    <h1 class="text-4xl font-bold">Gift Search Bar</h1>
    <input type="text" class="p-2 border-2 border-gray-dark" v-model="searchTerm" placeholder="Start typing..." />
    <ul class="list-disc">
      <li v-for="product in products" :key="product.id">{{ product.title }} - ${{ product.price }}</li>
    </ul>
  </div>
</template>
