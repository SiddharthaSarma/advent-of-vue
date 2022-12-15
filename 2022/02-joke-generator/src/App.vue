<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="max-w-xs w-full flex flex-col" v-if="setup">
      <div data-qa="setup" class="w-3/4 p-4 rounded-2xl bg-teal-800 text-white self-start">{{ setup }}</div>
      <div data-qa="delivery" v-if="showDelivery" class="w-3/4 mt-2 p-4 rounded-2xl bg-red-800 text-white self-end">{{ delivery }}</div>
      <button
        role="button"
        class="bg-green col-span-1 rounded-lg py-2 hover:opacity-90 w-full mx-auto mt-4"
        @click="showDelivery = true"
        v-if="!showDelivery"
      >
        Tell Me!
      </button>
      <button
        role="button"
        class="bg-green col-span-1 rounded-lg py-2 hover:opacity-90 w-full mx-auto mt-4"
        v-if="showDelivery"
        @click="fetchJoke"
      >
        Another
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const url = `https://v2.jokeapi.dev/joke/christmas`

const setup = ref(null)
const delivery = ref(null)
const showDelivery = ref(false)

const fetchJoke = async () => {
  setup.value = null
  delivery.value = null
  showDelivery.value = null
  const result = await fetch(url)
  const joke = await result.json()
  setup.value = joke.setup
  delivery.value = joke.delivery
}

fetchJoke()
</script>
