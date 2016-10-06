// $("#navbar-toggle",
// 	function(event){

// 	}
// 	);

// function fun(event){
// 	var screenwidth=window.innerwidth;
// 	if(screenwidth<768)
// 	document.qureySelector("#collasable-nav").collapse('hide');
// }
// // document.qureySelector("button.navbar-toggle").addEventListener("click",fun);
// document.qureySelector("button.navbar-toggle").onBlur=fun;

//collapsable button
$(function(){

	$(".navbar-toggle").blur(function (event){
		var screenwidth=window.innerwidth;
		if(screenwidth<768){
			console.log(screenwidth);
		$("#collapsable-nav").collapse('hide');
	}
	});
});

(function (global) {

var dc = {};

var homeHtml = "snippets/home-snippet.html";

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

// On first load, show home view
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  homeHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
});


global.$dc = dc;

})(window);
