export interface CardInterface {
    id: string;
    title: string;
    description: string;
    isTaskDone: string;
    owner: string;
    email: string;
    changeCount: string;
  }  
  
  export class Card implements CardInterface {
  
    constructor(public id: string, public title: string, public description: string, public isTaskDone: string, public owner: string, public email: string, public changeCount: string) {
    }  
  
  }