jQuery(document).ready(function($) {		
	'use strict';		
	
	
	//add switch button
		$('#postdivrich').prepend('<a href="#" id="tp-vlb-switch" class="button button-primary button-large hide-if-no-js">Visual Layout Builder</a>');
		$('#normal-sortables').prepend('<a href="#" id="tp-vlb-switch-back" class="button button-primary button-large hide-if-no-js">Classic Editor</a>');
		
		
		
	//switch to VLB button 
		$(document).on('click','#tp-vlb-switch',function(e){
			e.preventDefault();
			
			//if tinymce has content, load it to VLB
			var tinycnt = '';
			if($('#content').css('display') == 'none'){
				tinycnt = tinymce.get('content').getContent();
			}else{
				tinycnt = $('#content').val();
			}
			
			if(tinycnt){
				//tinymce has content, translate it to VLB html!
				tinycnt = sc2html(tinycnt);
				$('#tp-vlb-elements').html(tinycnt);
			}else{
				$('#tp-vlb-elements').html('<p class="tp-vlb-info">Add a row by clicking on an icon above to begin...</p>');
			}
			
			$('#postdivrich').css('display','none');
			$('#tp-vlbuilder').css('display','block');
			$('#tp-vlb-switch-back').css('display','inline-block');
		});
	
	
	
	//switch back to tinymce button
		$(document).on('click','#tp-vlb-switch-back',function(e){
			e.preventDefault();
			
			//on switch to Classic editor: html2sc, insert to tinymce
			var nucnt = html2sc();
			
			//empty elements visual field
			$('#tp-vlb-elements').html('');
			
			switchEditors.switchto(document.getElementById('content-html'));
			$('#content').val(nucnt);
			
			
			$('#postdivrich').css('display','block');
			$('#tp-vlbuilder').css('display','none');
			$('#tp-vlb-switch-back').css('display','none');
		});
		
	
	//saving
		$(document).on('click','#publish,#save-post',function(){
			if($('#tp-vlbuilder').css('display') != 'none'){
			//VLB is active, translate VLB html code to SC and insert into editor
				var nucnt = html2sc();
				$('#tp-vlb-elements').html('');
				switchEditors.switchto(document.getElementById('content-html'));
				$('#content').val(nucnt);				
				$('#postdivrich').css('display','block');
				$('#tp-vlbuilder').css('display','none');
				$('#tp-vlb-switch-back').css('display','none');
			}
		});
	
	
	
	//remove row
		$(document).on('click','.tp-vl-row .remove-row',function(e){
			e.preventDefault();
			
			var uSure=confirm('Do you want to remove this row?');
			if(uSure){
				$(this).parent('.tp-vl-row').remove();
			}
		});
	
	

	//drag n drop rows
		$('#tp-vlb-elements').sortable();
		
	
	//toggles		
		$(document).on('click','.toggle',function(){
			$(this).parent().next('.toggle_box').slideToggle('slow');
			return false;
		});
	

	//random ID generator
		function colID(){
			var text = 'tp-vl-col-';
			var possible = 'abcdefghijklmnopqrstuvwxyz0123456789';

			for( var i=0; i < 8; i++ ){
				text += possible.charAt(Math.floor(Math.random() * possible.length));
			}
			return text;
		}
	
		
		
	//add rows	
		$(document).on('click','#tp-vlb-rowselector a',function(e){
			$('#tp-vlb-elements .tp-vlb-info').remove();
		});

	
		$(document).on('click','#tp-vlb-rowselector .row-1-1',function(e){
			e.preventDefault();
			$('#tp-vlb-elements').append('<div class="tp-vl-row">'+
					'<div id="'+colID()+'" class="tp-vl-col full"><div class="tit">1/1</div><div class="btn btn-add"><i class="fa fa-plus"></i><br /><span>CLICK TO ADD CONTENT</span></div></div>'+
					'<div class="remove-row"></div>'+
				'</div>'
			);
		});
		
		$(document).on('click','#tp-vlb-rowselector .row-12-12',function(e){
			e.preventDefault();
			$('#tp-vlb-elements').append('<div class="tp-vl-row">'+
					'<div id="'+colID()+'" class="tp-vl-col one_half"><div class="tit">1/2</div><div class="btn btn-add"><i class="fa fa-plus"></i><br /><span>CLICK TO ADD CONTENT</span></div></div>'+
					'<div id="'+colID()+'" class="tp-vl-col one_half last"><div class="tit">1/2</div><div class="btn btn-add"><i class="fa fa-plus"></i><br /><span>CLICK TO ADD CONTENT</span></div></div>'+
					'<div class="remove-row"></div>'+
				'</div>'
			);
		});
		
		$(document).on('click','#tp-vlb-rowselector .row-13-13-13',function(e){
			e.preventDefault();
			$('#tp-vlb-elements').append('<div class="tp-vl-row">'+
					'<div id="'+colID()+'" class="tp-vl-col one_third"><div class="tit">1/3</div><div class="btn btn-add"><i class="fa fa-plus"></i><br /><span>CLICK TO ADD CONTENT</span></div></div>'+
					'<div id="'+colID()+'" class="tp-vl-col one_third"><div class="tit">1/3</div><div class="btn btn-add"><i class="fa fa-plus"></i><br /><span>CLICK TO ADD CONTENT</span></div></div>'+
					'<div id="'+colID()+'" class="tp-vl-col one_third last"><div class="tit">1/3</div><div class="btn btn-add"><i class="fa fa-plus"></i><br /><span>CLICK TO ADD CONTENT</span></div></div>'+
					'<div class="remove-row"></div>'+
				'</div>'
			);
		});
		
		$(document).on('click','#tp-vlb-rowselector .row-13-23',function(e){
			e.preventDefault();
			$('#tp-vlb-elements').append('<div class="tp-vl-row">'+
					'<div id="'+colID()+'" class="tp-vl-col one_third"><div class="tit">1/3</div><div class="btn btn-add"><i class="fa fa-plus"></i><br /><span>CLICK TO ADD CONTENT</span></div></div>'+					
					'<div id="'+colID()+'" class="tp-vl-col two_third last"><div class="tit">2/3</div><div class="btn btn-add"><i class="fa fa-plus"></i><br /><span>CLICK TO ADD CONTENT</span></div></div>'+
					'<div class="remove-row"></div>'+
				'</div>'
			);
		});
		
		$(document).on('click','#tp-vlb-rowselector .row-23-13',function(e){
			e.preventDefault();
			$('#tp-vlb-elements').append('<div class="tp-vl-row">'+
					'<div id="'+colID()+'" class="tp-vl-col two_third"><div class="tit">2/3</div><div class="btn btn-add"><i class="fa fa-plus"></i><br /><span>CLICK TO ADD CONTENT</span></div></div>'+					
					'<div id="'+colID()+'" class="tp-vl-col one_third last"><div class="tit">1/3</div><div class="btn btn-add"><i class="fa fa-plus"></i><br /><span>CLICK TO ADD CONTENT</span></div></div>'+
					'<div class="remove-row"></div>'+
				'</div>'
			);
		});
		
		$(document).on('click','#tp-vlb-rowselector .row-14-14-14-14',function(e){
			e.preventDefault();
			$('#tp-vlb-elements').append('<div class="tp-vl-row">'+
					'<div id="'+colID()+'" class="tp-vl-col one_fourth"><div class="tit">1/4</div><div class="btn btn-add"><i class="fa fa-plus"></i><br /><span>CLICK TO ADD CONTENT</span></div></div>'+
					'<div id="'+colID()+'" class="tp-vl-col one_fourth"><div class="tit">1/4</div><div class="btn btn-add"><i class="fa fa-plus"></i><br /><span>CLICK TO ADD CONTENT</span></div></div>'+
					'<div id="'+colID()+'" class="tp-vl-col one_fourth"><div class="tit">1/4</div><div class="btn btn-add"><i class="fa fa-plus"></i><br /><span>CLICK TO ADD CONTENT</span></div></div>'+
					'<div id="'+colID()+'" class="tp-vl-col one_fourth last"><div class="tit">1/4</div><div class="btn btn-add"><i class="fa fa-plus"></i><br /><span>CLICK TO ADD CONTENT</span></div></div>'+					
					'<div class="remove-row"></div>'+
				'</div>'
			);
		});
		
		$(document).on('click','#tp-vlb-rowselector .row-14-34',function(e){
			e.preventDefault();
			$('#tp-vlb-elements').append('<div class="tp-vl-row">'+
					'<div id="'+colID()+'" class="tp-vl-col one_fourth"><div class="tit">1/4</div><div class="btn btn-add"><i class="fa fa-plus"></i><br /><span>CLICK TO ADD CONTENT</span></div></div>'+					
					'<div id="'+colID()+'" class="tp-vl-col three_fourth last"><div class="tit">3/4</div><div class="btn btn-add"><i class="fa fa-plus"></i><br /><span>CLICK TO ADD CONTENT</span></div></div>'+					
					'<div class="remove-row"></div>'+
				'</div>'
			);
		});
		
		$(document).on('click','#tp-vlb-rowselector .row-34-14',function(e){
			e.preventDefault();
			$('#tp-vlb-elements').append('<div class="tp-vl-row">'+
					'<div id="'+colID()+'" class="tp-vl-col three_fourth"><div class="tit">3/4</div><div class="btn btn-add"><i class="fa fa-plus"></i><br /><span>CLICK TO ADD CONTENT</span></div></div>'+					
					'<div id="'+colID()+'" class="tp-vl-col one_fourth last"><div class="tit">1/4</div><div class="btn btn-add"><i class="fa fa-plus"></i><br /><span>CLICK TO ADD CONTENT</span></div></div>'+					
					'<div class="remove-row"></div>'+
				'</div>'
			);
		});
		
		$(document).on('click','#tp-vlb-rowselector .row-12-14-14',function(e){
			e.preventDefault();
			$('#tp-vlb-elements').append('<div class="tp-vl-row">'+
					'<div id="'+colID()+'" class="tp-vl-col one_half"><div class="tit">1/2</div><div class="btn btn-add"><i class="fa fa-plus"></i><br /><span>CLICK TO ADD CONTENT</span></div></div>'+					
					'<div id="'+colID()+'" class="tp-vl-col one_fourth"><div class="tit">1/4</div><div class="btn btn-add"><i class="fa fa-plus"></i><br /><span>CLICK TO ADD CONTENT</span></div></div>'+					
					'<div id="'+colID()+'" class="tp-vl-col one_fourth last"><div class="tit">1/4</div><div class="btn btn-add"><i class="fa fa-plus"></i><br /><span>CLICK TO ADD CONTENT</span></div></div>'+					
					'<div class="remove-row"></div>'+
				'</div>'
			);
		});
		
		$(document).on('click','#tp-vlb-rowselector .row-14-12-14',function(e){
			e.preventDefault();
			$('#tp-vlb-elements').append('<div class="tp-vl-row">'+					
					'<div id="'+colID()+'" class="tp-vl-col one_fourth"><div class="tit">1/4</div><div class="btn btn-add"><i class="fa fa-plus"></i><br /><span>CLICK TO ADD CONTENT</span></div></div>'+					
					'<div id="'+colID()+'" class="tp-vl-col one_half"><div class="tit">1/2</div><div class="btn btn-add"><i class="fa fa-plus"></i><br /><span>CLICK TO ADD CONTENT</span></div></div>'+					
					'<div id="'+colID()+'" class="tp-vl-col one_fourth last"><div class="tit">1/4</div><div class="btn btn-add"><i class="fa fa-plus"></i><br /><span>CLICK TO ADD CONTENT</span></div></div>'+					
					'<div class="remove-row"></div>'+
				'</div>'
			);
		});
		
		$(document).on('click','#tp-vlb-rowselector .row-14-14-12',function(e){
			e.preventDefault();
			$('#tp-vlb-elements').append('<div class="tp-vl-row">'+					
					'<div id="'+colID()+'" class="tp-vl-col one_fourth"><div class="tit">1/4</div><div class="btn btn-add"><i class="fa fa-plus"></i><br /><span>CLICK TO ADD CONTENT</span></div></div>'+										
					'<div id="'+colID()+'" class="tp-vl-col one_fourth"><div class="tit">1/4</div><div class="btn btn-add"><i class="fa fa-plus"></i><br /><span>CLICK TO ADD CONTENT</span></div></div>'+					
					'<div id="'+colID()+'" class="tp-vl-col one_half last"><div class="tit">1/2</div><div class="btn btn-add"><i class="fa fa-plus"></i><br /><span>CLICK TO ADD CONTENT</span></div></div>'+					
					'<div class="remove-row"></div>'+
				'</div>'
			);
		});
		
		$(document).on('click','#tp-vlb-rowselector .row-15-15-15-15-15',function(e){
			e.preventDefault();
			$('#tp-vlb-elements').append('<div class="tp-vl-row">'+					
					'<div id="'+colID()+'" class="tp-vl-col one_fifth"><div class="tit">1/5</div><div class="btn btn-add"><i class="fa fa-plus"></i><br /><span>CLICK TO ADD CONTENT</span></div></div>'+										
					'<div id="'+colID()+'" class="tp-vl-col one_fifth"><div class="tit">1/5</div><div class="btn btn-add"><i class="fa fa-plus"></i><br /><span>CLICK TO ADD CONTENT</span></div></div>'+										
					'<div id="'+colID()+'" class="tp-vl-col one_fifth"><div class="tit">1/5</div><div class="btn btn-add"><i class="fa fa-plus"></i><br /><span>CLICK TO ADD CONTENT</span></div></div>'+										
					'<div id="'+colID()+'" class="tp-vl-col one_fifth"><div class="tit">1/5</div><div class="btn btn-add"><i class="fa fa-plus"></i><br /><span>CLICK TO ADD CONTENT</span></div></div>'+										
					'<div id="'+colID()+'" class="tp-vl-col one_fifth last"><div class="tit">1/5</div><div class="btn btn-add"><i class="fa fa-plus"></i><br /><span>CLICK TO ADD CONTENT</span></div></div>'+										
					'<div class="remove-row"></div>'+
				'</div>'
			);
			
			
		});
		
		
		
	//add content popup
		var currentBox = '';
		$(document).on('click','.tp-vl-col .btn-add',function(e){
			e.preventDefault();
			
			currentBox = $(this).parent('.tp-vl-col').attr('id');
			$('#tp-vlb-popup').fadeIn(400);
		});
		
		
	//close popup
		$(document).keyup(function(e) {
			if (e.keyCode == 27) { 
				$('#tp-vlb-popup').css('display','none'); 
				$('#tp-vlb-popup #elems').css('display','block');
				$('#tp-vlb-popup .tp-vlb-form').css('display','none');
			}
		});
		
		$(document).on('click','.tp-vlb-close',function(e){
			e.preventDefault();
			
			$('#tp-vlb-popup').css('display','none'); 
			$('#tp-vlb-popup #elems').css('display','block');
			$('#tp-vlb-popup .tp-vlb-form').css('display','none');
		});
		
		
		
	//load content element forms into popup
		$(document).on('click','#tp-vlb-cnt .btn',function(e){
			e.preventDefault();
			var thissc = $(this).attr('data-sc');
			
			//clear all form elems
			$('#tp-vlb-form-'+thissc+' select').val('');
			$('#tp-vlb-form-'+thissc+' input').attr('checked', false);
			$('#tp-vlb-form-'+thissc+' input:not(.ed_button)').val('');
			$('#tp-vlb-form-'+thissc+' textarea').val('');
			$('#tp-vlb-form-toggle .toggle-holder:not(:first)').remove();
			$('#tp-vlb-form-'+thissc+' .img_preview').css('display','none');
			$('#tp-vlb-form-'+thissc+' .get-image').css('display','inline');
			if(tinymce.editors['tp-vlb-text-data']){
				tinymce.editors['tp-vlb-text-data'].setContent('');
			}
			if(tinymce.editors['tp-vlb-gfont-data']){
				tinymce.editors['tp-vlb-gfont-data'].setContent('');
			}
			if(tinymce.editors['tp-vlb-tabs-data1']){
				tinymce.editors['tp-vlb-tabs-data1'].setContent('');
			}
			if(tinymce.editors['tp-vlb-tabs-data2']){
				tinymce.editors['tp-vlb-tabs-data2'].setContent('');
			}
			if(tinymce.editors['tp-vlb-tabs-data3']){
				tinymce.editors['tp-vlb-tabs-data3'].setContent('');
			}
			if(tinymce.editors['tp-vlb-tabs-data4']){
				tinymce.editors['tp-vlb-tabs-data4'].setContent('');
			}
			if(tinymce.editors['tp-vlb-tabs-data5']){
				tinymce.editors['tp-vlb-tabs-data5'].setContent('');
			}
			if(tinymce.editors['tp-vlb-tabs-data6']){
				tinymce.editors['tp-vlb-tabs-data6'].setContent('');
			}
			
			//fade in form
			$('#tp-vlb-popup #elems').fadeOut(300,function(){
				$('#tp-vlb-form-'+thissc).fadeIn(300);
			});			
			
		});
		
		
	//cancel current content element, go back to choose another one
		$(document).on('click','#tp-vlb-cnt-cancel',function(e){
			e.preventDefault();
			
			var uSure=confirm('All data in this form will be lost! Are you sure?');
			if(uSure){
				//clear hidden data in current box
				$('#'+currentBox+' .tp-hidden-data').remove();
				
				//change its icon in box to default
				$('#'+currentBox+' .btn').replaceWith('<div class="btn btn-add"><i class="fa fa-plus"></i><br /><span>CLICK TO ADD CONTENT</span></div>');
				
				//fade in elements again
				$('.tp-vlb-form').css('display','none');
				$('#tp-vlb-popup #elems').fadeIn(400);
			}
		});


	
		
	//**********************************************************************************************************
	//	CONTENT ELEMENTS
	//**********************************************************************************************************
		
	//content text - submit
		$(document).on('click','#tp-vlb-form-text #tp-vlb-cnt-save',function(e){
			e.preventDefault();
									
			//save current data to hidden var 
			//but remove the previous one first
			$('#'+currentBox+' .tp-hidden-data').remove();
			
			//place text block icon into editor's column box
				//get active editor and save THAT value!!
				var vlbtextdata = '';			
				if($('#tp-vlb-text-data').css('display') == 'none'){
					//rte editor is active, save its data					
					vlbtextdata = tinymce.get('tp-vlb-text-data').getContent();				
				}else{
					//textarea is active, save its data
					vlbtextdata = $('#tp-vlb-text-data').val();
				}
				
			$('#'+currentBox+' .btn').replaceWith('<div class="btn btn-text-edit"><i class="fa fa-align-justify"></i><br /><span>TEXT BLOCK</span></div>'+
			'<div class="tp-hidden-data" data-sc-type="text"><div class="tp-vl-textblock">'+vlbtextdata+'</div></div>');
			
			//clear data from this ID
			if(tinymce.get('tp-vlb-text-data')){
				tinymce.get('tp-vlb-text-data').setContent('');
			}
			$('#tp-vlb-text-data').val('');
			
			
			//hide popup			
			$('#tp-vlb-popup').css('display','none'); 
			$('#tp-vlb-popup #elems').css('display','block');
			$('#tp-vlb-popup .tp-vlb-form').css('display','none');
		});
	
	//content text - edit
		$(document).on('click','.tp-vl-col .btn-text-edit',function(e){
			e.preventDefault();
			
			currentBox = $(this).parent('.tp-vl-col').attr('id');
			
			//hide elems, show form already
			$('#tp-vlb-popup #elems').css('display','none');
			$('#tp-vlb-form-text').css('display','block');
			
			var loadtextdata = $(this).parent().find('.tp-hidden-data .tp-vl-textblock').html();
						
			//load saved data into editor
			if($('#tp-vlb-text-data').css('display') == 'none'){
				tinymce.get('tp-vlb-text-data').setContent( loadtextdata );				
			}else{
				$('#tp-vlb-text-data').val( loadtextdata );
			}
			
			//fade in popup
			$('#tp-vlb-popup').fadeIn(400);
			
		});
		
		
		
		
		
		
	//content titles - submit
		$(document).on('click','#tp-vlb-form-titles #tp-vlb-cnt-save',function(e){
			e.preventDefault();
									
			//save current data to hidden var
			//but remove the previous one first
			$('#'+currentBox+' .tp-hidden-data').remove();
			//place title block icon into editor's column box
			$('#'+currentBox+' .btn').replaceWith('<div class="btn btn-titles-edit"><i class="fa fa-header"></i><br /><span>TITLE</span></div>'+
			'<div class="tp-hidden-data" data-sc-type="title" data-titles-title="'+$('#tp-vlb-form-titles #tp-vlb-titles-title').val()+'" data-titles-subtitle="'+$('#tp-vlb-form-titles #tp-vlb-titles-subtitle').val()+'" data-titles-align="'+$('#tp-vlb-form-titles #tp-vlb-titles-align').val()+'" data-titles-style="'+$('#tp-vlb-form-titles #tp-vlb-titles-style').val()+'"></div>');
						
			//clear input fields
			$('#tp-vlb-form-titles #tp-vlb-titles-title').removeAttr('value');
			$('#tp-vlb-form-titles #tp-vlb-titles-subtitle').removeAttr('value');
			$('#tp-vlb-form-titles #tp-vlb-titles-align').removeAttr('value');
			$('#tp-vlb-form-titles #tp-vlb-titles-style').removeAttr('value');
			
			//hide popup			
			$('#tp-vlb-popup').css('display','none'); 
			$('#tp-vlb-popup #elems').css('display','block');
			$('#tp-vlb-popup .tp-vlb-form').css('display','none');
		});
	
	//content titles  - edit
		$(document).on('click','.tp-vl-col .btn-titles-edit',function(e){
			e.preventDefault();
			
			currentBox = $(this).parent('.tp-vl-col').attr('id');
			
			//hide elems, show form already
			$('#tp-vlb-popup #elems').css('display','none');
			$('#tp-vlb-form-titles').css('display','block');
			
			//load saved data into fields
			$('#tp-vlb-form-titles #tp-vlb-titles-title').val( $(this).parent().find('.tp-hidden-data').attr('data-titles-title') );
			$('#tp-vlb-form-titles #tp-vlb-titles-subtitle').val( $(this).parent().find('.tp-hidden-data').attr('data-titles-subtitle') );
			$('#tp-vlb-form-titles #tp-vlb-titles-align').val( $(this).parent().find('.tp-hidden-data').attr('data-titles-align') );
			$('#tp-vlb-form-titles #tp-vlb-titles-style').val( $(this).parent().find('.tp-hidden-data').attr('data-titles-style') );
	
			
			//fade in popup
			$('#tp-vlb-popup').fadeIn(400);
			
		});
		
	
	
	
	
	
	//content separators - submit
		$(document).on('click','#tp-vlb-form-separators #tp-vlb-cnt-save',function(e){
			e.preventDefault();
									
			//save current data to hidden var
			//but remove the previous one first
			$('#'+currentBox+' .tp-hidden-data').remove();
			//place title block icon into editor's column box
			$('#'+currentBox+' .btn').replaceWith('<div class="btn btn-separators-edit"><i class="fa fa-sort"></i><br /><span>SEPARATOR</span></div>'+
			'<div class="tp-hidden-data" data-sc-type="separator" data-separators-type="'+$('#tp-vlb-form-separators #tp-vlb-separators-type').val()+'"></div>');
						
			//clear input fields
			$('#tp-vlb-form-separators #tp-vlb-separators-type').removeAttr('value');
			
			//hide popup			
			$('#tp-vlb-popup').css('display','none'); 
			$('#tp-vlb-popup #elems').css('display','block');
			$('#tp-vlb-popup .tp-vlb-form').css('display','none');
		});
	
	//content separators  - edit
		$(document).on('click','.tp-vl-col .btn-separators-edit',function(e){
			e.preventDefault();
			
			currentBox = $(this).parent('.tp-vl-col').attr('id');
			
			//hide elems, show form already
			$('#tp-vlb-popup #elems').css('display','none');
			$('#tp-vlb-form-separators').css('display','block');
			
			//load saved data into fields
			$('#tp-vlb-form-separators #tp-vlb-separators-type').val( $(this).parent().find('.tp-hidden-data').attr('data-separators-type') );
	
			
			//fade in popup
			$('#tp-vlb-popup').fadeIn(400);
			
		});
	
	
	
	
	
	
	
	//content image - media lib
		jQuery('#tp-vlb-form-image .get-image').click(function(){
			wp.media.editor.send.attachment = function(props, attachment){
				jQuery('#tp-vlb-form-image #selected-image').val(attachment.url);
				
				jQuery('#tp-vlb-form-image .get-image').css('display','none');
				jQuery('#tp-vlb-form-image .img_preview').css('display','inline');
				jQuery('#tp-vlb-form-image .img_preview').attr('src',attachment.url);
			}

			wp.media.editor.open(this);

			return false;
		});
		
		
	
	//content image - submit
		$(document).on('click','#tp-vlb-form-image #tp-vlb-cnt-save',function(e){
			e.preventDefault();
									
			//save current data to hidden var
			//but remove the previous one first
			$('#'+currentBox+' .tp-hidden-data').remove();
			//place title block icon into editor's column box
			$('#'+currentBox+' .btn').replaceWith('<div class="btn btn-image-edit"><i class="fa fa-image"></i><br /><span>IMAGE</span></div>'+
			'<div class="tp-hidden-data" data-sc-type="image" data-image-src="'+$('#tp-vlb-form-image #selected-image').val()+'" data-image-align="'+$('#tp-vlb-form-image #tp-vlb-image-align').val()+'" data-image-link="'+$('#tp-vlb-form-image #tp-vlb-image-link').val()+'"><div class="tp-vl-imageblock"></div></div>');
						
			//clear input fields
			$('#tp-vlb-form-image #tp-vlb-image-link,#tp-vlb-form-image #tp-vlb-image-align,#tp-vlb-form-image #selected-image').removeAttr('value');
			jQuery('#tp-vlb-form-image .img_preview').css('display','none');
			jQuery('#tp-vlb-form-image .get-image').css('display','inline');
			
			//hide popup			
			$('#tp-vlb-popup').css('display','none'); 
			$('#tp-vlb-popup #elems').css('display','block');
			$('#tp-vlb-popup .tp-vlb-form').css('display','none');
		});	
	
	
	//content image  - edit
		$(document).on('click','.tp-vl-col .btn-image-edit',function(e){
			e.preventDefault();
			
			currentBox = $(this).parent('.tp-vl-col').attr('id');
			
			//hide elems, show form already
			$('#tp-vlb-popup #elems').css('display','none');
			$('#tp-vlb-form-image').css('display','block');
			
			//load saved data into fields
			var dataimgsrc = $(this).parent().find('.tp-hidden-data').attr('data-image-src');
			if(!dataimgsrc){
				$('#tp-vlb-form-image .img_preview').css('display','none');
				$('#tp-vlb-form-image .get-image').css('display','inline');		
			}else{
				$('#tp-vlb-form-image .img_preview').attr('src',$(this).parent().find('.tp-hidden-data').attr('data-image-src') );
				$('#tp-vlb-form-image .img_preview').css('display','inline');
				$('#tp-vlb-form-image .get-image').css('display','none');					
			}
			
				
			$('#tp-vlb-form-image #tp-vlb-image-align').val( $(this).parent().find('.tp-hidden-data').attr('data-image-align') );
			$('#tp-vlb-form-image #tp-vlb-image-link').val( $(this).parent().find('.tp-hidden-data').attr('data-image-link') );
	
			
			//fade in popup
			$('#tp-vlb-popup').fadeIn(400);
			
		});
		
		
		
		
		

	
	//content video - media lib
		jQuery('#tp-vlb-form-video .get-image').click(function(){
			wp.media.editor.send.attachment = function(props, attachment){
				jQuery('#tp-vlb-form-video #selected-image').val(attachment.url);
				
				jQuery('#tp-vlb-form-video .get-image').css('display','none');
				jQuery('#tp-vlb-form-video .img_preview').css('display','inline');
				jQuery('#tp-vlb-form-video .img_preview').attr('src',attachment.url);
			}

			wp.media.editor.open(this);

			return false;
		});
		
		
	//content video - submit
		$(document).on('click','#tp-vlb-form-video #tp-vlb-cnt-save',function(e){
			e.preventDefault();
									
			//save current data to hidden var
			//but remove the previous one first
			$('#'+currentBox+' .tp-hidden-data').remove();
			//place title block icon into editor's column box
			$('#'+currentBox+' .btn').replaceWith('<div class="btn btn-video-edit"><i class="fa fa-play"></i><br /><span>VIDEO</span></div>'+
			'<div class="tp-hidden-data" data-sc-type="video" data-video-hover="'+$('#tp-vlb-form-video #selected-image').val()+'" data-video-height="'+$('#tp-vlb-form-video #tp-vlb-video-height').val()+'" data-video-link="'+$('#tp-vlb-form-video #tp-vlb-video-link').val()+'"></div>');
						
			//clear input fields
			$('#tp-vlb-form-video #tp-vlb-video-height,#tp-vlb-form-video #tp-vlb-video-link').removeAttr('value');			
			jQuery('#tp-vlb-form-video .img_preview').css('display','none');
			jQuery('#tp-vlb-form-video .get-image').css('display','inline');
			
			//hide popup			
			$('#tp-vlb-popup').css('display','none'); 
			$('#tp-vlb-popup #elems').css('display','block');
			$('#tp-vlb-popup .tp-vlb-form').css('display','none');
		});		


	//content video  - edit
		$(document).on('click','.tp-vl-col .btn-video-edit',function(e){
			e.preventDefault();
			
			currentBox = $(this).parent('.tp-vl-col').attr('id');
			
			//hide elems, show form already
			$('#tp-vlb-popup #elems').css('display','none');
			$('#tp-vlb-form-video').css('display','block');
			
			//load saved data into fields
			var dataimgsrc = $(this).parent().find('.tp-hidden-data').attr('data-video-hover');
			if(!dataimgsrc){
				$('#tp-vlb-form-video .img_preview').css('display','none');
				$('#tp-vlb-form-video .get-image').css('display','inline');		
			}else{
				$('#tp-vlb-form-video .img_preview').attr('src',$(this).parent().find('.tp-hidden-data').attr('data-video-hover') );
				$('#tp-vlb-form-video .img_preview').css('display','inline');
				$('#tp-vlb-form-video .get-image').css('display','none');
			}
			
			$('#tp-vlb-form-video #tp-vlb-video-height').val( $(this).parent().find('.tp-hidden-data').attr('data-video-height') );			
			$('#tp-vlb-form-video #tp-vlb-video-link').val( $(this).parent().find('.tp-hidden-data').attr('data-video-link') );
	
			
			//fade in popup
			$('#tp-vlb-popup').fadeIn(400);
			
		});		
	
	

	
	
	
	//content alerts - submit
		$(document).on('click','#tp-vlb-form-alert #tp-vlb-cnt-save',function(e){
			e.preventDefault();
									
			//save current data to hidden var
			//but remove the previous one first
			$('#'+currentBox+' .tp-hidden-data').remove();
			//place title block icon into editor's column box
			$('#'+currentBox+' .btn').replaceWith('<div class="btn btn-alert-edit"><i class="fa fa-info"></i><br /><span>ALERT BOX</span></div>'+
			'<div class="tp-hidden-data" data-sc-type="alert" data-alert-type="'+$('#tp-vlb-form-alert #tp-vlb-alert-type').val()+'" data-alert-icon="'+$('#tp-vlb-form-alert #tp-vlb-alert-icon').val()+'">'+$('#tp-vlb-form-alert #tp-vlb-alert-text').val()+'</div>');
						
			//clear input fields
			$('#tp-vlb-form-alert #tp-vlb-alert-type').removeAttr('value');
			
			//hide popup			
			$('#tp-vlb-popup').css('display','none'); 
			$('#tp-vlb-popup #elems').css('display','block');
			$('#tp-vlb-popup .tp-vlb-form').css('display','none');
		});
	
	//content alerts  - edit
		$(document).on('click','.tp-vl-col .btn-alert-edit',function(e){
			e.preventDefault();
			
			currentBox = $(this).parent('.tp-vl-col').attr('id');
			
			//hide elems, show form already
			$('#tp-vlb-popup #elems').css('display','none');
			$('#tp-vlb-form-alert').css('display','block');
			
			//load saved data into fields
			$('#tp-vlb-form-alert #tp-vlb-alert-type').val( $(this).parent().find('.tp-hidden-data').attr('data-alert-type') );
			$('#tp-vlb-form-alert #tp-vlb-alert-icon').val( $(this).parent().find('.tp-hidden-data').attr('data-alert-icon') );
			$('#tp-vlb-form-alert #tp-vlb-alert-text').val( $(this).parent().find('.tp-hidden-data').html() );
	
			
			//fade in popup
			$('#tp-vlb-popup').fadeIn(400);
			
		});
	
	
	
	
	
	
	
	
	
	//content call to action - submit
		$(document).on('click','#tp-vlb-form-cta #tp-vlb-cnt-save',function(e){
			e.preventDefault();
									
			//save current data to hidden var
			//but remove the previous one first
			$('#'+currentBox+' .tp-hidden-data').remove();
			//place title block icon into editor's column box
			
					var cta_circle = '';
					var cta_hover = '';
					if($('#tp-vlb-cta-circle').is(':checked')){ cta_circle = 'yes'; }
					if($('#tp-vlb-cta-hover').is(':checked')){ cta_hover = 'yes'; }
			
			$('#'+currentBox+' .btn').replaceWith('<div class="btn btn-cta-edit"><i class="fa fa-exclamation"></i><br /><span>CALL TO ACTION</span></div>'+
			'<div class="tp-hidden-data" data-sc-type="cta" data-cta-type="'+$('#tp-vlb-form-cta #tp-vlb-cta-type').val()+'" data-cta-title="'+$('#tp-vlb-form-cta #tp-vlb-cta-title').val()+'" data-cta-button="'+$('#tp-vlb-form-cta #tp-vlb-cta-button').val()+'" data-cta-link="'+$('#tp-vlb-form-cta #tp-vlb-cta-link').val()+'" data-cta-linktarget="'+$('#tp-vlb-form-cta #tp-vlb-cta-linktarget').val()+'" data-cta-color="'+$('#tp-vlb-form-cta #tp-vlb-cta-color').val()+'" data-cta-icon="'+$('#tp-vlb-form-cta #tp-vlb-cta-icon').val()+'" data-cta-circle="'+cta_circle+'" data-cta-hover="'+cta_hover+'" data-cta-align="'+$('#tp-vlb-form-cta #tp-vlb-cta-align').val()+'">'+$('#tp-vlb-form-cta #tp-vlb-cta-text').val()+'</div>');
						
			//clear input fields
			$('#tp-vlb-form-cta input').removeAttr('value');
			$('#tp-vlb-form-cta input').attr('checked', false);
			
			//hide popup			
			$('#tp-vlb-popup').css('display','none'); 
			$('#tp-vlb-popup #elems').css('display','block');
			$('#tp-vlb-popup .tp-vlb-form').css('display','none');
		});
	
	//content call to action  - edit
		$(document).on('click','.tp-vl-col .btn-cta-edit',function(e){
			e.preventDefault();
			
			currentBox = $(this).parent('.tp-vl-col').attr('id');
			
			//hide elems, show form already
			$('#tp-vlb-popup #elems').css('display','none');
			$('#tp-vlb-form-cta').css('display','block');
			
			//load saved data into fields
			$('#tp-vlb-form-cta #tp-vlb-cta-type').val( $(this).parent().find('.tp-hidden-data').attr('data-cta-type') );
			$('#tp-vlb-form-cta #tp-vlb-cta-title').val( $(this).parent().find('.tp-hidden-data').attr('data-cta-title') );
			$('#tp-vlb-form-cta #tp-vlb-cta-text').val( $(this).parent().find('.tp-hidden-data').attr('data-cta-text') );
			$('#tp-vlb-form-cta #tp-vlb-cta-button').val( $(this).parent().find('.tp-hidden-data').attr('data-cta-button') );
			$('#tp-vlb-form-cta #tp-vlb-cta-link').val( $(this).parent().find('.tp-hidden-data').attr('data-cta-link') );
			$('#tp-vlb-form-cta #tp-vlb-cta-linktarget').val( $(this).parent().find('.tp-hidden-data').attr('data-cta-linktarget') );
			$('#tp-vlb-form-cta #tp-vlb-cta-color').val( $(this).parent().find('.tp-hidden-data').attr('data-cta-color') );
			$('#tp-vlb-form-cta #tp-vlb-cta-icon').val( $(this).parent().find('.tp-hidden-data').attr('data-cta-icon') );			
			if($(this).parent().find('.tp-hidden-data').attr('data-cta-circle') == 'yes'){ $('#tp-vlb-form-cta #tp-vlb-cta-circle').prop('checked', true); }
			if($(this).parent().find('.tp-hidden-data').attr('data-cta-hover') == 'yes'){ $('#tp-vlb-form-cta #tp-vlb-cta-hover').prop('checked', true); }			
			$('#tp-vlb-form-cta #tp-vlb-cta-align').val( $(this).parent().find('.tp-hidden-data').attr('data-cta-align') );
			$('#tp-vlb-form-cta #tp-vlb-cta-text').val( $(this).parent().find('.tp-hidden-data').html() );
	
			
			//fade in popup
			$('#tp-vlb-popup').fadeIn(400);
			
		});
	
	
	
	
	
	
	
	
	
	
	
	
	
	//content google font - submit
		$(document).on('click','#tp-vlb-form-gfont #tp-vlb-cnt-save',function(e){
			e.preventDefault();
									
			//save current data to hidden var
			//but remove the previous one first
			$('#'+currentBox+' .tp-hidden-data').remove();
			//place title block icon into editor's column box
				//get active editor and save THAT value!!
				var vlbtextdata = '';			
				if($('#tp-vlb-gfont-data').css('display') == 'none'){
					//rte editor is active, save its data					
					vlbtextdata = tinymce.get('tp-vlb-gfont-data').getContent();				
				}else{
					//textarea is active, save its data
					vlbtextdata = $('#tp-vlb-gfont-data').val();
				}
				
			$('#'+currentBox+' .btn').replaceWith('<div class="btn btn-gfont-edit"><i class="fa fa-font"></i><br /><span>GOOGLE FONT</span></div>'+
			'<div class="tp-hidden-data" data-sc-type="gfont" data-gfont-font="'+$('#tp-vlb-form-gfont #tp-vlb-gfont-font').val()+'" data-gfont-size="'+$('#tp-vlb-form-gfont #tp-vlb-gfont-size').val()+'" data-gfont-style="'+$('#tp-vlb-form-gfont #tp-vlb-gfont-style').val()+'">'+vlbtextdata+'</div>');
						
			//clear input fields
			$('#tp-vlb-form-gfont input:not(.ed_button)').removeAttr('value');
			if(tinymce.get('tp-vlb-gfont-data')){
				tinymce.get('tp-vlb-gfont-data').setContent('');
			}
			$('#tp-vlb-gfont-data').val('');
			
			//hide popup			
			$('#tp-vlb-popup').css('display','none'); 
			$('#tp-vlb-popup #elems').css('display','block');
			$('#tp-vlb-popup .tp-vlb-form').css('display','none');
		});	
	
	
	//content google font  - edit
		$(document).on('click','.tp-vl-col .btn-gfont-edit',function(e){
			e.preventDefault();
			
			currentBox = $(this).parent('.tp-vl-col').attr('id');
			
			//hide elems, show form already
			$('#tp-vlb-popup #elems').css('display','none');
			$('#tp-vlb-form-gfont').css('display','block');
			
			//load saved data into fields
			$('#tp-vlb-form-gfont #tp-vlb-gfont-font').val( $(this).parent().find('.tp-hidden-data').attr('data-gfont-font') );
			$('#tp-vlb-form-gfont #tp-vlb-gfont-size').val( $(this).parent().find('.tp-hidden-data').attr('data-gfont-size') );
			$('#tp-vlb-form-gfont #tp-vlb-gfont-style').val( $(this).parent().find('.tp-hidden-data').attr('data-gfont-style') );
						
			//load saved data into editor
			var loadtextdata = $(this).parent().find('.tp-hidden-data').html();
			if($('#tp-vlb-gfont-data').css('display') == 'none'){
				tinymce.get('tp-vlb-gfont-data').setContent( loadtextdata );				
			}else{
				$('#tp-vlb-gfont-data').val( loadtextdata );
			}
	
			
			//fade in popup
			$('#tp-vlb-popup').fadeIn(400);
			
		});
	
	
	
	
	
	
	//content google map - submit
		$(document).on('click','#tp-vlb-form-gmap #tp-vlb-cnt-save',function(e){
			e.preventDefault();
									
			//save current data to hidden var
			//but remove the previous one first
			$('#'+currentBox+' .tp-hidden-data').remove();
			
				var gmap_marker = '';
				if($('#tp-vlb-gmap-marker').is(':checked')){ gmap_marker = 'yes'; }
			
			//place title block icon into editor's column box
			$('#'+currentBox+' .btn').replaceWith('<div class="btn btn-gmap-edit"><i class="fa fa-map-marker"></i><br /><span>GOOGLE MAP</span></div>'+
			'<div class="tp-hidden-data" data-sc-type="gmap" data-gmap-address="'+$('#tp-vlb-form-gmap #tp-vlb-gmap-address').val()+'" data-gmap-zoom="'+$('#tp-vlb-form-gmap #tp-vlb-gmap-zoom').val()+'" data-gmap-height="'+$('#tp-vlb-form-gmap #tp-vlb-gmap-height').val()+'" data-gmap-marker="'+gmap_marker+'" data-gmap-markerimg="'+$('#tp-vlb-form-gmap #tp-vlb-gmap-markerimg').val()+'">'+$('#tp-vlb-form-gmap #tp-vlb-gmap-infowindow').val()+'</div>');
						
			//clear input fields
			$('#tp-vlb-form-gmap input').removeAttr('value');
			$('#tp-vlb-form-gmap input').attr('checked', false);
			
			
			//hide popup			
			$('#tp-vlb-popup').css('display','none'); 
			$('#tp-vlb-popup #elems').css('display','block');
			$('#tp-vlb-popup .tp-vlb-form').css('display','none');
		});	
	
	
	//content google map  - edit
		$(document).on('click','.tp-vl-col .btn-gmap-edit',function(e){
			e.preventDefault();
			
			currentBox = $(this).parent('.tp-vl-col').attr('id');
			
			//hide elems, show form already
			$('#tp-vlb-popup #elems').css('display','none');
			$('#tp-vlb-form-gmap').css('display','block');
			
			//load saved data into fields
			$('#tp-vlb-form-gmap #tp-vlb-gmap-address').val( $(this).parent().find('.tp-hidden-data').attr('data-gmap-address') );
			$('#tp-vlb-form-gmap #tp-vlb-gmap-zoom').val( $(this).parent().find('.tp-hidden-data').attr('data-gmap-zoom') );
			$('#tp-vlb-form-gmap #tp-vlb-gmap-height').val( $(this).parent().find('.tp-hidden-data').attr('data-gmap-height') );			
			if($(this).parent().find('.tp-hidden-data').attr('data-gmap-marker') == 'yes'){ $('#tp-vlb-form-gmap #tp-vlb-gmap-marker').prop('checked', true); }		
			$('#tp-vlb-form-gmap #tp-vlb-gmap-markerimg').val( $(this).parent().find('.tp-hidden-data').attr('data-gmap-markerimg') );
			$('#tp-vlb-form-gmap #tp-vlb-gmap-infowindow').val( $(this).parent().find('.tp-hidden-data').html() );
			
			
	
			
			//fade in popup
			$('#tp-vlb-popup').fadeIn(400);
			
		});
		
		
		
		
		
	
	
	
	
	
	//content portfolio - submit
		$(document).on('click','#tp-vlb-form-portfolio #tp-vlb-cnt-save',function(e){
			e.preventDefault();
									
			//save current data to hidden var
			//but remove the previous one first
			$('#'+currentBox+' .tp-hidden-data').remove();
			
				var pfolio_showtitle = '';
				var pfolio_showexcerpt = '';
				var pfolio_showcategory = '';
				if($('#tp-vlb-pfolio-showtitle').is(':checked')){ pfolio_showtitle = 'yes'; }
				if($('#tp-vlb-pfolio-showexcerpt').is(':checked')){ pfolio_showexcerpt = 'yes'; }
				if($('#tp-vlb-pfolio-showcategory').is(':checked')){ pfolio_showcategory = 'yes'; }
			
			//place title block icon into editor's column box
			$('#'+currentBox+' .btn').replaceWith('<div class="btn btn-portfolio-edit"><i class="fa fa-star"></i><br /><span>PORTFOLIO</span></div>'+
			'<div class="tp-hidden-data" data-sc-type="portfolio" data-pfolio-category="'+$('#tp-vlb-form-portfolio #tp-vlb-pfolio-category').val()+'" data-pfolio-columns="'+$('#tp-vlb-form-portfolio #tp-vlb-pfolio-columns').val()+'" data-pfolio-limit="'+$('#tp-vlb-form-portfolio #tp-vlb-pfolio-limit').val()+'" data-pfolio-showtitle="'+pfolio_showtitle+'" data-pfolio-showexcerpt="'+pfolio_showexcerpt+'" data-pfolio-showcategory="'+pfolio_showcategory+'" data-pfolio-align="'+$('#tp-vlb-form-portfolio #tp-vlb-pfolio-align').val()+'"></div>');
						
			//clear input fields
			$('#tp-vlb-form-portfolio input').removeAttr('value');
			$('#tp-vlb-form-portfolio input').attr('checked', false);
			
			
			//hide popup			
			$('#tp-vlb-popup').css('display','none'); 
			$('#tp-vlb-popup #elems').css('display','block');
			$('#tp-vlb-popup .tp-vlb-form').css('display','none');
		});	
	
	
	
	//content portfolio  - edit
		$(document).on('click','.tp-vl-col .btn-portfolio-edit',function(e){
			e.preventDefault();
			
			currentBox = $(this).parent('.tp-vl-col').attr('id');
			
			//hide elems, show form already
			$('#tp-vlb-popup #elems').css('display','none');
			$('#tp-vlb-form-portfolio').css('display','block');
			
			//load saved data into fields
			$('#tp-vlb-form-portfolio #tp-vlb-pfolio-category').val( $(this).parent().find('.tp-hidden-data').attr('data-pfolio-category') );
			$('#tp-vlb-form-portfolio #tp-vlb-pfolio-columns').val( $(this).parent().find('.tp-hidden-data').attr('data-pfolio-columns') );
			$('#tp-vlb-form-portfolio #tp-vlb-pfolio-limit').val( $(this).parent().find('.tp-hidden-data').attr('data-pfolio-limit') );
			$('#tp-vlb-form-portfolio #tp-vlb-pfolio-align').val( $(this).parent().find('.tp-hidden-data').attr('data-pfolio-align') );			
			if($(this).parent().find('.tp-hidden-data').attr('data-pfolio-showtitle') == 'yes'){ $('#tp-vlb-form-portfolio #tp-vlb-pfolio-showtitle').prop('checked', true); }		
			if($(this).parent().find('.tp-hidden-data').attr('data-pfolio-showexcerpt') == 'yes'){ $('#tp-vlb-form-portfolio #tp-vlb-pfolio-showexcerpt').prop('checked', true); }		
			if($(this).parent().find('.tp-hidden-data').attr('data-pfolio-showcategory') == 'yes'){ $('#tp-vlb-form-portfolio #tp-vlb-pfolio-showcategory').prop('checked', true); }		
			
			
			//fade in popup
			$('#tp-vlb-popup').fadeIn(400);
			
		});
		
		
		
		
	
	
	
	
	
	//content pricing - submit
		$(document).on('click','#tp-vlb-form-pricing #tp-vlb-cnt-save',function(e){
			e.preventDefault();
									
			//save current data to hidden var
			//but remove the previous one first
			$('#'+currentBox+' .tp-hidden-data').remove();
			
				var pricing_bold = '';
				if($('#tp-vlb-pricing-bold').is(':checked')){ pricing_bold = 'yes'; }
			
			//place title block icon into editor's column box
			$('#'+currentBox+' .btn').replaceWith('<div class="btn btn-pricing-edit"><i class="fa fa-table"></i><br /><span>PRICING TABLE</span></div>'+
			'<div class="tp-hidden-data" data-sc-type="pricing" data-pricing-price="'+$('#tp-vlb-form-pricing #tp-vlb-pricing-price').val()+'" data-pricing-title="'+$('#tp-vlb-form-pricing #tp-vlb-pricing-title').val()+'" data-pricing-button="'+$('#tp-vlb-form-pricing #tp-vlb-pricing-button').val()+'" data-pricing-link="'+$('#tp-vlb-form-pricing #tp-vlb-pricing-link').val()+'" data-pricing-per="'+$('#tp-vlb-form-pricing #tp-vlb-pricing-per').val()+'" data-pricing-bold="'+pricing_bold+'">'+$('#tp-vlb-form-pricing #tp-vlb-pricing-list').val()+'</div>');
						
			//clear input fields
			$('#tp-vlb-form-pricing input').removeAttr('value');
			$('#tp-vlb-form-pricing textarea').val('');
			$('#tp-vlb-form-pricing input').attr('checked', false);
			
			
			//hide popup			
			$('#tp-vlb-popup').css('display','none'); 
			$('#tp-vlb-popup #elems').css('display','block');
			$('#tp-vlb-popup .tp-vlb-form').css('display','none');
		});	
	
	
	
	//content pricing  - edit
		$(document).on('click','.tp-vl-col .btn-pricing-edit',function(e){
			e.preventDefault();
			
			currentBox = $(this).parent('.tp-vl-col').attr('id');
			
			//hide elems, show form already
			$('#tp-vlb-popup #elems').css('display','none');
			$('#tp-vlb-form-pricing').css('display','block');
			
			//load saved data into fields
			$('#tp-vlb-form-pricing #tp-vlb-pricing-price').val( $(this).parent().find('.tp-hidden-data').attr('data-pricing-price') );
			$('#tp-vlb-form-pricing #tp-vlb-pricing-title').val( $(this).parent().find('.tp-hidden-data').attr('data-pricing-title') );
			$('#tp-vlb-form-pricing #tp-vlb-pricing-button').val( $(this).parent().find('.tp-hidden-data').attr('data-pricing-button') );
			$('#tp-vlb-form-pricing #tp-vlb-pricing-link').val( $(this).parent().find('.tp-hidden-data').attr('data-pricing-link') );
			$('#tp-vlb-form-pricing #tp-vlb-pricing-per').val( $(this).parent().find('.tp-hidden-data').attr('data-pricing-per') );
			if($(this).parent().find('.tp-hidden-data').attr('data-pricing-bold') == 'yes'){ $('#tp-vlb-form-pricing #tp-vlb-pricing-bold').prop('checked', true); }		
			$('#tp-vlb-form-pricing #tp-vlb-pricing-list').val( $(this).parent().find('.tp-hidden-data').html() );
			
			
			//fade in popup
			$('#tp-vlb-popup').fadeIn(400);
			
		});
		
		
		
	
	
	
	
	
	//content raw html - submit
		$(document).on('click','#tp-vlb-form-raw #tp-vlb-cnt-save',function(e){
			e.preventDefault();
									
			//save current data to hidden var
			//but remove the previous one first
			$('#'+currentBox+' .tp-hidden-data').remove();
			
			var rawCode = $('#tp-vlb-form-raw #tp-vlb-raw-code').val();
			//.replace( /\&amp;/g, '&' );
			
			//place title block icon into editor's column box
			$('#'+currentBox+' .btn').replaceWith('<div class="btn btn-raw-edit"><i class="fa fa-code"></i><br /><span>RAW HTML</span></div>'+
			'<div class="tp-hidden-data" data-sc-type="raw"><div class="tp-vl-rawblock">'+rawCode+'</div></div>');
						
			//clear input fields
			$('#tp-vlb-form-raw input').removeAttr('value');
			$('#tp-vlb-form-raw textarea').removeAttr('value');
			$('#tp-vlb-form-raw input').attr('checked', false);
			
			
			//hide popup			
			$('#tp-vlb-popup').css('display','none'); 
			$('#tp-vlb-popup #elems').css('display','block');
			$('#tp-vlb-popup .tp-vlb-form').css('display','none');
		});	
	
	
	
	//content raw html  - edit
		$(document).on('click','.tp-vl-col .btn-raw-edit',function(e){
			e.preventDefault();
			
			currentBox = $(this).parent('.tp-vl-col').attr('id');
			
			//hide elems, show form already
			$('#tp-vlb-popup #elems').css('display','none');
			$('#tp-vlb-form-raw').css('display','block');
			
			//load saved data into fields
			$('#tp-vlb-form-raw #tp-vlb-raw-code').val( $(this).parent().find('.tp-hidden-data .tp-vl-rawblock').html() );	
			
			
			//fade in popup
			$('#tp-vlb-popup').fadeIn(400);
			
		});
		
		
		
	
	
	
	
	
	//content tabs - submit
		$(document).on('click','#tp-vlb-form-tabs #tp-vlb-cnt-save',function(e){
			e.preventDefault();
									
			//save current data to hidden var
			//but remove the previous one first
			$('#'+currentBox+' .tp-hidden-data').remove();
				
			//get active editor and save THAT value!!
				var vlbtextdata1 = '';			
				if($('#tp-vlb-tabs-data1').css('display') == 'none'){
					//rte editor is active, save its data					
					vlbtextdata1 = tinymce.get('tp-vlb-tabs-data1').getContent();				
				}else{
					//textarea is active, save its data
					vlbtextdata1 = $('#tp-vlb-tabs-data1').val();
				}	
				
				var vlbtextdata2 = '';			
				if($('#tp-vlb-tabs-data2').css('display') == 'none'){
					//rte editor is active, save its data					
					vlbtextdata2 = tinymce.get('tp-vlb-tabs-data2').getContent();				
				}else{
					//textarea is active, save its data
					vlbtextdata2 = $('#tp-vlb-tabs-data2').val();
				}					
				
				var vlbtextdata3 = '';			
				if($('#tp-vlb-tabs-data3').css('display') == 'none'){
					//rte editor is active, save its data					
					vlbtextdata3 = tinymce.get('tp-vlb-tabs-data3').getContent();				
				}else{
					//textarea is active, save its data
					vlbtextdata3 = $('#tp-vlb-tabs-data3').val();
				}					
				
				var vlbtextdata4 = '';			
				if($('#tp-vlb-tabs-data4').css('display') == 'none'){
					//rte editor is active, save its data					
					vlbtextdata4 = tinymce.get('tp-vlb-tabs-data4').getContent();				
				}else{
					//textarea is active, save its data
					vlbtextdata4 = $('#tp-vlb-tabs-data4').val();
				}					
				
				var vlbtextdata5 = '';			
				if($('#tp-vlb-tabs-data5').css('display') == 'none'){
					//rte editor is active, save its data					
					vlbtextdata5 = tinymce.get('tp-vlb-tabs-data5').getContent();				
				}else{
					//textarea is active, save its data
					vlbtextdata5 = $('#tp-vlb-tabs-data5').val();
				}					
				
				var vlbtextdata6 = '';			
				if($('#tp-vlb-tabs-data6').css('display') == 'none'){
					//rte editor is active, save its data					
					vlbtextdata6 = tinymce.get('tp-vlb-tabs-data6').getContent();				
				}else{
					//textarea is active, save its data
					vlbtextdata6 = $('#tp-vlb-tabs-data6').val();
				}					
				
			//place title block icon into editor's column box
				//get tab titles into a string
					var tabstitles = new Array();
					if($('#tp-vlb-form-tabs #tp-vlb-tabs-title1').val()){ tabstitles.push( $('#tp-vlb-form-tabs #tp-vlb-tabs-title1').val() ); }
					if($('#tp-vlb-form-tabs #tp-vlb-tabs-title2').val()){ tabstitles.push( $('#tp-vlb-form-tabs #tp-vlb-tabs-title2').val() ); }
					if($('#tp-vlb-form-tabs #tp-vlb-tabs-title3').val()){ tabstitles.push( $('#tp-vlb-form-tabs #tp-vlb-tabs-title3').val() ); }
					if($('#tp-vlb-form-tabs #tp-vlb-tabs-title4').val()){ tabstitles.push( $('#tp-vlb-form-tabs #tp-vlb-tabs-title4').val() ); }
					if($('#tp-vlb-form-tabs #tp-vlb-tabs-title5').val()){ tabstitles.push( $('#tp-vlb-form-tabs #tp-vlb-tabs-title5').val() ); }
					if($('#tp-vlb-form-tabs #tp-vlb-tabs-title6').val()){ tabstitles.push( $('#tp-vlb-form-tabs #tp-vlb-tabs-title6').val() ); }
			$('#'+currentBox+' .btn').replaceWith('<div class="btn btn-tabs-edit"><i class="fa fa-ellipsis-h"></i><br /><span>TABS</span></div>'+
			'<div class="tp-hidden-data" data-sc-type="tabs" data-tabs-titles="'+tabstitles.join()+'"><div class="tab1">'+vlbtextdata1+'</div>		<div class="tab2">'+vlbtextdata2+'</div>			<div class="tab3">'+vlbtextdata3+'</div>			<div class="tab4">'+vlbtextdata4+'</div>			<div class="tab5">'+vlbtextdata5+'</div>			<div class="tab6">'+vlbtextdata6+'</div>			</div>');
						
			//clear input fields
			$('#tp-vlb-form-tabs input:not(.ed_button)').removeAttr('value');			
			$('#tp-vlb-form-tabs input').attr('checked', false);
			if(tinymce.get('tp-vlb-tabs-data1')){
				tinymce.get('tp-vlb-tabs-data1').setContent('');
			}
			$('#tp-vlb-tabs-data1').val('');
			
			if(tinymce.get('tp-vlb-tabs-data2')){
				tinymce.get('tp-vlb-tabs-data2').setContent('');
			}
			$('#tp-vlb-tabs-data2').val('');
			
			if(tinymce.get('tp-vlb-tabs-data3')){
				tinymce.get('tp-vlb-tabs-data3').setContent('');
			}
			$('#tp-vlb-tabs-data3').val('');
			
			if(tinymce.get('tp-vlb-tabs-data4')){
				tinymce.get('tp-vlb-tabs-data4').setContent('');
			}
			$('#tp-vlb-tabs-data4').val('');
			
			if(tinymce.get('tp-vlb-tabs-data5')){
				tinymce.get('tp-vlb-tabs-data5').setContent('');
			}
			$('#tp-vlb-tabs-data5').val('');
			
			if(tinymce.get('tp-vlb-tabs-data6')){
				tinymce.get('tp-vlb-tabs-data6').setContent('');
			}
			$('#tp-vlb-tabs-data6').val('');
			
			
			//hide popup			
			$('#tp-vlb-popup').css('display','none'); 
			$('#tp-vlb-popup #elems').css('display','block');
			$('#tp-vlb-popup .tp-vlb-form').css('display','none');
		});	
	
	
	
	//content tabs  - edit
		$(document).on('click','.tp-vl-col .btn-tabs-edit',function(e){
			e.preventDefault();
			
			currentBox = $(this).parent('.tp-vl-col').attr('id');
			
			//hide elems, show form already
			$('#tp-vlb-popup #elems').css('display','none');
			$('#tp-vlb-form-tabs').css('display','block');
			
			//load saved data into fields
			var tabstitles = $(this).parent().find('.tp-hidden-data').attr('data-tabs-titles').split(',');
			for(var i=0; i < tabstitles.length; i++){
				var j = i+1;
				$('#tp-vlb-form-tabs #tp-vlb-tabs-title'+j).val( tabstitles[i] );
			}
			
			
			
			var loadtextdata1 = $(this).parent().find('.tp-hidden-data .tab1').html();
			if($('#tp-vlb-tabs-data1').css('display') == 'none'){
				tinymce.get('tp-vlb-tabs-data1').setContent( loadtextdata1 );				
			}else{
				$('#tp-vlb-tabs-data1').val( loadtextdata1 );
			}
			
			var loadtextdata2 = $(this).parent().find('.tp-hidden-data .tab2').html();
			if($('#tp-vlb-tabs-data2').css('display') == 'none'){
				tinymce.get('tp-vlb-tabs-data2').setContent( loadtextdata2 );				
			}else{
				$('#tp-vlb-tabs-data2').val( loadtextdata2 );
			}
			
			var loadtextdata3 = $(this).parent().find('.tp-hidden-data .tab3').html();
			if($('#tp-vlb-tabs-data3').css('display') == 'none'){
				tinymce.get('tp-vlb-tabs-data3').setContent( loadtextdata3 );				
			}else{
				$('#tp-vlb-tabs-data3').val( loadtextdata3 );
			}
			
			var loadtextdata4 = $(this).parent().find('.tp-hidden-data .tab4').html();
			if($('#tp-vlb-tabs-data4').css('display') == 'none'){
				tinymce.get('tp-vlb-tabs-data4').setContent( loadtextdata4 );				
			}else{
				$('#tp-vlb-tabs-data4').val( loadtextdata4 );
			}
			
			var loadtextdata5 = $(this).parent().find('.tp-hidden-data .tab5').html();
			if($('#tp-vlb-tabs-data5').css('display') == 'none'){
				tinymce.get('tp-vlb-tabs-data5').setContent( loadtextdata5 );				
			}else{
				$('#tp-vlb-tabs-data5').val( loadtextdata5 );
			}
			
			var loadtextdata6 = $(this).parent().find('.tp-hidden-data .tab6').html();
			if($('#tp-vlb-tabs-data6').css('display') == 'none'){
				tinymce.get('tp-vlb-tabs-data6').setContent( loadtextdata6 );				
			}else{
				$('#tp-vlb-tabs-data6').val( loadtextdata6 );
			}
			
			
			
			//fade in popup
			$('#tp-vlb-popup').fadeIn(400);
			
		});
		
		
		


	
	//content testemonial - media lib
		jQuery('#tp-vlb-form-testemonial .get-image').click(function(){
			wp.media.editor.send.attachment = function(props, attachment){
				jQuery('#tp-vlb-form-testemonial #selected-image').val(attachment.url);
				
				jQuery('#tp-vlb-form-testemonial .get-image').css('display','none');
				jQuery('#tp-vlb-form-testemonial .img_preview').css('display','inline');
				jQuery('#tp-vlb-form-testemonial .img_preview').attr('src',attachment.url);
			}

			wp.media.editor.open(this);

			return false;
		});
		
		
	
	//content testemonial - submit
		$(document).on('click','#tp-vlb-form-testemonial #tp-vlb-cnt-save',function(e){
			e.preventDefault();
									
			//save current data to hidden var
			//but remove the previous one first
			$('#'+currentBox+' .tp-hidden-data').remove();
						
			//place title block icon into editor's column box
			$('#'+currentBox+' .btn').replaceWith('<div class="btn btn-testemonial-edit"><i class="fa fa-quote-left"></i><br /><span>TESTEMONIAL</span></div>'+
			'<div class="tp-hidden-data" data-sc-type="testemonial" data-testemonial-image="'+$('#tp-vlb-form-testemonial #selected-image').val()+'" data-testemonial-company="'+$('#tp-vlb-form-testemonial #tp-vlb-testemonial-company').val()+'" data-testemonial-author="'+$('#tp-vlb-form-testemonial #tp-vlb-testemonial-author').val()+'">'+$('#tp-vlb-form-testemonial #tp-vlb-testemonial-text').val()+'</div>');
						
			//clear input fields
			$('#tp-vlb-form-testemonial input').removeAttr('value');
			$('#tp-vlb-form-testemonial textarea').removeAttr('value');
			$('#tp-vlb-form-testemonial input').attr('checked', false);
			jQuery('#tp-vlb-form-testemonial .img_preview').css('display','none');
			jQuery('#tp-vlb-form-testemonial .get-image').css('display','inline');
			
			
			//hide popup			
			$('#tp-vlb-popup').css('display','none'); 
			$('#tp-vlb-popup #elems').css('display','block');
			$('#tp-vlb-popup .tp-vlb-form').css('display','none');
		});	
	
	
	
	//content testemonial  - edit
		$(document).on('click','.tp-vl-col .btn-testemonial-edit',function(e){
			e.preventDefault();
			
			currentBox = $(this).parent('.tp-vl-col').attr('id');
			
			//hide elems, show form already
			$('#tp-vlb-popup #elems').css('display','none');
			$('#tp-vlb-form-testemonial').css('display','block');
			
			//load saved data into fields
			var testeimg = $(this).parent().find('.tp-hidden-data').attr('data-testemonial-image');
			if(!testeimg){			
				$('#tp-vlb-form-testemonial .img_preview').css('display','none');
				$('#tp-vlb-form-testemonial .get-image').css('display','inline');				
			}else{				
				$('#tp-vlb-form-testemonial .img_preview').attr('src',testeimg );
				$('#tp-vlb-form-testemonial .img_preview').css('display','inline');
				$('#tp-vlb-form-testemonial .get-image').css('display','none');
			}
			$('#tp-vlb-form-testemonial #tp-vlb-testemonial-author').val( $(this).parent().find('.tp-hidden-data').attr('data-testemonial-author') );
			$('#tp-vlb-form-testemonial #tp-vlb-testemonial-company').val( $(this).parent().find('.tp-hidden-data').attr('data-testemonial-company') );
			$('#tp-vlb-form-testemonial #tp-vlb-testemonial-text').val( $(this).parent().find('.tp-hidden-data').html() );	
			
			
			//fade in popup
			$('#tp-vlb-popup').fadeIn(400);
			
		});
		
		
		
		
	//content toggles - add new toggle
		$(document).on('click','#tp-vlb-form-toggle .add',function(e){
			e.preventDefault();
			
			var toggle_num = $('.toggle-holder').length + 1;
			
			$(this).parent().before('<div class="toggle-holder">'+
				'<p><label>Title</label><br /><input id="tp-vlb-toggle-title'+toggle_num+'" type="text" /></p>'+
				'<p><label>Icon name</label><br /><input id="tp-vlb-toggle-icon'+toggle_num+'" class="short" type="text" /><br /><span class="description">FontAwesome icon name, e.g.: <i>fa-angle-right</i>. <a href="http://fortawesome.github.io/Font-Awesome/icons/" target="_blank">Check the full list here.</a></span></p>'+
				'<p><label>Is it open by default?</label><br /><input type="checkbox" id="tp-vlb-toggle-open'+toggle_num+'" value="yes" /> Yes</p>'+
				'<p><label>Toggle content</label><br /><textarea id="tp-vlb-toggle-text'+toggle_num+'"></textarea></p>'+
				'<p>&nbsp;</p><hr /><p>&nbsp;</p></div>');
		
		});
		
		
	//content toggle - submit
		$(document).on('click','#tp-vlb-form-toggle #tp-vlb-cnt-save',function(e){
			e.preventDefault();
									
			//save current data to hidden var
			//but remove the previous one first
			$('#'+currentBox+' .tp-hidden-data').remove();
						
			//place title block icon into editor's column box
			var savedata = '<div class="btn btn-toggle-edit"><i class="fa fa-list"></i><br /><span>TOGGLE</span></div>'+
			'<div class="tp-hidden-data" data-sc-type="toggle"><div class="tp-vl-toggleblock">';
			var i;
			var togglelength = $('#tp-vlb-form-toggle .toggle-holder').length;
			for (i = 1; i <= togglelength; i++){
				var toggleopen = '';
				if($('#tp-vlb-toggle-open'+i).is(':checked')){ toggleopen = 'yes'; }
				
				savedata += '<div class="toggle toggle'+i+'" data-toggle-title="'+$('#tp-vlb-form-toggle #tp-vlb-toggle-title'+i).val()+'" data-toggle-icon="'+$('#tp-vlb-form-toggle #tp-vlb-toggle-icon'+i).val()+'" data-toggle-open="'+toggleopen+'">'+$('#tp-vlb-form-toggle #tp-vlb-toggle-text'+i).val()+'</div>';
			}
			savedata += '</div></div>';
			
			$('#'+currentBox+' .btn').replaceWith(savedata);
						
			//clear input fields
			$('#tp-vlb-form-toggle input').removeAttr('value');
			$('#tp-vlb-form-toggle textarea').removeAttr('value');
			$('#tp-vlb-form-toggle input').attr('checked', false);
			$('#tp-vlb-form-toggle .toggle-holder:not(:first)').remove();
			
			//hide popup			
			$('#tp-vlb-popup').css('display','none'); 
			$('#tp-vlb-popup #elems').css('display','block');
			$('#tp-vlb-popup .tp-vlb-form').css('display','none');
		});	
	
	
	
	//content toggle  - edit
		$(document).on('click','.tp-vl-col .btn-toggle-edit',function(e){
			e.preventDefault();
			
			currentBox = $(this).parent('.tp-vl-col').attr('id');
			
			//hide elems, show form already
			$('#tp-vlb-popup #elems').css('display','none');
			$('#tp-vlb-form-toggle').css('display','block');
			
			//clear prev forms
			$('#tp-vlb-form-toggle .toggle-holder:not(:first)').remove();
			
			//load saved data into fields
			//load first
			$('#tp-vlb-form-toggle #tp-vlb-toggle-title1').val( $(this).parent().find('.tp-hidden-data .toggle1').attr('data-toggle-title') );
			$('#tp-vlb-form-toggle #tp-vlb-toggle-icon1').val( $(this).parent().find('.tp-hidden-data .toggle1').attr('data-toggle-icon') );
			if($(this).parent().find('.tp-hidden-data .toggle1').attr('data-toggle-open') == 'yes'){
				$('#tp-vlb-form-toggle #tp-vlb-toggle-open1').attr('checked','checked');
			}
			$('#tp-vlb-form-toggle #tp-vlb-toggle-text1').val( $(this).parent().find('.tp-hidden-data .toggle1').html() );
			
			//load rest - list forms
			var numoftogs = $(this).parent().find('.tp-hidden-data .tp-vl-toggleblock .toggle').length;			
			var togforms = '';
			var i;			
			for (i = 2; i <= numoftogs; i++){
				togforms += '<div class="toggle-holder">'+
				'<p><label>Title</label><br /><input id="tp-vlb-toggle-title'+i+'" type="text" value="'+$(this).parent().find('.tp-hidden-data .toggle'+i).attr('data-toggle-title')+'" /></p>'+
				'<p><label>Icon name</label><br /><input id="tp-vlb-toggle-icon'+i+'" class="short" type="text" value="'+$(this).parent().find('.tp-hidden-data .toggle'+i).attr('data-toggle-icon')+'" /><br /><span class="description">FontAwesome icon name, e.g.: <i>fa-angle-right</i>. <a href="http://fortawesome.github.io/Font-Awesome/icons/" target="_blank">Check the full list here.</a></span></p>'+
				'<p><label>Is it open by default?</label><br /><input type="checkbox" id="tp-vlb-toggle-open" value="yes"';
				if($(this).parent().find('.tp-hidden-data .toggle'+i).attr('data-toggle-open') == 'yes'){ togforms += ' checked="checked"'; }
				togforms += '/> Yes</p>'+
				'<p><label>Toggle content</label><br /><textarea id="tp-vlb-toggle-text'+i+'">'+$(this).parent().find('.tp-hidden-data .toggle'+i).html()+'</textarea></p>'+
				'<p>&nbsp;</p><hr /><p>&nbsp;</p></div>\n';
			}						
			
			$('#tp-vlb-form-toggle .toggle-holder').after(togforms);
			
			//fade in popup
			$('#tp-vlb-popup').fadeIn(400);
			
		});
	
	
	
	
	
	
	
	//**********************************************************************************************************
	//	TRANSLATE HTML 2 SHORTCODE
	//**********************************************************************************************************
		function html2sc(){		
		
			//remove unnecessary divs
				$('#tp-vlb-elements .remove-row, #tp-vlb-elements .btn, #tp-vlb-elements .tit').remove();				
				
			
			
			//replace columns 1by1
							
				$('#tp-vlb-elements .tp-vl-col.one_half').each(function(index){
					var tempdata = $(this).html();
					var scstring = '[one_half';
					if($(this).hasClass('last')){
						scstring += ' last="yes"';
					}
					scstring += ']'+tempdata+'[/one_half]';
					$(this).replaceWith(scstring);					
				});
				
				$('#tp-vlb-elements .tp-vl-col.one_third').each(function(index){
					var tempdata = $(this).html();
					var scstring = '[one_third';
					if($(this).hasClass('last')){
						scstring += ' last="yes"';
					}
					scstring += ']'+tempdata+'[/one_third]';
					$(this).replaceWith(scstring);					
				});
				
				$('#tp-vlb-elements .tp-vl-col.two_third').each(function(index){
					var tempdata = $(this).html();
					var scstring = '[two_third';
					if($(this).hasClass('last')){
						scstring += ' last="yes"';
					}
					scstring += ']'+tempdata+'[/two_third]';
					$(this).replaceWith(scstring);					
				});
				
				$('#tp-vlb-elements .tp-vl-col.one_fourth').each(function(index){
					var tempdata = $(this).html();
					var scstring = '[one_fourth';
					if($(this).hasClass('last')){
						scstring += ' last="yes"';
					}
					scstring += ']'+tempdata+'[/one_fourth]';
					$(this).replaceWith(scstring);					
				});
				
				$('#tp-vlb-elements .tp-vl-col.three_fourth').each(function(index){
					var tempdata = $(this).html();
					var scstring = '[three_fourth';
					if($(this).hasClass('last')){
						scstring += ' last="yes"';
					}
					scstring += ']'+tempdata+'[/three_fourth]';
					$(this).replaceWith(scstring);					
				});
				
				$('#tp-vlb-elements .tp-vl-col.one_fifth').each(function(index){
					var tempdata = $(this).html();
					var scstring = '[one_fifth';
					if($(this).hasClass('last')){
						scstring += ' last="yes"';
					}
					scstring += ']'+tempdata+'[/one_fifth]';
					$(this).replaceWith(scstring);					
				});
		
		
		
		
			//replace all the rest of shortcodes				
				$('#tp-vlb-elements .tp-hidden-data').each(function(index){
					var sctype = $(this).attr('data-sc-type');
					
					if(sctype == 'text'){
						$(this).contents().unwrap();
					
					}else if(sctype == 'title'){
						var scstring = '[title style="'+$(this).attr('data-titles-style')+'" title="'+$(this).attr('data-titles-title')+'" subtitle="'+$(this).attr('data-titles-subtitle')+'" align="'+$(this).attr('data-titles-align')+'"]';
						$(this).replaceWith(scstring);	
					
					}else if(sctype == 'separator'){
						var scstring = '';
						var scseptype = $(this).attr('data-separators-type');
						if(scseptype == ''){
							scstring = '[hr]';
						}else if(scseptype == 'hr2'){
							scstring = '[hr2]';
						}else if(scseptype == 'vspace4'){
							scstring = '[vspace4]';
						}else if(scseptype == 'vspace3'){
							scstring = '[vspace3]';
						}else if(scseptype == 'vspace2'){
							scstring = '[vspace2]';
						}else if(scseptype == 'vspace'){
							scstring = '[vspace]';
						}

						$(this).replaceWith(scstring);	
						
					}else if(sctype == 'image'){
						var scstring = '';
						scstring += '<div class="tp-vl-imageblock">';
						var scimglink = $(this).attr('data-image-link');
						var scimgalign = $(this).attr('data-image-align');
						if(scimglink != ''){
							scstring += '<a href="'+scimglink+'">';
						}
						scstring += '<img src="'+$(this).attr('data-image-src')+'" alt="image"';
						if(scimgalign == 'left'){
							scstring += ' class="alignleft"';
						}else if(scimgalign == 'center'){
							scstring += ' class="aligncenter"';
						}else if(scimgalign == 'right'){
							scstring += ' class="alignright"';
						}
						
						scstring += '/>';
						if(scimglink != ''){
							scstring += '</a>';
						}
						scstring += '</div>';
						
						$(this).replaceWith(scstring);					
					
					}else if(sctype == 'video'){
						var scstring = '[video';
						scstring += ' src="'+$(this).attr('data-video-link')+'"';
						if($(this).attr('data-video-hover')){
							scstring += ' poster="'+$(this).attr('data-video-hover')+'"';
						}
						if($(this).attr('data-video-height')){
							scstring += ' height="'+$(this).attr('data-video-height')+'px"';
						}
						scstring += ']';
						
						$(this).replaceWith(scstring);
						
					}else if(sctype == 'alert'){
						var scstring = '[alert';
						if($(this).attr('data-alert-type')){
							scstring += ' type="'+$(this).attr('data-alert-type')+'"';
						}
						if($(this).attr('data-alert-icon')){
							scstring += ' icon="'+$(this).attr('data-alert-icon')+'"';
						}
						
						scstring += ']'+$(this).html()+'[/alert]';
						
						$(this).replaceWith(scstring);
						
					}else if(sctype == 'cta'){
						var scstring = '[cta';
						if($(this).attr('data-cta-type')){
							scstring += ' style="'+$(this).attr('data-cta-type')+'"';
						}
						if($(this).attr('data-cta-title')){
							scstring += ' title="'+$(this).attr('data-cta-title')+'"';
						}
						if($(this).attr('data-cta-button')){
							scstring += ' button="'+$(this).attr('data-cta-button')+'"';
						}
						if($(this).attr('data-cta-link')){
							scstring += ' link="'+$(this).attr('data-cta-link')+'"';
						}
						if($(this).attr('data-cta-linktarget')){
							scstring += ' target="'+$(this).attr('data-cta-linktarget')+'"';
						}
						if($(this).attr('data-cta-color')){
							scstring += ' color="'+$(this).attr('data-cta-color')+'"';
						}
						if($(this).attr('data-cta-icon')){
							scstring += ' icon="'+$(this).attr('data-cta-icon')+'"';
						}
						if($(this).attr('data-cta-circle')){
							scstring += ' circle="'+$(this).attr('data-cta-circle')+'"';
						}
						if($(this).attr('data-cta-hover')){
							scstring += ' hover="'+$(this).attr('data-cta-hover')+'"';
						}
						if($(this).attr('data-cta-align')){
							scstring += ' align="'+$(this).attr('data-cta-align')+'"';
						}
						
						scstring += ']'+$(this).html()+'[/cta]';
						
						$(this).replaceWith(scstring);
						
					}else if(sctype == 'gfont'){
						var scstring = '[font';
						if($(this).attr('data-gfont-font')){
							scstring += ' name="'+$(this).attr('data-gfont-font')+'"';
						}
						if($(this).attr('data-gfont-size')){
							scstring += ' size="'+$(this).attr('data-gfont-size')+'"';
						}
						if($(this).attr('data-gfont-style')){
							scstring += ' style="'+$(this).attr('data-gfont-style')+'"';
						}
						
						scstring += ']'+$(this).html()+'[/font]';
						
						$(this).replaceWith(scstring);
												
					}else if(sctype == 'gmap'){
						var scstring = '[map';
						if($(this).attr('data-gmap-address')){
							scstring += ' address="'+$(this).attr('data-gmap-address')+'"';
						}
						if($(this).attr('data-gmap-zoom')){
							scstring += ' zoom="'+$(this).attr('data-gmap-zoom')+'"';
						}
						if($(this).attr('data-gmap-height')){
							scstring += ' height="'+$(this).attr('data-gmap-height')+'px"';
						}
						if($(this).attr('data-gmap-marker')){
							scstring += ' marker="'+$(this).attr('data-gmap-marker')+'"';
						}
						if($(this).attr('data-gmap-markerimg')){
							scstring += ' markerimg="'+$(this).attr('data-gmap-markerimg')+'"';
						}
						
						scstring += ']'+$(this).html()+'[/map]';
						
						$(this).replaceWith(scstring);
						
					}else if(sctype == 'portfolio'){
						var scstring = '[portfolio';
						if($(this).attr('data-pfolio-category')){
							scstring += ' category="'+$(this).attr('data-pfolio-category')+'"';
						}
						if($(this).attr('data-pfolio-columns')){
							scstring += ' columns="'+$(this).attr('data-pfolio-columns')+'"';
						}
						if($(this).attr('data-pfolio-limit')){
							scstring += ' limit="'+$(this).attr('data-pfolio-limit')+'"';
						}
						if($(this).attr('data-pfolio-showtitle')){
							scstring += ' showtitle="'+$(this).attr('data-pfolio-showtitle')+'"';
						}
						if($(this).attr('data-pfolio-showexcerpt')){
							scstring += ' showexcerpt="'+$(this).attr('data-pfolio-showexcerpt')+'"';
						}
						if($(this).attr('data-pfolio-showcategory')){
							scstring += ' showcategory="'+$(this).attr('data-pfolio-showcategory')+'"';
						}
						if($(this).attr('data-pfolio-align')){
							scstring += ' align="'+$(this).attr('data-pfolio-align')+'"';
						}
												
						scstring += ']';
						
						$(this).replaceWith(scstring);
						
					}else if(sctype == 'pricing'){
						var scstring = '[plan';
						if($(this).attr('data-pricing-price')){
							scstring += ' price="'+$(this).attr('data-pricing-price')+'"';
						}
						if($(this).attr('data-pricing-title')){
							scstring += ' title="'+$(this).attr('data-pricing-title')+'"';
						}
						if($(this).attr('data-pricing-button')){
							scstring += ' button="'+$(this).attr('data-pricing-button')+'"';
						}
						if($(this).attr('data-pricing-link')){
							scstring += ' link="'+$(this).attr('data-pricing-link')+'"';
						}
						if($(this).attr('data-pricing-per')){
							scstring += ' per="'+$(this).attr('data-pricing-per')+'"';
						}
						if($(this).attr('data-pricing-bold')){ 
							scstring += ' bold="yes"';
						}
						
						//process lines
						var scplanlist = '<ul>';
						var scplanlines = $(this).html().split('\n');
						for(var i = 0;i < scplanlines.length;i++){
							scplanlist += '<li>'+scplanlines[i]+'</li>\n';
						}	
						scplanlist += '</ul>';						
						
						scstring += ']'+scplanlist+'[/plan]';
						
						$(this).replaceWith(scstring);
						
					}else if(sctype == 'raw'){						
						
						$(this).contents().unwrap();
						
					}else if(sctype == 'tabs'){
						var scstring = '[tabs titles="'+$(this).attr('data-tabs-titles')+'"]';
						var sctabs = '';
						
						if($('.tab1',this).html()){ 							
							sctabs += '[tab]'+$('.tab1',this).html()+'[/tab]';
						}
						if($('.tab2',this).html()){ 
							sctabs += '[tab]'+$('.tab2',this).html()+'[/tab]';
						}
						if($('.tab3',this).html()){ 
							sctabs += '[tab]'+$('.tab3',this).html()+'[/tab]';
						}
						if($('.tab4',this).html()){ 
							sctabs += '[tab]'+$('.tab4',this).html()+'[/tab]';
						}
						if($('.tab5',this).html()){ 
							sctabs += '[tab]'+$('.tab5',this).html()+'[/tab]';
						}
						if($('.tab6',this).html()){ 
							sctabs += '[tab]'+$('.tab6',this).html()+'[/tab]';
						}						
						
						
						
						//list tab contents here
						scstring += sctabs;
						
						scstring += '[/tabs]';
						
						$(this).replaceWith(scstring);
						
					}else if(sctype == 'testemonial'){
						var scstring = '[testemonial';
						if($(this).attr('data-testemonial-author')){
							scstring += ' author="'+$(this).attr('data-testemonial-author')+'"';
						}
						if($(this).attr('data-testemonial-company')){
							scstring += ' company="'+$(this).attr('data-testemonial-company')+'"';
						}
						if($(this).attr('data-testemonial-image')){
							scstring += ' image="'+$(this).attr('data-testemonial-image')+'"';
						}
						
						scstring += ']'+$(this).html()+'[/testemonial]';
						
						$(this).replaceWith(scstring);												
						
					}else if(sctype == 'toggle'){
						var numoftoggles = $('.toggle',this).length;
						var scstring = '<div class="tp-vl-toggleblock">';
						
						for(var i = 0;i <= numoftoggles;i++){
							var j = i + 1;
							if($('.toggle'+j,this).attr('data-toggle-title')){
								scstring += '[toggle title="'+$('.toggle'+j,this).attr('data-toggle-title')+'" icon="'+$('.toggle'+j,this).attr('data-toggle-icon')+'" open="'+$('.toggle'+j,this).attr('data-toggle-open')+'"]'+$('.toggle'+j,this).html()+'[/toggle]\n';
							}
						}				
						
						scstring += '</div>';
						
						$(this).replaceWith(scstring);		
												
					}
				});
		
			
			//return translated codes		
			return $('#tp-vlb-elements').html();
			
			
		}
	
	
	
	
	//**********************************************************************************************************
	//	TRANSLATE SHORTCODE 2 VLB HTML
	//**********************************************************************************************************		
		function sc2html(input){
			var output = input;
			var findSc, scAtts, i;
		
		
			//columns						
				output = output.replace(/\[one_half\]/g,'<div class="tp-vl-col one_half">');
				output = output.replace(/\[one_half last="yes"\]/g,'<div class="tp-vl-col one_half last">');
				output = output.replace(/\[\/one_half\]/g,'</div>');
				
				output = output.replace(/\[one_third\]/g,'<div class="tp-vl-col one_third">');
				output = output.replace(/\[one_third last="yes"\]/g,'<div class="tp-vl-col one_third last">');
				output = output.replace(/\[\/one_third\]/g,'</div>');
				
				output = output.replace(/\[two_third\]/g,'<div class="tp-vl-col two_third">');
				output = output.replace(/\[two_third last="yes"\]/g,'<div class="tp-vl-col two_third last">');
				output = output.replace(/\[\/two_third\]/g,'</div>');
				
				output = output.replace(/\[one_fourth\]/g,'<div class="tp-vl-col one_fourth">');
				output = output.replace(/\[one_fourth last="yes"\]/g,'<div class="tp-vl-col one_fourth last">');
				output = output.replace(/\[\/one_fourth\]/g,'</div>');
				
				output = output.replace(/\[three_fourth\]/g,'<div class="tp-vl-col three_fourth">');
				output = output.replace(/\[three_fourth last="yes"\]/g,'<div class="tp-vl-col three_fourth last">');
				output = output.replace(/\[\/three_fourth\]/g,'</div>');
				
				output = output.replace(/\[one_fifth\]/g,'<div class="tp-vl-col one_fifth">');
				output = output.replace(/\[one_fifth last="yes"\]/g,'<div class="tp-vl-col one_fifth last">');
				output = output.replace(/\[\/one_fifth\]/g,'</div>');
			
			
			
			
			//title
				findSc = output.match(/\[title(.*?)\]/g);
				//if array, process			
				if(findSc){
					for(i=0;i < findSc.length;i++){
						scAtts = String(findSc[i]);
						scAtts = scAtts.replace('[title ','');
						scAtts = scAtts.replace(']','');
						scAtts = scAtts.replace('title=','data-titles-title=');
						scAtts = scAtts.replace('subtitle=','data-titles-subtitle=');
						scAtts = scAtts.replace('style=','data-titles-style=');
						scAtts = scAtts.replace('align=','data-titles-align=');
						output = output.replace(findSc[i],'<div class="btn btn-titles-edit"><i class="fa fa-header"></i><br /><span>TITLE</span></div><div class="tp-hidden-data" data-sc-type="title" '+scAtts+'></div>');							
					}
					findSc = '';
				}
			
			
			
			//separators
				output = output.replace(/\[hr\]/g,'<div class="btn btn-separators-edit"><i class="fa fa-sort"></i><br /><span>SEPARATOR</span></div><div class="tp-hidden-data" data-sc-type="separator" data-separators-type=""></div>');
				output = output.replace(/\[hr2\]/g,'<div class="btn btn-separators-edit"><i class="fa fa-sort"></i><br /><span>SEPARATOR</span></div><div class="tp-hidden-data" data-sc-type="separator" data-separators-type="hr2"></div>');
				output = output.replace(/\[vspace4\]/g,'<div class="btn btn-separators-edit"><i class="fa fa-sort"></i><br /><span>SEPARATOR</span></div><div class="tp-hidden-data" data-sc-type="separator" data-separators-type="vspace4"></div>');
				output = output.replace(/\[vspace3\]/g,'<div class="btn btn-separators-edit"><i class="fa fa-sort"></i><br /><span>SEPARATOR</span></div><div class="tp-hidden-data" data-sc-type="separator" data-separators-type="vspace3"></div>');
				output = output.replace(/\[vspace2\]/g,'<div class="btn btn-separators-edit"><i class="fa fa-sort"></i><br /><span>SEPARATOR</span></div><div class="tp-hidden-data" data-sc-type="separator" data-separators-type="vspace2"></div>');
				output = output.replace(/\[vspace\]/g,'<div class="btn btn-separators-edit"><i class="fa fa-sort"></i><br /><span>SEPARATOR</span></div><div class="tp-hidden-data" data-sc-type="separator" data-separators-type="vspace"></div>');
			
			
			//video
				findSc = output.match(/\[video(.*?)\]/g);
				//if array, process			
				if(findSc){
					for(i=0;i < findSc.length;i++){
						scAtts = String(findSc[i]);
						scAtts = scAtts.replace('[video ','');
						scAtts = scAtts.replace(']','');
						scAtts = scAtts.replace('px"','"');
						scAtts = scAtts.replace('src=','data-video-link=');
						scAtts = scAtts.replace('poster=','data-video-hover=');
						scAtts = scAtts.replace('height=','data-video-height=');
						output = output.replace(findSc[i],'<div class="btn btn-video-edit"><i class="fa fa-play"></i><br /><span>VIDEO</span></div><div class="tp-hidden-data" data-sc-type="video" '+scAtts+'></div>');							
					}
					findSc = '';
				}
			
			
			//alert
				findSc = output.match(/\[alert(.*?)\]/g);
				//if array, process			
				if(findSc){
					for(i=0;i < findSc.length;i++){
						scAtts = String(findSc[i]);
						scAtts = scAtts.replace('[alert ','');
						scAtts = scAtts.replace(']','');
						scAtts = scAtts.replace('type=','data-alert-type=');
						scAtts = scAtts.replace('icon=','data-alert-icon=');
						output = output.replace(findSc[i],'<div class="btn btn-alert-edit"><i class="fa fa-info"></i><br /><span>ALERT BOX</span></div><div class="tp-hidden-data" data-sc-type="alert" '+scAtts+'>');		
						output = output.replace('[/alert]','</div>');
					}
					findSc = '';
				}
			
			
			//call to action			
				findSc = output.match(/\[cta(.*?)\]/g);
				//if array, process			
				if(findSc){
					for(i=0;i < findSc.length;i++){
						scAtts = String(findSc[i]);
						scAtts = scAtts.replace('[cta ','');
						scAtts = scAtts.replace(']','');
						scAtts = scAtts.replace('title=','data-cta-title=');
						scAtts = scAtts.replace('button=','data-cta-button=');
						scAtts = scAtts.replace('link=','data-cta-link=');
						scAtts = scAtts.replace('color=','data-cta-color=');
						scAtts = scAtts.replace('icon=','data-cta-icon=');
						scAtts = scAtts.replace('circle=','data-cta-circle=');
						scAtts = scAtts.replace('hover=','data-cta-hover=');
						scAtts = scAtts.replace('align=','data-cta-align=');
						scAtts = scAtts.replace('style=','data-cta-type=');
						output = output.replace(findSc[i],'<div class="btn btn-cta-edit"><i class="fa fa-exclamation"></i><br /><span>CALL TO ACTION</span></div><div class="tp-hidden-data" data-sc-type="cta" '+scAtts+'>');		
						output = output.replace('[/cta]','</div>');
					}
					findSc = '';
				}
			
			
			//gfont
				findSc = output.match(/\[font(.*?)\]/g);
				//if array, process			
				if(findSc){
					for(i=0;i < findSc.length;i++){
						scAtts = String(findSc[i]);
						scAtts = scAtts.replace('[font ','');
						scAtts = scAtts.replace(']','');
						scAtts = scAtts.replace('name=','data-gfont-font=');
						scAtts = scAtts.replace('size=','data-gfont-size=');
						scAtts = scAtts.replace('style=','data-gfont-style=');
						output = output.replace(findSc[i],'<div class="btn btn-gfont-edit"><i class="fa fa-font"></i><br /><span>GOOGLE FONT</span></div><div class="tp-hidden-data" data-sc-type="gfont" '+scAtts+'>');		
						output = output.replace('[/font]','</div>');
					}
					findSc = '';
				}
			
			
			//gmap
				findSc = output.match(/\[map(.*?)\]/g);
				//if array, process			
				if(findSc){
					for(i=0;i < findSc.length;i++){
						scAtts = String(findSc[i]);
						scAtts = scAtts.replace('[map ','');
						scAtts = scAtts.replace(']','');
						scAtts = scAtts.replace('px"','"');
						scAtts = scAtts.replace('address=','data-gmap-address=');
						scAtts = scAtts.replace('zoom=','data-gmap-zoom=');
						scAtts = scAtts.replace('height=','data-gmap-height=');
						scAtts = scAtts.replace('marker=','data-gmap-marker=');
						scAtts = scAtts.replace('markerimg=','data-gmap-markerimg=');					
						output = output.replace(findSc[i],'<div class="btn btn-gmap-edit"><i class="fa fa-map-marker"></i><br /><span>GOOGLE MAP</span></div><div class="tp-hidden-data" data-sc-type="gmap" '+scAtts+'>');							
						output = output.replace('[/map]','</div>');
					}
					findSc = '';
				}
			
			
			
			//portfolio
				findSc = output.match(/\[portfolio(.*?)\]/g);
				//if array, process			
				if(findSc){
					for(i=0;i < findSc.length;i++){
						scAtts = String(findSc[i]);
						scAtts = scAtts.replace('[portfolio ','');
						scAtts = scAtts.replace(']','');
						scAtts = scAtts.replace('category=','data-pfolio-category=');
						scAtts = scAtts.replace('columns=','data-pfolio-columns=');
						scAtts = scAtts.replace('limit=','data-pfolio-limit=');
						scAtts = scAtts.replace('showtitle=','data-pfolio-showtitle=');
						scAtts = scAtts.replace('showexcerpt=','data-pfolio-showexcerpt=');
						scAtts = scAtts.replace('showcategory=','data-pfolio-showcategory=');
						scAtts = scAtts.replace('align=','data-pfolio-align=');
						output = output.replace(findSc[i],'<div class="btn btn-portfolio-edit"><i class="fa fa-star"></i><br /><span>PORTFOLIO</span></div><div class="tp-hidden-data" data-sc-type="portfolio" '+scAtts+'></div>');							
						
					}
					findSc = '';
				}
			
			
			
			//pricing
				findSc = output.match(/\[plan(.*?)\]/g);
				//if array, process			
				if(findSc){
					for(i=0;i < findSc.length;i++){
						scAtts = String(findSc[i]);
						scAtts = scAtts.replace('[plan ','');
						scAtts = scAtts.replace(']','');
						scAtts = scAtts.replace('price=','data-pricing-price=');					
						scAtts = scAtts.replace('title=','data-pricing-title=');					
						scAtts = scAtts.replace('button=','data-pricing-button=');					
						scAtts = scAtts.replace('link=','data-pricing-link=');					
						scAtts = scAtts.replace('per=','data-pricing-per=');					
						scAtts = scAtts.replace('bold=','data-pricing-bold=');						
						output = output.replace(findSc[i],'<div class="btn btn-pricing-edit"><i class="fa fa-table"></i><br /><span>PRICING TABLE</span></div><div class="tp-hidden-data" data-sc-type="pricing" '+scAtts+'>');							
						output = output.replace('[/plan]','</div>');
					}
					findSc = '';
				}
					
			
			//tabs
				findSc = output.match(/\[tabs(.*?)\]/g);
				//if array, process			
				if(findSc){
					for(i=0;i < findSc.length;i++){
						scAtts = String(findSc[i]);
						scAtts = scAtts.replace('[tabs ','');
						scAtts = scAtts.replace(']','');				
						scAtts = scAtts.replace('titles=','data-tabs-titles=');								
						output = output.replace(findSc[i],'<div class="btn btn-tabs-edit"><i class="fa fa-ellipsis-h"></i><br /><span>TABS</span></div><div class="tp-hidden-data" data-sc-type="tabs" '+scAtts+'>');							
						output = output.replace('[/tabs]','</div>');
					}
					findSc = '';
				}
				output = output.replace(/\[tab\]/g,'<div class="tab">');
				output = output.replace(/\[\/tab\]/g,'</div>');
				
				
			
			//testemonial
				findSc = output.match(/\[testemonial(.*?)\]/g);
				//if array, process			
				if(findSc){
					for(i=0;i < findSc.length;i++){
						scAtts = String(findSc[i]);
						scAtts = scAtts.replace('[testemonial ','');
						scAtts = scAtts.replace(']','');
						scAtts = scAtts.replace('author=','data-testemonial-author=');
						scAtts = scAtts.replace('company=','data-testemonial-company=');
						scAtts = scAtts.replace('image=','data-testemonial-image=');
						output = output.replace(findSc[i],'<div class="btn btn-testemonial-edit"><i class="fa fa-quote-left"></i><br /><span>TESTEMONIAL</span></div><div class="tp-hidden-data" data-sc-type="testemonial" '+scAtts+'>');		
						output = output.replace('[/testemonial]','</div>');
					}
					findSc = '';
				}
				
				
			
			//toggle			
				findSc = output.match(/\[toggle(.*?)\]/g);
				//if array, process			
				if(findSc){
					for(i=0;i < findSc.length;i++){
						scAtts = String(findSc[i]);
						scAtts = scAtts.replace('[toggle ','');
						scAtts = scAtts.replace(']','');
						scAtts = scAtts.replace('title=','data-toggle-title=');
						scAtts = scAtts.replace('icon=','data-toggle-icon=');
						scAtts = scAtts.replace('open=','data-toggle-open=');					
						output = output.replace(findSc[i],'<div class="toggle" '+scAtts+'>');		
						output = output.replace('[/toggle]','</div>');
					}
					findSc = '';
				}
				//output = output.replace(findSc[i],'<div class="btn btn-toggle-edit"><i class="fa fa-list"></i><br /><span>TOGGLE</span></div><div class="tp-hidden-data" data-sc-type="toggle" data-toggle-number="" '+scAtts+'>');		
				
			
			
			//add output to a temp div and add random IDS to columns		
				$('body').append('<div id="tp-vlb-tempdata">'+output+'</div>');
				$('#tp-vlb-tempdata .tp-vl-col').each(function(){
					var text = 'tp-vl-col-';
					var possible = 'abcdefghijklmnopqrstuvwxyz0123456789';
					for( i=0; i < 8; i++ ){
						text += possible.charAt(Math.floor(Math.random() * possible.length));
					}
					$(this).attr('id',text);
					
					//if column has no content inside > insert: click here to add content button
					if($(this).html() == ''){
						$(this).html('<div class="btn btn-add"><i class="fa fa-plus"></i><br /><span>CLICK TO ADD CONTENT</span></div>');
					}
					
					//add column info title				
					if($(this).hasClass('full')){
						$(this).prepend('<div class="tit">1/1</div>');
					}else if($(this).hasClass('one_half')){
						$(this).prepend('<div class="tit">1/2</div>');
					}else if($(this).hasClass('one_third')){
						$(this).prepend('<div class="tit">1/3</div>');
					}else if($(this).hasClass('two_third')){
						$(this).prepend('<div class="tit">2/3</div>');
					}else if($(this).hasClass('one_fourth')){
						$(this).prepend('<div class="tit">1/4</div>');
					}else if($(this).hasClass('three_fourth')){
						$(this).prepend('<div class="tit">3/4</div>');
					}else if($(this).hasClass('one_fifth')){
						$(this).prepend('<div class="tit">1/5</div>');
					}
					
					
				});
				
			//special shortcodes w/o brackets - text, image, plan list, raw
				//text
					$('#tp-vlb-tempdata .tp-vl-textblock').before('<div class="btn btn-text-edit"><i class="fa fa-align-justify"></i><br /><span>TEXT BLOCK</span></div>');
					$('#tp-vlb-tempdata .tp-vl-textblock').wrap('<div class="tp-hidden-data" data-sc-type="text"></div>');
				//image
					$('#tp-vlb-tempdata .tp-vl-imageblock').before('<div class="btn btn-image-edit"><i class="fa fa-image"></i><br /><span>IMAGE</span></div>');
					$('#tp-vlb-tempdata .tp-vl-imageblock').each(function(){
						var imga = $('a',this).attr('href');
						if(!imga){ imga = ''; }
						var wrapper = '<div class="tp-hidden-data" data-sc-type="image" data-image-src="'+$('img',this).attr('src')+'" data-image-link="'+imga+'"';
						if($('img',this).attr('class') == 'alignleft'){
							wrapper += ' data-image-align="left"';
						}else if($('img',this).attr('class') == 'aligncenter'){
							wrapper += ' data-image-align="center"';
						}else if($('img',this).attr('class') == 'alignright'){
							wrapper += ' data-image-align="right"';
						}				
						wrapper += '></div>';
						$(this).html('');
						$(this).wrap(wrapper);
					});						
				//pricing table plan list
					$('#tp-vlb-tempdata div[data-sc-type=pricing]').html($('#tp-vlb-tempdata div[data-sc-type=pricing]').text());
				//raw
					$('#tp-vlb-tempdata .tp-vl-rawblock').before('<div class="btn btn-raw-edit"><i class="fa fa-code"></i><br /><span>RAW HTML</span></div>');
					$('#tp-vlb-tempdata .tp-vl-rawblock').wrap('<div class="tp-hidden-data" data-sc-type="raw"></div>');
				//tabs
					$('#tp-vlb-tempdata div[data-sc-type=tabs]').each(function(){
						var cntr = 1;
						$('.tab',this).each(function(){
							$(this).removeClass().addClass('tab'+cntr);
							cntr++;
						});
					});
				//toggles
					$('#tp-vlb-tempdata .tp-vl-toggleblock').before('<div class="btn btn-toggle-edit"><i class="fa fa-list"></i><br /><span>TOGGLE</span></div>');
					$('#tp-vlb-tempdata .tp-vl-toggleblock').wrap('<div class="tp-hidden-data" data-sc-type="toggle"></div>');
					$('#tp-vlb-tempdata .tp-vl-toggleblock').each(function(){
						var cntr = 1;
						$('.toggle',this).each(function(){
							$(this).addClass('toggle'+cntr);
							cntr++;
						});
					});
				
			//add remove row button
				$('#tp-vlb-tempdata .tp-vl-row').append('<div class="remove-row"></div>');
				
				output = $('#tp-vlb-tempdata').html();
				$('#tp-vlb-tempdata').remove();
				
				
				
			   
		
			return output;
		}
	
	
	
});