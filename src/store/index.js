import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    tenantID: null,
    cuper: [], // Eks. Norway Cup, Varegg Cup
    kamper: [] // Kamper i en turnering
    // loading: false
    // error: null

  },
  
  mutations: {
    SET_cuper (state, cuper) {
      state.cuper = cuper
    },
    SET_KAMPER (state, kamper) {
      state.kamper = kamper
    }
  },
  actions: {
    // TODO: commit('setLoading', true)
    /*
    async fetchcuper({ commit }) {
      try {
      const data = await axios.get('https://10.0.0.23:7007/api/Schema')
          commit('SET_cuper', data.data)
      }
      catch (error) {
        console.log(error)
      }

    }
    */
    
    async fetchkamper({ commit }) {
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // Tillat alle sertifikat, også "self-signed"
       try {
         const response = await axios({
           method: 'GET',
           url: `https://10.0.0.23:7007/api/Schema`,
           withCredentials: false,
           headers: {
             'Content-Type': 'application/json' // SETTNING IKKE NØDVENDIG
           },
           responseType: 'json', // SETTNING IKKE NØDVENDIG
           params: {
             // access_token: SECRET_TOKEN // Ville blitt brukt etter implementasjon av brukerautorisering. Sikkerhet er utenfor skopet av oppgaven
           }
         })
        
        var now = new Date();
        var nowUTC = new Date(now.getTime() + now.getTimezoneOffset())

        const kamper = []
         for (var i = 0; i < response.data[0].kamper.length; i++) {
           var kamp = response.data[0].kamper[i]
          //console.log(response.data[0].kamper[0].lag)
           if (kamp.status === "PAAGAAENDE") {
              var kamptidUTC = new Date(kamp.tidStartet)
              var diffMs = kamptidUTC - nowUTC
              var tidSpilt = Math.round(((diffMs % 86400000) % 3600000) / 60000)
              var tidGjennstaaende = 90 - tidSpilt
            }
            var lag = [kamp.lag[0], kamp.lag[1]]
            kamper.push({
              kampId: kamp.kampId,
              lag: lag,
              status: kamp.status,
              stilling: kamp.stilling,
              tidStartet: kamp.tidStartet,
              tidGjennstaaende: tidGjennstaaende,
            })
         }
         commit('SET_KAMPER', kamper)
      }
      catch (error) {
        alert(error) // Sjekk denne
        console.log(error)
      }
    },
  },
  getters: {
    getcuper: (state) => state.cuper,
    getKamper: (state) => state.kamper,
    getKamperPlanlagt: (state) => state.kamper.filter(kamp => kamp.status === "PLANLAGT"),
    getKamperPaagaaende: (state) => state.kamper.filter(kamp => kamp.status === "PAAGAAENDE"),
    getKamperFullforte: (state) => state.kamper.filter(kamp => kamp.status === "FULLFORT"),
    getKamperKanselert: (state) => state.kamper.filter(kamp => kamp.status === "KANSELERT")
  },
  modules: {
  }
})
