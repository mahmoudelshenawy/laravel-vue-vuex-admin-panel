<template>
  <v-app-bar app color="primary" absolute clipped-left dark>
    <v-toolbar-title text>
      <v-app-bar-nav-icon
      ></v-app-bar-nav-icon>
      <router-link to="/">
        <v-btn text> Harmoon <v-icon>mdi-head-heart-outline</v-icon> </v-btn>
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <router-link to="/login" v-if="!Auth">
      <v-btn text dark>
        {{$t('general.login')}}
      </v-btn>
    </router-link>
    <router-link to="/register"  v-if="!Auth">
      <v-btn text>
        {{$t('general.register')}}
      </v-btn>
    </router-link>
    <v-btn text  v-if="Auth">
      logout
    </v-btn>
  </v-app-bar>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  components: {
    // "app-drawer" : Drawer
  },
  computed : mapGetters({
    Auth : 'isAuth'
  }),
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    
  },
}
</script>
