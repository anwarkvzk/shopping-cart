var express = require('express');
const { response } = require('../app');
const { route } = require('./user');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"I Phone 12",
      category:"Mobile",
      description:"This Phone made by Apple Company",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5D1y9HttB8BUiyr1sOxkxIPNklSelv51ybHVzhY8UgJgPgZvHNTXLaN55BXy2TcsJ0DGD7Dr5&usqp=CAc"
    },
    {
      name:"Samsung Galaxy A30s",
      category:"Mobile",
      description:"This Phone is very budget phone",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_yisu1OsohJnGoViGm2J01VFl0A_hpsRf8g&usqp=CAU"
    },
    {
      name:"One Plus 8",
      category:"Mobile",
      description:"This Phone is very good  smartphone",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSayTK0z1I2VqJnmSktdbX2xZxt_wIOLUztPQ&usqp=CAU"
    },
   {
     name:"Alexa",
     category:"Device",
     description:"This is a smart device",
     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSft1Iez8vRv9H4FfHEkimX-g0vao1o285JFg&usqp=CAU"
   }
  ]
  res.render('admin/view-products',{admin:true,products})
});

router.get('/add-product',function(req,res){
  // console.log(req,res); 
  res.render('admin/add-product')
}) 

router.post('/add-product',(req,res)=>{
  console.log(req.body);
  console.log(req.files.Image);
})

module.exports = router;
