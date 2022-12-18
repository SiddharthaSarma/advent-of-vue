<script setup>
import { ref } from 'vue'
import { useItemComparison } from '../composables/itemComparison'

const selected = ref()
defineProps({
  products: Array
})
</script>

<template>
  <select v-model="selected" class="p-2 border-2 border-gray-dark">
    <option value="product.id" v-for="product in products" :key="product.id" >{{product.title}}</option>
  </select>
</template>
