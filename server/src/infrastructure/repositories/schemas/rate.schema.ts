import { ObjectId } from 'bson';
import { Schema } from 'mongoose';
import TechnologySchema from './technology.schema';

const RateSchema = new Schema({
  _id: { type: ObjectId },
  technology: TechnologySchema,
  seniority: { type: String },
  language: { type: String },
  averageSalary: { type: String },
  grossMargin: { type: String },
  currency: { type: String },
});

RateSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (_doc, ret) {
    delete ret._id;
  },
});

export default RateSchema;
