import { prop } from '@typegoose/typegoose';
import { Modifier } from './modifier.model';

export class Structure {
  @prop()
  subject: Modifier;

  @prop()
  predicate: Modifier;

  @prop()
  object?: Modifier;
}
