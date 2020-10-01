<template>
  <div class="home">
    <div class="info">
      <!--IMAGE-->
      <img src="../assets/images/info.webp" alt="info" />

      <!--BIO-->
      <div class="bio">
        <div class="bio-title">
          <h2>{{mainTitle4}}</h2>
          <h2>{{mainTitle3}}</h2>
          <h3>{{mainTitle2}}</h3>
          <h2>{{mainTitle}}</h2>
        </div>

        <!--TEXT-->
        <div class="bio-text">
          <div class="container">
            <p>
             {{mainText}}
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
    <div class="works">
      <div class="works__images">
        <img src="../assets/images/my-works-bg.webp" alt="works-bg" />
        <img src="../assets/images/info.webp" alt="info" />
        <img src="../assets/images/avatar.webp" alt="avatar" />
        <img src="../assets/images/my-works-1.webp" alt="works-1" />
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

    <div class="follow-instagram">
      <a
        class="insta-item"
        v-for="image in images"
        :key="image"
        href="https://www.instagram.com/aee.glinka/?igshid=1we4ciix7d3wm"
        target="_blank"
      >
        <img :src="image" alt="insta-image" />
      </a>
    </div>

    <Rights />
  </div>
</template>

<script>
import { mainTextRU } from '../language/russian/home'
import { mainTextENG} from '../language/english/home'

import ButtonPrimary from '../components/Button-Primary'
import Rights from '../components/Rights'

export default {
  name: 'Home',
  components: { Rights, ButtonPrimary },
  head() {
    return {
      title: 'Home',
    }
  },
  data: () => ({
    contactMeText: 'Contact Me',
    contactMeLink: '/contact',
    worksText: 'See more',
    worksLink: '/portfolio',
    languageENG: true,
    mainText: mainTextENG,
    mainTitle: "I'm GLINKA",
    mainTitle2: 'Hello,',
    mainTitle3: 'ANASTASIYA',
    mainTitle4: 'GLINKA',
    images: [
      require('../assets/images/test/image  1.jpg'),
      require('../assets/images/test/image 2.jpg'),
      require('../assets/images/test/image 3.jpg'),
      require('../assets/images/test/image 4.jpg'),
      require('../assets/images/test/image 5.jpg'),
    ],
  }),
  methods: {
    changeLanguage(language) {

    }
  },
  mounted() {
    $nuxt.$on('changeLanguage', changeLanguage => {
      if (changeLanguage === true) {
        this.mainText = mainTextENG;
        this.mainTitle = "I'm GLINKA"
        this.mainTitle2 = "Hello,"
        this.mainTitle3 = "ANASTASIYA"
        this.mainTitle4 = "GLINKA"
      } else {
        this.mainText = mainTextRU
        this.mainTitle = "Я ГЛИНКА"
        this.mainTitle2 = "Привет,"
        this.mainTitle3 = "АНАСТАСИЯ"
        this.mainTitle4 = "ГЛИНКА"
      }

    })

  }
}
</script>

<style>
.container {
  width: 93%;
}
.home {
  background-color: var(--primary);
  height: 100vh;
  margin-left: var(--nav-width);
  width: calc(100% - var(--nav-width));
  overflow-y: scroll;
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
  top: 13%;
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
  grid-template-rows: 0.1fr 1fr;
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
  width: 300px;
  height: 300px;
}

.insta-item img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
}

/*MEDIA QUERIES*/
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
</style>
