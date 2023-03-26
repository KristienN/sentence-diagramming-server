import { Severity, getModelForClass, modelOptions, prop } from '@typegoose/typegoose';
import { Structure } from './structure.model';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: Severity.WARN,
  },
})
export class Simple {
  @prop({ required: true })
  sentence: string;

  @prop({ required: true })
  type: string;

  @prop({ required: true })
  structure: Structure;
}

const SimpleModel = getModelForClass(Simple);

export default SimpleModel;
