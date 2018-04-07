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
  edicion = false;

	addNote(){
		this.note = {id:null, title:null, description:null};
		this.edicion = false;
		this.showForm = true;
	  }


	viewNote(note){
		this.edicion = true;
		this.showForm = true;
		this.note = note;
	}

	delete(note){
		var me = this;
		this.my_notes.forEach((el, i) => if (me.note == el){me.my_notes.splice(i, 1)})
		this.note = {id:null, title:null, description:null};
		this.showForm = false;
	}

	cancel(){
	  	this.showForm = false;
	  }

	createNote(){
		if (this.edicion){
			var me = this;
			this.my_notes.forEach((el, i) => {
				if (me.note.id == el.i){
					this.my_notes[i] = me.note
				}
			}) 
			this.showForm = false;
		}
		else{
		
			this.note.id = Date.now();
			this.my_notes.push(this.note);
			this.note = {id:null, title:null, description:null};
			this.showForm = false;
		
	}

}

