<script setup lang="ts">
// import 'uno.css';
</script>

<template>
  <slot />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html {
  background-color: var(--base-white);
  font: var(--text-sm-regular);
}
body {
  padding: 4em;
}
</style>
