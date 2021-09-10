<template>
  <v-app app dark>
    <div class="mainContainer">
      <!--Nav Bar-->
      <div class="container">
        <v-app-bar flat class="appBar">
          <v-toolbar-title class="logo-text white--text">ToastFF</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn class="ma-5" outlined color="white">Связаться с нами</v-btn>
          <button v-on:click="openMenu" class="dropdownIcon">
            <div class="firstLine"></div>
            <div class="secondLine"></div>
          </button>
        </v-app-bar>
      </div>
      <!--End of Nav Bar-->

      <div class="splitScreen">
        <div class="wrapper">
          <div class="leftSide sliding" id="mobileApp">
            <h1>Мобильные приложения</h1>
          </div>
          <div class="rightSide sliding" id="website">
            <h1>Сайты</h1>
          </div>
        </div>
      </div>

      <div class="huyna">
        <h1>EBAL V ROT</h1>
      </div>


    </div>

    <!--DropDown Menu-->
    <div id="hamburgerMenu" class="dropdownMenu">
      <div class="container">
        <v-app-bar flat class="appBar">
          <v-toolbar-title class="logo-text white--text">ToastFF</v-toolbar-title>
          <v-spacer></v-spacer>
          <div class="nav">
            <v-card-title class="item-card"><a v-on:click="openSection(1)">Что мы умеем?</a></v-card-title>
            <v-card-title class="item-card"><a v-on:click="openSection(2)">Портфолио</a></v-card-title>
            <v-card-title class="item-card"><a v-on:click="openSection(3)">Сотрудники</a></v-card-title>
            <button v-on:click="closeMenu" class="dropdownIcon">
              <div class="firstLine"></div>
              <div class="secondLine"></div>
            </button>
          </div>
        </v-app-bar>
      </div>
      <hr style="color: white; height: 1.4px">

      <!--Skill Section-->
      <div id="skills" class="skillSection">
        <div>
          <h1>SKILLS</h1>
        </div>
      </div>

      <!--Portfolio Section-->
      <div id="portfolio" class="portfolioSection">
        <div>
          <h1>PORTFOLIO</h1>
        </div>
      </div>

      <!--Mates Section-->
      <div id="mates" class="matesSection">
        <div>
          <h1>MATES</h1>
        </div>
      </div>
    </div>


    <v-footer color="#1C2020" padless>
      <v-row justify="center" no-gutters>
        <v-col class="text-center">
          <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">
            {{ link }}
          </v-btn>
        </v-col>

        <v-col class="#1C2020 py-1 text-center white--text" cols="12">
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


  methods: {
    // Dropdown Menu
    openMenu() {
      document.getElementById("hamburgerMenu").style.height = "100vh"
    },
    closeMenu() {
      document.getElementById("hamburgerMenu").style.height = "0%"
    },
    // Dropdown Sections
    openSection(btn) {
      let skillSection = document.getElementById("skills");
      let portfolioSection = document.getElementById("portfolio");
      let matesSection = document.getElementById("mates");
      if (btn === 1) {
        skillSection.style.display = "block";
        portfolioSection.style.display = "none";
        matesSection.style.display = "none";
      } else if (btn === 2) {
        skillSection.style.display = "none";
        portfolioSection.style.display = "block";
        matesSection.style.display = "none";
      } else if (btn === 3) {
        skillSection.style.display = "none";
        portfolioSection.style.display = "none";
        matesSection.style.display = "block";
      }
    },
  }
}
</script>

<style lang="scss">

#app {
  width: 100%;
  background: #1C1F20;

  .huyna {
    width: 100%;
    height: 500px;
    background: white;
  }

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

  // Split Containers

  .wrapper{
    display: flex;
    height: 800px;
  }

  .sliding{
    height: 100%;
    flex-basis: 50%;
    flex-shrink: 1;
    transition: .5s;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sliding h1{
    color: white;
  }

  .sliding:hover{
    flex-basis: 100%;
  }

  #mobileApp{
    background-image: url("https://dmarket.com/blog/best-dota2-wallpapers/dota-2-wallpaper-hd_1985214_hu494b799959637414e43eef86d7a8e35c_331814_1920x1080_resize_q75_lanczos.jpg");
    -webkit-background-size: cover;
    background-size: cover;
    background-attachment: fixed;
  }

  #website{
    background-image: url("https://wallpaperaccess.com/full/1409299.jpg");
    -webkit-background-size: cover;
    background-size: cover;
    background-attachment: fixed;
  }

  .wrapper .leftSide,
  .wrapper .rightSide {
    width: 100%;
    height: 800px;
  }

  @media screen and (min-width: 1200px) {
    .wrapper {
      display: flex;
      height: 800px;
    }

    .wrapper .leftSide,
    .wrapper .rightSide {
      width: 100%;
      height: 800px;
    }
  }


  .wrapper .leftSide {
    background: red;
  }

  .wrapper .rightSide {
    background: blue;
  }
}
</style>
