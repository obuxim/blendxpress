class BlogStatusController {
  index(req, res, id = null, payload = null) {
    return res.send(`index | ID: ${id} | Payload: ${payload}`)
  }
  show (req, res, id = null, payload = null) {
    return res.send(`show | ID: ${id} | Payload: ${payload}`)
  }

  update (req, res, id = null, payload = null) {
    return res.send(`update | ID: ${id} | Payload: ${payload}`)
  }

  destroy = (req, res, id = null, payload = null) {
    return res.send(`destroy | ID: ${id} | Payload: ${payload}`)
  }
}