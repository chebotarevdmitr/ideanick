import express from 'express'
import * as trpcExpress from "@trpc/server/adapters/express"
import { trpcRouter } from './trpc'


const expressApp = express()
expressApp.get('/ping',(req,res) => {
  res.send('pong')
})


expressApp.use('/tprc',trpcExpress.createExpressMiddleware({
  router: trpcRouter,
}))

expressApp.listen(3000,() =>{
  console.info("Listenig at http://localhost:3000")
} )