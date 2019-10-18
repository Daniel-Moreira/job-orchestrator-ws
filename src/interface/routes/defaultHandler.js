
module.exports = async (event, context) => {
  console.log(event, context)

  return { statusCode: 400 }
}
