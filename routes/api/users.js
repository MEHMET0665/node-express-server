const  express=require('express')
let users= require('../../UsersData')
const router=express.Router();

router.get('/', (req, response)=>{
 
  response.json(users)
})
router.get('/:id', (req, response)=>{
 if (users.some((user) => user.id === parseInt(req.params.id))){ 
   response.json(users.filter((user) => user.id === parseInt(req.params.id)))
  } else
   {
   response.send('user is not found')
 }
 
})

router.post('/', (req, response)=>{
  const newUser = {
    id: Date.now(),
    name: req.body.name,
    email: req.body.email,
  };
  users=[...users,newUser]
  response.json(users)
  
})

router.put('/:id', (req, res)=>{
  users.forEach((user) => {
    if (user.id === parseInt(req.params.id)) {
      user.name = req.body.name ? req.body.name : user.name;

      user.email = req.body.email ? req.body.email : user.email;

      res.json({ msg: "User updated", user });
    }
  });
 })
 router.delete('/:id', (req, response)=>{
  if (users.some((user) => user.id === parseInt(req.params.id))){ 
    response.json(users.filter((user) => user.id !== parseInt(req.params.id)))
   } else
    {
    response.send('user is not found')
  }
  
 })
module.exports =router