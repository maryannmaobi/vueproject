<template>
    
    <div >
        
       <div class="container">
            <!-- the food id is : {{this.$route.params.foodid}} -->
       
       <div class="col-md-12" v-for="foods in allfoods" :key="foods.food_id">     
            <div v-if="food_id == foods.food_id">
               <!-- <h1 class="text-center">{{foods.food_name}}</h1>      
               <img :src="require(`../assets/food_php/uploads/${foods.food_picture}`)" class="img-fluid" style="border-radius: 10px">     
                <p class="h5 text-justify mt-2">{{foods.food_detail}}</p> -->
         


             <md-card class="md-card-example">
      <md-card-area md-inset>
        <md-card-media md-ratio="16:9">
          <img :src="require(`../assets/food_php/uploads/${foods.food_picture}`)"  alt="Coffee House">
        </md-card-media>

        <md-card-header>
          <h2 class="md-title">{{foods.food_name}}</h2>
          <div class="md-subhead mt-1">
            <span class="text-center h6">{{foods.food_detail}}</span>
          </div>
        </md-card-header>
      </md-card-area>

      <md-card-content>
            <div class="md-subheading" v-if="alltime > foods.food_time">
                <span class="ml-5">WAIT TILL</span><span class="ml-2" style="color:#D50000">{{foods.food_time}}</span>
            </div>
                 <div v-else>Available</div>
      </md-card-content>

      <md-card-actions>
        <md-button class="md-primary h4" style="color:#D50000">N{{foods.food_price}}</md-button>
        <md-button></md-button>
        <md-button class="md-primary h5" style="color:#D50000"><i class="fa fa-shopping-cart fa-`1x mr-1" style="color:#D50000"></i>Add to cart</md-button>
      </md-card-actions>
    </md-card>

      </div>  
      </div>

       
       </div>

    </div>

</template>


<script>
import { mapGetters } from 'vuex';
export default {
   name: "FoodDetails" ,
   data(){
       return {
         alltime: '',  
        food_id: this.$route.params.foodid
       }
   },

   computed: mapGetters(['allfoods']),

   methods: {
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
            }
   },

   created(){
       console.log(this.food_id);
       this.myFunction()
   }
}
</script>

<style scoped>
.md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>