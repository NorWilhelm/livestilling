import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    turneringer: [{"id": 1}]
  },
  
  mutations: {
    SET_TURNERINGER (state, turneringer) {
      state.turneringer = turneringer
    }
  },
  actions: {

    async fetchTurneringer({ commit }) {
      try {
      const data = await axios.get('https://localhost:7007/api/Schema')
          commit('SET_TURNERINGER', data.data)
      }
      catch (error) {
        console.log(error)
      }

    }
    // TODO: commit('setLoading', true)
    //async fetchTurneringer({ commit }) {
    //   try {
        /* Kan også gjøres slik:
          const data = await axios.get('https://localhost:7007/api/Schema')
          commit('SET_TURNERINGER', data.data)
          */
    /*     const data = await axios({
           method: 'get',
           url: `https://localhost:7007/api/Schema`,
           withCredentials: false,
           params: {
             // access_token: SECRET_TOKEN
           }
         })
         console.log("Data fra API er: ")
         console.log(data)

         const turneringer = []
         const obj = data.data
         for (let key in obj) {
           turneringer.push({
             id: obj[key].id,
             tenantId: obj[key].tenantId,
             payload: obj[key].payload
           })
         }
         commit('SET_TURNERINGER', turneringer)
         console.log("Data er: ")
         console.log(turneringer)
      }
      catch (error) {
        alert(error) // Sjekk denne
        console.log(error)
      }
    } */
  },
  getters: {
    getTurneringer: (state) => state.turneringer
  },
  modules: {
  }
})
