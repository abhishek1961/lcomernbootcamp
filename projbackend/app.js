require('dotenv').config()
const mongoose=require('mongoose')
const express=require('express')
const app=express()
const path=require('path');
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')
const cors=require('cors')
const router=express.Router()


const authRoutes=require('./routes/auth')
const userRoutes=require('./routes/user')
const categoryRoutes=require('./routes/category')
const productRoutes=require('./routes/product')
const orderRoutes=require('./routes/order')
const paymentBRoutes=require('./routes/paymentb')


// DB Connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,useUnifiedTopology:true,useCreateIndex:true
}).then(()=>{
     console.log('db connected')
 }).catch((err)=>{
     console.log('get some error')
})

// Middelware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// My Routes
app.use('/api',authRoutes);
app.use('/api',userRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);
app.use('/api',orderRoutes);
app.use('/api',paymentBRoutes);


app.use(express.static(__dirname+'/public'));

app.get('*',(req,res,next)=>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
    // res.send('First Angular 6 Application');
})




// PORT
const port =process.env.PORT || 8000

app.listen(port,()=>{
    console.log(`app is running at ${port}`)
})