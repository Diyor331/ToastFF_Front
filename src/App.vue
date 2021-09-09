<template>
  <v-app app dark>
    <!--Nav Bar-->
    <div class="container">
      <v-app-bar
          flat
          color="#1C2020"
      >
        <v-toolbar-title class="logo-text white--text">ToastFF</v-toolbar-title>

        <v-spacer></v-spacer>

        <div class="nav-items d-flex ">
          <v-card-title class="white--text">О нас</v-card-title>
          <v-card-title class="white--text">Портфолио</v-card-title>
          <v-card-title class="white--text">Сотрудники</v-card-title>
          <v-card-title class="white--text">Что мы умеем?</v-card-title>
          <v-btn
              class="ma-3"
              outlined
              color="#F4BF5c"
          >
            Связаться с нами
          </v-btn>
        </div>


      </v-app-bar>
    </div>

    <v-spacer></v-spacer>

    <!--Footer-->
    <v-footer
        color="#1C2020"
        padless
    >
      <v-row
          justify="center"
          no-gutters
      >
        <v-col class="text-center">
          <v-btn
              v-for="link in links"
              :key="link"
              color="white"
              text
              rounded
              class="my-2"
          >
            {{ link }}
          </v-btn>
        </v-col>

        <v-col
            class="#1C2020 py-1 text-center white--text"
            cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>ToastFF</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    links: [
      'Главная',
      'О нас',
      'Портфолио',
      'Сотрудники',
      'Что мы умеем?',
      'Связаться с нами',
    ],
  }),
}
</script>

<style lang="scss">
#app {
  width: 100%;
  background: #1C2120;
  .nav-items {}
}
</style>
