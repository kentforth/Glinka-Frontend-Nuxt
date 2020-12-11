<template>
  <div
    class="about full-background" :class="{
      'transform-about-open': navOpen,
      'transform-about-closed': !navOpen,
      'transform-about-default': navDefault,
    }"
  >
    <div class="container">
      <h1>{{about.title}}</h1>
    </div>

    <div class="text-bg">
      <h2>GLINKA</h2>
      <h2>ANASTASIYA</h2>
    </div>

    <!--MAIN CONTENT-->
    <div class="about-main">
      <div class="about__img">
        <img src="../assets/images/info.webp" alt="info">
      </div>
      <div class="about__text">
        <h4>{{about.name}}</h4>
        <p>{{home.mainText}}</p>
      </div>
    </div>

    <!--WORKS-->
    <div
      class="works" data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <h4>{{about.worksTitle}}</h4>
      <div class="works-images">
        <div
          class="image"
          v-for="(image, index) in images"
          :key="index"
          @click="showSingleImage(index)"
        >
          <img :src="image" :alt="index"/>
        </div>
      </div>
    </div>

    <!--COPYRIGHT-->
    <div class="footer">
      <p>Copyright © 2020 All rights reserved</p>
    </div>

    <client-only>
      <vue-easy-lightbox
        :visible="visible"
        :index="index"
        :imgs="images"
        @hide="visible = false"
      />
    </client-only>

  </div>
</template>

<script>
  import { mapState } from 'vuex'

  import HeaderBackground from '../components/Header-Background'

  const images = [
    require('../assets/images/home/instagram 1.webp'),
    require('../assets/images/home/instagram 2.webp'),
    require('../assets/images/home/instagram 3.webp'),
    require('../assets/images/home/instagram 4.webp')
  ]

  export default {
    name: 'About',
    components: { HeaderBackground },
    head() {
      return {
        title: 'About me'

      }
    },
    data: () => ({
      images: images,
      visible: false,
      index: 0,
      navOpen: false,
      navDefault: true
    }),
    mounted() {

      if (this.navOpen) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }

      $nuxt.$on('navOpen', (navOpen) => {
        navOpen ? (this.navOpen = true) : (this.navOpen = false)
        this.navDefault = false
      })
    },
    computed: {
      ...mapState('language', {
        home: 'home',
        about: 'about'
      })
    },
    methods: {
      showSingleImage(index) {
        this.index = index
        this.visible = true
      }
    }
  }
</script>

<style scoped>

  .no-scroll {
    overflow: hidden;
  }

  .about {
    overflow-x: hidden;
  }

  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    letter-spacing: 0.06em;
    font-size: 3.3vw;
    display: inline-block;
    z-index: 999;
    position: absolute;
  }

  h2 {
    color: var(--light-green);
    font-size: 10.5vw;
    letter-spacing: 0.1em;
    line-height: 77.9%;
    right: 0;
    margin: 0;
    font-weight: 400;
    font-family: 'Abril Fatface', serif;
    top: 0;
  }

  .text-bg {
    transform: rotate(-15deg);
    position: absolute;
    left: 20%;
    top: -7%;
    z-index: 1;
  }

  h2:nth-child(2) {
    top: -10%;
    right: 32%;
  }

  .about-main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    z-index: 888;
    position: relative;
    margin-top: 10%;
  }

  .about__img {
    width: 100%;
    height: 100%;
  }

  .about__img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .about__text {
    background-color: var(--dark);
    padding: 0 2em 2em 2em;
    height: 75%;
    width: 45%;
    top: 14%;
    left: 47%;
    position: absolute;
    display: grid;
    grid-template-columns: 1fr;
    filter: drop-shadow(0px 22px 44px rgba(0, 0, 0, 0.2));
  }

  .about__text h4 {
    line-height: 72px;
    letter-spacing: 0;
    font-weight: 600;
    font-size: 2.6vw;
    text-align: left;

  }

  .about__text p {
    white-space: pre-line;
    font-size: 1.4vw;
  }

  .works {
    margin-top: 2em;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    padding: 0 2em;
  }

  .works h4 {
    text-transform: uppercase;
    font-size: 1.7vw;
  }

  .works-images {
    width: 100%;
    display: grid;
    margin-top: 2em;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: center;
    grid-row-gap: 1.5em;
  }

  .works-images img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    object-position: center;
  }

  .footer {
    width: 100%;
    text-align: center;
    margin-top: 8%;
  }

  .footer p {
    letter-spacing: 0.1em;
    font-size: 1.3vw;
  }

  .image {
    cursor: pointer;
  }

  .transform-about-open {
    animation: navOpen 0.5s ease;
    animation-fill-mode: forwards;
  }

  .transform-about-closed {
    animation: navClosed 0.5s ease;
    animation-fill-mode: forwards;
  }

  .transform-about-default {
    animation: defaultAnim 0.5s ease;
    animation-fill-mode: forwards;
  }

  /*Animation for home*/
  @keyframes defaultAnim {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(0);
    }
  }

  @keyframes navOpen {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(var(--nav-width));
    }
  }

  @keyframes navClosed {
    0% {
      transform: translateX(var(--nav-width));
    }

    100% {
      transform: translateX(0);
    }
  }

  /*MEDIA QUERIES*/
  @media screen and (max-width: 768px) and (max-height: 1000px) {
    .about {
      margin: 0;
      width: 100%;
    }

    .about-main {
      height: 60%;
    }

    .about__img {
      height: 60%;
    }

    .container h1 {
      margin: 0;
      position: absolute;
      font-size: 3rem;
      top: 27%;
      left: 34%;
    }

    .text-bg {
      top: 25%;
      text-align: center;
      left: 7%;
      transform: rotateY(0deg);
    }

    .text-bg h2 {
      font-size: 6rem;
    }

    .about-main {
      margin-top: 0;
      grid-template-columns: 1fr;
    }


    .about__text {
      top: 100%;
      width: 90%;
      left: 5%;
      height: 70%;
    }

    .about__text h4 {
      font-size: 2.5rem;
    }

    .about__text p {
      font-size: 1.7rem;
    }

    .works {
      margin-top: 75%;
    }

    .works h4 {
      text-align: center;
      font-size: 2rem;
    }

    @media screen and (max-width: 393px) {

      .container h1 {
        top: 19.5%;
        font-size: 1.6rem;
      }

      .about__img {
        height: 100%;
      }

      .about__text {
        top: 135%;
      }

      .about__text h4 {
        font-size: 1.7rem;
        margin: 0;
      }

      .about__text p {
        font-size: 1rem;
      }

      .text-bg {
        top: 19%;
      }

      .text-bg h2 {
        font-size: 3rem;
      }

      .works {
        margin-top: 110%;
      }

      .works h4 {
        font-size: 1.2rem;
        margin-bottom: 0;
      }

      .footer p {
        font-size: 0.7rem;
      }
    }

  }

  @media screen and (max-width: 393px) {

    .container h1 {
      top: 18.5%;
      left: 32%;
    }

    .text-bg {
      top: 18%;
    }

    .about__text {
      top: 140%;
      height: 90%;
    }

    .text-bg h2 {
      font-size: 2.8rem;
    }

    .works {
      margin-top: 130%;
    }
  }

  @media screen and (max-width: 320px) {

    .container h1 {
      top: 16.5%;
      left: 29%;
    }

    .about__text {
      height: 110%;
      top: 145%;
    }

    .about__text h4 {
      font-size: 1.4rem;
    }

    .text-bg {
      top: 16%;
    }

    .text-bg h2 {
      font-size: 2.5rem;
    }

    .works {
      margin-top: 160%;
      padding: 0;
    }
  }
</style>
