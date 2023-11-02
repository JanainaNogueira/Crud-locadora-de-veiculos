import express from 'express'
const routes = express();
routes.get('/',(req,res)=>{
     res.send("Ciclano fulano")
})

routes.listen(3000,()=>{
    console.log('exemplo')
})

export default routes