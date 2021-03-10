<template>
<div>
    <div class="row">
        <div class="col-6">
            <h4>Manage Products</h4>
        </div>
        <div class="col-6">
         <!-- modal start -->
      <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <form action="#" @submit.prevent="save">
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="name*"
                  v-model="editedPro.name"
                  required
                  :error-messages="displayErrMsg('name')"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="desciption"
                  v-model="editedPro.desc"
                  :error-messages="displayErrMsg('desc')"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="purchase price"
                  v-model="editedPro.purchase_price"
                  type="number"
                  :rules="rules"
                  :error-messages="displayErrMsg('purchase_price')"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="selling price"
                  v-model="editedPro.selling_price"
                  type="number"
                  :rules="rules"
                  :error-messages="displayErrMsg('selling_price')"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="stock"
                  v-model="editedPro.stock"
                  type="number"
                  :rules="rules"
                  :error-messages="displayErrMsg('stock')"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
               <v-select
               v-model="editedPro.category_id"
           :items="categories"
             item-text="name"
             item-value="id"
           :error-messages="displayErrMsg('category_id')"
           label="Categories"
           ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
               <v-select
               v-model="editedPro.sub_category_id"
           :items="subCategories"
             item-text="name"
             item-value="id"
            :error-messages="displayErrMsg('sub_category_id')"
           label="sub categories"
           ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
               <v-select
               v-model="editedPro.tag_id"
               multiple
           :items="tags"
             item-text="name"
             item-value="id"
           :error-messages="displayErrMsg('tags')"
           label="tags"
           ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
              <v-file-input
    label="upload image"
    type="file"
v-model="files"
  ></v-file-input>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
                v-if="editedPro.image"
              >
             <v-img
  lazy-src="https://picsum.photos/id/11/10/6"
  aspect-ratio="1"
  :src="editedPro.image"
></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="save"
          >
            Save
          </v-btn>
        </v-card-actions>
        </form>
      </v-card>
      </v-dialog>
    <!-- modal end -->
     <!-- delete modal -->
     <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
    <!-- end delete -->
        </div>
    </div>
     <v-data-table
    :headers="headers"
    :items="products"
    :items-per-page="5"
    class="elevation-1"
     loading = true
    loading-text="Loading... Please wait"
  >
  <template v-slot:item.tags="{ item }">
      <v-chip
        dark
        v-for="tag in item.tags"
        :key="tag.id"
         :color="getColor(tag.id)"
         class="mr-2 mt-2 mb-2"
      >
        {{ tag.name }}
      </v-chip>
    </template>
    <template>
     
    </template>
        <template v-slot:item.image="{ item }">
          <img :src="item.image_path" alt="image" style="border-radius:50%" width="40" height="40">
        </template>
        <template v-slot:item.actions="{ item }">
          <div class="d-flex flex-row">
 <v-btn
              icon
              color="primary" class="mr-2"
              @click="editItem(item)"
              >
      <v-icon
        small
      >
        mdi-pencil
      </v-icon>
       </v-btn>
         <v-btn
              icon
              color="error" class="mr-2"
              @click="deleteItem(item)"
              >
      <v-icon
        small
        
      >
        mdi-delete
      </v-icon>
         </v-btn>
          </div>
    </template>

  </v-data-table>  
</div>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return{
            headers: [
                 { text: 'ID', value: 'id' },
                 { text: 'Image', value: 'image',sortable:false },
                 { text: 'Name', value: 'name' },
                 { text: 'Desc', value: 'desc' },
                 { text: 'Category', value: 'categories.name' },
                 { text: 'SubCategory', value: 'sub_categories.name' },
                 { text: 'Tags', value: 'tags' },
                 { text: 'Actions', value: 'actions', sortable: false },
            ],
            products:[],
            categories:[],
            subCategories:[],
            errors:[],
            tags:[],
             dialog: false,
             dialogDelete: false,
             editedIndex: -1,
             position:-1,
             editedPro:{
               name:'',
              desc : '',
              category_id:'',
              sub_category_id:'',
              selling_price:'',
              purchase_price:'',
               stock:'',
               tag_id:[],
               image:''
             },
             defaultPro:{
               name:'',
              desc : '',
              categoryId:'',
              subCategoryId:'',
              selling_price:'',
              purchase_price:'',
               stock:'',
               tag_id:[],
               image:''
             },
             files:{},
             rules: [
           value => !!value || 'Required.',
           value => (value && value > 0) || 'must be > 0',
      ],
        }
    },
    methods:{
         getColor (index) {
        if (index % 2 == 0) return 'red'
        else if (index % 2 !== 0) return 'orange'
        else return 'green'
      },
       createProduct(){
Axios.post('/api/products' ,this.editedPro).then(response => {
  this.editedPro = Object.assign({}, this.defaultPro)
  this.products.unshift(response.data.data)
  this.editedIndex = -1
  console.log(response)
}).catch(error=>{
  if(error.response.data.errors){
  this.errors = {...error.response.data.errors}
  }
})
      }, //end create product
      editProduct(){
Axios.put(`/api/products/${this.editedIndex}` ,this.editedPro)
.then(response => {
   Object.assign(this.products[this.position], response.data.data)
  this.editedIndex = -1
  console.log(response)
}).catch(error=>{
  if(error.response.data.errors){
  this.errors = {...error.response.data.errors}
  }
})
      }, // end of edit product
displayErrMsg(name){

  if(this.errors[name]){
  return this.errors[name]
 }
  
},
close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedPro = Object.assign({}, this.defaultPro)
          this.editedIndex = -1
        })
        this.files = []
      },
       save () {
        if (this.editedIndex > -1) {
          // edit
          this.editProduct()
          // this.editedPro = Object.assign({}, this.defaultPro)
        } else {
          // create
          this.createProduct()
        }
        this.close()
      },//end save product
      editItem (item) {
        this.editedIndex = item.id
        this.position = this.products.indexOf(item)
         this.editedPro = item
         this.editedPro.image = item.image_path
        let tagsIds = item.tags.map(tag => tag.id)
        this.editedPro.tag_id = tagsIds
        this.dialog = true
        console.log(this.editedPro)
      },
       deleteItem (item) {
        this.position = this.products.indexOf(item)
        this.editedIndex = item.id
        this.editedPro = item
        this.dialogDelete = true
        console.log(this.position,this.editedIndex,this.editedPro)
      },

      deleteItemConfirm () {
        this.products.splice(this.position, 1)
        Axios.delete(`/api/products/${this.editedIndex}`)
        this.closeDelete()
      },
      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedPro = Object.assign({}, this.defaultPro)
          this.editedIndex = -1
        })
      },

onImageChange(e){
// let files = e.target.files || e.dataTransfer.files
let files =''
console.log(e.target)
if(!files.length){
  return
}
},//end detecting image
createImage(file){
let reader = new FileReader();
let vm = this
reader.onload = e => {
  vm.editedPro.image = e.target.result
}
reader.readAsDataURL(file)
},//end showing image
    },
     
    created(){
        Axios.get('/api/products').then(response => {
            console.log(response.data.products)
            this.products = response.data.products
            this.categories = response.data.categories
            this.tags = response.data.tags
        }).catch(err => {
            console.error(err)
        })
    },
    watch:{
      editedPro :{
         handler: function(val) {
            Axios.get(`/api/products/get_sub_categories/${val.category_id}`).then(response => {
            this.subCategories = response.data.subCategories
        }).catch(err => {
            console.error(err)
        })
         },
        deep:true,
      },
        dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
     files(val){
       console.log(val)
       let reader = new FileReader();
       let vm = this
       reader.onload = e => {
       vm.editedPro.image = e.target.result
}
   reader.readAsDataURL(val)
     }
    }
}
</script>
