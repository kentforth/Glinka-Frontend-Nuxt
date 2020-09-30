<template>
  <div class="button">
    <NuxtLink :to="link">{{text}}</NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'Button-Primary',
  props: {
    text: {
      type: String
    },
    link: {
      type: String
    }
  }
}
</script>

<style scoped>
.button a{
  background-color: var(--dark);
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  font-size: 2rem;
  border-radius: 62px;
  padding: 0.5em 2em;
  box-shadow: 0 22px 44px -12px rgba(0, 0, 0, 0.35);
  transition: var(--transition);
}

  .button a:hover {
    background-color: var(--white);
    color: var(--dark);
  }
</style>
