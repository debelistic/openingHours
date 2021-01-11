const { format } = require('../helpers')

exports.HoursController = async (req, res) => {
  try {
    const { hours } = req.body
    if (!hours) return res.status(400).send({ status: 'error', statusCode: 400, message: 'enter opening hours' })
    const finData = format(hours)

    return res.status(200).send({
      status: 'success', statusCode: 200, message: 'success', data: finData,
    })
  } catch (error) {
    return res.status(500).send({ status: 'error', statusCode: 500, message: error.message })
  }
}
