<template>
  <div>
    <div class="row">
      <div class="col-auto mx-auto">
        <h1 class="font-weight-bold text-nowrap text-center">Norway Cup</h1>
      </div>
    </div>
    <div class="row">
      <div
        class="
          col-sm-12 col-md-10 col-lg-4
          offset-md-1 offset-lg-0
          order-xs-1 order-sm-1 order-md-1 order-lg-2
        "
      >
      <div id="accordion">
        <div class="card">
          <div class="card-header bg-white">
            <h4 class="card-title">Pågående Kamper</h4>
            <div
              class="hover-white"
              v-for="kamp in kamperPaagaaende"
              :key="kamp.kampId"
              data-toggle="collapse"
              :data-target="'#' + collapse + kamp.kampId"
              aria-expanded="false"
              :aria-controls="collapse + kamp.kampId"
              data-parent="#accordion"
            >
							<div style="margin-bottom: 15px">
              <div class="row">
                <div class="col text-end" style="margin-top: 5px">
                  <span>
                    <img src="@/assets/img/fana_il_logo.png" />{{
                      kamp.lag[0].navn
                    }}
                  </span>
                </div>
                <div class="col text-center" >
                  <span class="badge bg-light">
                    {{ kamp.stilling[0] + " - " + kamp.stilling[1] }}
                  </span>
									<p><span><small>{{ kamp.tidGjennstaaende + " min igjen" }}</small></span></p>
                </div>
                <!-- TODO: Fiks rekkefølge for stilling -->
                <div class="col" style="margin-top: 10px">
                  <span>
                    <img src="@/assets/img/tertnes_il_logo.png" />
                    <!--- Om lag hadde hatt bilder opplastet ville jeg gjort det slik: <span><img :src="kamp.lag[0].logoLitenURL" height="20px">-->
                    {{ kamp.lag[1].navn }}
                  </span>
                </div>
              </div>
              <div class="collapse" :id="collapse + kamp.kampId" data-parent="#accordion">
                <div class="card card-body">
                  <div v-if="kamp.maalHistorikk === null">Ingen mål er registrert.</div>
                  <div v-for="maal in kamp.maalHistorikk" :key="maal.maalId">
									<div class="row">
                    <div class="col" v-if="maal.lagSkaarteId === kamp.lag[0].lagId"><span class="badge badge-success mr-2">+1</span>{{ kamp.lag[0].navn }}<span class="ml-5">{{ maal.tidspunkt }}</span></div>
                    <div class="col" v-else><span class="badge badge-success mr-2">+1</span>{{ kamp.lag[1].navn }}<span class="ml-5">{{ maal.tidspunkt }}</span></div>
                  </div>
                  </div>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div
        class="
          col-sm-12 col-md-5 col-lg-3
          offset-sm-0 offset-md-1 offset-lg-1
          order-xs-2 order-sm-2 order-md-2 order-lg-1
        "
      >
        <div class="card" v-if="kamperFullforte != null">
          <div class="card-body">
            <h4 class="card-title">Fullførte Kamper</h4>
            <div v-for="kamp in kamperFullforte" :key="kamp.kampId">
              <div class="row" style="margin-bottom: 10px">
                <div class="col text-end">
                  <span
                    ><img src="@/assets/img/fana_il_logo.png" />{{
                      kamp.lag[0].navn
                    }}</span
                  >
                </div>
                <div class="col text-center">
                  <span class="badge bg-light">{{
                    kamp.stilling[0] + " - " + kamp.stilling[1]
                  }}</span>
                </div>
                <!-- TODO: Fiks rekkefølge for stilling -->
                <div class="col">
                  <span
                    ><img src="@/assets/img/tertnes_il_logo.png" />{{
                      kamp.lag[1].navn
                    }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          col-sm-12 col-md-5 col-lg-3
          order-xs-3 order-sm-3 order-md-3 order-lg-3
        "
      >
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Kommende Kamper</h4>
            <div v-for="kamp in kamperPaagaaende" :key="kamp.kampId">
              <div class="row" style="margin-bottom: 10px">
                <div class="col text-end">
                  <span
                    ><img src="@/assets/img/fana_il_logo.png" />{{  // TODO: ta vekk bilder
                      kamp.lag[0].navn
                    }}</span
                  >
                </div>
                <div class="col text-center"><span>-</span></div>
                <!-- TODO: Fiks rekkefølge for stilling -->
                <div class="col">
                  <span
                    ><img src="@/assets/img/tertnes_il_logo.png" />{{
                      kamp.lag[1].navn
                    }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cupComponent",
  computed: {
    kamper() {
      return this.$store.getters.getKamper;
    },
    kamperPaagaaende() {
      return this.$store.getters.getKamperPaagaaende;
    },
    kamperPlanlagt() {
      return this.$store.getters.getKamperPlanlagt;
    },
    kamperFullforte() {
      return this.$store.getters.getKamperFullforte;
    },
  },
  methods: {},
};
</script>

<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(async () => {
  await store.dispatch("fetchkamper");
});
</script>

<style scoped>
.hover-white:hover {
  background-color: rgb(235, 235, 235);
	border-radius: 5px;
  transition: 0.1s;
}
</style>