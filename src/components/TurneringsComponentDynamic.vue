<template>
    <div>
				<div class="row">
					<div class="col-auto mx-auto">
							<h1 class="font-weight-bold text-nowrap text-center">Norway Cup</h1>
					</div>
				</div>
        <div class="row">
					<div class="col-sm-12 col-md-10 col-lg-4 offset-md-1 offset-lg-0 order-xs-1 order-sm-1 order-md-1 order-lg-2 ">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Pågående Kamper</h4>
                        <div v-for="kamp in kamperPaagaaende" :key="kamp.kampId">
                            <div class="row" style="margin-bottom: 10px;">
                                <div class="col text-end"><span><img src="@/assets/img/fana_il_logo.png" height="20px">{{ kamp.lag[0].navn }}</span></div>
                                <div class="col text-center"><span>{{ kamp.stilling[0] + " - " + kamp.stilling[1] }}</span></div> <!-- TODO: Fiks rekkefølge for stilling --> 
                                <div class="col"><span><img src="@/assets/img/tertnes_il_logo.png" height="20px">{{ kamp.lag[1].navn }}</span></div>
                                <div><span>{{ kamp.tidGjennstaaende + " min igjen"}}</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                </div>
					<div class="col-sm-12 col-md-5 col-lg-3 offset-sm-0 offset-md-1 offset-lg-1 order-xs-2 order-sm-2 order-md-2 order-lg-1">
                <div class="card" v-if="kamperFullforte != null">
                    <div class="card-body">
                        <h4 class="card-title">Fullførte Kamper</h4>
                        <div v-for="kamp in kamperFullforte" :key="kamp.kampId">
                            <div class="row" style="margin-bottom: 10px;">
                                <div class="col text-end"><span><img src="@/assets/img/fana_il_logo.png" height="20px">{{ kamp.lag[0].navn }}</span></div>
                                <div class="col text-center"><span>{{ kamp.stilling[0] + " - " + kamp.stilling[1] }}</span></div> <!-- TODO: Fiks rekkefølge for stilling --> 
                                <div class="col"><span><img src="@/assets/img/tertnes_il_logo.png" height="20px">{{ kamp.lag[1].navn }}</span></div>
                                <div><span>{{ kamp.tidGjennstaaende + " min igjen"}}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-5 col-lg-3 order-xs-3 order-sm-3 order-md-3 order-lg-3">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Kommende Kamper</h4>
                        <div v-for="kamp in kamperPaagaaende" :key="kamp.kampId">
                            <div class="row" style="margin-bottom: 10px;">
                                <div class="col text-end"><span><img src="@/assets/img/fana_il_logo.png" height="20px">{{ kamp.lag[0].navn }}</span></div>
                                <div class="col text-center"><span>-</span></div> <!-- TODO: Fiks rekkefølge for stilling --> 
                                <div class="col"><span><img src="@/assets/img/tertnes_il_logo.png" height="20px">{{ kamp.lag[1].navn }}</span></div>
                                <div><span>{{ kamp.tidGjennstaaende + " min igjen"}}</span></div>
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
  name: 'cupsComponentDynamic',
  computed: {
      kamper() {
          return this.$store.getters.getKamper
      },
      kamperPaagaaende() {
          return this.$store.getters.getKamperPaagaaende
      },
      kamperPlanlagt() {
          return this.$store.getters.getKamperPlanlagt
      },
      kamperFullforte() {
          return this.$store.getters.getKamperFullforte
      }
  },
  methods: {
  },
  
}
</script>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

onMounted(async() => {
    await store.dispatch("fetchkamper")
})
</script>