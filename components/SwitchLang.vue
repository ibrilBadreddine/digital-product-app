<script setup lang="ts">
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

</script>
<template>
  <div class="switch-lang">
    <NuxtLink :to="switchLocalePath('en')" :class="{'active-lang' : locale === 'en'}">
      English
    </NuxtLink>
    <NuxtLink :to="switchLocalePath('fr')" :class="{'active-lang' : locale === 'fr'}">
      French
    </NuxtLink>
    <NuxtLink :to="switchLocalePath('ar')" :class="{'active-lang' : locale === 'ar'}" class="ar-option">
      العربية
    </NuxtLink>
  </div>
</template>
<style scoped lang="scss">
/*  Switch Langs */
.switch-lang {
  position: absolute;
  bottom: 0;
  left: 50%;
  translate: -50% -50%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  a {
    text-decoration: none;
    color: var(--gray-500);
    padding: .5em 1em;
    border-radius: .7em;
  }
  .active-lang {
    background-color: var(--blue-50);
    color: var(--blue-500);
  }
  .ar-option {
    font-family: 'Noto Kufi Arabic', Mona-Sans, sans-serif !important;
  }
}
</style>
