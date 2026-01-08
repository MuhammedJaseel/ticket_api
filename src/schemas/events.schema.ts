import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({ timestamps: true })
export class Events {
  @Prop({ type: Types.ObjectId, ref: 'Compaines', required: true })
  company: Types.ObjectId;

  @Prop({ type: String, required: true, unique: true })
  _uniqueName: string;

  @Prop({ type: String, required: true })
  uniqueName: string;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, default: '' })
  clint: string;

  @Prop({ type: String, default: '' })
  date: string;

  @Prop({ type: String, default: '' })
  venue: string;

  @Prop({ type: String, default: '' })
  logo: string;

  @Prop({ type: String, default: '' })
  email: string;

  @Prop({ type: String, default: '' })
  phone: string;

  @Prop({ type: [], default: [] })
  ticketTypes: any[];

  @Prop({ type: Object, default: {} })
  badgeProfile: any;

  @Prop({ type: Object, default: {} })
  invitationSettings: any;

  @Prop({ type: Array, default: [] })
  hallAccess: any[];

  @Prop({ type: Array, default: [] })
  volunteerRoles: string[];

  @Prop({ type: Array, default: [] })
  shiftTemplates: any[];

  @Prop({ type: Object, default: {} })
  volunteerBadgeProfile: any;

  @Prop({ type: Array, default: [] })
  volunteerHallAccess: any[];

  @Prop({ type: Boolean, default: false })
  deleted: boolean;
}

export const EventsSchema = SchemaFactory.createForClass(Events);

// Event settings

//   {
//     "name": "Mano Summit",
//     "company": "Mano Management",
//     "date": "2024-11-18",
//     "venue": "Main Hall",
//     "logo": null,
//     "supportEmail": "support@mano.com",
//     "supportPhone": "+971 50 000 0000"
//   }

//   Participant settings

//   {
//     "ticketTypes": [
//       { "name": "General Admission", "price": 250 },
//       { "name": "VIP Access", "price": 600 }
//     ],
//     "badgeProfile": {
//       "layout": "horizontal",
//       "size": {
//         "mode": "preset",
//         "preset": "ID1",
//         "width": 85.6,
//         "height": 54,
//         "unit": "mm"
//       },
//       "accessLabelPosition": "pill",
//       "contents": {
//         "showEventName": true,
//         "showDateVenue": true,
//         "showOrg": true,
//         "showRole": true,
//         "showAccessLabel": true,
//         "showSupport": false,
//         "showEmail": false,
//         "showPhone": false,
//         "showPhoto": false,
//         "showShift": false
//       },
//       "backgroundImage": null,
//       "exportFormat": "jpg",
//       "pdfPaper": "a4",
//       "pdfGrid": { "columns": 3, "rows": 4, "margin": 0.25, "gap": 0.1 }
//     },
//     "invitationSettings": { "enabled": true, "expiryDays": 7 },
//     "hallAccess": [
//       {
//         "id": "hall-main",
//         "name": "Main Hall",
//         "allowedTickets": ["General Admission", "VIP Access"]
//       }
//     ]
//   }

//   Volunteer settings

//   {
//     "volunteerRoles": ["Registration Desk", "Hall Support"],
//     "shiftTemplates": [
//       { "name": "Morning", "start": "08:00", "end": "12:00" },
//       { "name": "Evening", "start": "16:00", "end": "20:00" }
//     ],
//     "volunteerBadgeProfile": {
//       "layout": "horizontal",
//       "size": {
//         "mode": "preset",
//         "preset": "ID1",
//         "width": 85.6,
//         "height": 54,
//         "unit": "mm"
//       },
//       "accessLabelPosition": "pill",
//       "contents": {
//         "showEventName": true,
//         "showDateVenue": true,
//         "showOrg": true,
//         "showRole": true,
//         "showAccessLabel": true,
//         "showSupport": false,
//         "showEmail": false,
//         "showPhone": false,
//         "showPhoto": true,
//         "showShift": true
//       },
//       "backgroundImage": null,
//       "exportFormat": "jpg",
//       "pdfPaper": "a4",
//       "pdfGrid": { "columns": 3, "rows": 4, "margin": 0.25, "gap": 0.1 }
//     },
//     "volunteerHallAccess": [
//       {
//         "id": "hall-main",
//         "name": "Main Hall",
//         "allowedRoles": ["Registration Desk"],
//         "allowedShifts": ["Morning"]
//       }
//     ]
//   }
