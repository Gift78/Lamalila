# PROJECT1-SEC-2-CurrencyExchange
## สมาชิกภายในกลุ่ม หน้าที่ความรับผิดชอบ และสัดส่วนในการทำงานที่เกิดขึ้นจริง

### 64130500070 รัชพล สวงนวงษ์  23%
  * หน้าที่ :
    * ออกแบบ Flow การทำงานของระบบ Application   
    * วางโครงพื้นฐานของ currency exchange ว่าควรมีอะไร
    * สร้าง Function isNumberAndIsPositive เพื่อเช็คค่า Input ว่าถูกต้องหรือไม่ ถ้าติดลบให้ alert ว่าค่าติดลบ หรือว่าหากใส่ค่าเป็น String ให้ alert ว่าควรใส่ค่าที่เป็นตัวเลข
    * สร้าง Function findCovertCurrency เพื่อใช้หาของใน Array ที่เป็น Object โดยภายในมีชื่อ Mode และ Function การคำนวณค่าของ Mode นั้นๆ ถ้าเจอ Mode ที่ต้องการจะดึง Object       ออกมาและเรียกใช้ Function การคำนวณนั้น
    * สร้าง Function switchOption ในการสลับ Option ของ sourceOption และ destOption
    * ตามความคืบหน้าเพื่อนๆ และอัพเดตงานอาจารย์
    * ช่วยเพื่อนๆ ปรับและแก้ไข Code ให้เหมาะสมกับ Application ของ Project
### 64130500076 วริษฐา จันทร์วันเพ็ญ 18.5%
  * หน้าที่ :
    * เพิ่ม Object ของประเทศต่างๆ ไปเก็บไว้ใน Array บน Script เพื่อสามารถนำไปเรียกใช้ต่อใน Function คำนวณค่าเงินในแต่ละประเทศต่างๆ ต่อไป
    * สร้าง v-show เพื่อเช็คเงื่อนไข หากไม่มีประวัติจะขึ้นว่า "No History"</br>
    * สร้าง v-for เพื่อ Loop เอาข้อมูลใน Array ชื่อ historyOfConverts ที่สร้างไว้ใน Function showLocalStorageContent มาแสดงผลประวัติ History 
  * ส่วนของการทบทวน ฝึกซ้อม ลองเขียน Core Feature : [ส่วนของการฝึกซ้อม ทำความเข้าใจของ 076](https://github.com/RatchaF101/PROJECT1-SEC-2-CurrencyExchange/blob/master/docs/memberLearningCode/076.vue)
### 64130500078 วิมลศิริ วงษ์ชุน 20%
  * หน้าที่ :
    * ช่วยในส่วนของการสร้างกล่องพื้นหลัง Blur สีดำเพื่อให้ตัดกับ Component ของปุ่มและกล่อง Input
    * ช่วยเลือกสีปุ่มกดว่าควรใส่สีปุ่มอะไรแบบไหน และเปลี่ยน Format ของข้อความ alert
    * สร้าง v-if บนประวัติ History หลังจาก v-for มาแล้ว โดยที่แต่ละประเทศจะมี Highlight ที่แตกต่างกัน
    * ตกแต่งปุ่ม remove และทำกรอบblurเพิ่มเติม ทำให้ กรอบ balance ขึ้น
    * จดบันทึกแต่ละสัปดาห์ที่ได้ feedback จากอาจารย์
  * ส่วนของการทบทวน ฝึกซ้อม ลองเขียน Core Feature : [ส่วนของการฝึกซ้อม ทำความเข้าใจของ 078](https://github.com/RatchaF101/PROJECT1-SEC-2-CurrencyExchange/blob/master/docs/memberLearningCode/078.vue)
### 64130500089 อัญชลี ศรีปาน 20%
  * หน้าที่ :
    * ทำ Background ทั้งหมด
    * สร้างกล่องพื้นหลัง Blur สีดำเพื่อให้ตัดกับ Component ของปุ่มและกล่อง Input ,ปรับขนาดให้พอดีบนหน้าจอ Website บน Computer
    * วางโครงร่างปุ่มบางส่วนและรอให้เพื่อนๆมาลงความเห็นว่าใส่รูปแบบไหนสีอะไร
    * สร้างในส่วนของตัวหัวข้อหลักเป็นรูปแบบ Animation ที่จะมีการเคลื่อนไหวของสี RGB บนหัวข้อ
    * ใส่สีและปรับหน้าจอให้ทุกปุ่มมาอยู่ตรงกลางทั้งหมดปรับขนาดตัวอักษรทั้งหมด และการสร้างกล่องข้อความ History แบบ Popup
  * ส่วนของการทบทวน ฝึกซ้อม ลองเขียน Core Feature : [ส่วนของการฝึกซ้อม ทำความเข้าใจของ 089](https://github.com/RatchaF101/PROJECT1-SEC-2-CurrencyExchange/blob/master/docs/memberLearningCode/089.vue)
### 64130500097 เจษฎา โชตินันทน์ 18.5%
  * หน้าที่ : 
    * สร้าง Function saveLocal สำหรับเก็บข้อมูลการคำนวณค่าเงินลงใน Local Storage ในรูปแบบของ Object ที่ถูกเก็บไว้ใน Array
    * สร้าง Function showLocalStorageContent ในการรับค่ามาจาก Local Storage ในรูปแบบของ Array ที่มี Object อยู่ข้างในและรอเรียกนำไปแสดงผลต่อ
    * สร้าง Function removeLocalStorageContentเพื่อลบประวัติข้อมูลการคำนวณค่าเงินทั้งหมดเมื่อไม่ต้องการ
  * ส่วนของการทบทวน ฝึกซ้อม ลองเขียน Core Feature : [ส่วนของการฝึกซ้อม ทำความเข้าใจของ 097](https://github.com/RatchaF101/PROJECT1-SEC-2-CurrencyExchange/blob/master/docs/memberLearningCode/097.vue)

## รายการฟีเจอร์ความสามารถของ Application และคำอธิบาย
### 1) Feature: การรับค่าเงิน เช็คค่าเงินที่รับค่าเงินเข้า  และคำนวณค่าเงินเป็นค่าเงินปลายทางที่ต้องการ
#### การรับค่าเงิน เช็คค่าเงินที่รับค่าเงินเข้า
```javaScript
const isNumberAndIsPositive = () => {
  if (isNaN(inputValue.value)) {
    return alert("กรุณาใส่ตัวเลข !!!");
  } else if (inputValue.value <= 0) {
    return alert("กรุณาใส่ค่าที่มากกว่า 0 !!!");
  }
  findCovertCurrency();
};
```
* คำอธิบาย : เป็น Feature ที่รับค่าเงินที่ต้องการคำนวณมาจากกล่อง Input และทำการเช็คว่าค่า Input ที่รับเข้าผ่านเงื่อนไขหรือไม่ ถ้าไม่ผ่านให้ทำการ Alert สิ่งที่ไม่ผ่าน และถ้าผ่านเงื่อนไขทุกอย่างให้ทำการไปเรียก Feature การคำนวณค่าเงินเป็นปลายทางที่ต้องการ 

#### คำนวณค่าเงินเป็นค่าเงินปลายทางที่ต้องการ
```javaScript
function findCovertCurrency() {
  const selectedCalculate = arrayOfCalculate.find(
    (currencyObj) => currencyObj.type == selectedOption.value
  );
  return selectedCalculate.convertCurrency();
}
```
* คำอธิบาย : เป็น Feature ที่ไปไล่หาของ Coverter Object ใน Array ที่เก็บ Function การคำนวณค่าเงินไว้ซึ่งจะใช้ .find()ในการหาโดยมีการเทียบ Mode ที่เลือกจากหน้า Application และ Value ของ Key ชื่อ "Type" ถ้าชื่อ Mode และ Value ตรงกันให้ Return ออกมาแล้วเรียก Function การคำนวณค่าเงินนั้นออกมาใช้งาน

```javaScript
const arrayOfCalculate = [
  {
    type: "THBtoUSD",
    convertCurrency: function () {
      sumOfCurrency.value = (inputValue.value * 0.031).toFixed(2) + " " + "USD";
      return sumOfCurrency.value;
    },
  },
  {
    type: "THBtoCNY",
    convertCurrency: function () {
      sumOfCurrency.value = (inputValue.value * 0.21).toFixed(2) + " " + "CNY";
      return sumOfCurrency.value;
    },
  },...]
```
* คำอธิบาย : เป็น Array ที่เก็บ Object ที่เป็น Converter ของแต่ละ Mode ไว้ เช่น Object นี้เก็บ Mode คำนวณ "THBtoUSD" และจะมี Key อีกอันเก็บ Function การคำนวณค่าเงินของ Mode นั้นๆ และ Array นี้จะเก็บไว้เพื่อ รอเรียกใช้ผ่าน .find() ใน Feature ของการ "คำนวณค่าเงินเป็นค่าเงินปลายทางที่ต้องการ" ต่อไป
----
### 2) Feature: การสลับค่าเงินต้นทางและปลายทาง
```javaScript
const switchOption = () => {
  storeOption.value = srcOption.value;
  srcOption.value = destOption.value;
  destOption.value = storeOption.value;
};
```
* คำอธิบาย : เป็น Feature ที่จะสลับ Option ค่าของหน่วยเงินที่ต้องการคำนวณต้นทาง กับ Option ของค่าของหน่วยเงินเงินที่จะต้องการคำนวณปลายทาง
----
### 3) Feature: การ Save ประวัติการคำนวณค่าเงินที่ต้องการลง Local Storage
```javaScript
const saveLocal = () => {
  let arrayOfCoverteds = JSON.parse(
    localStorage.getItem("arrayOfCoverteds") || "[]"
  );
  arrayOfCoverteds.push({
    convertMode: `${selectedOption.value}`,
    inputValue: `${inputValue.value}`,
    summary: `${sumOfCurrency.value}`,
  });
  localStorage.setItem("arrayOfCoverteds", JSON.stringify(arrayOfCoverteds));
  showLocalStorageContent();
};
```
* คำอธิบาย : เป็น Feature ที่จะขอค่า Value ของ Key ที่ชื่อว่า "arrayOfCoverteds" ใน Local Storage (ถ้า Value นั้นมีค่าอยู่จะคืนค่าที่มีอยู่กลับมา, ถ้าไม่มีค่าอยู่ในสร้าง Empty Array) เมื่อได้ค่ามาแล้วให้เก็บไว้ใน Array ชื่อ arrayOfCoverteds ซึ่งต่อมาจะนำไปใช้ .push() เพื่อเพิ่มประวัติอันใหม่เข้าไป และใช้ .setItem()เพื่อส่ง Array ที่เพิ่มค่าใหม่กลับไปให้ Local Storage ของ Key ที่ชื่อว่า "arrayOfCoverteds"
----
### 4) Feature: การแสดงข้อมูลประวัติของการคำนวณที่ Save เข้ามาอยู่ใน Local Storage 
```javaScript
const showLocalStorageContent = () => {
  historyOfConverts.value = JSON.parse(
    localStorage.getItem("arrayOfCoverteds")
  );
};
```
* คำอธิบาย : เป็น Feature ที่จะขอค่า Value ของ Key ที่ชื่อว่า "arrayOfCoverteds" มาเก็บไว้ใน Array ชื่อ "historyOfConverts" เพื่อต่อมาจะนำไปใช้ v-for เพื่อที่จะ Loop นำแต่ละประวัติมา List ให้แสดงอีกทีในส่วนของ Template
----
### 5) Feature: การลบข้อมูลประวัติของการคำนวณเงินที่อยู่ใน Local Storage
```javaScript
const removeLocalStorageContent = () => {
  localStorage.removeItem("arrayOfCoverteds");
};
```
* คำอธิบาย : เป็น Feature ที่ Key ที่ชื่อว่า "arrayOfCoverteds" ใน Local Storage และทำการลบ(remove) ค่า Value ของ Key นั้น
----
### 6) Feature: เปลี่ยนพื้นหลังเป็นธีมมืดและธีมสว่าง
```javaScript
const setDarkBackground = () => {
  return "bg-[url('src/assets/Money-bank-notes-034_WEB.jpg')]";
};

const setLightBackground = () => {
  return "bg-[url('src/assets/เงินดอลลาร์-2.jpeg')]";
};
```
* คำอธิบาย : เป็น Feature ที่จะเกิด Event ที่ปุ่ม Toggle ที่ถ้าเป็น Flase จะใช้ setLightBackground(), ถ้าเป็น True จะใช้ setDarkBackground()
----
## คู่มือการใช้งาน Application
<img src="/docs/imageManual/main.png" width="100%" height="100%" >
1. เลือกสกุลเงินที่ต้องการแลก ฝั่งซ้ายคือสกุลเงินต้นทางและฝั่งขวาคือสกุลเงินปลายทางที่ต้องการคำนวณ
<img src="/docs/imageManual/choose.png" width="100%" height="100%" >
  แสดงผล Mode ที่เลือกออกมาที่ selected :
<img src="/docs/imageManual/selected.png" width="100%" height="100%" >
1.1) สกุลเงินต้นทางและปลายทางที่สามารถคำนวณได้จะมีดังนี้ :
    <ul>
    <li>	THB : Thai baht</li> 
      <li>	USD : US Dollar</li> 
      <li>	CNY : Chinese Yuan</li> 
      <li>	KRW : Korean Won</li> 
      <li>	TWD : New Taiwan dollar</li> 
    </ul>
1.2) สกุลเงินต้นทางที่สามารถคำนวณได้
<img src="/docs/imageManual/crcfrom.png" width="100%" height="100%" >
1.3) สกุลเงินปลายทางที่สามารถคำนวณได้
<img src="/docs/imageManual/crcto.png" width="100%" height="100%" >  
เมื่อกรอกค่าสกุลเงินต้นทางและปลายทางเหมือนกัน
<img src="/docs/imageManual/same.png" width="100%" height="100%" >
ทาง Application จะไม่เลือก Mode ให้และใส่เป็น "-"
<img src="/docs/imageManual/same2.png" width="100%" height="100%" >
</br>
2. กรอกจำนวนเงินที่ต้องการในช่อง Input
<img src="/docs/imageManual/input.png" width="100%" height="100%" >
</br>
<li>ถ้ากรอกค่าที่ไม่ใช่ตัวเลข</li>
<img src="/docs/imageManual/notnum.png" width="100%" height="100%" >
</br>
<li>ถ้ากรอกค่าที่เท่ากับ 0</li>
<img src="/docs/imageManual/zero.png" width="100%" height="100%" >
</br>
<li>ถ้ากรอกค่าที่น้อยกว่า 0</li>
<img src="/docs/imageManual/belowzero.png" width="100%" height="100%" >
</br>
3.กดปุ่ม Convert เพื่อคำนวณเงิน (ตัวเลขที่คำนวณออกมาได้จะแสดงต่อท้าย Summary : ) 
   <img src="/docs/imageManual/covert.png" width="100%" height="100%" >
    <img src="/docs/imageManual/summary.png" width="100%" height="100%" >
    </br>
  4.	กดปุ่ม Switch เมื่อต้องการสลับสกุลเงินตั้งต้นและปลายทาง
   <img src="/docs/imageManual/switch.png" width="50%" height="50%" >
   </br>
 ก่อนกดสลับ
  <img src="/docs/imageManual/beforesw.png" width="100%" height="100%" >
  </br>
 	หลังกดสลับ
   <img src="/docs/imageManual/aftersw.png" width="100%" height="100%" >
   </br>
  5.	กดปุ่ม Save เมื่อต้องการบันทึกประวัติการแลกเปลี่ยนสกุลเงิน หลังจากทำการคำนวณค่าสกุลเงินสำเร็จแล้ว
   <img src="/docs/imageManual/save.png" width="50%" height="50%" >
   </br>
  กดปุ่ม History เพื่อแสดงประวัติการแลกเปลี่ยนสกุลเงิน
  <img src="/docs/imageManual/history.png" width="50%" height="50%" >
  เมื่อกดจะมี Popup ขึ้นมาแสดงรายการประวัตการแลกเปลี่ยนสกุลเงิน
   <img src="/docs/imageManual/popup.png" width="100%" height="100%" >
 5.1) มีรูปแบบการแสดงผลดังนี้
ConvertMode : ค่าสกุลเงินต้นทางและปลายทางที่ทำการคำนวณ
Value : ค่าเงินที่กรอกค่าเข้า ก่อนทำการคำนวณค่าเงิน
Summary :  ผลลัพธ์หลังทำการคำนวณค่าเงิน
และมีสีแยกตามประเภทหน่วยเงินของค่าเงินผลลัพธ์ที่ทำการคำนวณเงิน
<ul>
  <li>สีฟ้า     : USD</li> 
  <li>สีชมพู    : CNY</li> 
  <li>สีเขียว   : KRW</li> 
  <li>สีส้ม     : TWD</li> 
  <li>สีเหลือง  : THB</li> 
</ul>
  </br>
6. กดปุ่ม REMOVE HISTORY ในกรณีที่ต้องการจะลบประวัติทั้งหมดใน Local Storage ที่ Save มา
<img src="/docs/imageManual/removehis.png" width="100%" height="100%" >
เมื่อลบสำเร็จแล้วลองเข้าไปเช็ค ประวัติการคำนวณค่าเงินจะขึ้น No History แสดงว่าผู้ใช้งานลบประวัติสำเร็จ
<img src="/docs/imageManual/nohistory.png" width="100%" height="100%" >
7. กดปุ่มปิดเปิดหากต้องการสลับภาพพื้นหลัง
<img src="/docs/imageManual/button.png" width="50%" height="50%" >
Light Background
<img src="/docs/imageManual/light.png" width="100%" height="100%" >
Dark Background
<img src="/docs/imageManual/dark.png" width="100%" height="100%" >

  
## แหล่งข้อมูลอ้างอิง/แรงบันดาลใจในการพัฒนา Application
  - แหล่งอ้างอิง
    - Feature Save, Remove, Show Local Storage Content ได้แรงบันดาลใจมาจาก: https://www.nightprogrammer.com/vue-js/how-to-use-local-storage-in-vue-3-composition-api-example/
    - โครงสร้างการวางปุ่ม และการวางองค์ประกอบต่างๆ ได้แรงบันดาลใจมาจาก: https://www.xe.com/currencyconverter/
    - ค่าสกุลเงินต่อ 1 หน่วยเทียบกับค่าสกุลเงินอื่นๆ อ้างอิงมาจาก : https://www.google.com/finance/quote/THB-USD?sa=X&ved=2ahUKEwigu4fDkqn9AhUsTmwGHU6ECYQQmY0JegQIDBAd
    - การสร้างปุ่ม Button ต่างๆ, สร้างปุ่มกด, สร้างกรอบข้อความ, สร้างปุ่มตัวเลือกและปุ่มกดเปลี่ยนbackground อ้างอืงมาจาก Daisy UI : https://daisyui.com/components/button/
    - การปรับขนาดหน้าจอให้ย่อลงได้เล็กน้อย อ้างอิงมาจาก : https://tailwindcss.com/docs/responsive-design
    - สร้างกรอบ Blur อ้างอิงมาจาก : https://tailwindcss.com/docs/backdrop-blur
    - สร้าง Animation การไล่สีของหัวข้อ Currency Exchange อ้างอิงมาจาก : [https://www.mindphp.com/บทเรียนออนไลน์/บทเรียน-css/2669-บทที่-9-css3-animations-ตอน-1.html](https://www.mindphp.com/%E0%B8%9A%E0%B8%97%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%AD%E0%B8%AD%E0%B8%99%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C/%E0%B8%9A%E0%B8%97%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99-css/2669-%E0%B8%9A%E0%B8%97%E0%B8%97%E0%B8%B5%E0%B9%88-9-css3-animations-%E0%B8%95%E0%B8%AD%E0%B8%99-1.html)
