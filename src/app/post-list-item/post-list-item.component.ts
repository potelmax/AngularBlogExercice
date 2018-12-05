import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

	@Input() title : string;
	@Input() content : string;
	@Input() createAt : Date;
	@Input() loveIts : number;

  constructor() { }

  ngOnInit() {
  }
	
	getColor(){
		if( this.loveIts>0 )
			return 'green';
		else if ( this.loveIts<0 )
			return 'red';
		return 'inherit';
	}
	
	onLoveIt(){
		this.loveIts++;
	}
	
	onDontLoveIt(){
		this.loveIts--;
	}

}
