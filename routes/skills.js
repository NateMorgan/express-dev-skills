import { Router } from 'express'
import * as skillsCtr from '../controllers/skills.js'

const router = Router()

/* GET users listing. */
router.get('/', skillsCtr.index)

export {
  router
}
