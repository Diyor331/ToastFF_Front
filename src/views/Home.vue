<template>
  <v-main>
    <!--Что мы делаем-->
<!--    <Skills></Skills>-->
    <!--Что мы делаем-->

<!--    <div class="createProject">
      <Particles
          id="tsparticles"
          :particlesInit="particlesInit"
          :particlesLoaded="particlesLoaded"
          :options="{

                    background: {
                        color: {
                            value: '#1C1F20'
                        }
                    },
                    fpsLimit: 60,
                    interactivity: {
                        detectsOn: 'canvas',
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push'
                            },
                            onHover: {
                                enable: true,
                                mode: 'repulse'
                            },
                            resize: true
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40
                            },
                            push: {
                                quantity: 4
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#ffffff'
                        },
                        links: {
                            color: '#ffffff',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1
                        },
                        collisions: {
                            enable: true
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outMode: 'bounce',
                            random: false,
                            speed: 6,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800
                            },
                            value: 80
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            random: true,
                            value: 5
                        }
                    },
                    detectRetina: true
                }"
      />

      <v-dialog
          v-model="createProjectDialog"
          persistent
          max-width="600px"
      >
        <template v-slot:activator="{ on, attrs }">
          <button v-bind="attrs"
                  v-on="on" class="createProjectText">
            Начать проект
          </button>
        </template>
        <v-card>

          <div class="d-flex justify-content-end">
            <v-btn icon>
              <v-icon color="#FDB430" @click="createProjectDialog = false;">mdi-close</v-icon>
            </v-btn>
          </div>
          <v-card-title class="d-flex justify-content-center">
            <span class="text-center">Оставьте заявку</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                    cols="12"
                    sm="4"
                    md="6"
                >
                  <v-text-field
                      label="Имя"
                      required
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="4"
                    md="6"
                >
                  <v-text-field
                      label="Фамилия"
                      required
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="4"
                    md="8"
                >
                  <v-text-field
                      label="Название организации"
                      hint="Пример: 'OOO' ToastFF"
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                  <v-text-field
                      label="Номер телефона"
                      type="number"
                      persistent-hint
                      required
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                  <v-autocomplete
                      :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                      label="Сфера деятельности"
                      multiple
                  ></v-autocomplete>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions class="d-flex justify-content-center">
            <v-btn outlined color="#FDB430">
              Отправить заявку
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </div>-->
  </v-main>
</template>


<script>
// import Skills from "@/components/Skills";
// import Portfolio from "@/components/Portfolio";

export default {
  name: "Home",
  components: {
    // Skills,
    // Portfolio
  },
  data() {
    return {
      createProjectDialog: false,
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;600&display=swap');
.createProject {
  align-content: center;

  .createProjectText {
    position: absolute;
    color: white;
    transform: translate(-50%, -50%);
    left: 50%;
    bottom: 10px;
    font-size: 3.125rem;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
  }
}

//Particles
#tsparticles {
  height: 150px;
}
</style>