const express=require('express')
const router=express.Router()

const {isSignedin,isAuthenticated,isAdmin} = require('../controllers/auth')
const {getUserById, pushOrderInPurchaseList} = require('../controllers/user')
const {updateStock, getAllUniqueCategories} = require('../controllers/product')

const {getOrderById,createOrder,getAllOrders,getOrderStatus,updateStatus} = require('../controllers/order')

// params
router.param("userId",getUserById)
router.param("orderId",getOrderById)


// routes
router.post("/order/create/:userId",isSignedin,isAuthenticated,pushOrderInPurchaseList,updateStock,createOrder)

router.get("/order/all/:userId",isSignedin,isAuthenticated,isAdmin,getAllOrders)

router.get("/order/status/:userId",isSignedin,isAuthenticated,isAdmin,getOrderStatus)
router.put("order/:orderId/status/:userId",isSignedin,isAuthenticated,isAdmin,updateStatus)

module.exports=router