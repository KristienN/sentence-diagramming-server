import { getModelForClass, prop } from '@typegoose/typegoose';

export class Grade {
  @prop({ required: true })
  score: number;

  @prop({ required: true })
  user: string;

  @prop({ required: true })
  date: Date;
}

const GradeModel = getModelForClass(Grade);

export default GradeModel;
