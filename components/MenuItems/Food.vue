<template>
  <div>
    <!-- <div v-if="!isMobile()">
      <h1>
        desktop
      </h1>
      <v-btn @click="fetchMenu()" color="red"></v-btn>
    </div>
    <div v-else>
      <h1>
        mobil
      </h1>
    </div> -->
    <v-col
      cols="12"
      sm="6"
      offset-sm="2"
    >
      <v-row
        justify="center"
        align="center"
      >
        <!-- <div v-if="MenuItems == null"> -->

        <!-- <v-btn to="/Settings/MenuConfig"></v-btn> -->
        <!-- <v-btn @click="fetchMenu()"></v-btn>
        </div> -->
        <div>
          <!-- <v-container fluid>
            <SearchBar />
          </v-container> -->

          <v-item-group>
            <v-container fluid>
              <v-row>
                <v-col
                  v-for="item in MenuItems"
                  :key="item.id"
                  cols="12"
                  md="4"
                >
                  <v-item v-slot:default="{ active, toggle }">
                    <v-card
                      :color="active ? 'primary' : ''"
                      class="rounded-card"
                      dark
                      height="150"
                      @click="AddtoCart(item)"
                      @click.stop="dialog = true"
                    >
                      <v-card-title class="headline mb-1">
                        <h1>{{ item.name }}</h1>
                      </v-card-title>
                      <v-scroll-y-transition>
                        <div
                          v-if="active"
                          class="display-3 flex-grow-1 text-center"
                        >
                          Active
                        </div>
                      </v-scroll-y-transition>
                    </v-card>
                  </v-item>
                </v-col>
              </v-row>
            </v-container>
          </v-item-group>
        </div>
      </v-row>
    </v-col>

    <div>
      <v-row
        align="center"
        justify="center"
      >
        <v-container>
          <v-dialog
            v-model="dialog"
            persistent
            max-width="400px"
          >
            <v-card class="primary">
              <v-row justify="center">
                <v-card-title>
                  <span class="headline">{{ this.FoodItemName }}</span>
                </v-card-title>
              </v-row>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-select
                      :items="this.ItemSizes"
                      label="Size*"
                      required
                      v-model="selectedSize"
                    ></v-select>
                    <div>
                      <v-container
                        v-for="Modifier in FoodModifiers"
                        :key="Modifier.name"
                      >
                        <v-checkbox
                          v-model="ModifierList"
                          :label="Modifier.name"
                          :value="Modifier"
                        ></v-checkbox>
                      </v-container>
                    </div>

                    <v-textarea
                      filled
                      auto-grow
                      label="Notes for Kitchen"
                      rows="4"
                      row-height="30"
                      shaped
                      v-model="KitchenNotes"
                    ></v-textarea>
                  </v-row>
                </v-container>
                <small>*indicates required field</small>
              </v-card-text>
              <div>
                <v-card-actions>
                  <div class="flex-grow-1"></div>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="dialog = false"
                  >Close</v-btn>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="SaveOrder()"
                  >Save</v-btn>
                </v-card-actions>
              </div>
            </v-card>
          </v-dialog>
        </v-container>
      </v-row>
    </div>
  </div>
</template>
<script>
import SearchBar from "~/components/SearchBar.vue";

import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  components: {
    SearchBar
  },
  data() {
    return {
      // MenuItems: null,
      FoodItem: null,
      FoodItemName: null,
      SelectedModifiers: [],
      FoodModifiers: null,
      ModifierList: [],
      ItemsList: [],
      KitchenNotes: "",
      selectedSize: null,
      ItemSizes: null,
      toggle_exclusive: [],
      OrderType: null,

      // MenuItems: null,

      Cart: null,

      dialog: false,

      text: "center",
      model: null,
      tab: null,
      items: ["FoodModifiers", "Extras", "Notes"],
      window: {
        width: 0,
        height: 0
      }
    };
  },
  // async fetch({ store, params }) {
  //   await store.dispatch("GETMENU");
  // },
  created() {
    // fetch("http://localhost:3002/food")
    //   .then(response => response.json())
    //   .then(response => {
    //     // this.MenuItems = response.data;
    //     console.log(response);
    //     this.MenuItems = response;
    //   });

    this.$store.dispatch("user/GET_EMAIL");
    this.$store.dispatch("menu/GET_FIREMENU", this.email);
  },

  computed: {
    MenuItems() {
      return this.$store.getters["menu/getMenu"];
    },
    email() {
      return this.$store.getters["user/EmailGetter"];
    }
  },

  methods: {
    AddtoCart(item) {
      // console.log(item);
      this.FoodModifiers = item.modifier;
      this.ItemSizes = item.size;
      // console.log(this.FoodModifiers);
      this.FoodItem = item;
      this.FoodItemName = item.name;
      this.ItemsList.push(item);
      // console.log(this.FoodItemName);
    },
    AddModifierToList(Modifier) {
      this.ModifierList.push(Modifier);
    },
    SaveOrder() {
      // if ((this.toggle_exclusive = 0)) {
      //   let OrderType = "Dine-in";
      // }
      // if ((this.toggle_exclusive = 1)) {
      //   let OrderType = "to-go";
      // }
      // if ((this.toggle_exclusive = 2)) {
      //   let OrderType = "delivery";
      // // }

      let ModifiersTotal = this.ModifierList.reduce(
        (acc, item) => acc + item.price,
        0
      );
      let ItemsTotal = this.ItemsList.reduce(
        (acc, item) => acc + item.price,
        0
      );
      let OrderTotal = ModifiersTotal + ItemsTotal;
      OrderTotal = parseFloat(OrderTotal).toFixed(2);

      let OrderID = Math.random()
        .toString(36)
        .substr(2, 9);
      var currentDateWithFormat = new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "/");
      const order = {
        id: OrderID,
        date: currentDateWithFormat,
        OrderTotal: OrderTotal,
        OrderType: this.OrderType,
        name: this.FoodItem.name,
        price: this.FoodItem.price,
        Foodid: this.FoodItem.id,
        FoodModifiers: this.ModifierList,
        Notes: this.KitchenNotes,
        size: this.selectedSize,
        ModifiersTotal: ModifiersTotal
      };

      this.$nuxt.$emit("order", order);
      this.$store.dispatch("ShoppingCart/ADD_TO_CART", order);
      // const messageRef = this.$fireStore.collection("orders").doc(OrderID);
      // messageRef.set(order);
      this.ModifierList = [];
      this.ItemsList = [];
      this.dialog = false;
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    isMobile: function() {
      var check = false;
      (function(a) {
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            a
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            a.substr(0, 4)
          )
        )
          check = true;
      });
      return check;
    }
  }
};
</script>
<style scoped>
.rounded-card {
  border-radius: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
html,
body,
#app,
section.section {
  height: 100%;
  width: 80%;
}

section.section {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
img {
  border-radius: 50%;
}
</style>
