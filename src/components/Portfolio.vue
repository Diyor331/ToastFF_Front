<template>
  <div class="container">
    <div class="portfolio">
      <div class="row portfolioBox">
        <div class="col-6 portfolioItem">
          <v-card color="#1C1C1C">
            <v-img src="../assets/ecorn.png" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" class="align-end">
              <v-card-title class="white--text">Ecorn</v-card-title>
              <v-card-subtitle class="white--text">Кофейня</v-card-subtitle>
            </v-img>

          </v-card>
        </div>
        <div class="col-6 portfolioItem">Waitric</div>
        <div class="col-6 portfolioItem">Cuisine Lumineuse</div>
        <div class="col-6 portfolioItem">UP4U</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio"
}
</script>

<style lang="scss" scoped>
  .portfolio{
    display: flex;
    .portfolioBox {
      display: flex;
      justify-content: center;
      .portfolioItem {
        display: flex;
        justify-content: center;
      }
    }
  }
</style>