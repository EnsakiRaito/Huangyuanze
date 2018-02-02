"use strict";
$(function() {
	var Stencil = {};
	Stencil['Row'] = function() {
		Stencil.Row.prototype.html = '<div class="col-sm-6 col-md-4 col-lg-3 "> <div class="thumbnail page_nail"> <a href="" title="" target="_blank"> <img class="" src="" width="300" height="150" data-src="" alt=""> </a> <div class="caption"> <h3> <a href="" title="" target="_blank"><div></div><small></small></a> </h3> <p></p> </div> </div> </div>';
	};
	$.getJSON("assets/config.json", function(data) {
		$(data.BlogExamples).each(function(i, t) {
			var stencil = new Stencil.Row();
			var _dom = $(stencil.html).appendTo('.rows');
			$(_dom).find('img').attr('src', t.img);
			$(_dom).find('a').attr('href', t.src);
			$(_dom).find('h3>a>div').text(t.title);
			$(_dom).find('small').text(t.small);
			$(_dom).find('p').text(t.p);
		});
	});
});
