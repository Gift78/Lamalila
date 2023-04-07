<script setup>
const emit = defineEmits(["changeSrc", "changeDest"]);
// #3 slot: get arrayOfCurrencies from prop binding;
const prop = defineProps({
  arrayOfCurrencies: {
    type: Array,
    default: [],
  },
  theme: {
    type: String,
    default: "bg-black text-white",
  },
});
</script>
<template>
  <!-- #4 slot: prepare srcOption template and Add event handler to sent target.value back to App.vue -->
  <slot>
    <select
      id="sourceConverters"
      class="m-5 bg-white select select-bordered w-full max-w-xs"
      @change="$emit('changeSrc', $event.target.value)"
      :class="theme"
    >
      <!-- #4.1 looping in Array to create option and set value in each option -->
      <option
        v-for="currency in arrayOfCurrencies"
        :key="currency.id"
        :value="currency.type"
        :selected="currency.type === 'THB'"
      >
        <!--  :selected for set defualt option -->
        {{ currency.type }}
      </option>
    </select>

    <span class="m-10 items-center badge badge-lg text-xl bg-info text-black"
      >To</span
    >

    <!-- #5 slot: prepare destOption template and Add event handler to sent target.value back to App.vue -->

    <select
      id="destinationConverter"
      class="m-5 bg-white select select-bordered w-full max-w-xs"
      @change="$emit('changeDest', $event.target.value)"
      :class="theme"
    >
      <option
        v-for="currency in arrayOfCurrencies"
        :key="currency.id"
        :value="currency.type"
        :selected="currency.type === 'USD'"
      >
        {{ currency.type }}
      </option>
    </select>
  </slot>
</template>
<style scoped></style>
