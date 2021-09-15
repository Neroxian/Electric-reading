<template>
  <div class="home container">
    <div class="text-center mb-3"><h1>Electricity Power Consumption</h1></div>
    <form class="main">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12 col-12">
          <label  class="form-label">Date</label>
          <input type="date" class="form-control" >
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-12">
          <label class="form-label">Time</label>
          <input type="time" class="form-control" >
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-12">
          <label class="form-label">Office wing</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Choose office</option>
            <option value="A">A wing</option>
            <option value="B">B wing</option>
          </select>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-6 col-md-6 col-sm-12 col-12">
          <label  class="form-label">Enter Electrical Reading :</label>
          <input type="text" class="form-control" >
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-12">
          <label  class="form-label">Enter DG Reading :</label>
          <input type="text" class="form-control" >
        </div>
      </div>
    </form>
    <div class="text-center m-2"><button class="btn btn-success">Add</button></div>
    <!-- <div class="row mt-2 p-3">
        <div class="col-lg-6 col-md-6 col-sm-12 col-12">
          <p>Current day Electricity unit Consumption : ___</p>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-12">
          <p>Current day DG unit Consumption : ___</p>
        </div>
      </div> -->
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style>
.main{
  padding: 2rem;
}
h1{
  font-weight: 600;
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
