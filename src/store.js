// src/store.js
import { createStore } from 'vuex'
import jwtDecode from 'jwt-decode'
import farm4 from '@/assets/images/farms/farm4.jpg'

const store = createStore({
  state: {
    isLoggedIn: false,
    user: null,
    expired: false,
    land:{
      location: "Nan Shan, Shenzhen",
      lease:"700 square feet for 2 years\n",
      period:"Jan-28 2023 to Jan-28 2025\n",
      manager:"Man Kit\n",
      managerid:"2",
      crops:{
        "Butter Lettuce":"200 square feet",
        "Romaine Lettuce":"500 square feet",
      },
      harvested:"RMB 25000",
      insurance:"covers 90% damage",
      img: farm4,
    },
  },
  mutations: {
    setLoggedIn(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn
    },
    setUser(state, user) {
      state.user = user
    },
    setExpired(state, expired){
      state.expired = expired
    },
  },
})

export default store
