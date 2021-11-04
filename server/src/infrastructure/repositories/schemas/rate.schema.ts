import { ObjectId } from 'bson';
import { Schema } from 'mongoose';

const RateSchema = new Schema({
  technology: {
    type: {
      _id: ObjectId,
      name: String,
    },
  },
  seniority: { type: String },
  language: { type: String },
  averageSalary: { type: String },
  grossMargin: { type: String },
  currency: { type: String },
});

export default RateSchema;
