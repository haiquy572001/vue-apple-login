<template>
  <div style="width: 44.31px; height: 44.31px">
    <vue-apple-login
      v-if="!signedIn"
      data-mode="logo-only"
      data-border-radius="50"
      type="sign in"
      className="vue-apple-login"
      :onSuccess="onSuccess"
      :onFailure="onFailure"
    ></vue-apple-login>
  </div>
</template>

<script setup>
import { ref } from "vue";
const signedIn = ref(false);
const onSuccess = (data) => {
  console.log(data);
  signedIn.value = true;
};
// const onSuccessLogout = () => {
//   signedIn.value = false;
// };
const onFailure = (error) => {
  console.log(error);
};
</script>
<style>
.vue-apple-login {
  width: 44.31px;
  height: 44.31px;
  background-color:cornflowerblue;
  /* background: url("https://app-apsoutheast2-static.shopmy.com.au/shopmy/assets/apple_login.svg"); */
  background-size: 44.31px;
  cursor: pointer;
}

.vue-apple-login svg {
  display: none;
}
</style>
