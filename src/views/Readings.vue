<template>
<div class="container ">
<h1 class="mb-3">Readings</h1>
    <div class="mb-2 m-1">
      <form @submit.prevent="getReadings">
        <input
          class="p-2"
          type="date"
          v-model="date"
        >
        <input
          class="p-2"
          type="submit"
          value="Search!"
        >
      </form>
    </div>
    <table class="table text-center">
    <thead class="table-dark">
        <tr>
        <th scope="col">Date</th>
        <th scope="col">Office wing</th>
        <th scope="col">Electric Reading</th>
        <th scope="col">DG Reading</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>01/19/2021</td>
        <td>A</td>
        <td>1323</td>
        <td>54</td>
        </tr>
    </tbody>
</table>
</div>
</template>

<style scoped>
th{
    font-weight: 500;
}
td{
    border: 1px solid black;
}
h1{
    font-weight: 600;
}
</style>

<script>
export default {
    name: 'Readings',
    data:{
        Readings:[],
    },
}
</script>