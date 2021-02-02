import { v4 as uuidv4 } from 'uuid';

export class Report {
  id: string;
  spotname: String;
  freetext: String;
  time: Date

  constructor(spotname: String, freetext: String, time: Date) {
    this.id = uuidv4();
    this.spotname = spotname;
    this.freetext = freetext;
    this.time = time;
  }
}
