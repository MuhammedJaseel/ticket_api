import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({ timestamps: true })
export class Users {
  @Prop({ type: Types.ObjectId, ref: 'Compaines', required: true })
  company: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Events', required: true })
  event: Types.ObjectId;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  email: string;

  @Prop({ type: String, default: '' })
  phone: string;

  @Prop({ type: Boolean, default: false })
  deleted: boolean;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
