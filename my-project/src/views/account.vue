<template>
  <div>
    <input type="text" placeholder="Login"/><br>
    <input type="text" placeholder="Password"/><br>
    <Button>Login</Button>
  </div>
</template>

<script>
import Button from '../components/UI/Button';

export default {
  components: {
    Button,
  }
}
</script>
