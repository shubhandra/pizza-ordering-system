const Order = require("../Models/orderModel");
const User = require('../models/userModel')



//place Order Function Start Here..
exports.place = async (req, res) => {
    
//   const newOrder = new Order({
//     qty: req.body.qty,
//     size: req.body.size,
//     order_amount: req.body.order_amount,
//     payment_method: req.body.payment_method,
//     delivery_address: req.body.delivery_address,
//     userId: req.user._id,
//     status:req.body.status
//   });

    const objPizza = req.body;

    const objPizzabody = objPizza.map(x => new Order(x));

  try {
   
    const addOrder = await Promise.all(objPizzabody.map(x => x.save()));

    const findUser = await User.findById(req.user._id);
   
    const objects = addOrder.filter(x => { 
        findUser.orders.push(x);
    });

    await findUser.save();
    
  //  await addOrder.save();
    res.status(200).json({
      status: "Success",
      order: addOrder
    });

  } catch (err) {
    res.status(400).json({
      status: "fail",
    });
  }
};
//end order place function

//start edit order from user  side
exports.edit = async (req,res)=>{ 

    const getOrder = await Order.findById(req.params.id);  

    if (!getOrder) return res.status(400).json({
        status: 'fail',
        message: 'Order Not Found !'
    });

    try {
        res.status(200).json({
            status: 'success',
            Order: getOrder
        });

    } catch (err) {
        res.status(401).json({
            status: 'fail',
            Order: 'Order Not Found'
        });
    }
};

//Update order using orderId As Parameter
exports.update = async (req,res)=> {

    const getOrderUpdate = await Order.findOneAndUpdate(req.params.id, req.body, { new: true });

    console.log(getOrderUpdate);

    if (!getOrderUpdate) return res.status(400).json({
        status: 'Fail',
        message: 'Order Not Found Yet !'
    });

    try {
        res.status(200).json({
            status: 'Success',
            Message: 'Order Updated Successfully',
            data: getOrderUpdate

        });

    } catch (err) {
        res.status(401).json({
            status: 'fail',
            Message: 'Order Not Updated '
        });

    }
  
}
//end update

//Order delete function 
exports.delete = async (req, res) => {

    const findOrder = await Order.findByIdAndDelete(req.params.id);

    if (!findOrder) return res.status(400).json({
        status: 'Fail',
        message: 'Order Not Found !'

    });

    try {
        res.status(200).json({
            status: 'Success',
            Message: 'Order Deleted Successfully',
        });

    } catch (err) {
        res.status(400).json({
            status: 'Fail',
            Message: 'Order Not Deleted Yet'

        });

    }
}
//end delete function


//Update order status using orderId As Parameter
exports.updateStatus = async (req,res)=> {

    const getUpdateStatus = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!getUpdateStatus) return res.status(400).json({
        status: 'Fail',
        message: 'Order Not Found Yet !'
    });

    try {
        res.status(200).json({
            status: 'Success',
            Message: 'Status Updated Successfully',
            data: getUpdateStatus

        });

    } catch (err) {
        res.status(401).json({
            status: 'fail',
            Message: 'Status Not Updated '
        });

    }
  
}
//end update

//Get All orders Belong to User (Useing relationship one to many);
exports.ordersUser  =  async (req,res)=>{
       
    const userOrders = await User.findById(req.user._id).populate('orders');
    const getUserOrders = userOrders.orders;

    if (!userOrders) return res.status(400).json({
            status:'Fail',
            message:'No Orders Found'
    });

    try{ 
        
         res.status(200).json({ 
             success:'success',
             getUserOrders
         });

    }catch(err){ 

         res.status(200).json({ 
             success:'fail',
             message:'Not Orders Found'
         });
    }
}
//end here

///

exports.getAllOrders  =  async (req,res)=>{
       
    const allOrders = await Order.find();

    if (!allOrders) return res.status(400).json({
            status:'Fail',
            message:'No Orders Found'
    });

    try{ 
        
         res.status(200).json( 
             allOrders
        //      { 
        //      success:'success',
        //      allOrders
        //  }
         );

    }catch(err){ 

         res.status(200).json({ 
             success:'fail',
             message:'Not Orders Found'
         });
    }
}






