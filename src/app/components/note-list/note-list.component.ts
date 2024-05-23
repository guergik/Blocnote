import { Component, Input} from '@angular/core';
import { NgClass, UpperCasePipe } from "@angular/common";
import { ITask } from '../../interfaces.my';


@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [NgClass, UpperCasePipe ],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css'
})
export class NoteListComponent  {
 // public title = "Learn Angular"
  //public description = "";
 // public username = "";

 @Input() username="no input data";
 @Input() item!: ITask;



 ngOnInit(): void {
  console.log('kakdjkdj')
}
}
