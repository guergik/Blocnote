import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { NoteListComponent } from './components/note-list/note-list.component'
import { NoteListWriterComponent } from './components/note-list-writer/note-list-writer.component';

@Component({
  selector: 'app-root',
  standalone: true,
 // imports: [RouterOutlet, NoteListWriterComponent, NoteListComponent],
 imports: [RouterOutlet, NoteListWriterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-ang-numb3';
}
