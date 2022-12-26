import express from 'express'

const app = express()

app.listen(process.env.PORT || 3000, function() {
  console.log('listen on port:', this.address().port)
})

export default app
