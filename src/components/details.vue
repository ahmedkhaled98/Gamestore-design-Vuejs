<template>
  <div class="bd">
      <div  class="container  pt-5">
     <div class="row justify-content-center">
               <div class="col-lg-8  col-md-12  col-sm-12 " >
                   <div class="card mb-3">
       <img src="@/assets/Bitmap.png" class="card-img-top" alt="..." style="height:300px" >
   </div>
      </div>
      </div>
      </div>

    <div class="container pt-5 p-0" style="width:55%">
    <div class="row justify-content-center sec1">
    <div class="col-lg-12  col-md-8  col-sm-12" >    
    <div class="card-body ">
    <h5 class="card-title">{{name}}</h5>
    <h6 class="card-subtitle mb-2 ">Card subtitle</h6>
    <h6 class="card-subtitle mb-2 text-muted">{{players +"k downloads"}}</h6><br>
    <h5 class="card-text"> {{description}}</h5> 
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h6 class="card-text"> <img src="@/assets/purple-star-hi.png" style="height:15px">{{details}}</h6>
    <h6 class="card-text"> <img src="@/assets/purple-star-hi.png" style="height:15px">Some quick example text to build on the card title and make up the bulk</h6>
   
    <p class="card-text pcolor" >Read more</p>
    
  </div>
  </div>
  </div>
  </div>
   
   <div class="container pt-5 pb-5" style="width:60%">
        <div class="row sec2 pb-3 "> 
        <h4 class="pt-3">Most Popular </h4>
    <div class="col-lg-3  col-md-6  col-sm-12" v-for="toy of toys" :key=toy.id>   
        <div v-if="toy.type=='popoular'"> 
    <div class="card" style="width: 100%; border:none;" >
  <img src="@/assets/toy2.jpg" class="card-img-top rounded" alt="...">
  
  <div class="card-img-overlay">
    <div class="rate">  
    <img src="@/assets/purple-star-hi.png" style="height:15px">
    <p  style="display:inline;" class="card-text">4.9</p>
    </div>
  </div>

  <div class="card-body">
    <h5 class="card-title">{{toy.name}}</h5>
    <p class="card-text">{{toy.description}}</p>
    <router-link href="#" class="btn" :to="`/details/${toy.id}`">MORE INFO</router-link>
    <h5 class="card-title text-muted mt-3">for android only</h5>
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
        name:'detailsComp',
        data(){
     return {
     id:'',
     name:'',
     description:'',
     players:'',
     details:'',
     toys:[],
     }},
     created(){
       this.getbyid(),
       this.gettoys()
     },
     methods:{

     getbyid(){
     this.id=this.$route.params.id
     axios.get(`http://localhost:3000/toys?id=${this.id}`).
     then(res=>{
        console.log(res.data)
        for (let i = 0; i < res.data.length; i++) {
             this.name=res.data[i].name
             this.description = res.data[i].description
             this.players =res.data[i].players
             this.details =res.data[i].details
          } 
          } )
        .catch(error=>{
            console.log(error)
        })
     },
     gettoys(){
            axios.get('http://localhost:3000/toys')
            .then(res=>{
               this.toys=res.data
              
            })
            .catch(error=>{
                console.log(error)
            })
         },
    } }
</script>

<style scoped>
.pcolor{
  color:rgb(139, 99, 177);
}
.btn{
  background-color: #572589;
  color:aliceblue;
   border-radius: 4px;
    width: 100%;
}
.rate{
  background-color: aliceblue;
  width: fit-content;
  border-radius: 5px;
  padding: 2px;
}
.sec1{
  background-color: #ffffff;
  padding: 0;
  box-shadow: #f5f5f5;
  border-radius:1% ;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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