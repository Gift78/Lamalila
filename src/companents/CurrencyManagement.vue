<script setup>
import { getCurrencies} from '../composable/getCurrencies'
import { ref, onMounted } from 'vue'
import AddEditCurrency from './AddEditCurrency.vue'
const currencies = ref([])

const deleteCurrencies = async (deletedb) => {
  try {
    const res = await fetch(`http://localhost:5000/currencies/${deletedb}`, {
      method: 'DELETE'
    })
    if (res.ok) {
        currencies.value = currencies.value.filter((quest) => {
        return quest.id !== deletedb
      })
    } else throw new error('Error, cannot delete data!')
  } catch (error) {
    console.log(error)
  }
}
onMounted(async () => {
    currencies.value = await getCurrencies()
  console.log(currencies.value)
})


// onMounted(async () => {
//   questions.value = await getCurrencies(parseInt(params.id))
//   // console.log(questions.value)
// })

const addNewCurrency = async (newCurrency) => {
  // console.log(newQuestion)
  try {
    const res = await fetch('http://localhost:5000/currencies', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      // body: JSON.stringify({
      //   text: newQuestion.text,
      //   options: newQuestion.options
      // })
      body: JSON.stringify(newCurrency)
    })
    if (res.status === 201) {
      const addedCurrency = await res.json()
      currencies.value.push(addedCurrency)
      router.push({ name: 'CurrencyView' })
    } else throw new Error('There is something wrong, cannot add!')
  } catch (error) {
    console.log(error)
  }
}


const editCurrency = ref(undefined)
const setEditMode = (currency) => {
  currentComponent.value = 'AddEditCurrency'
  editCurrency.value = currency
}
const modifyCurrency = async (updatedCurrency) => {
  // console.log(updatedQuestion)
  try {
    const res = await fetch(
      `http://localhost:5000/currencies/${updatedCurrency.id}`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        // body: JSON.stringify({
        //   text: updatedQuestion.text,
        //   options: updatedQuestion.options
        // })
        body: JSON.stringify(updatedCurrency)
      }
    )
    if (res.ok) {
      currencies.value = currencies.value.map((quest) => {
        if (quest.id === updatedCurrency.id) {
          quest.text = updatedCurrency.text
          quest.options = updatedCurrency.options
        }
        return quest
      })
    } else throw new Error('There is something wrong, cannot edit!')
  } catch (error) {
    console.log(error)
  }
  editCurrency.value = undefined
  currentComponent.value = 'CurrencyManagement'
}
const cancleAddEdit = (cancle) => {
  editCurrency.value = undefined;
  setCurrenComponent(cancle);
};

const currentComponent = ref('CurrencyManagement')
</script>
<template>
      <div class="p-2 max-w-5xl border border-gray-200">
    <h1 class="flex text-xl font-semibold pb-3">Currency Management</h1>
    <div class="w-full flex pb-5 space-x-3">
      <button
        @click="currentComponent = 'AddEditCurrency'"
        class="bg-emerald-600 text-white p-1 rounded-lg"
      >
        + New Currency
      </button>
    </div>

    <AddEditCurrency
      v-if="currentComponent === 'AddEditCurrency'"
      @add="addNewCurrency"
      :currencies="editCurrency"
      @edit="modifyCurrency"
      @cancle="cancleAddEdit"
    />


  <div class="w-full max-w-5xl border border-gray-200 p-2">
    <div v-for="quest in currencies" :key="quest.id">
      <div class="flex items-center">
        <!-- <DeleteIcon class="text-red-500" @click="deleteCurrencies(quest.id)" /> -->
            

        <br class="font-semibold">Currency: {{ quest.type }}
        <br class="font-semibold">Rate Per USD:{{ quest.rate }}


      </div>
      <button class="text-red-500" @click="deleteCurrencies(quest.id)">delete</button>
    </div>
    <button
          @click="setEditMode(quest)"
          class="bg-gray-300 shadow-sm rounded-lg"
        >
          Edit
        </button>
  </div>
</div>



  
</template>
<style scoped></style>
