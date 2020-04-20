const router  = require('express').Router();
//import orderController
const order = require('../controllers/orderController');

//place order function 
router.post('/place',order.place);
router.get('/edit/:id',order.edit);
router.patch('/update/:id',order.update);
router.delete('/delete/:id',order.delete);

router.patch('/updateStatus/:id',order.updateStatus);


//export router 
module.exports = router;