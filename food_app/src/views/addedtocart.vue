<template>

<div>
     
     <div class="mt-2 row justify-content-center">
         <i class="fa fa-shopping-cart fa-5x text-danger"><span style="font-size: 37px; color:#4A148C">My shoppings</span></i>
     </div>

  <v-simple-table  class="mt-2">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            #
          </th>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Food_picture
          </th>
           <th class="text-left">
            Price
          </th>
           <th class="text-left">
            Quantity
          </th>
           <th class="text-left">
            Total
          </th>
          <th class="text-left">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in newcarts"
          :key="item.food_id"
        >
          <td>{{item.food_id}}</td>
          <td>{{ item.food_name }}</td>
          <!-- <td></td> -->
          <td><img :src="require(`../assets/food_php/uploads/${item.food_picture}`)" style="width: 50px; height: 50px; border: 2px solid black" alt="hello" srcset=""></td>
          <td>N{{ item.food_price }}</td>
          <td>{{ item.food_quantity}}</td>
          <td>N{{ item.food_total }}</td>
          <td> <v-btn @click="deletefood(item)"><i class="fa fa-trash"></i></v-btn></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>

    <div>
         <router-link to="/payment"><button data-toggle="modal" data-target="#exampleModalCenter" 
         style="background:#4A148C;color: white" 
         class="fixed-bottom m-5 btn btn-danger"> Proceed to payment</button></router-link> 
    </div>

  </div>

</template>

<script>
import Axios from 'axios';
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'Addedtocart',
    data(){
        return{
          localarray: [],
          newarr: ''
        }
    },

    computed: {
        ...mapGetters(['newcarts'])
    },

    methods: {
        ...mapActions(['getallcart']),

        getitemsfromlocalstorage(){
            let a = JSON.parse(localStorage.getItem('carts'))
             this.localarray = a;
             console.log(this.localarray)
        },

        deletefood(ty){
         Axios.post('http://localhost/vuefolder/vueInvent/src/assets/food_php/delete.php', ty)
         .then(res => console.log(res.data))
         .catch(err => console.log(err));
         this.getallcart();
        }
    },

    created(){
        this.getitemsfromlocalstorage();
        this.getallcart();
    }
}
</script>