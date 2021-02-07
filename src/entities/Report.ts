import { v4 as uuidv4 } from 'uuid';

export class Report {
  id: string;
  spotname: string;
  freetext: string;
  date: number;
  deleted: boolean;
  user: string;

  constructor(spotname: string, freetext: string, date: Date, user: string) {
    this.id = uuidv4();
    this.spotname = spotname;
    this.freetext = freetext;
    this.date = date.getTime();
    this.deleted = false;
    this.user = user;
  }
}
