import { Router } from 'express'
import * as skillsCtr from '../controllers/skills.js'

const router = Router()

/* GET users listing. */
router.get('/', skillsCtr.index)
router.get('/new', skillsCtr.new)
router.get('/:id', skillsCtr.show)
router.post('/', skillsCtr.create)
router.delete('/:id', skillsCtr.delete)

export {
  router
}
