<script setup lang="ts">
const { data } = await useFetch('/api/products')

const search = ref();

const columns = [
  { label: "Name", accessor: "name" },
  { label: "Price", accessor: "price" },
  { label: "Status", accessor: "status" },
  { label: "Created At", accessor: "created_at" },
  { label: "Action", accessor: "action" },
];

const formatDate = (date: string) => {
  const formatted = new Date(date);

  return new Intl.DateTimeFormat("en-US").format(formatted);
}

const activeProduct = ref<number | null>(null);

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
        <Input v-model="search" placeholder="Search by product name..." />
        <div class="actions">
          <PrimaryButton>
            Search
          </PrimaryButton>
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
          <tr v-for="(row, i) in data?.response.data" :key="i">
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
                <Toggle v-model="activeProduct" />
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
    box-shadow: rgba(145, 144, 144, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
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
    .action:deep(.toggle[aria-checked=true]) {
      background-color: var(--blue-500);
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
