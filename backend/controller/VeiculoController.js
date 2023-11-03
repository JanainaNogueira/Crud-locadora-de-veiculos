const Veiculos = require('../models/veiculos.js')

module.exports={
    async createVeiculo(req,res){
        try{
            const {id,locadora,modelo,marca,ano,motor,portas ,cambio,ar_condicionado}=req.body
            const veiculos = await Veiculos.create({id,locadora,modelo,marca,ano,motor,portas ,cambio,ar_condicionado})
            res.status(200).json({veiculos})
        }catch(error){
            res.status(401).json({error})
        }
        
   },
   async updateList(req,res){
    try{
        const cars = await Veiculos.findAll()
        res.status(200).json(cars)
    }catch(error){
        res.status(401).json({error})
    }
   },
   async getVeiculo(req,res){
    const id = req.params.id
    try{
        const cars = await Veiculos.findByPk(id)

        if(!cars){
            res.status(401).json({message:'Veiculo não encontrado'})
        }else{
            res.status(200).json({cars})
        }
    }catch(error){
        res.status(401).json({error})
    }
   },
   async updateField(req,res){
    try{
      const {id} = req.params
        const {locadora,modelo,marca,ano,motor,portas ,cambio,ar_condicionado}=req.body
    
        const cars=await Veiculos.findOne({where:{id}})
        if(!cars){
            res.status(401).json({message:"Veiculo não encontrado"})
        }else{
            const cars= await Veiculos.update({locadora,modelo,marca,ano,motor,portas ,cambio,ar_condicionado},{where:{id}})
            res.status(200).json({cars})
        }  
    }catch(error){
        res.status(401).json({error})
    }
    
},
   async deleteVeiculo(req,res){
    try{
        const {id}=req.params
        const car = await Veiculos.findOne({where:{id}})
        if(!car){
            res.status(401).json({message:'Veiculo não encontrado'})
        }else{
            await Veiculos.destroy({where:{id}})
            res.status(200).json({ok:true})
        }
        
    }catch(error){
        res.status(401).json({error})
    }
   }
}