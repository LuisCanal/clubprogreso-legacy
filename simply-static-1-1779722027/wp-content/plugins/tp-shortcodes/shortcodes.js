jQuery(document).ready(function($) {		
	"use strict";		
	
	
	
	//ALERT		
		$(document).on('click','.tp-alerts',function(){
			$(this).fadeOut(500);
			return false;
		});
		
	//TOGGLES		
		$(document).on('click','.toggle',function(){
			$(this).parent().next('.toggle_box').slideToggle('slow');
			return false;
		});
		
			
	//VIDEO	
		$('.tp-video .hoverimg').click(function() {	
			var vidframe = $(this).next('iframe');
			vidframe.attr('src', vidframe.attr('src') + '&autoplay=1'); 
			$(this).fadeOut(400,function(){
				$(this).remove();
				vidframe.css('z-index','100');
			});
			
		});
	
		
	//SHORTCODE - PORTFOLIO
		$(document).on('mouseenter','.tp-sc-pfolio .thumb',function(){
			$('.hover',this).stop().animate({
				opacity: 1
			},300);
			$('.hover-open,.hover-go',this).stop().animate({
				opacity: 0.7
			},300);
			$('.dark h6',this).stop().animate({
				opacity: 0
			},300);
		});
		
		$(document).on('mouseleave','.tp-sc-pfolio .thumb',function(){
			$('.hover',this).stop().animate({
				opacity: 0
			},300);
			$('.hover-open,.hover-go',this).stop().animate({
				opacity: 0
			},300);
			$('.dark h6',this).stop().animate({
				opacity: 1
			},300);
		});
		
		
	
	
	//TABS
		jQuery('.tabs').tabs({
			fx: [{opacity:'toggle', duration:'normal'},
			{opacity:'toggle', duration:'normal'}]
		});
});