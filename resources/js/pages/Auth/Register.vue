<template>
    <v-container>
      <v-row>
         <v-col cols="6 mx-auto">
      <v-card class="d-flex flex-column">
        <v-toolbar color="primary" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
         <form @submit.prevent="register" @keydown="form.onKeydown($event)">
         <v-col cols="8" class="mx-auto mb-3 mt-6">
         <v-text-field
            dense
            label="name"
            v-model="name"
            placeholder="name.."
          ></v-text-field>
            </v-col>
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
            v-model="password"
            type="password"
            placeholder="password.."
          ></v-text-field>
            </v-col>
         <v-col cols="8" class="mx-auto my-3">
         <v-text-field
            dense
            label="password confirmation"
            v-model="password_confirmation"
            type="password"
            placeholder="password confirmation"
          ></v-text-field>
            </v-col>

         <v-col cols="3" class="mx-auto my-3 text-center">
         <v-btn
           color="primary" @click="register"
          >
          submit
          </v-btn>
            </v-col>
            </form>
        </v-card>
        </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios'
import Form from 'vform'
export default {
  data(){
    return {
      form: new Form({
        name:"",
        email:"",
        password : "",
        password_confirmation : ""
      }),
      name:"",
      email : "",
      password : "",
      password_confirmation: '',
      error:null
    }
  },
  methods: {
    async register(){
      try {
        // register
        const response = await axios.post('/api/register',{
          name : this.name,
          email : this.email,
          password : this.password,
          password_confirmation: this.password_confirmation
        })
// login
        const result = await axios.post('/api/login',{
          email : this.email,
          password : this.password,
        })
// clear state
        this.name = ""
        this.email = ""
        this.password =""
        // console.log(response)
       this.$store.dispatch('setToken' , result.data.token)
       this.$store.dispatch('updateUser' , result.data)
        this.$router.push({name:"Home"});
        
      } catch (error){
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
    // after register get User
    
  },
}
</script>