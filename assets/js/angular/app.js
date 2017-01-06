var mainModule = angular.module('myBlog', []);
mainModule.controller('homeController', function() {
	// initalize your variables with defaults
    this.blogTitle= "";
    this.enteredText="";
    this.authorName="";
    this.composeBlog=false;
	this.blogContent=[];

	// form method append the data to array
	this.updateBlog = function() {
			var temp={};
			// data comming from html form
			temp.title= this.blogTitle;
			temp.author= this.authorName;
			temp.content=this.enteredText;
			// defaults
			temp.createdDate= new Date();
			temp.published=true;

			// Append the content to your array
			this.blogContent.push(temp);
	}

	// display the form when click on 'Add' button
	this.createNewForm = function() {
		this.composeBlog= true;
	}
});

