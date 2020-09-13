<template>
  <div>
    <v-btn :color="color">
        <slot></slot>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "info"
    }
  }
};
</script>
