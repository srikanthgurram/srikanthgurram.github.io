var mainModule = angular.module('myBlog', []);
mainModule.controller('homeController', function() {
	    var hcp= this;
	    hcp.blogContent = {
		title: 'My First blog post here',
		author: 'Jacob',
		createDate: 'Jan 01, 2017',
		content:'Hello guys Good morning !!'
	}
});