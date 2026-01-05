import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Compaines {
  @Prop({ type: String, required: true, unique: true })
  email: string;

  @Prop({ type: Boolean, required: true, default: false })
  registerd: boolean;

  @Prop({ type: String, required: true })
  ownerName: string;

  @Prop({ type: String, required: true })
  ownerPhone: string;

  @Prop({ type: String, required: true })
  companyName: string;

  @Prop({ type: String, required: true })
  companyLocation: string;

  @Prop({ type: Number })
  orgSize: number;
}

export const CompainesSchema = SchemaFactory.createForClass(Compaines);
