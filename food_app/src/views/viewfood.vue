<template>
<div class="container">

  
    <v-container fluid>
     <!-- <v-text-field class="width: 100px" label="Search food..." style="color:#4A148C" v-model="search"></v-text-field> -->
  
   <h2 class="text-center"> FOOD LIST IN OUR RESTUARANT</h2>
         <md-table-toolbar>
<md-field md-clearable class="md-toolbar-section-end">
          <md-input placeholder="Search by name..." v-model="search"/>
        </md-field>
      </md-table-toolbar>
      <v-row dense>
        <v-col
          v-for="foods in allfoods"
          :key="foods.food_id"
          :cols="foods.flex"
        >
          <v-card>
            <v-img @click="gotodetails(foods.food_id)"
              :src="require(`../assets/food_php/uploads/${foods.food_picture}`)"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
             
            >
              <v-card-title class="text-white" v-text="foods.food_name"></v-card-title>
            </v-img>


            <v-card-subtitle class="pb-0">
       <v-btn style="background: none; box-shadow: none">
                 <div v-if="alltime < `${foods.food_time.slice(0,2)%12, foods.food_time.slice(-3)}`">{{ foods.food_time.slice(0,2)%12 }} {{ foods.food_time.slice(-3)}} <span v-if="foods.food_time.slice(0,2)>=12">pm</span> <span v-else>am</span></div>
                 <div v-else>Available</div>
              </v-btn >
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{foods.food_detail}}</div>
    </v-card-text>

            <v-card-actions>

<!-- <td>{{ food.food_time.slice(0,2)%12 }} {{ food.food_time.slice(-3)}} <small v-if="food.food_time.slice(0,2)>=12">pm</small> <small v-else>am</small></td> -->

             

              <!-- <v-btn style="background: none; box-shadow: none"> -->
              <!-- </v-btn> -->
           
              <p id="change" hidden></p>

              <v-btn style="background: none; box-shadow: none">
                 <div>N{{foods.food_price}}</div>
              </v-btn>

              <v-spacer></v-spacer>


       <v-btn style="background: none; box-shadow:none">
          <div>{{foods.food_quantity}} remains</div>
       </v-btn>
                <v-text-field col="2" sm="2" v-model="quantity" type="number" label="Qty"></v-text-field>
            
                 <v-btn style="background: none; box-shadow: none" @click="addtocart(foods)">
                 <div style="color:#D50000"><i class="fa fa-shopping-cart fa-1x" style="color:#D50000"></i>Add</div>
              </v-btn>


<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Quantity</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <input type="text" v-model="food.food_id" hidden class="form-control">
       
        <input type="text" v-model="food.food_name" hidden class="form-control">

        <input type="text" v-model="food.food_price" hidden class="form-control">

         <input type="text" v-model="food.food_picture" hidden class="form-control">
     
        <v-text-field label="type in food quantity" type="number"  v-model="food.food_quantity"></v-text-field>

        <!-- <v-text-field label="type in food quantity" type="number" v-model="food.food_total"></v-text-field> -->
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="addtocarts(food)">Ok</button>
      </div>
    </div>
  </div>
</div>

                


<!-- Modal -->



              
            </v-card-actions>
          </v-card>
        </v-col>

      </v-row>
    <router-view/>

    </v-container>

</div>
  <!-- </v-card> -->


</template>

<script>
import Axios from 'axios';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Viewfood',
    data(){
     return {
       
       alltime: '',
       search: '',
       newcart: [],
       quantity: '',
       food: {},
       mystore: {},
       obj: {},
     }
    },
    computed: {
      ...mapGetters(['allfoods', 'allcarts', 'newcarts']),  
      },

    methods: {
        ...mapActions(['fetchallfoods', 'numbercart', 'addfoodtocart', 'getallcart']),

        gotodetails(food_id){
          this.$router.push({name: 'foodDetails', params:{foodid: food_id}});
        },

        myFunction() { 
                var time = new Date();
                var hours = time.getHours(); 
                var minutes = time.getMinutes(); 
                var newformat = hours >= 12 ? 'PM' : 'AM';  
                hours = hours % 12;  
                hours = hours ? hours : 12;  
                minutes = minutes < 10 ? '0' + minutes : minutes; 
                this.alltime = hours + ':' + minutes + ' ' + newformat; 
                console.log(this.alltime)
            },

            getaddtocart(){
             let cart;
             if (localStorage.getItem('carts') == null) {
               cart = [] 
             } else {
               cart = JSON.parse(localStorage.getItem('carts', 'cartsNum'));
             }
             return cart;
            },

            getaddallfoods(){
             let food;
             if (localStorage.getItem('foods') == null) {
               food = [] 
             } else {
               food = JSON.parse(localStorage.getItem('foods'));
             }
             return food;
            },

        addtocart(ty){
          let subtract = ty.food_quantity - this.quantity;
          ty.food_quantity = subtract;
          console.log(ty.food_quantity);
          let r = ty.food_price.split(",");
          let t = r.join('')
          let total = this.quantity * t;
          var n = total.toLocaleString();
          this.mystore = {
            food_id: ty.food_id,
            food_name: ty.food_name,
            food_price: ty.food_price,
            food_quantity: this.quantity,
            food_picture: ty.food_picture,
            food_initialquantity: ty.food_quantity,
            food_total_row: n
          }
          // initial adding //
          var cart = this.getaddtocart();
          // var food = this.getaddallfoods();
          if(cart.find(p => p.food_id == ty.food_id)){
          //   if (cart) {
              let newobj = [{
            food_picture: ty.food_picture,
            food_price: ty.food_price,
            food_name: ty.food_name,
            food_id: ty.food_id,
            food_quantity: this.quantity,
            food_initialquantity: ty.food_quantity,
            food_total_row: n,
          }]
             cart = newobj;
          Axios.post('http://localhost/vuefolder/vueInvent/src/assets/food_php/updatecart.php', 
              {
               'id': newobj[0].food_id,
              'name': newobj[0].food_name,
              'picture': newobj[0].food_picture,
              'quantity': newobj[0].food_quantity,
              'price': newobj[0].food_price,
              'total': newobj[0].food_total_row,
              }
          ).then(res => console.log(res.data))
            .catch(err=>console.log(err))

          Axios.post('http://localhost/vuefolder/vueInvent/src/assets/food_php/updatefoodtb.php', 
              {
                'id': ty.food_id,
              'quantity': ty.food_quantity,
              }
          ).then(res => console.log(res.data))
            .catch(err=>console.log(err))

          localStorage.setItem('carts', JSON.stringify(cart))
            console.log('Eureka!')
          }
          // else if (this.quantity > ty.food_quantity) {
          //    alert('It\'s more than the product quantity');
          // }
          else{
            // console.log(this.allfoods);
            var tys = cart.push(this.mystore);
            this.quantity = '';
            Axios.post('http://localhost/vuefolder/vueInvent/src/assets/food_php/addtocart.php', 
              {
               'id': this.mystore.food_id,
              'name': this.mystore.food_name,
              'picture': this.mystore.food_picture,
              'quantity': this.mystore.food_quantity,
              'price': this.mystore.food_price,
              'total': this.mystore.food_total_row,
              }
          ).then(res => console.log(res.data))
            .catch(err=>console.log(err))

          Axios.post('http://localhost/vuefolder/vueInvent/src/assets/food_php/updatefoodtb.php', 
              {
                'id': ty.food_id,
              'quantity': ty.food_quantity,
              }
          ).then(res => console.log(res.data))
            .catch(err=>console.log(err))

            // for updating  //
          // localStorage.setItem('foods', JSON.stringify(food))
           
            this.numbercart(tys);
           localStorage.setItem('carts', JSON.stringify(cart))
            localStorage.setItem('cartsNum', JSON.stringify(cart.length))
           
          }
        },


        // addtocart(ty){
        // let {food_id, food_name, food_price, food_picture, food_quantity} = ty;
        // this.food = {food_id, food_name, food_price, food_picture, food_quantity};
        // },

        addtocarts(ty){
        if(this.newcarts.find(p => p.food_id == ty.food_id)){
           console.log('it\'s here o')
        } else{
          ty = new FormData();
        ty.append('myname', this.food.food_name);
        ty.append('myprice', this.food.food_price);
        ty.append('myquantity', this.food.food_quantity);
        ty.append('myfile', this.food.food_picture);
        console.log(this.food.food_picture);
         this.addfoodtocart(ty);
        }
        }
      

    },
    created(){
        this.fetchallfoods();
        this.myFunction();
        this.getaddtocart()

    },
}
</script>

<style scoped>
 
input[type=text] {
  width: 160px;
  box-sizing: border-box;
  border-top-style: none;
  border-left-style: none;
  border-right-style: none;
  border-bottom-style: 2px solid #ccc;
  border-radius: 80px;
  font-size: 16px;
  outline: none;
  background-color: white;
  /* background-image: url('searchicon.png'); */
  background-position: 10px 10px; 
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.9s ease-in-out;
}

input[type=text]:focus {
  width: 100%;
}

</style>
