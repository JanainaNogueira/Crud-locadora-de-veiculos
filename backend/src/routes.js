const express =require('express')
const cors=require('cors')
const {Router} = require('express')
const VeiculoController =require('../controller/VeiculoController.js')

const routes = Router();
routes.post('/veiculos', VeiculoController.createVeiculo)
routes.get('/veiculos', VeiculoController.updateList)
routes.get('/veiculos/:id', VeiculoController.getVeiculo)
routes.put('/veiculos/:id', VeiculoController.updateField)
routes.delete('/veiculos/:id',VeiculoController.deleteVeiculo)


const app =express()
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  credentials: true
}));

app.use('/',routes)
app.listen(3030,()=>{
    console.log('exemplo')
})

module.exports = routes
