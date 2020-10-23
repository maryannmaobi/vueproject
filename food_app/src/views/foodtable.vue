<template>
    <div class="mycontainer">
      <div class="container-fluid">
  <div class="row justify-content-center">
<h1 class="text-center text-white mt-5 mb-4">FOOD LIST</h1>
</div>
<v-simple-table dark>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            #
          </th>
          <th class="text-left">
            food_time
          </th>
          <th class="text-left">
           food_date
          </th>
          <th class="text-left">
            food_name
          </th>
          <th class="text-left">
            food_price
          </th>
          <th class="text-left">
            food_quantity
          </th>
          <th class="text-left">
            food_detail
          </th>
          <th class="text-left">
            food_picture
          </th>
          <th class="text-left">
            food_availability
          </th>
          <th class="text-left">
            Edit_food
          </th>
          <th class="text-left">
            Delete_food
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
         v-for="food in allfoods" 
         :key="food.food_id"
        >
          <td>{{ food.food_id }}</td>
          <td>{{ food.food_time.slice(0,2)%12 }} {{ food.food_time.slice(-3)}} <small v-if="food.food_time.slice(0,2)>=12">pm</small> <small v-else>am</small></td>
          <td>{{food.food_date}}</td>
          <td>{{food.food_name}}</td>
          <td>{{food.food_price}}</td>
          <td>{{food.food_quantity}}</td>
          <td>{{food.food_detail}}</td>
          <td><img :src="require(`../assets/food_php/uploads/${food.food_picture}`)" style="width: 50px; height: 50px; border: 2px solid black" alt="hello" srcset=""></td>
          <td>{{food.food_availability}}</td>
          <td>
             <button data-toggle="modal" data-target="#editfoodModal" @click="editfood(food)" class="btn btn-dark btn-sm">Edit</button>
          </td>
          <td>
             <button class="btn btn-danger btn-sm">Delete</button>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>


  <div class="modal fade" id="editfoodModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">EDIT FOOD</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

          <div class="input-group mb-3 mt-2" hidden>
           <div class="input-group-prepend">
             <span class="input-group-text" style="background: none" id="basic-addon1">
              <i class="fa fa-clock-o"></i></span>
           </div>
           <input type="text" hidden v-model="foods.food_id" class="form-control" placeholder="time" aria-label="time" aria-describedby="basic-addon1">
        </div>

         <div class="input-group mb-3 mt-2">
           <div class="input-group-prepend">
             <span class="input-group-text" style="background: none" id="basic-addon1">
              <i class="fa fa-clock-o"></i></span>
           </div>
           <input type="time" v-model="foods.food_time" class="form-control" placeholder="time" aria-label="time" aria-describedby="basic-addon1">
        </div>

        <div class="input-group mb-3 mt-2">
           <div class="input-group-prepend">
             <span class="input-group-text" style="background: none" id="basic-addon1">
              <i class="fa fa-clock-o"></i></span>
           </div>
           <input type="date" v-model="foods.food_date" class="form-control" placeholder="time" aria-label="time" aria-describedby="basic-addon1">
        </div>

        <div class="input-group mb-3 mt-2">
           <div class="input-group-prepend">
             <span class="input-group-text" style="background: none" id="basic-addon1">
              <i class="fa fa-info"></i></span>
           </div>
           <input type="text" v-model="foods.food_name" class="form-control" placeholder="time" aria-label="time" aria-describedby="basic-addon1">
        </div>

         <div class="input-group mb-3 mt-2">
           <div class="input-group-prepend">
             <span class="input-group-text" style="background: none" id="basic-addon1">
              <i class="fa fa-dollar"></i></span>
           </div>
           <input type="text" v-model="foods.food_price" class="form-control" placeholder="price" aria-label="price" aria-describedby="basic-addon1">
        </div>

         <div class="input-group mb-3 mt-2">
           <div class="input-group-prepend">
             <span class="input-group-text" style="background: none" id="basic-addon1">
              <i class="fa fa-sort-amount-asc"></i></span>
           </div>
           <input type="text" v-model="foods.food_quantity" class="form-control" placeholder="quantity" aria-label="quantity" aria-describedby="basic-addon1">
        </div>

         <div class="input-group mb-3 mt-2">
           <div class="input-group-prepend">
             <span class="input-group-text" style="background: none" id="basic-addon1">
              <i class="fa fa-info"></i></span>
           </div>
           <input type="text" v-model="foods.food_detail" class="form-control" placeholder="detail" aria-describedby="basic-addon1">
        </div>

         <!-- <div class="col-md-6" v-if="foods.food_picture">
           <img id="image" :src="require(`../assets/food_php/uploads/${foods.food_picture}`)" alt=" --food image" style="width: 50px; height: 50px"/>
         </div> 

         <div class="input-group mb-3 mt-2">
           <div class="input-group-prepend">
             <span class="input-group-text" style="background: none" id="basic-addon1">
              <i class="fa fa-picture-o"></i></span>
           </div>
           <input type="file" ref="file" v-on:change="readURL($event)" class="form-control" placeholder="picture" aria-label="picture" aria-describedby="basic-addon1">
        </div>
         -->
     <div>
         <label for="Is food available?">Is food available ?</label>
       <select name="" v-model="foods.food_availability" id="" style="border: 1px solid black" class="col-md-12">
         <!-- <option value="Is food available?" readonly>Is food available?</option> -->
         <option value="Yes">Yes</option>
         <option value="No">No</option>
       </select>
     </div>
  

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" @click="submitupdate(foods)" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>



<Addfood/>
<!-- <Editfood/> -->
</div>
    </div>
</template>

<script>
import Addfood from '../views/addfood';
// import Editfood from '../views/editfood';
import $ from 'jquery';
import { mapGetters, mapActions } from 'vuex';
import Axios from 'axios';
export default {
    name: 'Foodtable',
    components:{
        Addfood,
        // Editfood,
    },

    data(){
     return {
         foods: {
           
         },
     }
    },

    methods: {
       ...mapActions(['fetchallfoods', 'updatefood']),

      submitupdate(ty) {
          console.log(ty);
             var myupdate = {
                 'food_id': ty.food_id,
                 'food_time': ty.food_time,
                 'food_date': ty.food_date,
                 'food_name': ty.food_name,
                 'food_price': ty.food_price,
                 'food_quantity': ty.food_quantity,
                 'food_detail': ty.food_detail,
               }
          Axios.post('http://localhost/vuefolder/vueInvent/src/assets/food_php/updatefood.php', myupdate)
          .then(res => console.log(res.data))
          .catch(err => console.log(err));   
       },

         editfood(food){
             console.log(food);

             let {food_id, food_time, food_date, food_name, food_price,
                 food_quantity, food_detail, food_availability} = food;
            
            this.foods = {food_id,food_time, food_date, food_name, food_price,
            food_quantity, food_detail, food_availability};


            // let {food_id, food_time, food_date, food_name, food_price,food_picture,
            //      food_quantity, food_detail, food_availability} = food;
            
            // this.foods = {food_id,food_time, food_date, food_name, food_price,food_picture,
            // food_quantity, food_detail, food_availability};
            // console.log(this.foods);
         },

            readURL(event){
        this.foods.food_picture = event.target.files[0];
        // console.log(this.foods.file)
        if (this.foods.food_picture) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#image').attr('src', e.target.result);
                };

                reader.readAsDataURL(event.target.files[0]);
            }
      },
    },

    computed: mapGetters(['allfoods']),
    mounted(){
        this.fetchallfoods()
    }
}
</script>

<style scoped>
   .mycontainer{
     background-image: url('../assets/rice_nuggets.jpg');
     /* width: 100%; */
     height: 120vh;
     background-size: cover;
   }
</style>
