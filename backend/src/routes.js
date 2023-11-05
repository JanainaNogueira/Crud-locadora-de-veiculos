const express =require('express')
const cors=require('cors')
const router = express.Router()
const VeiculoController =require('../controller/VeiculoController.js')

router.post('/veiculos', VeiculoController.createVeiculo)
router.get('/veiculos', VeiculoController.updateList)
router.get('/veiculos/:id', VeiculoController.getVeiculo)
router.put('/veiculos/:id', VeiculoController.updateField)
router.delete('/veiculos/:id',VeiculoController.deleteVeiculo)


const app =express()
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  credentials: true,
}));
app.use(express.json())
app.use('/',router)
app.listen(3030,(req,res)=>{
})

module.exports = router
module.exports=app
