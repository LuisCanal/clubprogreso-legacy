jQuery(document).ready(function($) {		
	"use strict";		
	
	
	
	
	//FONT FIX FOR CHROME	
		var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;	
		if(is_chrome){	
			$('h1, h2, h3, h4, h5, h6, .cta.style1 p, .tp-cta.style1 p a, .woocommerce ul.products li.product a, .woocommerce-page ul.products li.product a,h1 a, h2 a, h3 a, h4 a, h5 a, h6 a, a.button').css('font-weight','normal');
		}
	
	
	//RESPONSIVE MENU
		var responsiveMenu = 'closed';		
		$(document).on('click','#responsive-menu',function(){
			if(responsiveMenu == 'closed'){
				$('i',this).removeClass('fa-bars').addClass('fa-times');
				$('#page-content,footer').css('opacity','0.2');
				$('#respo-menu-holder').slideToggle();
				
				responsiveMenu = 'opened';			
			}else{
				$('i',this).removeClass('fa-times').addClass('fa-bars');
				$('#page-content,footer').css('opacity','1');
				$('#respo-menu-holder').slideToggle();
				
				responsiveMenu = 'closed';
			}
		});
	
	
	//PORTFOLIO
		$(document).on('mouseenter','.portfolio-2 .thumb,.portfolio-3 .thumb,.portfolio-4 .thumb, .woocommerce .products li .tp-woo-thumbholder',function(){
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
		
		$(document).on('mouseleave','.portfolio-2 .thumb,.portfolio-3 .thumb,.portfolio-4 .thumb, .woocommerce .products li .tp-woo-thumbholder',function(){
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
	
	
	//WOO FILTER 
		//cookie creator
		function createCookie(name,value,days) {
			if (days) {
				var date = new Date();
				date.setTime(date.getTime()+(days*24*60*60*1000));
				var expires = "; expires="+date.toGMTString();
			}
			else var expires = "";
			document.cookie = name+"="+value+expires+"; path=/;";
		}
		
	
		$(document).on('change','.woocommerce .woocommerce-ordering .itemsnum',function(){
			var _url = window.location.href;
			_url += (_url.split('?')[1] ? '&':'?');
					
			if($('option:selected',this).val() == ''){
				createCookie('product_count','12','30');
				location.reload();
			}else if($('option:selected',this).val() == '24'){	
				createCookie('product_count','24','30');
				location.reload();
			}else if($('option:selected',this).val() == '36'){
				createCookie('product_count','36','30');
				location.reload();
			}else if($('option:selected',this).val() == '48'){
				createCookie('product_count','48','30');
				location.reload();
			}
		});
	
	
});

