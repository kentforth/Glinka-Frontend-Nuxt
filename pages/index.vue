<template>
  <div
    class="home"
    :class="{
      'transform-home-open': navOpen,
      'transform-home-closed': !navOpen,
      'transform-home-default': navDefault,
    }"
  >
    <div class="info">
      <!--IMAGE-->
      <img src="../assets/images/info.webp" alt="info"/>

      <!--BIO-->
      <div class="bio">
        <div class="bio-title">
          <h2>{{ mainTitle4 }}</h2>
          <h2>{{ mainTitle3 }}</h2>
          <h3>{{ mainTitle2 }}</h3>
          <h2>{{ mainTitle }}</h2>
        </div>

        <!--TEXT-->
        <div class="bio-text">
          <div class="container">
            <p>
              {{ mainText }}
            </p>
          </div>
        </div>

        <!--BUTTON CONTACT-->
        <ButtonPrimary
          :text="contactMeText"
          :link="contactMeLink"
          class="btn-contact"
        />

        <!--CALLIGRAFFITY GLINKA-->
        <div class="calligraffity">
          <p>Glinka</p>
        </div>
      </div>
    </div>

    <h4>MY WORKS</h4>

    <!--WORKS-->
    <div
      class="works"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div class="works__images">
        <img src="../assets/images/my-works-bg.webp" alt="works-bg"/>
        <img src="../assets/images/info.webp" alt="info"/>
        <img src="../assets/images/avatar.webp" alt="avatar"/>
        <img src="../assets/images/my-works-1.webp" alt="works-1"/>
      </div>
      <div class="works__text">
        <p>
          Simple text about Glinka’s life. This example was made by Tema. He’s
          backend developer, playing guitar and love parrots. Simple text about
          Glinka’s life. This example was made by Tema. He’s backend developer,
          playing guitar and love parrots.
        </p>
        <ButtonPrimary
          :text="worksText"
          :link="worksLink"
          class="btn-portfolio"
        />
      </div>
    </div>

    <h4>FOLLOW MY INSTAGRAMM</h4>

    <div
      class="follow-instagram"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <a
        class="insta-item"
        v-for="image in images"
        :key="image"
        href="https://www.instagram.com/aee.glinka/?igshid=1we4ciix7d3wm"
        target="_blank"
      >
        <img :src="image" alt="insta-image"/>
      </a>
    </div>

    <Rights/>
  </div>
</template>

<script>
  import { mainTextRU } from '../language/russian/home'
  import { mainTextENG } from '../language/english/home'

  import ButtonPrimary from '../components/Button-Primary'
  import Rights from '../components/Rights'

  export default {
    name: 'Home',
    components: { Rights, ButtonPrimary },
    head() {
      return {
        title: 'Home'
      }
    },
    data: () => ({
      contactMeText: 'Contact Me',
      contactMeLink: '/contact',
      worksText: 'See more',
      worksLink: '/portfolio',
      languageENG: true,
      mainText: mainTextENG,
      mainTitle: 'I\'m GLINKA',
      mainTitle2: 'Hello,',
      mainTitle3: 'ANASTASIYA',
      mainTitle4: 'GLINKA',
      navOpen: false,
      navDefault: true,
      images: [
        require('../assets/images/home/instagram 1.webp'),
        require('../assets/images/home/instagram 2.webp'),
        require('../assets/images/home/instagram 3.webp'),
        require('../assets/images/home/instagram 4.webp'),
        require('../assets/images/home/instagram 5.webp')
      ]
    }),
    methods: {
      changeLanguage(language) {
      }
    },

    mounted() {

      $nuxt.$on('changeLanguage', (changeLanguage) => {
        if (changeLanguage === true) {
          this.mainText = mainTextENG
          this.mainTitle = 'I\'m GLINKA'
          this.mainTitle2 = 'Hello,'
          this.mainTitle3 = 'ANASTASIYA'
          this.mainTitle4 = 'GLINKA'
        } else {
          this.mainText = mainTextRU
          this.mainTitle = 'Я ГЛИНКА'
          this.mainTitle2 = 'Привет,'
          this.mainTitle3 = 'АНАСТАСИЯ'
          this.mainTitle4 = 'ГЛИНКА'
        }
      })

      $nuxt.$on('navOpen', (navOpen) => {
        navOpen ? (this.navOpen = true) : (this.navOpen = false)
        this.navDefault = false
      })
    }
  }
</script>

<style>
  .container {
    width: 93%;
  }

  .home {
    background-color: var(--primary) !important;
    height: 100%;
    margin-left: var(--nav-width);
    width: calc(100% - var(--nav-width));
    overflow: hidden;
  }

  h4 {
    width: 100%;
    text-align: center;
    margin-bottom: 0;
  }

  h4:last-child {
    margin: 0;
  }

  .info {
    display: grid;
    grid-template-columns: 0.7fr 1fr;
  }

  .info img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100vh;
  }

  .bio-title {
    width: 100%;
    padding-left: 2em;
    position: relative;
    overflow: hidden;
    height: 35%;
  }

  .bio-title h2:nth-child(1),
  .bio-title h2:nth-child(2) {
    color: var(--light-green);
    position: absolute;
    margin: 0;
  }

  .bio-title h2:nth-child(4),
  .bio-title h3 {
    position: absolute;
  }

  .bio-title h2:nth-child(4),
  .bio-title h2:nth-child(2) {
    top: 40%;
  }

  .bio-title h2:nth-child(2) {
    top: 50%;
    left: -8%;
  }

  .bio-title h3 {
    top: 35%;
    left: 6%;
  }

  .bio-title h2:nth-child(1) {
    text-transform: uppercase;
    top: 20%;
    left: -3.5%;
  }

  .btn-contact {
    margin: 7em 0 0 2em;
  }

  .calligraffity {
    transform: translate(50%, 0) rotate(-30deg);
    position: relative;
    top: 10%;
    left: 80%;
    width: 10%;

    margin: 0;
  }

  .calligraffity p {
    font-family: 'Calligraffitti', sans-serif;
    margin: 0;
    font-size: 2.5rem;
  }

  .works {
    background-color: var(--primary);
    grid-template-rows: 1fr;
    margin-bottom: 15em;
    height: 80%;
    width: 100%;
    display: grid;
    justify-content: center;
    align-content: center;
    align-items: center;
    grid-template-columns: 1fr 1fr;
  }

  .works__images {
    position: relative;
    width: 100%;
    height: 100%;
    transform: translateY(-4em);
  }

  .works__images img {
    width: 100%;
    position: absolute;
    object-fit: cover;
    object-position: center;
  }

  .works__images img:nth-child(1) {
    z-index: 1;
    opacity: 0.2;
    top: 0;
    left: 0;
  }

  .works__images img:nth-child(2) {
    z-index: 2;
    top: 30%;
    left: 15%;
  }

  .works__images img:nth-child(3) {
    z-index: 3;
    top: 60%;
    left: 47%;
  }

  .works__images img:nth-child(4) {
    z-index: 4;
    top: 90%;
    left: 25%;
  }

  .works__images img:nth-child(2),
  .works__images img:nth-child(3),
  .works__images img:nth-child(4) {
    width: 300px;
    height: 220px;
    box-shadow: 0 22px 44px -12px rgba(0, 0, 0, 0.35);
  }

  .works__text {
    padding-right: 4em;
    margin: 6em auto 0 auto;
    text-align: center;
  }

  .works__text p {
    text-align: left;
  }

  .btn-portfolio {
    margin-top: 5em;
  }

  .follow-instagram {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    justify-items: center;
    margin: 3em auto 4em auto;
    padding: 0 5%;
  }

  .insta-item {
    width: 250px;
    height: 250px;
  }

  .insta-item img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }


  .transform-home-open {
    animation: navOpen 0.5s ease;
    animation-fill-mode: forwards;
  }

  .transform-home-closed {
    animation: navClosed 0.5s ease;
    animation-fill-mode: forwards;
  }

  .transform-home-default {
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
  @media (-webkit-min-device-pixel-ratio: 1.25) {
    h2 {
      font-size: 4rem;
    }

    h4 {
      font-size: 1.7rem;
    }

    p {
      font-size: 1.6rem;
    }

    .calligraffity {
      left: 80%;
      top: 5%;
    }

    .calligraffity p {
      font-size: 1.8rem;
    }

    .works {
      margin-bottom: 3em;
    }

    .works__text {
      padding-right: 1.5em;
    }

    .works__images img:nth-child(2),
    .works__images img:nth-child(3),
    .works__images img:nth-child(4) {
      width: 250px;
      height: 180px;
    }

    .works__images img:nth-child(2) {
      top: 27%;
      left: 10%;
    }

    .works__images img:nth-child(3) {
      top: 50%;
      left: 45%;
    }

    .works__images img:nth-child(4) {
      top: 80%;
    }

    h4:nth-child(4) {
      margin-top: 0;
    }

    h4:nth-child(4) {
      margin-top: 4em;
    }

    .insta-item {
      width: 200px;
      height: 200px;
    }
  }

  @media screen and (max-width: 1440px) and (max-height: 900px) {
    .bio-title h2:nth-child(2) {
      left: -12%;
    }

    .calligraffity {
      top: 5%;
    }

    .works__images img:nth-child(2),
    .works__images img:nth-child(3),
    .works__images img:nth-child(4) {
      width: 250px;
      height: 180px;
    }

    .works__images img:nth-child(2) {
      top: 20%;
      left: 8%;
    }

    .works__images img:nth-child(3) {
      top: 37%;
      left: 45%;
    }

    .works__images img:nth-child(4) {
      top: 60%;
      left: 25%;
    }

    h4:nth-child(4) {
      margin-top: 0;
    }

    .follow-instagram {
      padding: 0 2em;
    }
  }

  @media screen and (max-width: 1366px) and (max-height: 768px) {
    .bio-title h2:nth-child(2) {
      left: -13%;
    }

    .bio-title h2:nth-child(1) {
      left: -5%;
    }

    .btn-contact {
      margin-top: 4em;
    }

    .calligraffity {
      top: -5%;
      left: 77%;
    }

    h4:nth-child(4) {
      margin-top: 3em;
    }
  }

  @media screen and (max-width: 1200px) and (max-height: 720px) {
    h2 {
      font-size: 4rem;
    }

    .bio-title h2:nth-child(2) {
      left: 11%;
    }

    .bio-text p {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 1000px) and (max-height: 768px) {
    .bio-title {
      height: 25%;
    }

    .bio-title h2 {
      font-size: 3.5rem;
      margin-bottom: 0;
    }

    .bio-title h3 {
      left: 14%;
    }

    h3 {
      font-size: 2rem;
    }

    p {
      font-size: 1.5rem;
    }

    .calligraffity {
      top: 10%;
      left: 70%;
    }

    .works {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      justify-content: center;
      justify-items: center;
      align-items: center;
      margin-bottom: 0;
    }

    .works__images {
      transform: translateY(0);
    }

    .works__images img:nth-child(1) {
      height: 230%;
      object-fit: contain;
      left: 0;
    }

    .works__images img:nth-child(2) {
      top: 40%;
      left: 17%;
    }

    .works__images img:nth-child(3) {
      top: 80%;
    }

    .works__images img:nth-child(4) {
      top: 130%;
    }

    .works__text {
      margin: 4em auto 0 auto;
      transform: translateY(18em);
      padding: 0 2em;
    }

    .works__text p {
      margin: 0;
    }

    h4:nth-child(4) {
      margin-top: 10em;
    }
  }

  @media screen and (max-width: 768px) and (max-height: 1000px) {


    .home {
      margin-left: 0;
      width: 100%;
    }

    h2 {
      font-size: 4rem;
    }

    .bio-title h3 {
      left: 12%;
    }

    .bio-title h2:nth-child(1) {
      left: -5.5%;
    }

    .bio-title h2:nth-child(2) {
      left: -12%;
      top: 47%;
    }

    .bio-text p {
      margin-top: 0;
    }

    .container {
      width: 85%;
    }

    .btn-contact {
      margin-top: 3em;
    }

    .calligraffity {
      left: 77%;
      top: 0;
    }

    .calligraffity p {
      font-size: 1.6rem;
    }

    h4 {
      font-size: 1.8rem;
    }

    .works {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      margin-bottom: 4em;
    }

    .works__text {
      padding: 3em 2em 0 2em;
    }
  }

  @media screen and (max-width: 393px) and (max-height: 696px) {

    .info {
      grid-template-columns: 1fr;
    }

    .bio-title {
      overflow: visible;
    }

    .bio-title h2, .bio-title h3 {
      font-size: 3rem;
    }

    .bio-title h2:nth-child(1) {
      transform: translateY(30%);
    }

    .bio-title h2:nth-child(2) {
      transform: translate(10%, 130%);
    }

    .bio-title h2:nth-child(4) {
      margin: 0;
      transform:translateY(170%);
    }

    .bio-title h3 {
      margin: 0;
      font-size: 1.5rem;
      transform:translateY(150%);
    }

    .bio-text {
      margin-top: 12em;
    }

    .bio-text p {
      font-size: 1.5rem;
    }

    .button a {
      font-size: 1.3rem !important;
    }

    .button {
      text-align: center;
    }

    .btn-contact {
      margin-top: 3em;
      margin-left: 1em;
    }

    .calligraffity {
      display: none;
    }

    .works {
      margin-bottom: 0;
    }

    .works__images {
      height: 93%;
    }

    .works__images img:nth-child(1) {
      opacity: 0;
    }

    .works__images img:nth-child(1),
    .works__images img:nth-child(2),
    .works__images img:nth-child(3),
    .works__images img:nth-child(4) {
      transform: translateY(-3em);
    }

    .works__images img:nth-child(2),
    .works__images img:nth-child(3),
    .works__images img:nth-child(4) {
      width: 190px;
      height: 130px;
    }

    .works__images img:nth-child(1) {
      height: 100%;
    }

    .works__images img:nth-child(2) {
      top: 20%;
      left: 11%;
    }

    .works__images img:nth-child(3) {
      top: 40%;
      left: 42%;
    }

    .works__images img:nth-child(4) {
      top: 60%;
    }

    .works__text {
      margin-top: 0;
      padding-top: 0;
      transform: translateY(-3em);
    }

    h4:nth-child(4) {
      margin-top: 0;
    }

    .follow-instagram {
      margin-bottom: 2em;
    }

    .rights p {
      font-size: 0.8rem !important;
    }
  }

  @media screen and (max-width: 360px) and (max-height: 640px) {


    .button a {
      padding: 0.5em 1.4em !important;
    }

    .btn-contact {
      margin-left: 1.5em;
    }


    h4 {
      font-size: 1.5rem;
    }

    .works__images img:nth-child(1),
    .works__images img:nth-child(2),
    .works__images img:nth-child(3),
    .works__images img:nth-child(4) {
      transform: translateY(-3em);
    }

    .works__images img:nth-child(3) {
      left: 37%;
    }

    .works__images img:nth-child(4) {
      top: 65%;
    }

    .works__text {
      transform: translateY(-2em);
    }

    .works__text p {
      font-size: 1.3rem;
    }
  }

  @media screen and (max-width: 320px) and (max-height: 658px) {

    .bio-title h2, .bio-title h3 {
      font-size: 2.5rem;
    }

    .bio-title h3 {
      font-size: 1.6rem;
    }

    .bio-title h2:nth-child(2) {
      transform: translate(5%, 130%);
    }

    .bio-text {
      margin-top: 10em;
    }

    .button a {
      font-size: 1rem;
    }

    .btn-contact {
      margin: 3em 0 0 0.8em;
    }


    h4 {
      margin-top: 2em;
    }

    h4:nth-child(4) {
      margin-top: 1em;
    }
  }
</style>
