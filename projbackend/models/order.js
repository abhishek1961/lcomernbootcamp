const mongoose=require('mongoose')
const {ObjectId}=mongoose.Schema

const productCartSchema=new mongoose.Schema({
    product:{type:ObjectId,ref:"Product"},
    name:String,
    count:Number,
    price:Number
})

const OrderSchema=new mongoose.Schema({
    products:[productCartSchema],
    transaction_id:{},
    amount:{type:Number},
    status:{type:String,default:"Received",enum:["Cancelled","Delivered","Shipped","Processing","Received"]},
    address:String,
    updatedtype:Date,
    user:{type:ObjectId,ref:"User"}
},{timestamps:true})

const Order=mongoose.model('Order',OrderSchema)
const ProductCart=mongoose.model('productCart',productCartSchema)

module.exports={Order,ProductCart}
 