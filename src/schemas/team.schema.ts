import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({ timestamps: true })
export class Teams {
  @Prop({ type: Types.ObjectId, ref: 'Compaines', required: true })
  company: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Events', required: true })
  event: Types.ObjectId;
  
  @Prop({ type: String, required: true, unique: true })
  _uniqueId: string;

  @Prop({ type: String, required: true })
  uniqueId: string;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  email: string;

  @Prop({ type: String, default: '' })
  phone: string;

  @Prop({ type: String, default: '' })
  role: string;

  @Prop({ type: String, default: '' })
  shift: string;

  @Prop({ type: String, default: '' })
  notes: string;

  @Prop({ type: String, default: '' })
  img: string;

  @Prop({ type: Object, default: {} })
  custom: any;

  @Prop({ type: String, default: 'ACTIVE' })
  status: string;

  @Prop({ type: Boolean, default: false })
  deleted: boolean;
}

export const TeamsSchema = SchemaFactory.createForClass(Teams);

// {
//     "eventId": "695c19200d9ac2fb55488f37",
//     "firstName": "Asha",
//     "lastName": "Patel",
//     "email": "asha.patel@mail.com",
//     "phone": "+971 50 222 0455",
//     "role": "Registration Desk",
//     "shift": "Morning",
//     "notes": "Any notes from volunteer",
//     "photo": "data:image/png;base64,...",
//     "custom": {
//       "tshirtSize": "M",
//       "isOnsite": true
//     }
//   }

// Volunteer List (request body for a list/search endpoint)

//   {
//     "page": 1,
//     "pageSize": 10,
//     "search": "",
//     "status": "all",
//     "shift": "all",
//     "sort": {
//       "field": "createdAt",
//       "direction": "desc"
//     }
//   }

//   Volunteer Details (request body for create/update)

//   {
//     "id": "V-2001",
//     "firstName": "Asha",
//     "lastName": "Patel",
//     "email": "asha.patel@mail.com",
//     "phone": "+971 50 44101",
//     "role": "Registration Desk",
//     "shift": "Morning",
//     "notes": "",
//     "photo": null,
//     "staffNotes": "",
//     "custom": {
//       "Language": "English",
//       "isTrained": true
//     },
//     "status": "active",
//     "createdAt": "2024-11-01T10:00:00.000Z",
//     "updatedAt": "2024-11-02T09:30:00.000Z"
//   }

//   Notes:

//   - status is "active" or "archived" (or omit/null in list filters to mean all).
//   - photo is a URL string or null.
//   - custom values are string | boolean | null.
//   - createdAt/updatedAt can be server-managed (omit in create).

//   If you want a different shape (query params instead of body, or separate create vs update vs patch),
//   tell me the exact endpoints and I’ll tailor it.
