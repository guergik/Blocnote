import { Component, inject  } from '@angular/core';
import { NoteListComponent  } from '../note-list/note-list.component'
//import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms'; 
import { ITask } from '../../interfaces.my';
import { NoteListService } from "../../note-list.service";

@Component({
  selector: 'app-note-list-writer',
  standalone: true,
  imports: [ CommonModule, NoteListComponent, FormsModule  ],
  templateUrl: './note-list-writer.component.html',
  styleUrl: './note-list-writer.component.css'
})

export class NoteListWriterComponent {
  public username = "";


itemsList: ITask[]=[];
noteListService: NoteListService = inject(NoteListService);

constructor() {
this.itemsList = this.noteListService.noteListItems;
}


}


