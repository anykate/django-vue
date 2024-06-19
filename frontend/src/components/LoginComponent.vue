<script setup>
import Cookies from "universal-cookie";
import { reactive, onMounted } from "vue";
import { useRouter } from 'vue-router'

const cookies = new Cookies()
const router = useRouter()

const formData = reactive({
  username: '',
  password: ''
})

const sessionView = () => {
  fetch("/session/", {
    credentials: "same-origin",
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
    })
    .catch((err) => {
      // console.log(err);
    });
}

const handleSubmit = () => {
  fetch("/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": cookies.get("csrftoken"),
    },
    credentials: "same-origin",
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.detail === 'Successfully logged in.') {
        router.push({ name: 'Home' })
      }
      // console.log(data.detail)
    })
    .catch((err) => {
      // console.error(err);
    });
}

onMounted(() => {
  sessionView()
})
</script>

<template>
  <form @submit.prevent="handleSubmit" autocomplete="false">
    <div class="mb-3">
      <label for="exampleInputUsername1" class="form-label">Username</label>
      <input type="text" class="form-control" id="exampleInputUsername1" v-model="formData.username"
        aria-describedby="usernameHelp" />
      <div id="usernameHelp" class="form-text">We'll never share your username with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" v-model="formData.password" />
    </div>
    <button type="submit" class="btn btn-outline-primary mt-3">Login</button>
  </form>
</template>

<style scoped></style>
