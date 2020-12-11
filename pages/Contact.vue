<template>
  <div
    class="contact"
    :class="{
      'transform-home-open': navOpen,
      'transform-home-closed': !navOpen,
      'transform-home-default': navDefault,
    }"
  >
    <HeaderBackground :title="contact.title"/>
    <div class="content">
      <div class="content__image">
        <ImageTilt class="cols" :max="max" :perspective="perspective">
          <img src="../assets/images/letter.webp" alt="letter"/>
        </ImageTilt>
      </div>
      <div class="content__form">
        <form class="form" @submit.prevent="sendMessage">
          <h3>{{contact.formTitle}}</h3>

          <!--NAME-->
          <div class="input-field">
            <input
              type="text"
              class="input"
              :placeholder="contact.formName"
              v-model.trim="form.name"
              :class="$v.form.name.$error ? 'invalid-feedback' : ''"
            />
            <div
              class="error-name error"
              :class="$v.form.name.$error ? 'showError' : 'hideError'"
            >
              <p>Name is required</p>
              <img src="../assets/images/icons/error.svg" alt="error"/>
            </div>
          </div>

          <!--EMAIL-->
          <div class="input-field">
            <input
              type="text"
              class="input"
              :placeholder="contact.formEmail"
              v-model.trim="form.email"
              :class="$v.form.email.$error ? 'invalid-feedback' : ''"
            />
            <div
              class="error-email error"
              :class="$v.form.email.$error ? 'showError' : 'hideError'"
            >
              <p>Email is required</p>
              <img src="../assets/images/icons/error.svg" alt="error"/>
            </div>
            <div
              class="error-email error"
              :class="
                $v.form.email.$dirty && !$v.form.email.email
                  ? 'showError'
                  : 'hideError'
              "
            >
              <p>Type Email Address</p>
              <img src="../assets/images/icons/error.svg" alt="error"/>
            </div>
          </div>

          <!--SUBJECT-->
          <div class="input-field">
            <input
              type="text"
              class="input"
              :placeholder="contact.formSubject"
              v-model.trim="form.subject"
              :class="$v.form.subject.$error ? 'invalid-feedback' : ''"
            />
            <div
              class="error-subject error"
              :class="$v.form.subject.$error ? 'showError' : 'hideError'"
            >
              <p>Subject is required</p>
              <img src="../assets/images/icons/error.svg" alt="error"/>
            </div>
          </div>

          <div class="message">
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              v-model.trim="form.message"
              :class="$v.form.message.$error ? 'invalid-feedback' : ''"
              class="input area-message"
              :placeholder="contact.formMessage"
            ></textarea>
            <div
              class="error-message error"
              :class="$v.form.message.$error ? 'showError' : 'hideError'"
            >
              <p>Message is required</p>
              <img src="../assets/images/icons/error.svg" alt="error"/>
            </div>
          </div>

          <button type="submit" class="btn-send">{{contact.formButtonText}}</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  import HeaderBackground from '../components/Header-Background'

  import { required, email } from 'vuelidate/lib/validators'
  import ImageTilt from '../components/ImageTilt'

  export default {
    name: 'Contact',
    components: { ImageTilt, HeaderBackground },
    head() {
      return {
        title: 'Contact'
      }
    },
    computed: {
      ...mapState('language', {
        contact: 'contact'
      })
    },
    methods: {
      sendMessage() {
        this.$v.form.$touch()
        if (this.$v.form.$error) {
          return
        }

        this.$toast.success('Message has been sent', {
          position: 'bottom-center',
          className: 'toast',
          duration: 2500
        })
      }
    },

    data: () => ({
      navOpen: false,
      navDefault: true,
      max: 30,
      perspective: 500,
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }),
    validations: {
      form: {
        name: { required },
        email: { required, email },
        subject: { required },
        message: { required }
      }
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
  ::-webkit-scrollbar {
    display: none;
  }

  .contact {
    background-color: var(--background-primary) !important;
    height: 100vh;
    margin-left: var(--nav-width);
    width: calc(100% - var(--nav-width));
    overflow: hidden;
  }

  .content {
    display: grid;
    margin: 3em auto;
    padding: 0 10%;
    align-items: center;
    align-content: center;
    grid-template-columns: 1fr 1fr;
  }

  .content__image {
    width: 70%;
  }

  .content__image img {
    width: 100%;
    height: 100%;
  }

  .form {
    width: 80%;
    display: flex;
    text-align: center;
    flex-direction: column;
  }

  h3 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.8);
    font-size: 2.3rem;
    line-height: 77.9%;
  }

  .input {
    outline: none;
    margin-bottom: 0.8em;
    font-size: 2rem;
    background-color: var(--light-green);
    border: 1px solid var(--light-green);
    color: var(--white);
    border-radius: 37px;
    padding: 0.3em 1em;
    z-index: 999;
    transition: all 0.2s ease;
  }

  .input:focus {
    box-shadow: 0 0 15px var(--green);
  }

  .input::placeholder {
    color: rgba(77, 87, 87, 1);
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
  }

  .invalid-feedback {
    border: 1px solid var(--error);
  }

  .input-field {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 777;
  }

  .btn-send {
    background-color: #57b846;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    border: none;
    outline: none;
    font-size: 2rem;
    width: 60%;
    margin: 0.5em auto;
    color: var(--white);
    padding: 0.5em 1em;
    border-radius: 37px;
  }

  .btn-send:hover {
    cursor: pointer;
  }

  .message {
    width: 100%;
    position: relative;
  }

  textarea {
    resize: none;
    width: 100%;
  }

  .area-message {
    width: 90%;
    z-index: 999;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
  }

  .error-name,
  .error-email,
  .error-subject {
    top: 13px;
  }

  .error-name {
    width: 30%;
    right: 8%;
  }

  .error-email {
    width: 30%;
    right: 8%;
  }

  .error-email:nth-child(3) {
    width: 34%;
  }

  .error-subject {
    width: 33%;
    right: 8%;
  }

  .error-message {
    top: 40%;
    right: 7.5%;
    width: 35%;
  }

  .error {
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    background-color: var(--white);
    margin: 0 auto;
    text-align: center;
    padding: 0.5em 0;
    border-radius: 30px;
    border: 1px solid var(--error);
  }

  .error p {
    margin: 0;
    color: var(--error);
    font-size: 0.8rem;
    font-weight: 500;
  }

  .error img {
    width: 15px;
    margin-left: 10px;
  }

  .showError {
    opacity: 1;

    transition: opacity 0.2s ease;
  }

  .hideError {
    opacity: 0;
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
  /* laptops 125% zoom*/
  @media (-webkit-min-device-pixel-ratio: 1.25) {
    .content {
      margin-bottom: 0;
    }

    h3 {
      font-size: 2rem;
      margin-top: 0;
    }

    .input {
      font-size: 1.7rem;
    }

    .area-message {
      width: 100%;
      height: 200px;
    }

    .error-message {
      width: 45%;
    }

    .error-subject {
      width: 43%;
    }

    .error-email {
      width: 40%;
    }

    .error-email:nth-child(3) {
      width: 45%;
    }

    .error-name {
      width: 40%;
    }

    .error-message,
    .error-subject,
    .error-email,
    .error-name {
      right: 4.5%;
      padding: 0.3em 0;
    }

    .btn-send {
      font-size: 1.6rem;
      margin: 0 auto 0.5em auto;
    }
  }

  @media screen and (max-width: 1366px) and (max-height: 768px) {
    h3 {
      margin-top: 0;
      font-size: 2rem;
    }

    .form {
      width: 100%;
    }

    .input {
      width: 90%;
      font-size: 1.7rem;
    }

    .message {
      width: 100%;
    }

    .error-message {
      width: 42%;
    }

    .error-subject,
    .error-email,
    .error-name {
      width: 40%;
      padding: 0.3em 0;
    }

    .error-email {
      width: 36%;
    }

    .error-email:nth-child(3) {
      width: 40%;
    }

    .error-name {
      width: 37%;
    }
  }

  @media screen and (max-width: 1200px) and (max-height: 720px) {
    .content {
      margin-top: 1.5em;
      padding: 0 2em;
    }

    .form {
      width: 100%;
    }

    .btn-send {
      font-size: 1.6rem;
    }

    .content__image {
      margin-left: 2em;
    }
  }

  @media screen and (max-width: 768px) and (max-height: 1000px) {
    .contact {
      margin-left: 0;
      width: 100%;
      overflow: auto;
    }

    .content {
      padding: 0 2em;
      justify-content: center;
      justify-items: center;
    }

    h3 {
      margin-top: 1em;
    }

    .content__form {
      width: 100%;
      justify-content: center;
      display: grid;
      grid-template-columns: 1fr;
    }

    .form {
      width: 100%;
      margin: 0;
    }

    .content__image {
      padding: 0;
    }

    .area-message {
      width: 100%;
    }

    .error {
      right: 1.2em;
    }

    .error-message {
      width: 39%;
    }

    .error-subject {
      width: 38%;
    }

    .error-email {
      width: 34%;
    }

    .error-email:nth-child(3) {
      width: 38%;
    }

    .error-name {
      width: 35%;
    }
  }

  @media screen and (max-width: 393px) and (max-height: 696px) {
    .content {
      grid-template-columns: 1fr;
    }

    .content__image {
      margin: 0;
      width: 50%;
    }

    .area-message {
      width: 90%;
    }

    .error p {
      font-size: 0.6rem;
    }

    .error {
      right: 2em;
    }

    .error-message {
      width: 42%;
    }

    .error-subject {
      width: 40%;
    }

    .error-email {
      width: 37%;
    }

    .error-email:nth-child(3) {
      width: 42%;
    }

    .error-name {
      width: 38%;
    }
  }

  @media screen and (max-width: 360px) and (max-height: 640px) {
    .error {
      right: 1.5em;
    }

    .error-message {
      width: 47%;
    }

    .error-subject {
      width: 45%;
    }

    .error-email {
      width: 42%;
    }

    .error-email:nth-child(3) {
      width: 47%;
    }

    .error-name {
      width: 42%;
    }

    .btn-send {
      width: 88%;
    }
  }

  @media screen and (max-width: 320px) and (max-height: 568px) {
    h3 {
      margin-top: 0;
      font-size: 1.6rem;
    }

    .content {
      padding: 0;
    }

    .input {
      font-size: 1.5rem;
    }

    .input::placeholder {
      font-size: 1rem;
    }

    .error {
      padding: 4px 0;
      transform: translateY(-3px);
    }

    .error p {
      font-size: 0.5rem;
    }

    .error-message {
      width: 38%;
    }

    .error-subject {
      width: 37%;
    }

    .error-email {
      width: 35%;
    }

    .error-email:nth-child(3) {
      width: 37%;
    }

    .error-name {
      width: 34%;
    }

    .btn-send {
      font-size: 1.4rem;
      margin-bottom: 1em;
    }
  }
</style>
