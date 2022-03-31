<template>
 <div class="container-fluid bg-white">
        <div class="row">
           
   <ul class="nav "> 
    <div class="col-sm-1 offset-3 ">
  <li class="nav-item brand">
    <a class="navbar-brand" href="/home" >
      <img src="@/assets/Logo_4.png" alt="" style="height:70px">
    </a>
  </li>
  </div>

  <div class=" col-sm-1 offset-3 pl-5" >
  
 <li class="nav-item dropdown pt-3 ">
       <img src="@/assets/loupe.png" alt="" style="height:15px" class="nav-item dropdown-toggle " 
       data-bs-toggle="dropdown"  role="button" aria-expanded="false"> 
    <ul class="dropdown-menu"> 
      <li class="p-4">
         <input type="text" placeholder="Search...">
          </li>
    </ul>
 </li>
  </div>
  <div class="col-sm-4">
  
  <li class="nav-item dropdown pt-3">
       <img src="@/assets/more.png" alt="" style="height:15px" class="nav-item dropdown-toggle" 
       data-bs-toggle="dropdown"  role="button" aria-expanded="false"> 
    <ul class="dropdown-menu p-5">
        
      <li>
          <p  class="dropdown-item text-muted">Please add your account details</p>
          </li>
     <label for="name" class="form-label dropdown-item">username/email</label>
      <li>
           
          <input type="text" id="name" placeholder="Type your username here" class="form-control dropdown-item inp">
          </li>
      <li>
          <label for="pass" class="form-label dropdown-item">password</label>
          </li>
      <li>
          <input type="password" id="pass" placeholder="type your password" class="form-control dropdown-item inp">
          </li>
      <li>
          <p class=" d-flex justify-content-end dropdown-item pcolor">
         Forget password?</p>
          </li>
      <li>
          <button type="button" class="btn btnn">LOGIN</button>
          </li>
      <li>
         <p class="dropdown-item pcolor">Dont have an account? sign up!</p>
          </li>   
    </ul>
  </li>
  </div>

  
        
   </ul>
          
        </div>
 </div>
</template>

<script>
    export default {
        name:'navCom',
        data(){
            return{
        entertext:false}
        },
        methods:{
         enterinput(){
          this.entertext=!this.entertext  
         }
        }
    }
</script>

<style scoped>
/* .brand{
    margin-right: 50%;
    margin-left: 10%;
} */
.btnn{
  background-color: rgb(139, 99, 177);
  color:aliceblue;
}
.pcolor{
  color:rgb(139, 99, 177);
}
button{
    width: 100%;
}
.inp {
    border:none;
    border-bottom: 1px solid #9f18ff;
    padding: 5px 10px;
    outline: none;
 }
</style>