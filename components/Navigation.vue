<template>
  <div class="navigation">
    <NuxtLink to="/" class="nav-image">
      <img src="../assets/images/avatar.webp" alt="" />
    </NuxtLink>

    <h2>Anastasiya Glinka</h2>
    <div class="nav-links">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/portfolio">Portfolio</NuxtLink>
      <NuxtLink to="/price">Price</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </div>

    <a
      href="https://www.instagram.com/aee.glinka/?igshid=1we4ciix7d3wm"
      target="_blank"
      class="instagram"
    >
      <font-awesome-icon :icon="['fab', 'instagram']" class="instagram" />
    </a>

    <div class="language">
      <button
        class="btn-lang"
        @click="changeLanguageToRU"
        v-bind:style="[
          languageENG
            ? { color: 'var(--half-white)' }
            : { color: 'var(--white)' },
        ]"
      >
        RU
      </button>

      <div class="devider"></div>
      <button
        class="btn-lang"
        @click="changeLanguageToENG"
        v-bind:style="[
          languageENG
            ? { color: 'var(--white)' }
            : { color: 'var(--half-white)' },
        ]"
      >
        EN
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data: () => ({
    isNavOpen: false,
    navClass: '',
    hamburgerClass: '',
    languageENG: true,
  }),
  methods: {
    openNav() {
      this.isNavOpen = !this.isNavOpen

      if (this.isNavOpen) {
        this.navClass = 'nav-content-open'
        this.hamburgerClass = 'nav-hamburger-open'
      }
      if (!this.isNavOpen) {
        this.navClass = 'nav-content-closed'
        this.hamburgerClass = 'nav-hamburger-closed'
      }
      $nuxt.$emit('navOpen', this.isNavOpen)
    },
    handleResize() {
      // this.isNavOpen = window.innerWidth > 900;
    },
    changeLanguageToRU() {
      this.languageENG = false
    },
    changeLanguageToENG() {
      this.languageENG = true
    },
  },
  mounted() {},

  created() {
    // window.addEventListener("resize", this.handleResize);
    this.handleResize()
  },
  destroyed() {
    // window.removeEventListener("resize", this.handleResize);
  },
}
</script>

<style scoped>
.navigation {
  width: var(--nav-width);
  background-color: var(--dark);
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr 0.1fr 0.2fr;
  justify-content: center;
  justify-items: center;
}

.nav-image {
  padding-top: 1.5em;
  width: 60%;

}

.navigation img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  border-radius: 50%;

}

.navigation h2 {
  text-transform: uppercase;
  color: var(--white);
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
}

.nav-links {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(min-content, max-content);
  justify-items: center;
  align-items: center;
  align-content: center;
  justify-content: center;
}

.nav-links a {
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 2rem;
  color: var(--link-color);
  transition: var(--transition);
  margin-top: 1em;
}

.nav-links a:hover {
  color: var(--white);
}

.nav-links a::after {
  content: '';
  display: block;
  height: 1px;
  left: 50%;
  bottom: 0;
  width: 0;
  background-color: var(--white);
  position: relative;
  border-radius: 10px;
}

.nav-links a:hover::after {
  animation: link-line 0.3s ease;
  animation-fill-mode: forwards;
}

.instagram {
  font-size: 3.5rem;
  color: var(--half-white);
  transition: var(--transition);
  align-self: end;
}

.instagram:hover {
  color: var(--white);
}

.language {
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  align-items: center;
}

.devider {
  width: 3px;
  height: 40px;
  margin: 0 3px;
  background-color: var(--half-white);
}

.btn-lang {
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--half-white);
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: var(--transition);
}

.nuxt-link-exact-active {
  color: var(--white) !important;
}

/*Animation for links border*/
@keyframes link-line {
  0% {
    left: 50%;
    width: 0;
  }

  50% {
    left: 0;
    width: 100%;
  }

  100% {
    left: 11%;
    width: 80%;
  }
}
</style>
