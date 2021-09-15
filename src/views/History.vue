<template>
<div class="container ">
<h1 class="mb-3">History</h1>
    <div class="mb-2 m-1">
      <form @submit.prevent="searchForms">
        <input
          class="p-2"
          type="date"
          v-model.lazy="date"
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
        <th scope="col">Sr no</th>
        <th scope="col">Time</th>
        <th scope="col">Office wing</th>
        <th scope="col">Electric Reading</th>
        <th scope="col">DG Reading</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(Reading,idx) in Readings" :key="idx">
        <td>{{idx+1}}</td>
        <td>{{Reading.time}}</td>
        <td>{{wing}}</td>
        <td>{{Reading.electricReading}}</td>
        <td>{{Reading.DGReading}}</td>
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
import MQL from '@/plugins/mql.js'

export default {
    name: 'History',
    data(){
      return{
        Readings:[],
        date:'',
        wing:''
      }        
    },   
  methods:{
    GetAllRequests(){
      console.log("date",this.date)
       new MQL()        
        .setActivity('o.[query_1yA3RN7LyOo90lRteIChDYGcha1]')
        .setData({
          fetchId: '1yA3RN7LyOo90lRteIChDYGcha1',
          date:this.date          
        })
        .enablePageLoader(false)
        .fetch()
        .then((rs) => {
          // console.log(rs);
          let res = rs.getActivity('FetchQueryData', true)
          // console.log(rs.getActivity("FetchQueryData", true));
          console.log(res);
          const queryId = Object.keys(res.result)[0]
          if (res.result[queryId] !== null) {
            this.Readings = res.result[queryId][0].Readings
            this.wing = res.result[queryId][0].wing
            console.log(this.Readings)
          } else {
            this.Readings = []
          }
          // console.log(formData)
        })
    },
    searchForms () {
      this.GetAllRequests()
      console.log('in search')
    },
  }
}
</script>