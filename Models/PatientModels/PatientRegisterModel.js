import mongoose from "mongoose";


const PatientRegisterSchema = new mongoose.Schema({
  PatientName: { 
    type: String, 
    required: [true, "Patient name is required"], 
    trim: true 
  },
  PatientAge: { 
    type: Number, 
    required: [true, "Patient age is required"], 
    trim: true 
  },

  email: { 
    type: String, 
    trim: true, 
    lowercase: true, 
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'] 
  },

  contact: { 
    type: String, 
    required: [true, "Contact number is required"], 
    validate: { 
      validator: function(v) { 
        return /^\d{10}$/.test(v); 
      }, 
      message: props => `${props.value} is not a valid 10-digit phone number!` 
    } 
  },
 
},
 { timestamps: true });

 const PatientRegisterModel = mongoose.models.PatientRegisterModel || mongoose.model("PatientRegisterModel", PatientRegisterSchema);

 export default PatientRegisterModel;