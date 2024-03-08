<template>
  <div class="welcome">
    <div class="header">
      <h2>Welcome to NPCs App, your digital product detector! 👋</h2>
      <p>
        Detect and secure your digital products with NPCs ultimate protection in a connected world.
      </p>
    </div>
    <div class="select-option">
      <NuxtLink class="option" to="/products">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
          </svg>
        </div>
        Show Products
      </NuxtLink>
      <NuxtLink class="option" to="/products/add">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
        Add Product
      </NuxtLink>
    </div>
  </div>
</template>
<style scoped lang="scss">
.welcome {
  border-radius: 1em;
  line-height: 2em;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: 90vh;
  .header {
    text-align: center;
    h2 {
      font-weight: normal;
      font-size: 30px;
      margin-bottom: .5em;
    }
    p {
      color: var(--gray-500);
    }
  }
  .select-option {
    margin: 5em 0;
    display: flex;
    justify-content: center;
    gap: 1em;
    a {
      text-decoration: none;
      width: 300px;
      display: flex;
      align-items: center;
      gap: 1em;
      padding: 2em 1.5em;
      border-radius: 1em;
      border: none;
      outline: none;
      cursor: pointer;
      transition: .4s;
      background-color: var(--gray-50);
      color: var(--gray-500);
      .icon {
        width: 20px;
        height: 20px;
      }
      &:hover {
        background-color: var(--blue-50);
        color: var(--blue-500);
        translate: 0 -.5em;
      }
    }
  }
}
</style>
