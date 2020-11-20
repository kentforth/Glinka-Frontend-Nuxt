<template>
    <div class="about full-background">
      <div class="container">
        <h1>About me</h1>
      </div>

      <h2>GLINKA</h2>
      <h2>ANASTASIYA</h2>

    </div>
</template>

<script>
  import HeaderBackground from '../components/Header-Background'
  export default {
    name: 'About',
    components: { HeaderBackground },
    head() {
      return {
        title: 'About me'

      }
    },
    data: () => ({
      title: 'About me'
    })
  }
</script>

<style scoped>

  .about {
    overflow-x: hidden;
  }

  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    letter-spacing: 0.06em;
    font-size: 4rem;
    display: inline-block;
    z-index: 999;
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


</style>
