<script setup lang="ts">
// Products Data
const { data } = await useFetch("/api/products");
</script>
<template>
  <div class="product-container">
    <!-- Head -->
    <Back />
    <!-- Products -->
    <div class="product-label">
      <!-- Label -->
      <div class="label">
        <h2>Products <span>{{ data?.response.data.length ?? 0 }}</span></h2>
      </div>
      <div class="action">
        <NuxtLink to="/products/add">
          <PrimaryButton> Add Product </PrimaryButton>
        </NuxtLink>
      </div>
    </div>
    <!-- Listing -->
    <ProductListing :products="data?.response.data" />
  </div>
</template>
<style scoped lang="scss">
.product-container {
  padding: 4em;
  .product-label {
    display: flex;
    justify-content: space-between;
    align-content: center !important;
    margin: 4em 0;
    .label {
      line-height: 2em;
    }
    h2 {
      font-weight: normal;
      span {
        font-size: 15px;
        background-color: var(--blue-50);
        color: var(--blue-500);
        padding: 0.2em 0.5em;
        border-radius: 1em;
      }
    }
    p {
      color: var(--gray-500);
    }
    .action {
      .base-button {
        background-color: var(--blue-500);
        color: var(--base-white);
        padding: 12px 30px;
      }
      a {
        text-decoration: none;
      }
    }
  }
}
</style>
