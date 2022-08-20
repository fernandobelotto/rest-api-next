import cors from 'cors'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextApiHandler } from 'next-server/dist/server/utils'
import { createRouter} from 'next-connect'

const router = createRouter<NextApiRequest, NextApiResponse>()

router
.use(expressWrapper(cors()))
.use(async (req, res, next) => {
    const start = Date.now();
    await next(); // call next in chain
    const end = Date.now();
    console.log(`Request took ${end - start}ms`);
  })


  .get((req, res) => {

    res.json(req.body)
  })

  .post((req, res) => {})
  .put((req, res) => {})
  .patch((req, res) => {})
  .delete((req, res) => {})


  export default router