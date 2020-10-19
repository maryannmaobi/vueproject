<template>
  
 <div>

<div class="container">
  <div class="row">

     <div class="main container">
    <p class="sign" align="center">Sign in</p>
    <form class="form1" @submit="onSubmit">
      <input class="un " type="text" v-model="logindetails.username" align="center" placeholder="Username">
      <input class="pass" type="password" v-model="logindetails.password" align="center" placeholder="Password">
      <button class="submit" type="submit"><a align="center">Sign in</a></button>
      <p class="forgot mt-3" align="center"><a href="#">Forgot Password?</a></p>
      <p class="forgot" align="center"><a href="#">A new customer?</a></p>
      <a class="submit2" align="center">Sign Up</a>

            
    </form>

    </div>

</div>

</div>

 </div>

</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'Login',
    data(){
        return{
            logindetails: {
                username: '',
                password: '',
            }
        }
    },

    methods: {
       
        ...mapActions(['loginusers']),

        onSubmit(e){
            e.preventDefault();
          var login = this.logindetails;
            this.loginusers(login)
        }
    }
}
</script>






<style scoped>

.main {
        background-color: #FFFFFF;
        width: 400px;
        height: 450px;
        margin: 7em auto;
        border-radius: 1.5em;
        box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
    }
    
    .sign {
        padding-top: 40px;
        color:  #4A148C;
        font-family: 'Ubuntu', sans-serif;
        font-weight: bold;
        font-size: 23px;
    }
    
    .un {
    width: 76%;
    color: rgb(38, 50, 56);
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1px;
    background: rgba(136, 126, 126, 0.04);
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    outline: none;
    box-sizing: border-box;
    border: 2px solid rgba(0, 0, 0, 0.02);
    margin-bottom: 50px;
    margin-left: 46px;
    text-align: center;
    margin-bottom: 27px;
    font-family: 'Ubuntu', sans-serif;
    }
    
    form.form1 {
        padding-top: 40px;
    }
    
    .pass {
            width: 76%;
    color: rgb(38, 50, 56);
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1px;
    background: rgba(136, 126, 126, 0.04);
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    outline: none;
    box-sizing: border-box;
    border: 2px solid rgba(0, 0, 0, 0.02);
    margin-bottom: 50px;
    margin-left: 46px;
    text-align: center;
    margin-bottom: 27px;
    font-family: 'Ubuntu', sans-serif;
    }
    
   
    .un:focus, .pass:focus {
        border: 2px solid rgba(0, 0, 0, 0.18) !important;
        
    }
    
    .submit {
      cursor: pointer;
        border-radius: 5em;
        color: #fff;
        background:#4A148C;
        border: 0;
        padding-left: 40px;
        padding-right: 40px;
        padding-bottom: 10px;
        padding-top: 10px;
        font-family: 'Ubuntu', sans-serif;
        margin-left: 35%;
        font-size: 13px;
        box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
    }

    .submit2 {
      cursor: pointer;
        border-radius: 5em;
        color: #fff;
        background:#4A148C;
        border: 0;
        padding-left: 40px;
        padding-right: 40px;
        padding-bottom: 10px;
        padding-top: 10px;
        font-family: 'Ubuntu', sans-serif;
        margin-left: 35%;
        font-size: 13px;
        box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
    }
    
    .forgot {
        text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);
        color: #E1BEE7;
        /* padding-top: 10px; */
    }
    
    a {
        text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);
        color: #E1BEE7;
        text-decoration: none
    }
    
    @media (max-width: 600px) {
        .main {
            border-radius: 0px;
        }
    }
</style>