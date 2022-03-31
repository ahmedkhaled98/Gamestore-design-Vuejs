<template>

    <div class="container-fluid  bg-white pt-3">
        <div class="row">
            <div class="col-sm-6 col-md-6 col-lg-12 ">
<ul class="scroll pt-2">
  <li class="list-item"><button class="btn1 btn-light">actions</button></li>
  <li class="list-item"><button class="btn1 btn-light">actions</button></li>
  <li class="list-item"><button class="btn1 btn-light">actions</button></li>
  <li class="list-item"><button class="btn1 btn-light">actions</button></li>
  <li class="list-item"><button class="btn1 btn-light">actions</button></li>
  <li class="list-item"><button class="btn1 btn-light">actions</button></li>
  <li class="list-item"><button class="btn1 btn-light">actions</button></li>
  <li class="list-item"><button class="btn1 btn-light">actions</button></li>
  <li class="list-item"><button class="btn1 btn-light">actions</button></li>
  <li class="list-item"><button class="btn1 btn-light">actions</button></li>
  <li class="list-item"><button class="btn1 btn-light" id="sport">actions &radic;</button></li>
  <li class="list-item"><button class="btn1 btn-light">actions</button></li>
  <li class="list-item"><button class="btn1 btn-light">actions</button></li>
  <li class="list-item"><button class="btn1 btn-light">actions</button></li>
  <li class="list-item"><button class="btn1 btn-light">actions</button></li>
  <li class="list-item"><button class="btn1 btn-light">actions</button></li>
  <li class="list-item"><button class="btn1 btn-light">actions</button></li>
  <li class="list-item"><button class="btn1 btn-light">actions</button></li>
  <li class="list-item"><button class="btn1 btn-light">actions</button></li>
  <li class="list-item"><button class="btn1 btn-light">actions</button></li>
  <li class="list-item"><button class="btn1 btn-light">actions</button></li>

</ul>
          </div>
        </div>
    </div>
    <div class="bd">
    <div  class="container pt-5">
     <div class="row justify-content-center">
               <div class="col-lg-6  col-md-8 col-sm-12">
                   <div class="card mb-3">
  <img src="@/assets/Bitmap.png" class="card-img-top" alt="..." style="height:100%" >
   </div>
      </div>

       <div class="col-lg-3 col-md-4  col-sm-12 p-0">
             <div class="card" style="height: 95%; border:none;">
  <div class="card-body bg-white">
    <h3 class="card-title pb-2">{{toys[0].name}}</h3>
    <h5 class="card-text pb-2"> {{toys[0].description}}</h5>
    <h5 class="card-text pb-2"> {{toys[0].details}}</h5>
    <p class="card-text pb-2"><small class="text-muted"> {{+toys[0].players +"k downloads"}}</small></p>
    <router-link  class="btn btnn" :to="`/details/${toys[0].id}`">MORE INFO</router-link>
  </div>        
   </div>
      </div>
     </div>
    </div>

    <div class="container p-3  ml-5 mt-5 sec2" style="width:64%">
        <div class="row justify-content-center"> 
        <h4 class="mb-3">Most Recommendation </h4>
    <div class="col-lg-3 col-md-6 col-sm-12" v-for="toy of toys" :key=toy.id>   
    <div v-if="toy.type=='popoular'"> 
    <div class="card" style="width:100%; border:none;" >
  <img src="@/assets/toy2.jpg" class="card-img-top rounded" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{toy.name}}</h5>
    <p class="card-text">{{toy.description}}</p>
    <router-link  class="btn btnn" :to="`/details/${toy.id}`">MORE INFO</router-link>
  </div>
    </div>
    </div>
    </div>
   </div>   
</div>
    

    <div class="container p-3 mb-3 sec2 mt-5 " style="width:64%">
        <div class="row  justify-content-center"> 
        <h4 class="mb-3">Most Popular </h4>
    <div class="col-lg-3  col-md-6  col-sm-12" v-for="toy of toys" :key=toy.id>   
        <div v-if="toy.type=='recom'"> 
    <div class="card" style="width: 100%; border:none;" >
  <img src="@/assets/toy2.jpg" class="card-img-top rounded" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{toy.name}}</h5>
    <p class="card-text">{{toy.description}}</p>
    <router-link  class="btn btnn ml-5" :to="`/details/${toy.id}`">MORE INFO</router-link>
  </div>
  
  
  </div>
  </div>
  </div>
   </div>   
</div>
    
    </div>
  
  



</template>

<script>
import axios from 'axios'
    export default {
        name:'homeCOMP',
        data(){
        return {
          toys:[],
        
            } },
        created(){
                this.gettoys()
            },
    
      methods:{
         gettoys(){
            axios.get('http://localhost:3000/toys')
            .then(res=>{
               this.toys=res.data
              
            })
            .catch(error=>{
                console.log(error)
            })
         },

    },
}
</script>

<style scoped>
.btn{
    border:1px solid #a1a1a1;
    border-radius: 4px;
    width: 100%;
}

.btn1{
    border:1px solid #a1a1a1;
    border-radius: 20px;
    
}
#sport{
    color:aliceblue;
    background-color: rgb(118, 71, 163);
}

.list-item {
  /* width: 200px;
  height: 100%; */
  /* background: rgba(255, 0, 0, 0.1); */
  margin-left: 10px;
  display: inline-block;
}

.scroll { 
  height: 10vh;
  overflow-x:scroll;
  overflow-y: hidden;
  white-space: nowrap;
  width: auto;
}
::-webkit-scrollbar{width:2px;height:2px;}
::-webkit-scrollbar-button{width:2px;height:2px;}
.btnn{
  background-color: #572589;
  color:aliceblue
}
.sec2{
  background-color: #ffffff;
  padding: 0;
  box-shadow: #f5f5f5;
  border-radius:1% ;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.bd{
  background-color: #f5f5f5;
}

</style>