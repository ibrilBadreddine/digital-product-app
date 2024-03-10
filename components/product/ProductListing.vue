<script setup lang="ts">
import { columns, formatDate } from "./helpers";
import type { Product } from "./types";

const { products } = defineProps({
  products: {
    type: Array as PropType<Product[]>,
    required: true
  }
});

// Search by product name
const searchTerm = ref();

// Link Alert - Status
const linkSuccess = ref(false);

// Link Product
const linkProduct = async (product: Product) => {
  linkSuccess.value = true;
  // const link = await useFetch("/api/link-product", {
  //   method: "post",
  //   body: {
  //     id: product.id,
  //     file: product.images[0].url,
  //   },
  // });
};

// Pagination
const TOTAL = 50;
const PER_PAGE = 5;
const TOTAL_PAGES = Math.ceil(TOTAL / PER_PAGE);

const currentPage = ref(1);

function handlePaginationNavigation(pageNumber: number) {
  currentPage.value = pageNumber;
}
</script>
<template>
  <div class="product-list">
    <div class="product-box">
      <!-- Filter -->
      <div class="product-filter">
        <Input v-model="searchTerm" placeholder="Search by product name..." />
        <div class="actions">
          <PrimaryButton> Search </PrimaryButton>
        </div>
      </div>
      <!-- Table -->
      <table>
        <thead>
          <tr>
            <th v-for="column in columns">
              {{ column.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, i) in products" :key="i">
            <td>{{ row.name }}</td>
            <td>
              <span class="row">{{ row.price }}</span>
            </td>
            <td>
              <span class="row status">Stopped</span>
            </td>
            <td>{{ formatDate(row.created_at) }}</td>
            <td>
              <div class="action">
                <button class="link" @click="linkProduct(row)">
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
                        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                      />
                    </svg>
                  </div>
                  Link
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Pagination -->
    <div class="pagination-box">
      <PaginationBar
        :current="currentPage"
        :size="TOTAL_PAGES"
        :count="PER_PAGE"
        :total="TOTAL"
        @update:current="handlePaginationNavigation"
      />
    </div>
  </div>
  <!-- Alerts -->
  <AlertsSuccessAlert 
   :toggle="linkSuccess"
   @close="linkSuccess = false"
  />
</template>
<style scoped lang="scss">
/* Product Listing */
.product-list {
  margin-top: 2em;
  .product-filter {
    margin: 1em 0 2em 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .wrapper {
      width: 50%;
    }
    .actions {
      .base-button {
        background-color: var(--blue-500);
        color: var(--base-white);
        padding: 12px 40px;
      }
    }
  }
  .product-box {
    background-color: var(--base-white);
    color: var(--gray-700);
    border-radius: 1.5em;
    padding: 2em;
    box-shadow: rgba(145, 144, 144, 0.1) 0px 0px 5px 0px,
      rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    thead tr td {
      padding: 2em 1em;
    }
    tbody tr td {
      padding: 2em 0;
    }
    .row {
      background-color: var(--blue-50);
      color: var(--blue-500);
      font-size: 13px;
      padding: 8px 12px;
      border-radius: 10px;
    }
    .status {
      background-color: var(--red-50);
      color: var(--red-500);
    }
    .action {
      .link {
        display: flex;
        align-items: center;
        gap: 0.5em;
        background-color: transparent;
        color: var(--blue-500);
        font-size: 13px;
        padding: 8px 12px;
        border-radius: 10px;
        border: none;
        outline: none;
        cursor: pointer;
        transition: 0.4s;
        &:hover {
          background-color: var(--blue-50);
        }
        .icon {
          width: 18px;
          height: 18px;
        }
      }
    }
  }
  table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    color: var(--gray-500);
    font-weight: normal;
  }
  .pagination-box {
    margin-top: 2em;
    .pagination-bar:deep(.active) {
      background-color: var(--blue-500);
    }
  }
}
</style>
