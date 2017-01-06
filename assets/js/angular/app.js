var mainModule = angular.module('myBlog', []);
mainModule.controller('homeController', function() {
	    this.blogTitle= "";
	    this.enteredText="";
	    this.authorName="";
	    this.composeBlog=false;

	  /*  this.blogContent = [{
		title: 'My First blog posted here',
		author: 'Srikanth',
		createdDate: 'Jan 01, 2017',
		content:'Hello guys, Good morning !!',
		published: true
	},{
		title: 'My second blog posted here',
		author: 'Manasree',
		createdDate: 'Jan 05, 2017',
		content:'Hello guys,what\'s going on !!',
		published: true

	},
	{
		title: 'My third blog posted here',
		author: 'Chaithu',
		createdDate: 'Jan 05, 2017',
		content:'Hello guys,what\'s up !!',
		published: true

	}]
*/
    this.blogContent=[];
	this.updateBlog = function() {
			var temp={};
			temp.title= this.blogTitle;
			temp.author= this.authorName;
			temp.createdDate='06-01-2017';
			temp.content=this.enteredText;
			temp.published=true;
			this.blogContent.push(temp);

	}

	this.createNewForm = function() {
		this.composeBlog= true;
	}
});

