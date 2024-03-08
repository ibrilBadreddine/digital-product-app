<template>
  <div class="back-box">
    <NuxtLink to="/">
      <div class="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </div>
      Back to menu
    </NuxtLink>
  </div>
</template>
<style scoped lang="scss">
.back-box {
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    color: var(--gray-700);
    display: flex;
    align-content: center;
    gap: 0.5em;
    .icon {
      width: 18px;
      height: 18px;
      transition: 0.4s;
    }
    &:hover .icon {
      translate: -0.5em 0;
    }
  }
}
</style>
