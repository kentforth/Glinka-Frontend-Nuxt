<template>
  <div
    class="portfolio full-background"
    :class="{
      'transform-home-open': navOpen,
      'transform-home-closed': !navOpen,
      'transform-home-default': navDefault,
    }"
  >
    <HeaderBackground :title="title" />
    <div class="works">
      <div
        class="image"
        v-for="(image, index) in images"
        :key="index"
        @click="showSingleImage(index)"
      >
        <img :src="image" :alt="index" />
      </div>
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
import HeaderBackground from '../components/Header-Background'

const images = [
  require('../assets/images/home/instagram 1.webp'),
  require('../assets/images/home/instagram 2.webp'),
  require('../assets/images/home/instagram 3.webp'),
  require('../assets/images/home/instagram 4.webp'),
  require('../assets/images/home/instagram 5.webp'),
  require('../assets/images/home/instagram 1.webp'),
  require('../assets/images/home/instagram 2.webp'),
  require('../assets/images/home/instagram 4.webp'),
  require('../assets/images/home/instagram 3.webp'),
  require('../assets/images/home/instagram 2.webp'),
  require('../assets/images/home/instagram 1.webp'),
  require('../assets/images/home/instagram 3.webp'),
  require('../assets/images/home/instagram 5.webp'),
  require('../assets/images/home/instagram 2.webp'),
  require('../assets/images/home/instagram 1.webp'),
]
export default {
  name: 'Portfolio',
  components: { HeaderBackground },
  data: () => ({
    title: 'Portfolio',
    images: images,
    visible: false,
    index: 0,
    navOpen: false,
    navDefault: true,
  }),
  methods: {
    showSingleImage(index) {
      this.index = index
      this.visible = true
    },
  },
  mounted() {
    $nuxt.$on('navOpen', (navOpen) => {
      navOpen ? (this.navOpen = true) : (this.navOpen = false)
      this.navDefault = false
    })
  }
}
</script>

<style scoped>
.portfolio {
  background-color: var(--primary);
  min-height: 100%;
}

.works {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  width: 100%;
  height: 100%;
}

.image {
  width: 100%;
  height: 300px;
  background-color: green;
  transition: var(--transition);
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.image:hover {
  cursor: pointer;
  -webkit-filter: brightness(40%);
}

@media (-webkit-min-device-pixel-ratio: 1.25) {
  .works {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .image {
    height: 250px;
  }
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

@media screen and (max-width: 768px) and (max-height: 1000px) {
  .full-background {
    margin-left: 0;
    width: 100%;
  }
}
</style>
