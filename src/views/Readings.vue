<template>
  <div class="container">
    <h1 class="mb-3">Readings</h1>
    <div class="mb-2 m-1">
      <form @submit.prevent="GetReadingDifference">
        <input class="p-2" type="date" v-model="date" />
        <input class="p-2" type="submit" value="Search!" />
      </form>
    </div>
    <table class="table text-center">
      <thead class="table-dark">
        <tr>
          <th scope="col">Date</th>
         
          <th scope="col">Electric Reading</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{date}}</td>
         
          <td>{{electricDifference}}</td>
         
        </tr>
      </tbody>
    </table>
    <p>Difference in electric reading: {{electricDifference}}</p>
  </div>
</template>

<style scoped>
th {
  font-weight: 500;
}
td {
  border: 1px solid black;
}
h1 {
  font-weight: 600;
}
</style>

<script>
import MQL from "@/plugins/mql.js";

export default {
  name: "History",
  data() {
    return {
      CurrentReadings: [],
      NextDayReadings: [],
      date: "",
      nextDate: "",
      electricDifference: null,
      dgsetDifference: null,
    };
  },
  methods: {
    async GetCurrentReading() {},
    async GetNextDayReading() {},
    searchForms() {
      this.GetAllReadings();
      //   console.log("in search");
    },
    async GetReadingDifference() {
      new MQL()
        .setActivity("o.[query_1yA3RN7LyOo90lRteIChDYGcha1]")
        .setData({
          fetchId: "1yA3RN7LyOo90lRteIChDYGcha1",
          date: this.date,
        })
        .enablePageLoader(false)
        .fetch()
        .then((rs) => {
          // console.log(rs);
          let res = rs.getActivity("FetchQueryData", true);
          // console.log(rs.getActivity("FetchQueryData", true));
          //   console.log(res);
          const queryId = Object.keys(res.result)[0];
          if (res.result[queryId] !== null) {
            // this.CurrentReadings = ;
            // this.wing = ;
            // this.electricReadingCurrent =
            //   this.CurrentReadings[0].electricReading;

            // this.dgsetReadingCurrent = this.CurrentReadings[0].DGReading;
            console.log(res.result[queryId][0].Readings);

            this.CurrentReadings = res.result[queryId][0].Readings;

            const currentDate = new Date(this.date);
            currentDate.setDate(currentDate.getDate() + 1);

            var month = currentDate.getMonth() + 1;
            if (month < 10) {
              month = "0" + month;
            }
            const year = currentDate.getFullYear();
            var day = currentDate.getDate();
            if (day < 10) {
              day = "0" + day;
            }

            this.nextDate = year + "-" + month + "-" + day;

            new MQL()
              .setActivity("o.[query_1yA3RN7LyOo90lRteIChDYGcha1]")
              .setData({
                fetchId: "1yA3RN7LyOo90lRteIChDYGcha1",
                date: this.nextDate,
              })
              .enablePageLoader(false)
              .fetch()
              .then((rs) => {
                let res = rs.getActivity("FetchQueryData", true);

                //   console.log(res);
                const queryId = Object.keys(res.result)[0];
                if (res.result[queryId] !== null) {
                  this.NextDayReadings = res.result[queryId][0].Readings;

                  console.log(this.CurrentReadings);
                  console.log(this.NextDayReadings);

                  this.electricDifference = this.NextDayReadings[0].electricReading - this.CurrentReadings[0].electricReading
                } else {
                  this.NextDayReadings = [];
                }
              });
          } else {
            this.CurrentReadings = [];
          }
        });

      // this.electricDifference =
    },
  },
};
</script>