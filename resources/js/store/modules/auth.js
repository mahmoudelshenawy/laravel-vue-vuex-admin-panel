import axios from 'axios';
import Cookies from 'js-cookie';

// state
export const state = {
    user:null,
    token:Cookies.get('token'),
    isAuth:false
}

// mutations
export const mutations = {
    setToken(state , {token , remember}){
        state.token = token
        state.isAuth = true
        Cookies.set('token' , token, {expires : remember ? 365 : null})
      },
      fetchUserSuccess(state , payload){
        state.isAuth = true;
        state.user = payload
      },
      fetchUserFailed(state){
        Cookies.remove('token')
        state.isAuth = false;
        state.token = null
        state.user = null
      },
      setAuth(state , payload){
        localStorage.setItem('token' , payload.token)
        state.isAuth = true;
        // state.user = payload.user;
        state.token = payload.token
      },
      updateUser(state,user){
          state.user = user
      },
      logout(state){
      Cookies.remove('token')
     state.isAuth = false;
     state.token = null
     state.user = null
      },
}

// actions
export const actions = {
    setToken({commit} , payload){
     commit('setToken' , payload)
    },
    setAuth({commit} , payload){

    },
    updateUser({commit} ,user){
        commit('updateUser' , user)
    },
    async fetchUser({commit}){
        try {
            const {data} = await axios.get('/api/user')
            console.log('this is from fetchUser' , data)
            commit('fetchUserSuccess' , data)
        } catch (error) {
            commit('fetchUserFailed')
        }
    },
    async logout({commit}){
       try {
           await axios.post('/api/logout')
        } catch (error) {
    
    }
commit('logout')
    }
}

// getters
export const getters = {
    authUser : state => state.user,
    authToken : state =>state.token,
    isAuth : state => state.isAuth
}