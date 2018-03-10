<template>
  <div id="app">
    <log-in-component v-if="!allow_access" v-on:auth="authProceed"></log-in-component>
    <div v-else class="container">
      <div class="row">
        <div class="col-12">
          <hr>
          <div class="d-flex justify-content-start">
            <ul class="nav">
              <li class="nav-item">
                <router-link to="/about-me" class="nav-link">About me</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about-site" class="nav-link">About this app</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/links" class="nav-link">Links</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contacts" class="nav-link">Contacts</router-link>
              </li>
            </ul>
            <language-switch></language-switch>
            </div>
            <hr>
            <div class="container">
              <div class="row">
                <div class="route-container">
                  <transition name="fade">
                    <router-view></router-view>
                  </transition>
                </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      allow_access: window.localStorage.getItem("auth") ? true : false
    };
  },
  methods: {
    authProceed(payload) {
      this.allow_access = payload;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
.router-link-active {
  border: 1px solid #42b983;
  padding: 5px;
  text-align: center;
  vertical-align: middle;
  border-radius: 4px;
  transition: all 0.7s;
}
.router-link-active:hover {
  border: 1px solid white;
  background: #42b983;
  color: white;
  border-radius: 4px;
}
.nav-link {
  transition: all 0.7s;
  margin-left: 5px;
  height: 36px;
  padding: 5px;
  border: 1px solid #42b983;
  line-height: 20px;
  border-radius: 4px;
  width: 135px;
}
.nav-link:hover {
  background: #42b983;
  color: white;
  border-radius: 4px;
  padding: 5px;
  border: 1px solid white;
  height: 36px;
  line-height: 20px;
  width: 135px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
