<script setup lang="ts">
// import { columns } from "./helpers";

const search = ref();

const columns = [
  { label: "", accessor: "id" },
  { label: "Name", accessor: "name" },
  { label: "Created At", accessor: "created_at" },
];

const data = [
  {
    id: "0",
    first_name: "Do3nbol",
    created_at: "22-05-2023",
  },
];
</script>
<template>
  <div class="product-list">
    <div class="product-box">
      <div class="product-filter">
        <Input v-model="search" placeholder="Search by product name..." />
        <div class="actions">
          <PrimaryButton>
            Search
          </PrimaryButton>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th v-for="column in columns">
              {{ column.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, i) in data" :key="i">
            <td>{{ row.id }}</td>
            <td>{{ row.first_name }}</td>
            <td>{{ row.created_at }}</td>
          </tr>
        </tbody>
      </table>
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
  }

  table tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  // table tr:hover {background-color: #ddd;}

  table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    // background-color: #04aa6d;
    color: var(--gray-500);
    font-weight: normal;
  }
}
</style>
