import {z} from 'zod';
import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const runtime = 'nodejs'

const app = new Hono().basePath('/api')

app
.get('/hello', (context) => {
  return context.json({
    message: 'Hello Next.js!',
  })
})
.get('/hello/:test', zValidator("param" , z.object({test : z.string()})) , (context)=>{

    let {test} = context.req.valid("param")
    return context.json({testid: test}) 

})

export const GET = handle(app)
export const POST = handle(app)