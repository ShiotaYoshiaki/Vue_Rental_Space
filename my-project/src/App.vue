<template>
  <div>
    <Header></Header>
    <router-view></router-view>
     <router-link to="/" class="link" active-class="link--active" exact>Home</router-link>
     <router-link to="/search" class="link" active-class="link--active" exact>Search</router-link>
     <router-link to="/favorites" class="link" active-class="link--active" exact>Favorites</router-link>
     <router-link to="/account" class="link" active-class="link--active" exact>Account</router-link>
  </div>
</template>

<script>
import Header from './components/header.vue';

export default {
  components: {
    Header,
  }
}
</script>

<style scoped>
.link {
  margin-right: 20px;
}

.link--active {
  font-size: 20px;
}
</style>