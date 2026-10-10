import { v4 as uuidv4 } from 'uuid';

export class uuidAdapter {
  public static v4() {
    return uuidv4();
  }
}
