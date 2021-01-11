// const mockData = require('../mockDB/hours.json')
const { format } = require('../helpers')

exports.HoursController = async (req, res) => {
  try {
    const data = req.body.hours
    const finData = format(data)

    return res.status(200).send({
      status: 'success', statusCode: 200, message: 'success', data: finData,
    })
  } catch (error) {
    return res.status(500).send({ status: 'error', statusCode: 500, message: error.message })
  }
}
