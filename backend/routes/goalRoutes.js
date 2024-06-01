/*const express = require('express')
const router = express.Router()
const { 
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
 } = require('../controllers/goalController')

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(setGoal)
router.route('/:id').delete(protect, deleteGoal).put(updateGoal)
//router.get('/', getGoals)

/*router.get('/', (req, res)=> {
    //res.send('Get goals')
    //res.json({ message: 'Get goals'})
    res.status(200).json({ message: 'Get goals'})
})*/

//router.post('/', setGoal)

/*router.post('/', (req, res)=> {
    //res.send('Get goals')
    //res.json({ message: 'Get goals'})
    res.status(200).json({ message: 'Set goal'})
})*/

//router.put('/:id', updateGoal)

/*router.put('/:id', (req, res)=> {
    //res.send('Get goals')
    //res.json({ message: 'Get goals'})
    res.status(200).json({ message: `Update goal ${req.params.id}`})
})*/

//router.delete('/:id', deleteGoal)

/*router.delete('/:id', (req, res)=> {
    //res.send('Get goals')
    //res.json({ message: 'Get goals'})
    res.status(200).json({ message: `Delete goal ${req.params.id}`})
})

module.exports = router*/


const express = require('express')
const router = express.Router()
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)

module.exports = router