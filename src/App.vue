<template>
  <v-app app dark>
    <v-container>
      <!--Nav Bar-->
      <v-app-bar flat class="appBar">
        <v-toolbar-title class="logo-text white--text">ToastFF</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-row>
          <v-col  cols="4" v-for="link in links" :key="link" >
            <v-btn link text rounded class="white--text" :to="link.path" >{{link.title}}</v-btn>
          </v-col>
        </v-row>

      </v-app-bar>
      <!--End of Nav Bar-->


      <div class="content">
        <transition name="component-fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>

      <!--Footer-->
      <v-footer color="#1C2020" fixed>
        <div class="row justify-center ma-0 footerItem">
          <div class="col-md-3 ">
            <a href="#">ToastFF</a>
          </div>
          <div class="col-md-3 ">
            <a href="#">+99871 200 00 22</a>
          </div>
          <div class="col-md-3 ">
            <a href="#">info@toast.ff</a>
          </div>
          <div class="col-md-2 align-items-center footerSocial">
            <v-btn icon>
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon class="icon">mdi-instagram</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon class="icon">mdi-whatsapp</v-icon>
            </v-btn>
          </div>
        </div>
      </v-footer>
      <!--End Footer-->
    </v-container>
  </v-app>

</template>

<script>

export default {
  name: 'App',
  data: () => ({
    links: [
      {
        title: 'Главная',
        path: '/'
      },
      {
        title: 'Заказать проект',
        path: '/createproject'
      },
      {
        title: 'Контакты',
        path: '/contacts'
      },
    ]
  }),


  methods: {

  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  background: #1C1F20;
  font-family: 'Montserrat', sans-serif;
  // Global
  hr {
    margin: 0;
    padding: 0;
  }

  // Dropdown Menu
  .appBar {
    background: #1C1F20;
  }

  .dropdownMenu {
    height: 0;
    width: 100%;
    background: #1C1F20;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    overflow-y: hidden;
    transition: 0.25s;
  }

  .dropdownIcon div {
    height: 3px;
    background: white;
    margin: 5px 0;
    border-radius: 24px;
    transition: .3s;
  }

  .dropdownIcon {
    width: 30px;
  }

  .item-card a {
    font-size: 20px;
    text-decoration: none;
    color: white;
  }

  .item-card a::after {
    content: '';
    width: 0;
    height: 3px;
    background: white;
    margin: auto;
    display: block;
  }

  .item-card a:hover::after {
    width: 90%;
    transition: width .3s linear;
  }

  // Dropdown Skill Section
  .skillSection {
    display: none;
    width: 100%;
    height: 100vh;
    background: orange;
  }

  // Dropdown Portfolio Section
  .portfolioSection {
    display: none;
    width: 100%;
    height: 100vh;
    background: cyan;
  }

  // Dropdown Mates Section
  .matesSection {
    display: none;
    width: 100%;
    height: 100vh;
    background: bisque;
  }

  .sliding {
    height: 100%;
    flex-basis: 50%;
    flex-shrink: 1;
    transition: .5s;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sliding h1 {
    color: white;
  }

  .sliding:hover {
    flex-basis: 100%;
  }

  #mobileApp {
    background-image: url("https://dmarket.com/blog/best-dota2-wallpapers/dota-2-wallpaper-hd_1985214_hu494b799959637414e43eef86d7a8e35c_331814_1920x1080_resize_q75_lanczos.jpg");
    -webkit-background-size: cover;
    background-size: cover;
    background-attachment: fixed;
  }

  #website {
    background-image: url("https://wallpaperaccess.com/full/1409299.jpg");
    -webkit-background-size: cover;
    background-size: cover;
    background-attachment: fixed;
  }

  .footerItem {
    a {
      text-decoration: none;
      color: #393c3d;
      font-size: 18px;
      transition: .5s ease-out;
    }

    a:hover {
      color: #ffffff;
    }
  }

  .footerSocial {
    .v-icon {
      color: #393c3d;
      transition: .5s;
    }

    .v-icon:hover {
      color: #ffffff;
    }
  }


}
</style>
