import mongoose from "mongoose";
const { Schema } = mongoose;

export interface IProject {
  customer: String,
  name: String,
  id: String,
  languages: {isGerman: Boolean, isFrench: Boolean, isItalian: Boolean},
  quantities: {german: Number, french: Number, italian: Number},
  package: {isOuterenvelope: Boolean, isLetter: Boolean, isFlyer: Boolean, isBooklet: Boolean, isCards: Boolean},
  lettershopId: String,
  shippingProvider: {isPost: Boolean, isQuickmail: Boolean}
  shippingDate: Number
}



const projectSchema = new Schema({
  customer: {
    type: String,
    required: true,
  },
  project: {
    type: String,
    required: true,
  },
  languages: 
    type: Boolean,
    required: true,
  },
  quantities: {
    type: Number,
  },
});
