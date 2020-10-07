<template>
  <div class="header">
    <div class="container">
      <h1>Contact</h1>
      <h2>GLINKA</h2>
      <h2>ANASTASIYA</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header-Background',
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 10em;
  background-color: var(--primary);
  overflow: hidden;
  position: relative;
}

h1 {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  letter-spacing: 0.06em;
  font-size: 4rem;
  display: inline-block;
  z-index: 999;
  position: absolute;
}

h2 {
  color: var(--light-green);
  font-size: 12rem;
  position: absolute;
  letter-spacing: 0.1em;
  z-index: 0;
  line-height: 77.9%;
  top: 0;
  right: 0;
  margin: 0;
  font-weight: 400;
  transform: rotate(-15deg);
  font-family: 'Abril Fatface', serif;
}

h2:nth-child(2) {
  top: -10%;
  right: 32%;
  z-index: 0;
}

h2:nth-child(3) {
  top: -40%;
  right: -30%;
  z-index: 0;
}
</style>
