<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="alert alert-success alert-wrap" role="alert">
              App not ready yet! Authorize to proceed
          </div>
          <hr>
          <div v-if="errors.length > 0">
            <div v-for="(error, index) in errors" :key="index" class="alert alert-danger alert-wrap" role="alert">
              {{error}}
            </div>
          </div>
          <form class="log-in-form" @submit.prevent="logIn">
            <div class="form-group ">
              <label for="login" class="login-form-label text-left">Login:</label>
              <input type="text" v-model="user.login" id="login" class="form-control">
              <label for="pass" class="login-form-label text-left">Password:</label>
              <input id="pass" type="password" v-model="user.password" class="form-control">
              <br>
              <div class="d-flex">
                <button type="submit" class="btn btn-success">Log in</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.log-in-form {
  margin: auto;
  max-width: 400px;
}
.alert-wrap {
  margin: auto;
  max-width: 400px;
}
.login-form-label {
  display: block;
}
</style>

<script>
import { users } from "../data/security";

export default {
  data: () => {
    return {
      users,
      errors: [],
      user: {
        login: null,
        password: null
      }
    };
  },
  methods: {
    logIn() {
      this.errors = [];
      if (this.user.login == null || this.user.password == null) {
        this.errors.push("All fields must not be empty");
        return false;
      }
      let authorized = this.users.filter(user => {
        return (
          user.login == this.user.login && user.password == this.user.password
        );
      });
      if (authorized.length > 0) {
        this.user.login = null;
        this.user.password = null;
        window.localStorage.setItem("auth", JSON.stringify(authorized));
        this.$emit("auth", true);
      }
    }
  }
};
</script>
