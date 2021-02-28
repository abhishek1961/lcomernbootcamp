const express=require('express')
const router=express.Router()

const {getCategoryById,createCategory,getCategory,getAllCategory,
    removeCategory,updateCategory}=require('../controllers/category')
    
const {isSignedin,isAuthenticated,isAdmin}=require('../controllers/auth')
const {getUserById}=require('../controllers/user')

// Params
router.param('userId',getUserById)
router.param('categoryId',getCategoryById)

// Routes
router.post('/category/create/:userId',isSignedin,isAuthenticated,isAdmin,createCategory)

router.post('/category/:categoryId',getCategory)
router.get('/categories',getAllCategory)

router.put('/category/:categoryId/:userId',isSignedin,isAuthenticated,isAdmin,updateCategory)

router.delete('/category/:categoryId/:userId',isSignedin,isAuthenticated,isAdmin,removeCategory)


module.exports=router