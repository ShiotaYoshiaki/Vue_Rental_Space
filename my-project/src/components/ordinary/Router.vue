<template>
  <div>
    <router-link to="/" class="link" active-class="link--active" exact>Home</router-link>
    <router-link to="/search" class="link" active-class="link--active" exact>Search</router-link>
    <router-link to="/favorites" class="link" active-class="link--active" exact
      >Favorites</router-link
    >
    <router-link to="/account" class="link" active-class="link--active" exact>Account</router-link>
  </div>
</template>

<style scoped>



.link {
  margin-right: 20px;
  color: #000;
  text-decoration: none;
}

.link--active {
  font-size: 20px;
}
</style>
