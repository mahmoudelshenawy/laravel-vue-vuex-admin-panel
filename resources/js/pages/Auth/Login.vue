<template>
    <v-container>
      <v-row>
         <v-col cols="6 mx-auto">
      <v-card class="d-flex flex-column">
        <v-toolbar color="primary" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <form @submit.prevent="login"></form>
         <v-col cols="8" class="mx-auto my-3">
         <v-text-field
            dense
            label="email"
            v-model="email"
            placeholder="email.."
          ></v-text-field>
            </v-col>
         <v-col cols="8" class="mx-auto my-3">
         <v-text-field
            dense
            label="password"
            type="password"
            v-model="password"
            placeholder="password.."
          ></v-text-field>
            </v-col>
            <v-col cols="8" class="mx-auto my-1">
            <v-checkbox
            label="remember me"
              color="primary"
              type="checkbox"
              v-model="remember"
              value="true"
            ></v-checkbox>
            </v-col>
         <v-col cols="3" class="mx-auto my-3 text-center">
         <v-btn @click="login"
           color="primary"
          >
          submit
          </v-btn>
            </v-col>
             <v-card-actions>
            <router-link :to="{ name: 'register' }">
             register
            </router-link>
            <v-spacer></v-spacer>
            <router-link :to="{ name: 'password.request' }">
             forgot password
            </router-link>
          </v-card-actions>
        </v-card>
        </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios'
import {mapGetters} from 'vuex'
export default {
   data(){
    return {
      email : "",
      password : "",
      remember: false,
      error:null
    } 
  },
  computed:mapGetters({
      Auth:'isAuth'
    }),
  // mounted: function(){
  //   if(this.Auth){
  //     console.log('check test')
  //     this.$router.go(-1)
  //   }
  // },
  methods: {
    async login(){
      try {   
        const response = await axios.post('/api/login',{
          email : this.email,
          password : this.password,
        })
        console.log(response)
        this.email = ""
        this.password =""
       this.$store.dispatch('setToken' , {
         token:response.data.token,
         remember : this.remember
       })
       // Fetch the user.
      await this.$store.dispatch('fetchUser')
//        this.$notify({
//     group: 'auth',
//     title: 'Authentication',
//     text: 'you have logged in ',
//     type : 'success'
// });
        this.$router.push('/');
      } catch (error) {
this.error = error.response.data.errors
      console.log(this.error)
//        let errList = '';
//         this.error.forEach(el => {
//           errList += `<li>${el.msg}</li>`
//         });
//     this.$notify({
//     group: 'auth',
//     title: 'Authentication',
//     type : 'error',
//     text: errList
// });
      }
    }
  },
  
  
}
</script>