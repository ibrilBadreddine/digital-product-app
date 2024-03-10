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
    <div class="bg-images">
      <img src="https://cdn3d.iconscout.com/3d/premium/thumb/info-mail-6356451-5231921.png" alt="email">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/010/833/483/small_2x/earphone-3d-for-illustration-png.png" alt="support">
      <img src="https://cdn3d.iconscout.com/3d/premium/thumb/chat-bubble-7811331-6267165.png" alt="chat">
      <img src="https://cdn3d.iconscout.com/3d/premium/thumb/notification-bell-3979316-3364144.png" alt="bell">
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
  min-height: 100vh;
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
  .bg-images {
    img {
      position: absolute;
      width: 50px;
      &:nth-child(1) {
        left: 10%;
        top: 70%;
        filter: hue-rotate(321deg) blur(2px);
      }
      &:nth-child(2) {
        right: 20%;
        top: 80%;
        filter: hue-rotate(347deg) blur(2px);
        width: 80px;
      }
      &:nth-child(3) {
        left: 20%;
        top: 25%;
        filter: hue-rotate(175deg) blur(2px);
      }
      &:nth-child(4) {
        right: 10%;
        top: 20%;
        filter: hue-rotate(178deg) blur(2px);
      }
    }
  }
}
</style>
