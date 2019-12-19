<template>
  <div>
    <nav class="navbar navbar-expand-lg pr-md-5 pl-md-5 navbar-dark">
      <a class="navbar-brand" @click="handleClickHome"
        ><img class="logo mr-3" src="./assets/bacon.jpg"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/classes" class="nav-link">Classes</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Add Class</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  methods: {
    handleClickHome() {
      this.$router.replace({ path: '/' });
    }
  }
});
</script>
<style lang="scss" scoped>
nav {
  background-color: rgb(57, 68, 97);
  font-family: 'Maven Pro', sans-serif;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);

  > a:hover {
    cursor: pointer;
  }
}

.nav-link {
  text-decoration: none;
  color: #f7f7f7;
}

.logo {
  height: 2rem;
  border-radius: 50%;
}
</style>
