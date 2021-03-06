<template>
  <div class="navigation" :class="navClass">
    <NuxtLink to="/" class="nav-image">
      <img src="~/assets/images/avatar.webp" alt=""/>
    </NuxtLink>

    <h2>{{navigation.title}}</h2>
    <div class="nav-links">
      <NuxtLink to="/" @click.native="closeNav">{{navigation.home}}</NuxtLink>
      <NuxtLink to="about" @click.native="closeNav">{{navigation.about}}</NuxtLink>
      <NuxtLink to="portfolio" @click.native="closeNav">{{navigation.portfolio}}</NuxtLink>
      <NuxtLink to="contact" @click.native="closeNav">{{navigation.contact}}</NuxtLink>
    </div>

    <a
      href="https://www.instagram.com/aee.glinka/?igshid=1we4ciix7d3wm"
      target="_blank"
      class="instagram"
    >
      <font-awesome-icon :icon="['fab', 'instagram']" class="instagram"/>
    </a>

    <div class="language">
      <button
        class="btn-lang"
        @click="changeLanguageToRU"
        v-bind:style="[
          isLanguageENG
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
          isLanguageENG
            ? { color: 'var(--white)' }
            : { color: 'var(--half-white)' },
        ]"
      >
        EN
      </button>
    </div>

    <client-only>
      <burger-button
        :bar-height="3"
        :bar-width="37"
        :active="isNavOpen"
        @click="openNav"
        class="btn-nav"
        :class="hamburgerClass"
      />
    </client-only>

  </div>
</template>

<script>

  import {mapState, mapActions} from 'vuex'

  export default {
    name: 'Navigation',
    data: () => ({
      isNavOpen: false,
      navClass: '',
      hamburgerClass: '',
      isLanguageENG: true
          }),
    computed: {
      ...mapState('language', {
        navigation: 'navigation'
      })
    },
    methods: {
      ...mapActions('language', ['CHANGE_LANGUAGE_TO_RU', 'CHANGE_LANGUAGE_TO_ENG']),
      openNav() {
        this.isNavOpen = !this.isNavOpen

        if (this.isNavOpen) {
          this.navClass = 'nav-content-open'
          document.body.style.overflow = 'hidden'
          document.body.style.position = 'relative'
        }
        if (!this.isNavOpen) {
          this.navClass = 'nav-content-closed'
          document.body.style.overflow = 'auto'
        }
        $nuxt.$emit('navOpen', this.isNavOpen)
      },
      closeNav() {

        if (window.innerWidth <= 1088) {

          this.isNavOpen = false
          this.navClass = 'nav-content-closed'
          document.body.style.overflow = 'auto'
          $nuxt.$emit('navOpen', this.isNavOpen)
        }

      },
      handleResize() {
        this.isNavOpen = window.innerWidth > 900
      },
      changeLanguageToRU() {
        this.isLanguageENG = false;
        this.CHANGE_LANGUAGE_TO_RU();
      },
      changeLanguageToENG() {
        this.isLanguageENG = true;
        this.CHANGE_LANGUAGE_TO_ENG();
      }
    },
    mounted() {
      if (this.navOpen) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

    },

    created() {
      if (process.client) {
        window.addEventListener('resize', this.handleResize)
        this.handleResize()
      }
    },
    destroyed() {
      if (process.client) {
        window.removeEventListener('resize', this.handleResize)
      }
    }
  }
</script>

<style scoped>

  .no-scroll {
    overflow: hidden;
  }

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
    z-index: 999;
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

  .btn-nav {
    position: absolute;
    display: none;
    transform: translateX(4em);
    top: 2em;
    right: 0;
  }

  .burguer-button > .bar:nth-child(2) {
    transform: translateY(3px);
  }

  .burguer-button > .bar:nth-child(3) {
    transform: translateY(8px);
  }

  .burguer-button.-active > .bar:nth-child(3) {
    transform: translateY(0) rotate(-40deg);
  }

  .burguer-button.-active > .bar:nth-child(1) {
    transform: translateY(200%) rotate(40deg);
  }

  .nav-content-open {
    animation: navOpen 0.5s ease;
    animation-fill-mode: forwards;
  }

  .nav-content-closed {
    animation: navClosed 0.5s ease;
    animation-fill-mode: forwards;
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

  /*Animation for navigation*/
  @keyframes navOpen {
    0% {
      transform: translateX(calc(-1 * var(--nav-width)));
    }

    100% {
      transform: translateX(0);
    }
  }

  @keyframes navClosed {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(calc(-1 * var(--nav-width)));
    }
  }

  /*MEDIA QUERIES*/
  @media (-webkit-min-device-pixel-ratio: 1.25) {
    .nav-image {
      width: 50%;
    }

    .navigation h2 {
      font-size: 1.7rem;
      width: 80%;
    }

    .nav-links a {
      font-size: 1.4rem;
    }

    .instagram {
      font-size: 2.5rem;
    }

    .btn-lang {
      font-size: 1.3rem;
    }

    .devider {
      height: 30px;
    }
  }


  @media screen and (max-width: 1366px) and (max-height: 768px) {
    .nav-image {
      width: 50%;
    }

    .navigation h2 {
      font-size: 1.7rem;
      width: 80%;
    }

    .nav-links a {
      font-size: 1.6rem;
    }


  }

  @media screen and (max-width: 1200px) and (max-height: 720px) {
    .instagram {
      font-size: 2.5rem;
    }

    .btn-lang {
      font-size: 1.4rem;
    }

    .devider {
      height: 30px;
    }

  }

  @media screen and (max-width: 900px) {
    .navigation {
      transform: translateX(calc(-1 * var(--nav-width)));
    }

    .btn-nav {
      display: block;
    }
  }

  @media screen and (max-width: 393px) and (max-height: 696px) {
    .nav-image {
      width: 42%;
    }

    .navigation h2 {
      font-size: 1.5rem;
    }

    .nav-links a {
      font-size: 1.4rem;
    }
  }

  @media screen and (max-width: 360px) and (max-height: 640px) {


    .instagram {
      font-size: 2rem;
    }

    .nav-links a:first-child {
      margin-top: 0;
    }
  }

  @media screen and (max-width: 320px) and (max-height: 568px) {
    h2 {
      font-size: 1.3rem !important;
    }

    .nav-links a {
      font-size: 1.3rem;
    }
  }
</style>
