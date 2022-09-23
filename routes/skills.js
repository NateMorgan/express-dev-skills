import { Router } from 'express'
import * as skillsCtr from '../controllers/skills.js'

const router = Router()

/* GET users listing. */
router.get('/', skillsCtr.index)
router.get('/new', skillsCtr.new)
router.get('/:id', skillsCtr.show)
router.post('/', skillsCtr.create)
router.delete('/:id', skillsCtr.delete)
router.get('/:id/edit', skillsCtr.edit)
router.put('/:id', skillsCtr.update)

export {
  router
}
