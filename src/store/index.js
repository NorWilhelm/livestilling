import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    tenantID: '3fa85f64-5717-4562-b3fc-2c963f66afa2',
    cuper: [], // Eks. Norway Cup, Varegg Cup
    kamper: [], // Kamper i en turnering
    user: '',
    // loading: false
    error: "test"
  },
  
  mutations: {
    SET_cuper (state, cuper) {
      state.cuper = cuper
    },
    SET_KAMPER (state, kamper) {
      state.kamper = kamper
    },
    SET_USER (state, dommer) {
      state.user = dommer
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
           url: `https://10.0.0.23:7007/api/Schema/` + '3fa85f64-5717-4562-b3fc-2c963f66afa2',
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
         for (let i = 0; i < response.data[0].kamper.length; i++) {
           var kamp = response.data[0].kamper[i]
          //console.log(response.data[0].kamper[0].lag)
           if (kamp.status === "PAAGAAENDE") {
              var kamptidUTC = new Date(kamp.tidStartet)
              var diffMs = kamptidUTC - nowUTC
              var tidSpilt = Math.round(((diffMs % 86400000) % 3600000) / 60000)
              var tidGjennstaaende = 90 - tidSpilt
            }
            var maalHistorikkTemp = []
            if (kamp.maalHistorikk != null) {
              for (let j = 0; j < kamp.maalHistorikk.length; j++) {
                const tid = new Date(kamp.maalHistorikk[j].tidspunkt)
                const klokkeslett = tid.getHours() + ':' + tid.getMinutes()
                maalHistorikkTemp.push({
                  maalId: kamp.maalHistorikk[j].maalId,
                  lagSkaarteId: kamp.maalHistorikk[j].lagSkaarteId,
                  tidspunkt: klokkeslett,
                  stilling: kamp.maalHistorikk[j].stilling
                })
              }
            }
            else {
              maalHistorikkTemp = null
            }
            kamper.push({
              kampId: kamp.kampId,
              lag: kamp.lag,
              status: kamp.status,
              stilling: kamp.stilling,
              tidStartet: kamp.tidStartet,
              tidGjennstaaende: tidGjennstaaende,
              maalHistorikk: maalHistorikkTemp,
              bane: kamp.bane,
              ledendeLagId: kamp.lendendeLagId,
            })
         }
         commit('SET_KAMPER', kamper)
      }
      catch (error) {
        alert(error) // Sjekk denne
        console.log(error)
      }
    },
    logUserIn({commit}, password) { // For demonstrasjonsformål
      console.log(password);
      if (password === 'hemmelig') {
        commit('SET_USER', 'dommer')
      } else {
        // TODO: Melding
      }
    }
  },
  getters: {
    getcuper: (state) => state.cuper,
    getKamper: (state) => state.kamper,
    getKamperPlanlagt: (state) => state.kamper.filter(kamp => kamp.status === "PLANLAGT"),
    getKamperPaagaaende: (state) => state.kamper.filter(kamp => kamp.status === "PAAGAAENDE"),
    getKamperFullforte: (state) => state.kamper.filter(kamp => kamp.status === "FULLFORT"),
    getKamperKanselert: (state) => state.kamper.filter(kamp => kamp.status === "KANSELERT"),
    getTenantId: (state) => state.tenantID,
    getUser: (state) => state.user,
    getError: (state) => state.error
  },
  modules: {
  }
})
