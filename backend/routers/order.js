const router  = require('express').Router();
//import orderController
const order = require('../controllers/orderController');
const auth = require('../middleware/auth');


//Define Route Here...
router.post('/place',auth,order.place);
router.get('/edit/:id',auth,order.edit);
router.patch('/update/:id',auth,order.update);
router.delete('/delete/:id',auth,order.delete);

router.post('/get-orders',auth,order.ordersUser);

router.patch('/updateStatus/:id',order.updateStatus);//Admin AUTH REQUIRED


//export router 
module.exports = router;