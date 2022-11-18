import mongoose from 'mongoose'
import UserSchema from './userSchema'

const plans={
   planName:{
    type:String,
    default:true
   },
   planRate:{
    type:String,
    default:true
   }
}

const plansSchema=mongoose.model('Plans',plans)

export default plansSchema