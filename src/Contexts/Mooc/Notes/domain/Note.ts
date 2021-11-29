export class Note {
    readonly id: string;
    readonly title: string;
    readonly body: string;
  
    constructor(params:{id: string , title: string, body: string}) {
      this.id = params.id;
      this.title = params.title;
      this.body = params.body;
    }
  }