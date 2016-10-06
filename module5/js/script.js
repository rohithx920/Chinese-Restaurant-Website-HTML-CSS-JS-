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
	var dc={};
	var homehtml="snippets/home-snippet.html";
	var insertHtml=function(selector, html){
		var targetElem=document.qureySelector(selector);
		targetElem.innerHTML=html;
	}
	var showLoading= function(selector){
		var html="<div class='text-center'>";
		html +="<img src='images/ajax-loader.gif'></div>"
		insertHtml(selector,html);
	}

	//On page load(before images or css)
	document.addEventListener("DOMContentLoaded", function(event){
		showLoading("#main-content");
		$ajaxUtils.sendGetRequest(
			homehtml,function(responseText){
				document.qureySelector("#main-content")
				.innerHTML=responseText;
			}, false);
	});

});
