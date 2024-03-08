<script setup lang="ts">
const { data } = await useFetch('/api/products')

const payload = ref({
  name: null,
  slug: null,
  price: null,
});
</script>
<template>
  <div class="add-product-container">
    <!-- Head -->
    <Back />
    <!-- Label -->
    <div class="label">
      <h2>
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
              d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
            />
          </svg>
        </div>
        Add Product
      </h2>
      <div class="action">
        <PrimaryButton> Create </PrimaryButton>
      </div>
    </div>
    <!-- Form -->
    <div class="add-form">
      <!-- Content -->
      <div class="form-content">
        <!-- Name -->
        <InputGroup>
          <template #label> Name * </template>
          <template #input>
            <Input
              v-model="payload.name"
              placeholder="Name ( Ex: blue summer shirt.. )"
              type="text"
              required
            />
          </template>
          <template #info> Make it short, descriptive, and exciting </template>
        </InputGroup>
        <!-- Slug -->
        <InputGroup>
          <template #label> Slug * </template>
          <template #input>
            <Input
              v-model="payload.slug"
              placeholder="Slug..."
              type="text"
              required
            />
          </template>
          <template #info>
            You can only change your username once every 30 days
          </template>
        </InputGroup>
        <!-- Price -->
        <InputGroup>
          <template #label> Price * </template>
          <template #input>
            <Input
              v-model="payload.price"
              placeholder="0.00"
              type="number"
              required
            />
          </template>
          <template #info>
            You can only change your username once every 30 days
          </template>
        </InputGroup>
      </div>
      <!-- Preview -->
      <div class="form-preview">
        <div class="fake-product">
          <div class="media-image">
            <Skeleton type="media" />
          </div>
          <div class="info">
            <p>{{ payload.name ?? '-' }}</p>
            <h3>$ {{ payload.price ?? '-' }}</h3>
            <h4>
              <span>
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                  </svg>
                </div>
                Link/
              </span>
              {{ payload.slug ?? '-' }}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.add-product-container {
  .label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4em 0 3em 0;
    h2 {
      font-weight: normal;
      display: flex;
      align-content: center;
      gap: 0.5em;
      color: var(--gray-700);
      .icon {
        width: 20px;
      }
    }
    .base-button {
      background-color: var(--blue-500);
      color: var(--base-white);
      padding: 12px 30px;
    }
  }
  .add-form {
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 2em;
    .form-content {
      width: 50%;
      display: grid;
      grid-template-columns: 1fr;
      gap: 2em;
      color: var(--gray-700);
    }
    .form-preview {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      .fake-product {
        width: 60%;
        border: 1px solid var(--gray-100);
        box-shadow: rgba(227, 227, 227, 0.2) 0px 8px 24px;
        border-radius: 1.5em;
        .media-image:deep(.media) {
          border-radius: 1.5em 1.5em 8px 8px;
        }
        .info {
          padding: 2em;
          line-height: 2em;
          p {
            color: var(--gray-500);
            font-size: 17px;
          }
          h3 {
            font-size: 20px;
            color: var(--gray-700);
            margin: .5em 0;
          }
          h4 {
            display: flex;
            align-items: center;
            gap: .3em;
            font-size: 14px;
            font-weight: normal;
            span {
              display: flex;
              align-items: center;
              gap: .3em;
              background-color: var(--blue-50);
              color: var(--blue-500);
              border-radius: 10px;
              padding: 1px 12px;
              font-size: 13px;
              .icon {
                width: 18px;
                height: 18px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
