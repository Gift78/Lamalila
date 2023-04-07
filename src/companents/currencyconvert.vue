<script setup>
import { ref, computed, onMounted } from "vue";
import ShowLocalStorages from "../companents/ShowLocalStorages.vue";
import OptionDrop from "../companents/OptionDrop.vue";
import { getCurrencies } from "../composable/getCurrencies";
import deletecurrency from "../companents/CurrencyManagement.vue";
import {
  getLocalStorageContent,
  removeLocalStorageContent,
  saveLocalStorageContent,
} from "../composable/localStorageManagement";

const arrayOfCurrencies = ref([]);

onMounted(async () => {
  arrayOfCurrencies.value = await getCurrencies();
 
});


const srcOption = ref("THB"); //default source Option
const recieveChangeSrcOption = (e) => {
  // console.log(e);
  srcOption.value = e;
};


const destOption = ref("USD"); //default destination Option
const recieveChangeDestOption = (e) => {
  destOption.value = e;
};
const showLocal = ref(getLocalStorageContent());

const removeLocal = () => {
  removeLocalStorageContent();
  showLocal.value = getLocalStorageContent();
};

const saveLocal = () => {
  saveLocalStorageContent(
    selectedOption.value,
    inputValue.value,
    sumOfCurrency.value
  );
  showLocal.value = getLocalStorageContent();
};

const sumOfCurrency = ref("0.00"); // default sum of currency after convert
const inputValue = ref("");
const storeOption = ref(""); // to store old source Option in "switchOption"
const selectedOption = computed(() => {
  if (srcOption.value === destOption.value) {
    alert("กรุณาใส่สกุลเงินที่ต้องการแปลงให้ต่างกัน!!!");
    return (selectedOption.value = "-");
  }
  return srcOption.value + `to` + destOption.value;
}); // store to show selected option

const getConvertRate = () => {
  const fromRate = arrayOfCurrencies.value.find(
    (currency) => currency.type === srcOption.value
  );
  const toRate = arrayOfCurrencies.value.find(
    (currency) => currency.type === destOption.value
  );
  return fromRate.rate / toRate.rate;
};

const isNumberAndIsPositive = () => {
  if (isNaN(inputValue.value)) {
    return alert("กรุณาใส่ค่าที่เป็นตัวเลข !!!");
  } else if (inputValue.value <= 0) {
    return alert("กรุณาใส่ค่าที่มากกว่า 0 !!!");
  } else if (
    selectedOption.value === null ||
    selectedOption.value === undefined
  ) {
    return alert("กรุณาเลือกโหมดที่ต้องการแปลงค่าเงินก่อน !!!");
  }
  const convertRate = getConvertRate();
  sumOfCurrency.value =
    Number((inputValue.value * convertRate).toFixed(2)).toLocaleString() +
    " " +
    destOption.value;
  return sumOfCurrency.value;
};

const switchOption = () => {
  storeOption.value = srcOption.value;
  srcOption.value = destOption.value;
  destOption.value = storeOption.value;
};

const darkTheme = ref(true);
const themeStatus = ref("bg-black text-white");


const buttonfn = () => {
  if (darkTheme.value === true) {
    themeStatus.value = "bg-white text-black";
    return themeStatus.value;
  } else {
    themeStatus.value = "bg-black text-white";
    return themeStatus.value;
  }
};
</script>
<template>
  <div
    class="w-full h-screen flex flex-col"
    :class="darkTheme ? 'bg-black text-white' : 'bg-white text-black'"
  >
    <br />
    <div class="text-left">
      &nbsp &nbsp
      <label for="toggle-2" class="toggle-2">
        <input
          type="checkbox"
          name="toggle-2"
          id="toggle-2"
          class="toggle-2__input"
          v-model="darkTheme"
        />
        <span class="toggle-2__button">
          <img
            src="https://raw.githubusercontent.com/nueymoo/toggle-switch-css/master/moon.png"
            alt="moon"
            class="toggle-2__button--icon"
          />
          <img
            src="https://raw.githubusercontent.com/nueymoo/toggle-switch-css/master/sun.png"
            alt="sun"
            class="toggle-2__button--icon"
          />
        </span>
      </label>
    </div>
  
    <div class="w-full flex justify-end space-x-2 p-2">

      <div class="w-full h-screen flex-auto">
        <div class="text-center rounded-lg mx-40 mt-10 pb-20 py-10">
          <div class="desktop:scale-100 tablet:scale-75">
            <h1 class="text-7xl font-extrabold font-sty uppercase">
              currency exchange
            </h1>
            <br />
            <input
              type="text"
              placeholder="Please input currency value"
              v-model="inputValue"
              class="input input-bordered w-full max-w-xs m-2"
              :class="buttonfn()"
            />
            &nbsp
            <button
              @click="isNumberAndIsPositive"
              class="btn"
              :class="themeStatus"
            >
              Convert
            </button>
            &nbsp
            <button
              class="btn m-5"
              @click="switchOption()"
              :class="themeStatus"
            >
              Switch
            </button>
            <div class="flex justify-center">
              <OptionDrop
                :arrayOfCurrencies="arrayOfCurrencies"
                @changeSrc="recieveChangeSrcOption"
                @changeDest="recieveChangeDestOption"
                :theme="themeStatus"
              >
                <template #default></template>
              </OptionDrop>
            </div>
            <div class="badge badge-ghost" :class="themeStatus">
              selected : {{ selectedOption }}
            </div>
            <br />
            <br />
            <div class="text-3xl b font-bold btn" :class="themeStatus">
              Summary : {{ sumOfCurrency }}
            </div>
            <div>
              <br />
              <button @click="saveLocal" class="btn" :class="themeStatus">
                save
              </button>
              &nbsp&nbsp
              <label for="my-modal-3" class="btn" :class="themeStatus">
                History</label
              >
            </div>
            <br />
            <button @click="removeLocal" class="btn" :class="themeStatus">
              remove history
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="w-full max-w-5xl p-5">
    <div
      class="w-full flex text-xl font-semibold tracking-widest justify-center"
    >
      <h1>~ Currency Management ~</h1>
    </div>

    <deletecurrency/>
  </div>


  <ShowLocalStorages :historyOfConverts="showLocal" />

  

</template>

<style scoped>
.toggle-2 {
  display: inline-block;
  vertical-align: top;
  margin: 0 15px 0 0;
}

.toggle-2__input {
  display: none;
}

.toggle-2__button {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1rem;
  line-height: 20px;
  text-transform: uppercase;
  color: white;
  background-color: #000000;
  border: solid 1px #d2d2d2;
  border-radius: 20px;

  width: 85px;
  height: 40px;
  cursor: pointer;
  transition: all 0.3 ease;
}

.toggle-2__button--icon {
  height: 16px;
  width: auto;
  padding: 0 12px;
}

.toggle-2__button::before {
  position: absolute;
  top: -1px;
  left: -5px;
  content: "";

  display: inline-block;
  height: 43px;
  width: 43px;

  background: #d0d0d0;
  border-radius: 100%;

  transition: all 0.3s ease;
}

.toggle-2__input:checked + .toggle-2__button {
  background: #fff;
  border: solid 1px #fff;
}
.toggle-2__input:checked + .toggle-2__button::before {
  content: "";
  left: 45px;
  background-color: #181818;
}
</style>
