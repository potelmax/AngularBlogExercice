import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

	posts = [
		new Post('Mon 1er article !','Ceci est du contenu'),
  		new Post('Mon 2e article','Ceci est du contenu'),
  		new Post('Mon 3e article','Ceci est du contenu'),
  		new Post('Mon 4e article','Ceci est du contenu')
	];
	
	
}
