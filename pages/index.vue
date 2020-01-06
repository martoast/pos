<template>
  <div>
    <div>
      <v-app light>
        <v-content>
          <section>
            <v-parallax
              height="400"
              src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
            >
              <v-row
                justify="center"
                align="center"
              >
                <v-col>
                  <v-layout
                    column
                    align-center
                    justify-center
                    class="white--text"
                  >
                    <div class="white--text mb-2 display-1 text-center">
                      Un Sistema Diseñado Para Los Restaurantes Mas Innovadores
                      de México
                    </div>
                    <!-- <h1 class="white--text mb-2 display-1 text-center">Comience su demo gratis!</h1> -->
                    <!-- <img src=""> -->
                    <LandingModal />
                  </v-layout>
                </v-col>
              </v-row>
            </v-parallax>
          </section>

          <section>
            <v-layout
              column
              wrap
              class="my-12"
              align-center
            >
              <v-flex
                xs12
                sm4
                class="my-4"
              >
                <div class="text-center">
                  <h2 class="headline">
                    Facilita las operaciones de tu restaurante.
                  </h2>
                  <span class="subheading">
                    EazyPOS esta diseñado para facilitar y mejorar las
                    operaciones de tu negocio; Al mismo tiempo nos adaptamos a
                    tus valores para tener una mayor connecion con tu empresa.
                    <!-- te da más tiempo para
                    enfocarte en la razón que te motivó a abrir tu restaurante. -->
                  </span>
                </div>
              </v-flex>
              <v-flex xs12>
                <v-container grid-list-xl>
                  <v-layout
                    row
                    wrap
                    align-center
                  >
                    <v-flex
                      xs12
                      md4
                    >
                      <v-card
                        flat
                        class="transparent"
                      >
                        <v-card-text class="text-center">
                          <v-icon
                            x-large
                            class="blue--text text--lighten-2"
                          >mdi-food</v-icon>
                        </v-card-text>
                        <v-card-title
                          primary-title
                          class="layout justify-center"
                        >
                          <div class="headline text-center">
                            Administra tu menú
                          </div>
                        </v-card-title>
                        <v-card-text>
                          Personaliza tus menús y explota los modificadores para
                          aumentar tu ticket promedio. Usa fotos de tus
                          elementos más vistosos para enamorar a tus comensales
                          en la mesa.
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex
                      xs12
                      md4
                    >
                      <v-card
                        flat
                        class="transparent"
                      >
                        <v-card-text class="text-center">
                          <v-icon
                            x-large
                            class="blue--text text--lighten-2"
                          >mdi-flash</v-icon>
                        </v-card-text>
                        <v-card-title
                          primary-title
                          class="layout justify-center"
                        >
                          <div class="headline">Acelera las compras</div>
                        </v-card-title>
                        <v-card-text>
                          Envía las órdenes ala cocina más rápido y con menos
                          errores. especificaciones de pedido y complementos
                          totalmente personalizables.
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex
                      xs12
                      md4
                    >
                      <v-card
                        flat
                        class="transparent"
                      >
                        <v-card-text class="text-center">
                          <v-icon
                            x-large
                            class="blue--text text--lighten-2"
                          >mdi-wrench</v-icon>
                        </v-card-text>
                        <v-card-title
                          primary-title
                          class="layout justify-center"
                        >
                          <div class="headline text-center">
                            Analíticos en tiempo real
                          </div>
                        </v-card-title>
                        <v-card-text>
                          Vea qué ventas se han realizado desde cualquier lugar
                          donde esté utilizando su inicio de sesión de
                          administrador especial para ayudar a su negocio tomar
                          decisiones mas rapido.
                        </v-card-text>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>
            </v-layout>
          </section>

          <v-container grid-list-xl>
            <v-layout
              row
              wrap
              justify-center
              class="my-12"
            >
              <v-flex
                xs12
                sm4
              >
                <v-card
                  flat
                  class="transparent"
                >
                  <v-card-title
                    primary-title
                    class="layout justify-center"
                  >
                    <div class="headline">
                      Información General
                    </div>
                  </v-card-title>
                  <v-card-text>
                    Somos una empresa que cree que es hora de que las soluciones
                    de software lleguen a México. Vemos el potencial de aportar
                    valor a su negocio ahorrándole tiempo y dinero en sistemas
                    obsoletos. Ofrecemos una solución confiable y económica a un
                    problema de logística que el desarrollo de software ahora
                    puede ayudar a resolver.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex
                xs12
                sm4
                offset-sm1
              >
                <v-card
                  flat
                  class="transparent"
                >
                  <v-card-title
                    primary-title
                    class="layout justify-center"
                  >
                    <div class="headline">Contact us</div>
                  </v-card-title>
                  <v-card-text>
                    Si tiene alguna pregunta o inquietud, llámenos para que
                    podamos atenderlo personalmente
                  </v-card-text>
                  <v-list class="transparent">
                    <v-list-item>
                      <v-list-item-action>
                        <v-icon class="blue--text text--lighten-2">mdi-phone</v-icon>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item-title>619-888-5248</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-icon class="blue--text text--lighten-2">mdi-map-marker</v-icon>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item-title>Tijuana, MX</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-action>
                        <v-icon class="blue--text text--lighten-2">mdi-email</v-icon>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item-title>alexmartos96@gmail.com</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-content>
      </v-app>
    </div>
  </div>
</template>

<script>
import LandingModal from "~/components/LandingModal.vue";
export default {
  layout: "landing",
  components: { LandingModal },
  data() {
    return {
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"]
    };
  }
};
</script>
