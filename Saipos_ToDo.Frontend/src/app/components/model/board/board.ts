import {Card, CardInterface} from '../card/card';
import {ListInterface} from '../list/list';

export interface BoardInterface {
  id: string;
  name: string;
  lists: ListInterface[];
}

export class BoardModel implements BoardInterface {

  id: string;
  name: string;
  lists: ListInterface[];

  constructor() {
  }
}