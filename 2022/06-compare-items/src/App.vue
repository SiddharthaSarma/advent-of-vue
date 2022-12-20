<script setup>
import ItemSelect from './components/ItemSelect.vue'
import {useItemComparison} from './composables/itemComparison'
const {itemA, itemB, message, products} = useItemComparison()
</script>

<template>
  <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
    <h1 class="text-4xl font-bold">Select items to compare</h1>
    <div class="flex flex-col gap-5 justify-center">
      <ItemSelect v-model="itemA" :products="products" />
      <ItemSelect v-model="itemB" :products="products" />
    </div>
    {{ message }}
  </div>
</template>
