<template>
  <div class="contact">
    <HeaderBackground />
    <div class="content">
      <div class="content__image">
        <ImageTilt class="cols" max="30" perspective="500">
          <img src="../assets/images/letter.webp" alt="letter" />
        </ImageTilt>
      </div>
      <div class="content__form">
        <form class="form" @submit.prevent="sendMessage">
          <h3>Get in touch</h3>

          <!--NAME-->
          <div class="input-field">
            <input
              type="text"
              class="input"
              placeholder="Name"
              v-model.trim="form.name"
              :class="$v.form.name.$error ? 'invalid-feedback' : ''"
            />
            <div
              class="error-name error"
              :class="$v.form.name.$error ? 'showError' : 'hideError'"
            >
              <p>Name is required</p>
              <img src="../assets/images/icons/error.svg" alt="error" />
            </div>
          </div>

          <!--EMAIL-->
          <div class="input-field">
            <input
              type="text"
              class="input"
              placeholder="Email"
              v-model.trim="form.email"
              :class="$v.form.email.$error ? 'invalid-feedback' : ''"
            />
            <div
              class="error-email error"
              :class="$v.form.email.$error ? 'showError' : 'hideError'"
            >
              <p>Email is required</p>
              <img src="../assets/images/icons/error.svg" alt="error" />
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
              <img src="../assets/images/icons/error.svg" alt="error" />
            </div>
          </div>

          <!--SUBJECT-->
          <div class="input-field">
            <input
              type="text"
              class="input"
              placeholder="Subject"
              v-model.trim="form.subject"
              :class="$v.form.subject.$error ? 'invalid-feedback' : ''"
            />
            <div
              class="error-subject error"
              :class="$v.form.subject.$error ? 'showError' : 'hideError'"
            >
              <p>Subject is required</p>
              <img src="../assets/images/icons/error.svg" alt="error" />
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
              placeholder="Message"
            ></textarea>
            <div
              class="error-message error"
              :class="$v.form.message.$error ? 'showError' : 'hideError'"
            >
              <p>Message is required</p>
              <img src="../assets/images/icons/error.svg" alt="error" />
            </div>
          </div>

          <button type="submit" class="btn-send">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBackground from '../components/Header-Background'

import { required, email } from 'vuelidate/lib/validators'
import ImageTilt from '../components/ImageTilt'
export default {
  name: 'Contact',
  components: { ImageTilt, HeaderBackground },
  methods: {
    sendMessage() {
      this.$v.form.$touch()
      if (this.$v.form.$error) {
        return
      }

      this.$toast.success('Message has been sent', {
        position: 'bottom-center',
        className: 'toast',
        duration: 2500,
      })
    },
  },

  data: () => ({
    form: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  }),
  validations: {
    form: {
      name: { required },
      email: { required, email },
      subject: { required },
      message: { required },
    },
  },
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
  overflow-y: scroll;
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
  width: 40%;
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
  width: 34%;
  right: 8%;
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
</style>
