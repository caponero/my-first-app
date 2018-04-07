import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
  note = {id:null, title:null, description:null};
  my_notes = [
  	{id:1, title:"nota 1", description:"Descripcion de nota 1"},
  	{id:2, title:"nota 2", description:"Descripcion de nota 2"},
  	{id:3, title:"nota 3", description:"Descripcion de nota 3"},
  	{id:4, title:"nota 4", description:"Descripcion de nota 4"},
  ]

  showForm = false;

	addNote(){
		this.showForm = true;
	  }


	viewNote(){
		this.showForm = true;
	}

	cancel(){
	  	this.showForm = false;
	  }

	createNote(){
				this.note.id = Date.now();
			this.my_notes.push(this.note);
			this.note = {id:null, title:null, description:null};
			this.showForm = false;
		
	}

}

