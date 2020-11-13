<template>
  <div class="admin">
    <h1>Admin</h1>
    <form class="form" @submit.prevent="sendFile">
      <input type="file" ref="file" class="input" accept="image/*" @change="selectFile" />
      <button>SEND</button>
    </form>
  </div>
</template>

<script>
  import axios from "axios";

export default {
  layout: 'admin',
  data: () => ({
    file: '',
  }),
  methods: {
    selectFile() {
      const imageFile = this.$refs.file.files[0]
      this.file = imageFile
    },
    async sendFile() {
      const formData = new FormData()
      formData.append('file', this.file)
      try {
        await axios.post('localhost:6080/portfolio', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        console.log('Uploaded!')
      }
      catch(error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped>
h1 {
  color: #000;
  text-align: center;
}

.form {
  margin: 0 auto;
  text-align: center;
  width: 80%;
}
</style>
