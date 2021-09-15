<template>
  <div class="home container">
    <div class="text-center mb-3">
      <h1>Electricity Power Consumption</h1>
    </div>
    <form class="main">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12 col-12">
          <label class="form-label">Date</label>
          <input
            type="date"
            class="form-control"
            v-model.lazy="date"
          >
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-12">
          <label class="form-label">Time</label>
          <input
            type="time"
            class="form-control"
            v-model.lazy="time"
          >
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-12">
          <label class="form-label">Office wing</label>
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="wing"
          >
            <option selected>
              Choose office
            </option>
            <option value="A">
              A wing
            </option>
            <option value="B">
              B wing
            </option>
          </select>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-6 col-md-6 col-sm-12 col-12">
          <label class="form-label">Enter Electrical Reading :</label>
          <input
            type="text"
            class="form-control"
            v-model.number="electricReading"
          >
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-12">
          <label class="form-label">Enter DG Reading :</label>
          <input
            type="text"
            class="form-control"
            v-model.number="DgReading"
          >
        </div>
      </div>
    </form>
    <div class="text-center m-2">
      <button
        class="btn btn-success"
        @click="storeReading()"
      >
        Add
      </button>
    </div>
    <div class="row mt-2 p-3">
      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
        <p>Current day Electricity unit Consumption : ___</p>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
        <p>Current day DG unit Consumption : ___</p>
      </div>
    </div>
  </div>
</template>

<script>
import MQL from '@/plugins/mql.js'
import { v4 as uuidv4 } from 'uuid'
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
export default {
  name: 'Home',

  data () {
    return {
      date: '',
      time: '',
      electricReading: null,
      DgReading: null,
      wing: ''

    }
  },
  methods: {
    storeReading () {
      const month = MONTHS[parseInt(this.date.split('-')[1], 10) - 1]
      console.log(month)
      const year = this.date.split('-')[0]
      console.log(year)
      console.log(this.date)
      new MQL()
        .setActivity('o.[ElectricityPowerDailyReading]')
        .setData('ElectricityPowerDailyReading', {

          Readings: [
            {
              ReadingID: uuidv4(),
              DGReading: this.DgReading,
              electricReading: this.electricReading,
              time: this.time
            }
          ],
          date: this.date,
          wing: this.wing,
          month: month,
          year: year

        })
        .enablePageLoader(true)
        .showConfirmDialog(true)
        .fetch('a11')
        .then((res) => {
          // console.log(res)
          // let r = res.getRaw(true)
          // console.log(res.isValid())
          if(!res.isValid()){
               this.$toasted.success('Success full recorded.', {
              theme: 'bubble',
              position: 'top-center',
              duration: 5000
            })
          }
        
    })
    }
  }
}
</script>

<style>
.main{
  padding: 1rem;
}
h1{
  font-weight: 500;
}
.form-control:focus,.form-control:hover,.form-select:focus,.form-select:hover{
  box-shadow: none;
}
label{
  font-weight: 600;
}
p{
  font-weight: 500;
}
</style>
