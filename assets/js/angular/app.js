var mainModule = angular.module('myBlog', []);
mainModule.controller('homeController', function() {
	// initalize your variables
    this.blogTitle= "";
    this.enteredText="";
    this.authorName="";
    this.composeBlog=false;
	this.blogContent=[];

	// form method append the data to array
	this.updateBlog = function() {
			var temp={};
			temp.title= this.blogTitle;
			temp.author= this.authorName;
			temp.createdDate= new Date();
			temp.content=this.enteredText;
			temp.published=true;
			this.blogContent.push(temp);

	}

	// display the form when click on 'Add' button
	this.createNewForm = function() {
		this.composeBlog= true;
	}
});

