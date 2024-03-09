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
.wrapper.enabled:has(.input:focus) {
  box-shadow: 0px 0px 0px 3px #d2e4f8, 0px 1px 2px 0px #3333330d;
  border-color: var(--blue-500);
}
</style>
