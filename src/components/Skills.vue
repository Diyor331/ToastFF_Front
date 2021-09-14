<template>

    <div class="skills">
      <div class="row skillsBox">
        <div class="col-md-3 skillItem" v-for="item in skillItems" :key="item"
             @click="changeColor(item.id)">
          <img :src="item.skill_img" alt="" height="50%">
          <h1>{{ item.skill_name }}</h1>
          <v-overlay
              :color="item.color"
              :absolute="absolute"
              :opacity="opacity"
              :value="item.overlay"
          >
            <div class="col skillDetail">
              <v-card-title>{{ item.skill_name }}</v-card-title>
              <ul v-for="detailItem in item.skill_detail" :key="detailItem">
                <li>{{ detailItem }}</li>
              </ul>

            </div>
          </v-overlay>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skillItems: [
        {
          'id': 1,
          'skill_name': 'Сайты',
          'color': '#455AFB',
          'skill_detail': [
            'Бизнес-сайт',
            'Интернет-магазин',
            'Портал',
            'Промо-сайт',
          ],
          'skill_img': require('../assets/web-development.png'),
          'overlay': false,
        },
        {
          'id': 2,
          'skill_name': 'Приложения',
          'color': '#FFBA02',
          'skill_detail': [
            'Android',
            'Ios',
            'Flutter',
          ],
          'skill_img': require('../assets/app.png'),
          'overlay': false,
        },
        {
          'id': 3,
          'skill_name': 'Поддержка',
          'color': '#FB8B45',
          'skill_detail': [
            'Хостинг',
            'Обновление систем',
            'Экстренная помощь',
          ],
          'skill_img': require('../assets/support.png'),
          'overlay': false,
        },
        {
          'id': 4,
          'skill_name': 'Разработка ТЗ',
          'color': '#01A369',
          'skill_detail': [
            'Анализ рынка',
            'Анализ проекта',
            'Составление полного ТЗ',
          ],
          'skill_img': require('../assets/letter.png'),
          'overlay': false,
        },

      ],
      absolute: true,
      opacity: 1,
      overlay: true,
      supportOverlay: false,
    }
  },
  methods: {
    changeColor(data) {
      for (let i in this.skillItems) {
        if (this.skillItems[i].id == data) {
          this.skillItems[i].overlay = !this.skillItems[i].overlay;
        } else {
          this.skillItems[i].overlay = false;
        }
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.skills {
  margin: 60px 0 60px 0;
  .skillsBox {
    display: flex;
    justify-content: center;
    .skillItem {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
      height: 250px;
      max-height: 50%;
      position: relative;
      max-width: 20%;
      h1 {
        margin-top: 20px;
        font-size: 23px;
        color: white;
      }
    }
    .skillItem:hover {
      transition: 0.9s;
      background: linear-gradient(to right, white 2px, transparent 2px) 0 0,
      linear-gradient(to right, white 2px, transparent 2px) 0 100%,
      linear-gradient(to left, white 2px, transparent 2px) 100% 0,
      linear-gradient(to left, white 2px, transparent 2px) 100% 100%,
      linear-gradient(to bottom, white 2px, transparent 2px) 0 0,
      linear-gradient(to bottom, white 2px, transparent 2px) 100% 0,
      linear-gradient(to top, white 2px, transparent 2px) 0 100%,
      linear-gradient(to top, white 2px, transparent 2px) 100% 100%;
      background-size: 20px 20px;
      background-repeat: no-repeat;
    }

    /* .skillItem:before,  .skillItem:after,  .skillItem>:first-child:before,  .skillItem>:first-child:after {
       position:absolute;
       width:20px; height: 20px;
       border-color:white; !* or whatever colour *!
       border-style:solid; !* or whatever style *!
       content: ' ';
     }
     .skillItem:before {top:0;left:0;border-width: 1px 0 0 1px}
     .skillItem:after {top:0;right:0;border-width: 1px 1px 0 0}
     .skillItem>:first-child:before {bottom:0;right:0;border-width: 0 1px 1px 0}
     .skillItem>:first-child:after {bottom:0;left:0;border-width: 0 0 1px 1px}*/

  }
}
</style>