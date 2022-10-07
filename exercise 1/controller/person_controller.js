const dataPerson = require('../data/person.json')

function getPerson(req, res){  
   try{
    res.status(200).json(dataPerson)
   }catch(e){
    res.status(400).json({
      message: e.message,
      data: []
    })
   }
}

function postPerson(req, res){
  const {body} = req
  try{
    dataPerson.push(body)
    res.status(200).json({
      message: "Your data person successfully posted",
      data: body,
    })
  }catch(e){
    res.status(400).json({
      message: e.message,
      data: []
    })    
  }
}

function deletePerson(req,res){
  const {id} = req.params
  try{
    const updatedPerson = dataPerson.filter((person) => person.id != id)
    res.status(200).json({
      message: "Person successfully delete",
      data: updatedPerson
    })
  }catch(e){
    res.status(400).json({
      message: e.message,
      data: []
    })
  }
}

function putPerson(req, res){
  const {id} = req.params
  try{
    dataPerson.map(person => person.id === id && req.body)
    res.status(200).json({
      message : "Person successfully updated",
      data: req.body
    })
  }catch(e){
    res.status(400).json({
      message: e.message,
      data: []
    })
  }
}

module.exports = {getPerson, postPerson, putPerson, deletePerson}