import axios from 'axios';

const state = {
    foods: [],
    cart: '',
    newcart: [],
    arrayfromdb: '',
    users: [],
    
};

const getters = {
    allfoods: state => state.foods,
    allcarts: state => state.cart,
    newcarts: state => state.newcart,
    totalarrayindb: state => state.arrayfromdb,
    allusers: state => state.users,

};

const actions = {
   async fetchallfoods({ commit }) {
       const response = await axios.get(
        'http://localhost/vuefolder/vueInvent/src/assets/food_php/getfood.php'
        );
      console.log(response.data);
      commit('allfoods', response.data)
   },

   async addfood({ commit }, formData) {
       const response = await axios.post('http://localhost/vuefolder/vueInvent/src/assets/food_php/insertfood.php',
        formData,
        {
          headers: {
                    'Content-Type': 'multipart/form-data'
                }
        }
    );
       console.log(response.data);
       commit('insertfood', response.data)
   },

async getallcart({ commit }) {
    const response = await axios.get('http://localhost/vuefolder/vueInvent/src/assets/food_php/getcart.php');
    console.log(response.data);
    commit('getcarts', response.data)
},

   numbercart({ commit }, val){
    val = localStorage.getItem('cartsNum');
    console.log(val);
      commit('numbers', val)
   },

 async get_total_number_of_arrays_from_db({commit}){
    const response = await axios.get('http://localhost/vuefolder/vueInvent/src/assets/food_php/cartarray.php');
    console.log(response.data);
    console.log(state.totalarrayindb)
    commit('get_total_of_array', response.data)
 },
 
 async register({ commit }, newobj) {
    const response = await axios.post('http://localhost/vuefolder/vueInvent/src/assets/food_php/register.php', newobj);
    console.log(newobj)
    console.log(response.data);
    commit('registerusers', response.data)
},

async loginusers({ commit }, newobj) {
    const response = await axios.post('http://localhost/vuefolder/vueInvent/src/assets/food_php/loginuser.php', newobj);
    console.log(response.data);
    commit('loginuser', response.data)
},

};

const mutations = {
    allfoods: (state, foods) => (state.foods = foods),
    insertfood: (state, food) => state.foods.unshift(food),
    numbers(state, val){
         state.cart = val;
     } ,
     getcarts: (state, vals) => (state.newcart = vals),
     get_total_of_array: (state, arrayfromdb) => (state.arrayfromdb = arrayfromdb),
     registerusers: (state, user) => (state.users = user),
     loginuser(state, users){
     }
};

export default {
    state,
    getters,
    actions,
    mutations,
}