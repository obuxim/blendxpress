const {snake_to_camel} = require('./helpers.js')

module.exports = ((req, res) => {
  let params = req.params[0].split('/')
  params = params.filter(param => param != '')
  let [route_model, action, id, payload] = params
  if(typeof action === 'undefined' || action === ''){ action = 'index'; }
  const modelName = snake_to_camel(route_model)
  const controllerName = `${modelName}Controller`
  try{
    const controller = require(`./Controllers/${controllerName}`)
    return eval(`controller.${action}`)(req,res,id,payload)
  }catch(error){
    res.send('Controller not found!')
  }
})