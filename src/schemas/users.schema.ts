import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({ timestamps: true })
export class Users {
  @Prop({ type: Types.ObjectId, ref: 'Compaines', required: true })
  company: Types.ObjectId;

  @Prop({ type: String, required: true, unique: true })
  _uniqueId: string;

  @Prop({ type: String, required: true })
  uniqueId: string;

  @Prop({ type: Types.ObjectId, ref: 'Events', required: true })
  event: Types.ObjectId;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  email: string;

  @Prop({ type: String, default: '' })
  phone: string;

  @Prop({ type: String, default: '' })
  country: string;

  @Prop({ type: String, default: '' })
  city: string;

  @Prop({ type: String, default: '' })
  org: string;

  @Prop({ type: String, default: '' })
  role: string;

  @Prop({ type: String, default: '' })
  ticketType: string;

  @Prop({ type: String, default: '' })
  dietary: string;

  @Prop({ type: String, default: '' })
  accessibility: string;

  @Prop({ type: String, default: '' })
  emergencyName: string;

  @Prop({ type: String, default: '' })
  emergencyPhone: string;

  @Prop({ type: Boolean, default: false })
  marketingOptIn: boolean;

  @Prop({ type: Boolean, default: false })
  consent: boolean;

  @Prop({ type: String, default: '' })
  notes: string;

  @Prop({ type: Object, default: {} })
  custom: any;

  @Prop({ type: Boolean, default: false })
  deleted: boolean;
}

export const UsersSchema = SchemaFactory.createForClass(Users);

// {
//     "eventId": "evt_12345",
//     "firstName": "Asha",
//     "lastName": "Patel",
//     "email": "asha.patel@example.com",
//     "phone": "+1-415-555-0134",
//     "country": "United States",
//     "city": "San Francisco",
//     "organization": "Mano Foundation",
//     "role": "Attendee",
//     "ticketType": "General Admission",
//     "attendanceDate": "2025-04-12",
//     "dietary": "Vegetarian",
//     "accessibility": "None",
//     "emergencyName": "Ravi Patel",
//     "emergencyPhone": "+1-415-555-0188",
//     "contactMethod": "email",
//     "marketingOptIn": true,
//     "consent": true,
//     "notes": "Arriving early for workshop.",
//     "custom": {
//       "T-Shirt Size": "M",
//       "Needs Parking Pass": true
//     }
//   }
