import mongoose from 'mongoose'
import UserSchema from './userSchema'
import plansSchema from './planschema'
import AdminSchema from './adminSchema'

const subscription={
    userId: { 
        type: mongoose.Schema.Types.ObjectId, ref: UserSchema
     },
     adminId: { 
        type: mongoose.Schema.Types.ObjectId, ref: AdminSchema
     },
    Plans:{
        type: mongoose.Schema.Types.ObjectId, ref: plansSchema
    }
}

const subscriptionsSchema=mongoose.model('subscriptions',subscription)

export default subscriptionsSchema