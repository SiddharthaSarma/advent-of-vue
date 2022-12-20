import { ref, computed } from 'vue'

export const compare = (itemA, itemB) => {
  if (itemA.price === itemB.price) {
    return 'These are the same items'
  }

  const [cheap, expensive] = [itemA, itemB].sort((a, b) =>
    a.price > b.price ? 1 : -1
  )
  const items = Math.floor(expensive.price / cheap.price)
  return `You can get ${items}x ${cheap.title} or about the same price as a single ${expensive.title}`
}

export const useItemComparison = () => {
  const products = ref([])
  const itemA = ref()
  const itemB = ref()

  const getProducts = async () => {
    const results = await fetch('https://dummyjson.com/products')
    const json = await results.json()
    products.value = json.products
  }
  getProducts()

  const message = computed(() => {
    if (itemA.value && itemB.value) {
      return compare(itemA.value, itemB.value)
    }
  })
  return {
    message,
    products,
    itemA,
    itemB,
  }
}
