<template>
  <div class="main-layout">
    <Navigation/>
    <Nuxt />
  </div>
</template>


<script>
  import Navigation from '../components/Navigation'
  export default {
    components: { Navigation }
  }
</script>
<style scoped>
.main-layout {
  background-color: var(--primary);
}
</style>
