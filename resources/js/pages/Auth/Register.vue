<template>
    <v-container>
      <v-row>
         <v-col cols="6 mx-auto">
      <v-card class="d-flex flex-column">
        <v-toolbar color="primary" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <!-- alert start -->
        <v-alert
      dense
      outlined
      type="error"
      v-if="error"
      class="mt-2"
    >
     {{errorMsg}}
    </v-alert>
        <!-- alert end -->
         <form @submit.prevent="register" @keydown="form.onKeydown($event)">
         <v-col cols="8" class="mx-auto mb-3 mt-6">
         <v-text-field
            dense
            label="name"
            v-model="name"
            placeholder="name.."
          ></v-text-field>
          <span class="text-danger" v-if="error">{{displayErr('name',errorsArr)}}</span>
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
      error:false,
      errors:[],
      errorsArr:[],
      errorMsg:null
    }
  },
//   computed:{
// displayErr(name){
// let err = this.errorsArr.find((index,err) => index === name)
// return err.name
// }
//   },
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
       this.$store.dispatch('setToken' , result.data.token)
       this.$store.dispatch('updateUser' , result.data)
        this.$router.push({name:"Home"});
        
      } catch (error){
      this.error = true;
      this.errorMsg = await error.response.data.message;
      this.errors = await error.response.data.errors;
      for(let err in this.errors){
        // console.log(this.errors[err][0])
        this.errorsArr[err] = this.errors[err][0]
      }
      // console.log(this.errorsArr)
      console.log(error.response.data.errors.name[0])
      // console.log(error.response)
      }
    },
    // after register get User
  displayErr(name , errs){
let err = errs.find((index,err) => err)
// console.log('test' , err , name)
} 
  },
}
</script>