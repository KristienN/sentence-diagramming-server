import { Severity, modelOptions, prop } from '@typegoose/typegoose';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
export class Modifier {
  @prop({ required: true })
  word: string;

  @prop({ required: true })
  type: string;

  @prop()
  modifier: [Modifier] | [];
}
