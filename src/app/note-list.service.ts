import { Injectable } from '@angular/core';
import { ITask } from "./interfaces.my";

@Injectable({
  providedIn: 'root'
})

export class NoteListService {

  constructor() { }

  protected itemsList: ITask[]=[
    {id: 0,
      title: 'Салат овочевий',
      description: 'огірки, помідори, цибуля, олія, сіль' } ,
      {id: 1,
        title: 'Салат із запечених овочів',
          description: 'баклажан, перець, помідори, часник, кінза, лимон' },
       {id: 2,
        title: 'Класичний олівє',
        description: 'ковбаса, яйця, картопля, морква, огірки квашені, майонез, чорний перець'}        
   ] ;



get noteListItems(): ITask[] {
  return this.itemsList;
}

set noteListItems(newItems: ITask[]) {
  this.itemsList = newItems;
}

}