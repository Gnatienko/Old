





const test = {message:'Woferfrk2'};

class ProcessController {
    async process(req, res){
        res.status(200).json(test)
    }
    
}



module.exports = new ProcessController()




