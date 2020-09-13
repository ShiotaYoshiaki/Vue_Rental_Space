<template>
  <div>
    <Header />
    <Router />
  </div>
</template>

<script>
import Router from "./Router.vue";
import Header from "./Header.vue";

export default {
  components: {
    Header,
    Router
  }
};
</script>
