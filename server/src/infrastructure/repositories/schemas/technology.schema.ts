import { ObjectId } from 'bson';
import { Schema } from 'mongoose';

const TechnologySchema = new Schema({
  _id: { type: ObjectId },
  name: { type: String },
});

TechnologySchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (_doc, ret) {
    delete ret._id;
  },
});

export default TechnologySchema;
