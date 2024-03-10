<script setup lang="ts">
const { locale } = useI18n();

</script>
<template>
  <div :class="{'layout-rtl' : locale === 'ar'}">
    <slot />
  </div>
</template>

<style lang="scss">
@import 'https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400;500;600;700&display=swap';

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  translate: 2em 0;
}
* {
  margin: 0;
  padding: 0;
}
html {
  background-color: var(--base-white);
  font: var(--text-sm-regular);
}

.layout-rtl {
  direction: rtl;
  font-family: 'Noto Kufi Arabic', Mona-Sans, sans-serif !important;
}

.wrapper.enabled:has(.input:focus) {
  box-shadow: 0px 0px 0px 3px #d2e4f8, 0px 1px 2px 0px #3333330d;
  border-color: var(--blue-500);
}
.primary:is(:focus, :active) {
  box-shadow: 0px 0px 0px 3px #d2e4f8, 0px 1px 2px 0px #3333330d !important;
  border-color: var(--blue-500) !important;
}
</style>
