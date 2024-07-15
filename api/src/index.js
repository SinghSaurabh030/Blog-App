const express=require('express');
const app=express();

const setupAndStartServer= ()=>{
  app.listen(3000,()=>{
    console.log(`server connected`);
  })
}
setupAndStartServer();