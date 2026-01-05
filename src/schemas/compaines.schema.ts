import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Compaines {
  @Prop({ type: String, required: true, unique: true })
  email: string;

  @Prop({ type: Boolean, required: true, default: false })
  registerd: boolean;
}

export const CompainesSchema = SchemaFactory.createForClass(Compaines);
