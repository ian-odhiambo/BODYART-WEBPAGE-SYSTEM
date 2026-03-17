import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
      trim: true, // Removes whitespace
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true, // Ensures emails are stored in the right format
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    ageLimit: {
      type: String,
      required: true,
      enum: ['yes', 'no'], // Restricts to only these values
      //alternatively
      // type: Boolean,
      // required: true,
    },
    artist: {
      type: String,
      required: true,
      
    },
    // In your models/customer.js, update the gender field:
gender: {
    type: String,
    required: true,
    enum: ['male', 'female', 'other', 'prefer not to say'], 
},
    agreedToTerms: {
      type: Boolean,
      required: true,
      default: false,
      validate: {
        validator: function(v) {
          // Ensure terms are agreed to
          return v === true;
        },
        message: 'You must agree to the terms and conditions'
      }
    }
},
{
    timestamps: true,
  }
);

const Customer = mongoose.model("Customer", customerSchema);
export default Customer;