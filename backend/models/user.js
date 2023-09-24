import {Schema, model} from "mongoose";

const userSchema = Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
  
})

// Create a unique index on 'email' field to enforce uniqueness of email field.
// making unique: true alone does not enforce it.
userSchema.index({ email: 1 }, { unique: true });

userSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

userSchema.set('toJSON', {
  virtuals: true,
});

const User = model("User", userSchema, 'users')
export default User