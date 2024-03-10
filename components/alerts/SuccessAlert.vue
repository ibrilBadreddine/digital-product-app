<script setup lang="ts">

const { toggle } = defineProps({
  toggle: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['close']);

</script>
<template>
  <div class="alert success-alert" :class="{'alert-close': !toggle}">
    <div class="alert-head">
      <span></span>
      <button class="close" @click="emit('close')">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </div>
      </button>
    </div>
    <!-- Icon -->
    <div class="alert-icon">
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
      </div>
    </div>
    <!-- Details -->
    <div class="details">
      <h3>{{ $t('alert.success.title') }}</h3>
      <p>{{ $t('alert.success.message') }}</p>
    </div>
    <!-- Action -->
    <div class="action">
      <button @click="emit('close')">{{ $t('alert.success.action') }}</button>
    </div>
  </div>
  <div class="alert-bg" :class="{'alert-bg-close': !toggle}" />
</template>
<style scoped lang="scss">
/* Alert */
.alert {
  position: fixed;
  z-index: 99;
  background-color: var(--base-white);
  color: var(--gray-700);
  padding: 2em;
  border-radius: 1.5em;
  text-align: center;
  translate: -50% -50%;
  top: 50%;
  left: 50%;
  width: 300px;
  visibility: visible;
  opacity: 1;
  transition: all .3s;
  .alert-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .close {
      color: var(--gray-500);
      background-color: transparent;
      border: none;
      outline: none;
      display: flex;
      justify-content: center;
      cursor: pointer;
      align-items: center;
      clip-path: circle();
      padding: .3em;
      transition: .4s;
      &:hover {
        background-color: var(--gray-100);
      }
      .icon {
        width: 20px;
        width: 20px;
      }
    }
  }
  .alert-icon {
    display: flex;
    justify-content: center;
    margin: 1em 0 2em 0;
   .icon {
    color: var(--green-500);
    width: 40px;
    height: 40px;
    padding: 1em;
    background-color: var(--green-50);
    clip-path: circle();
   }
  }
  .details {
    h3 {
      color: var(--green-500);
      font-weight: normal;
      font-size: 18px;
      margin-bottom: .5em;
    }
    p {
      color: var(--gray-500);
    }
  }
  .action {
    margin-top: 2em;
    button {
      padding: 15px 50px;
      font-size: 16px;
      background-color: var(--green-500);
      color: var(--base-white);
      border-radius: 1em;
      font-size: 14px;
      border: none;
      outline: none;
      cursor: pointer;
    }
  }
}
.alert-bg {
  width: 100%;
  height: 100vh;
  inset: 0;
  position: fixed;
  background-color: rgba(55, 55, 55, 0.1);
  visibility: visible;
  opacity: 1;
  transition: .3s;
}

/* Close State */
.alert-close {
  visibility: hidden;
  opacity: 0;
  translate: -50% 0;
}
.alert-bg-close {
  visibility: hidden;
  opacity: 0;
}
</style>
