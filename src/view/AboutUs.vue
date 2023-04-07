<script setup></script>

<template>
  <div class="about-us">
    <h1>About Us</h1>
    <p>
      กลุ่ม Lamalila
    </p>
    <div class="team">
      <div class="member">
        <img src="/images/lofe.jpg" alt="Member 1" />
      </div>
      <div class="member">
        <img src="/images/nami.jpg" alt="Member 2" />
      </div>
      <div class="member">
        <img src="/images/robin.jpg" alt="Member 3" />
      </div>
      <div class="member">
        <img src="/images/solo.png" alt="Member 4" />
      </div>
      <div class="member">
        <img src="/images/sunji.jpg" alt="Member 5" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-us {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  text-align: center;
}

p {
  font-size: 1.2rem;
  margin-bottom: 40px;
  text-align: center;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
}

.team {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.member {
  text-align: center;
  width: 120px;
  height: 120px;
  margin: 5px;
}

img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

p {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-transform: uppercase;
}
</style>
