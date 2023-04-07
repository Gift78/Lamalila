<script setup>
import { onMounted, ref } from "vue";
import { getCurrencies } from "../composable/getCurrencies";
const props = defineProps({
  currency: {
    type: Object,
  },
});

defineEmits(["add", "edit", "cancle"]);

const updateCurrency = ref({});
onMounted(() => {
  if (props.currency === undefined) {
    updateCurrency.value = {
      type: "",
      rate: undefined,
    };
  } else {
    updateCurrency.value = props.currency;
  }
});

const returnToManage = ref("currencyManage");
const clear = () => {
  updateCurrency.value.type=""
  updateCurrency.value.rate=""
}
</script>
<template>
  <div class="w-full h-full">
    <div class="border border-white rounded-md p-4">
    
      <h1 class="text-2xl font-bold text-black mb-4">
         ::: Add or Edit :::
      </h1>
      <div class="text-black">
        <div class="my-2">
          <label class="mr-2 font-bold text-lg" >Unit:</label>
          <input
            v-model="updateCurrency.type"
            type="text"
                    class="input input-bordered max-w-xs"
            placeholder="Type here" 
          />
        </div>

        <div class="my-2">
          <label class="mr-2 font-bold text-lg">Rate:</label>
          <input
            v-model="updateCurrency.rate"
            type="number"
            class="input input-bordered max-w-xs"
            placeholder="Type here" 
          />
        </div>
      </div>
      <button
        v-if="updateCurrency.id"
        @click="$emit('edit', updateCurrency)"
        class="btn rounded-md bg-black text-white my-2 mx-4"
      >
        Edit
      </button>
      <button
        v-else
        @click="$emit('add', updateCurrency)"
        class="btn rounded-md bg-black text-white my-2 mx-4"
      >
        Add
      </button>
      <button
        class="btn btn-active bg-red-500 "
        @click="clear"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<style scoped></style>
