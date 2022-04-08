export class Goal {
  showDescription!:boolean;
  constructor(public id:number, public name:string, public descrp:string, public completeDate: Date) {
    
    this.id = id;
    this.name = name;
    this.descrp = descrp;
    this.showDescription=false;
  }



}
