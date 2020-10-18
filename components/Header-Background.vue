<template>
  <div class="header">
    <div class="container">
      <h1>{{title}}</h1>
      <h2>GLINKA</h2>
      <h2>ANASTASIYA</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header-Background',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
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

/*MEDIA QUERIES*/
@media (-webkit-min-device-pixel-ratio: 1.25) {
  .header {
    height: 7em;
  }
  h1 {
    font-size: 2.6rem;
  }

  h2 {
    font-size: 10rem;
  }

  h2:nth-child(2) {
    top: -40%;
    right: 30%;
  }

  h2:nth-child(3) {
    top: -45%;
  }
}

@media screen and (max-width: 1366px) and (max-height: 768px) {
  .header {
    height: 7em;
  }
  h1 {
    font-size: 3rem;
    margin: 0.5em;
  }

  h2:nth-child(2) {
    font-size: 10rem;
    top: -50%;
    right: 14%;
  }

  h2:nth-child(3) {
    font-size: 10rem;
    top: -40%;
    right: -48%;
  }
}

@media screen and (max-width: 1200px) and (max-height: 720px) {
  h2:nth-child(2) {
    right: -1%;
  }

  h2:nth-child(3) {
    right: -74%;
  }
}

@media screen and (max-width: 768px) and (max-height: 1000px) {
  h1 {
    font-size: 4rem;
  }

  h2:nth-child(2),
  h2:nth-child(3) {
    font-size: 8rem;
  }

  h2:nth-child(2) {
    top: -7%;
    right: -8%;
  }

  h2:nth-child(3) {
    top: 8%;
    right: -70%;
  }
}

@media screen and (max-width: 393px) and (max-height: 696px) {
  h1 {
    font-size: 2.3rem;
    margin: 1.3em 0 0 0;
  }

  h2:nth-child(2),
  h2:nth-child(3) {
    font-size: 5.5rem;
  }

  h2:nth-child(2) {
    top: 7%;
    right: -38%;
  }

  h2:nth-child(3) {
    top: 37%;
    right: -105%;
  }
}

@media screen and (max-width: 320px) and (max-height: 568px) {
  h2:nth-child(3) {
    right: -121%;
  }
}
</style>
