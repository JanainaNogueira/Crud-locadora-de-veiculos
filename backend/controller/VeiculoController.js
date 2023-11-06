const Veiculos = require('../models/veiculos.js')

module.exports={
    async createVeiculo(req,res){
        try{
            const {id,locadora,modelo,marca,ano,motor,portas ,cambio,ar_condicionado}=req.body
            const veiculos = await Veiculos.create({id,locadora,modelo,marca,ano,motor,portas ,cambio,ar_condicionado})
            res.status(200).json({veiculos})
            
        }catch(error){
            res.status(401).json({error , message:'não foi possivel criar o veiculo'})
        }  
   },
    async updateList(req,res){
    try{
        const cars = await Veiculos.findAll()
        res.status(200).json(cars)
        
    }catch(error){
        res.status(401).json({error, message:'não foi possivel atualizar a lista'})
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
        res.status(401).json({error, message:'não foi possivel procurar o veiculo'})
    }
   },
   async updateField(req,res){
    try{
      const {id} = req.params
        const {locadora,modelo,marca,ano,motor,portas ,cambio,ar_condicionado}=req.body
    
        const cars=await Veiculos.findOne({where:{id}})
        if(!cars){
            res.status(404).json({message:"Veiculo não encontrado"})
        }else{
            const carsUpdate= await Veiculos.update({locadora,modelo,marca,ano,motor,portas ,cambio,ar_condicionado},{where:{id}})
            res.status(200).json({message:"Veiculo atualizado"})
        }  
    }catch(error){
        res.status(500).json({error, message:'não foi possível atualizar'})
    }
    
},
   async deleteVeiculo(req,res,){
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
        res.status(401).json({error, message:'não foi possivel excluir o carro '})
    }
   }
}