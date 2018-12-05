export class Post {

	title : string;
	content : string;
	loveIts : number;
	create_at : Date;
	
	constructor( title, content ){
		
		this.title = title;
		this.content = content;
		this.loveIts = 0;
		this.create_at = new Date(+(new Date()) - Math.floor(Math.random()*10000000000));
	}
	
}
