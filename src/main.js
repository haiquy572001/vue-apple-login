import { createApp } from "vue";
import App from "./App.vue";
import VueAppleLogin from "vue-apple-login";

// createApp(App)
//   .use(VueAppleLogin, {
//     clientId: "ru.rustamiloveplove.service-id",
//     scope: "name email",
//     redirectURI: "https://rustam.iloveplove.ru/auth/apple/callback",
//     state: "500",
//     usePopup: true,
//   })
//   .mount("#app");

createApp(App)
  .use(VueAppleLogin, {
    clientId: "s-booking.net",
    scope: "name email",
    redirectURI: "https://quy-1.developer.vi-jp-te.info/auth/apple/callback",
    state: "500",
    usePopup: true,
  })
  .mount("#app");
