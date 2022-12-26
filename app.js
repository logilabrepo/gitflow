import express from 'express'

const app = express()

app.listen(3000, function() {
  console.log('listen on port:', this.address().port)
})

export default app
