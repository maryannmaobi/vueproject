<template>

<div>
  <v-card
    class="mx-auto "
    height="2000"
  >
    <v-app-bar style="background-color: #4A148C;" class="text-white"
    >
      <v-app-bar-nav-icon @click="drawer = true" class="text-white"></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
     <!-- <router-link to="/"><v-toolbar-title class="mr-5">Food list</v-toolbar-title></router-link>
      <v-toolbar-title class="mr-5">Sign Up</v-toolbar-title>
      <v-toolbar-title class="mr-5">Log In</v-toolbar-title> -->


<div class="dropdown show" >
   <v-btn icon class="text-white"  id="dropdownMenuLink" data-toggle="dropdown">
        <v-icon class="text-white" >mdi-dots-vertical</v-icon>
      </v-btn>
  <!-- <i class="fa-3x dropdown-toggle" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i> -->
  <!-- <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

  </a> -->

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <router-link to="/addedtocart" class="dropdown-item">
      <span class="text-danger">{{arr}}</span><i class="fa-1x fa fa-shopping-cart mr-2" style="color: #4A148C">
      </i>shopping</router-link>
    <router-link to="/login" class="dropdown-item"><i class="fa-1x fa fa-sign-in mr-2" style="color: #4A148C"></i>login</router-link>
    <router-link to="/signup" class="dropdown-item"><i class="fa-1x fa fa fa-user-plus mr-2" style="color: #4A148C"></i>sign-up</router-link>
    <!-- <a class="dropdown-item" href="#"><i class="fa-1x fa fa fa-user-plus mr-2" style="color: #4A148C"></i>sign-up</a> -->
  </div>
</div>



    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group class="mt-3"
         
          active-class="deep-purple--text text--accent-4"
        >


          <h5 class="text-center mr-5">MENU</h5>

          <router-link to="/"><v-list-item class="justify-content-center">
            <v-list-item-icon>
              <v-icon class="ml-5 mt-4">mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="ml-4 mt-4 mb-3">Our Foods</v-list-item-title>
          </v-list-item></router-link>

          <v-list-item>
            <v-list-item-icon>
              <v-icon class="ml-5 mt-4">mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="ml-4 mt-4 mb-3">About Us</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon class="ml-5 mt-4">mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="ml-4 mt-4">Contact Us</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <router-view/>


  </v-card>
</div>

</template>

<script>
import Axios from 'axios';
import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'Navbar',
    data(){
      return{
        drawer: false,
        newarr: '',
        arr: ''
      }
    },

    computed: {
      ...mapGetters(['allcarts', 'newcarts', 'totalarrayindb']),
    },

    methods:{

    ...mapActions(['numbercart']),
 
      getallcarts() {
         Axios.get('http://localhost/vuefolder/vueInvent/src/assets/food_php/getcart.php')
        .then(res => this.arr = res.data.length)
        .catch(err=>console.log(err))

      },
      
    },
    created(){
      this.numbercart();
      this.getallcarts();
    }
  }



</script>

<style scoped>
   v-card {
     background: #000000;
   }
   .demo-badge div{
      margin-bottom: 16px;
   }
</style>