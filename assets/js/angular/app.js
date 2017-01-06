var mainModule = angular.module('myBlog', []);
// Controller for blog content
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

// Navigation bar controller
mainModule.controller('navController', function(){
	this.itemsAvailable = [
	{	
		id: 'home',
		text: "Home",
		link: "#/home",
		active: true
	},
	{	
		id: 'about',
		text: "About Me",
		link: "#/about",
		active: false
	},
	{
		id: 'contact',
		text: "Contact",
		link: "#/contact",
		active: false
	}
	]
});