<template>
  <v-main>
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

   <div class="skills" style="height: 500px; background-color: red">
      Skills
   </div>

    <div class="portfolio" style="height: 500px; background-color: blue;">
        Portfolio
    </div>

  </v-main>
</template>


<script>
export default {
  name: "Home",
  data() {
    return {

    }
  },
}
</script>

<style>

.wrapper{
  display: flex;
  height: 800px;
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


</style>