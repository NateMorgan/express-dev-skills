import { skills } from '../data/skills.js'

function index(req, res) {
  res.render('skills', {
    skills:skills
  })
}

export{
  index
}