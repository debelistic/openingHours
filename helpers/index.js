const moment = require('moment')

exports.format = (mockData) => {
  const days = Object.keys(mockData).map((day) => day.charAt(0).toUpperCase() + day.slice(1))

  const hours = Object.values(mockData).map((day) => {
    if (day.length === 0) return 'Closed'
    if (day.length === 2) {
      return `${moment(new Date(day[0].value)).format('hh:mm A')} - ${moment(new Date(day[1].value)).format('hh:mm A')}`
    }
    let moreRes = ''
    day.forEach((item, index) => {
      if (item.type === 'close') {
        moreRes = moreRes.concat(` - ${moment(new Date(item.value)).format('hh:mm A')}${index + 1 === day.length ? '.' : ','}`)
      } else {
        moreRes = moreRes.concat(` ${moment(new Date(item.value)).format('hh:mm A')}`)
      }
    })

    return moreRes
  })

  // console.log(hours)
  const nowRes = days.map((day, index) => `${day}: ${hours[index]}`)
  return nowRes
}
