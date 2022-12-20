<script setup>
import { ref } from 'vue'

const selected = ref()
defineProps({
  products: Array
})
</script>

<template>
  <select v-model="selected" class="p-2 border-2 border-gray-dark">
    <option :value="product" v-for="product in products" :key="product.id" >{{`${product.title} - ${product.price}`}}</option>
  </select>
</template>
