const express =require('express')
const {Router} = require('express')
const VeiculoController =require('../controller/VeiculoController.js')

const routes = Router();
routes.post('/veiculos-create', VeiculoController.createVeiculo)
routes.get('/veiculos', VeiculoController.updateList)
routes.get('/veiculos/:id', VeiculoController.getVeiculo)
routes.put('/veiculos/:id', VeiculoController.updateField)
routes.delete('/veiculos/:id',VeiculoController.deleteVeiculo)

const app =express()
app.use('/',routes)
app.listen(3000,()=>{
    console.log('exemplo')
})

module.exports = routes
