<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { getCurrencies } from '../src/composable/getCurrencies';
const currencies = ref([])
const router = useRouter()

onMounted(async () => {
  currencies.value = await getCurrencies()
})

const gotoCurrencies = (questId) => {
  // console.log(questId)
  router.push({ name: 'currency', params: { id: questId } })
}
</script>

<template>
  <div class="w-full max-w-5xl p-3 border border-gray-200">
    <div class="w-full flex flex-col">
      <h1 class="flex text-xl font-semibold pb-3">Currency List</h1>

      <div class="w-full">
        <div v-for="quest in currencies" :key="quest.id">
          <button
            @click="gotoCurrencies(quest.id)"
            class="flex w-full p-1 hover:bg-blue-50 rounded-lg"
          >
            {{ quest.id }}. {{ quest.text }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
