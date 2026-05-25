jQuery(document).ready(function(){
	jQuery('#tp-upload').click(function(){
		wp.media.editor.send.attachment = function(props, attachment){
			//check extension
			var iurl = attachment.url;
			var iext = attachment.url.split('.').pop();
			if(iext != 'jpg' && iext != 'jpeg' && iext != 'mp4' && iext != 'webm'){
				iurl = templateDir+'/images/unsupported-file.jpg';
			}			
			if(iext == 'mp4'){
				iurl = templateDir+'/images/mp4-file.jpg';
			}		
			if(iext == 'webm'){
				iurl = templateDir+'/images/webm-file.jpg';
			}			
			
			var slideNum = parseInt(jQuery('#slider-items-num').attr('data-num')) + 1;
			
			//jQuery('#slide-images .holder').append('<div class="tp-fwslider-image" style="background-image:url('+iurl+');" data-src="'+attachment.url+'" title="'+attachment.url+'"><div class="remove" data-src="'+attachment.url+'"></div><input type="hidden" name="form-images[]" value="'+attachment.url+'" /></div>');			
			jQuery('#slide-images .holder').append('\n'+
				'<div class="tp-fwslider-item"><div class="remove"></div>'+
				'<div class="tp-fwslider-image" style="background-image:url('+iurl+');" data-src="'+attachment.url+'" title="'+attachment.url+'"><input type="hidden" name="form-images['+slideNum+'][file]" value="'+attachment.url+'" /></div>'+
				'<div class="caption"><b>Caption text or HTML</b><br /><textarea name="form-images['+slideNum+'][text]"></textarea></div>'+												
				'<div class="align"><b>Alignment</b><br /><input type="radio" name="form-images['+slideNum+'][align]" value="" />Left<br /><input type="radio" name="form-images['+slideNum+'][align]" value="center" />Center<br />'+
				'<input type="radio" name="form-images['+slideNum+'][align]" value="right" />Right</div></div>');
			
			
			jQuery('#slider-items-num').attr('data-num',slideNum);
		}
		
		wp.media.editor.open(this);
		
		return false;
	});
	
	
	jQuery('#slide-images .holder').sortable({ opacity: 0.5 });
	
	//remove thumb
	jQuery(document).on('click', '#slide-images .remove', function() {			
		//remove thumb
		jQuery(this).closest('.tp-fwslider-item').remove();
	});
	
	

});