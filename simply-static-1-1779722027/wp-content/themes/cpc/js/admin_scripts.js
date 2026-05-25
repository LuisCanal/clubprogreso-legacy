jQuery(document).ready(function() {
	
	
	//FULL WIDTH SLIDER SETTINGS
		if(jQuery('#page_template option:selected').val() != 'page-slider.php'){
			jQuery('#new-meta-boxes-fwslider').css('display','none');
			jQuery('#new-meta-boxes-blogcats').css('display','block');
		}else{
			jQuery('#new-meta-boxes-blogcats').css('display','none');
		}
		
		jQuery('#page_template').change(function(){
			if(jQuery('option:selected',this).val() == 'page-slider.php'){
				jQuery('#new-meta-boxes-fwslider').css('display','block');
				jQuery('#new-meta-boxes-blogcats').css('display','none');
			}else{
				jQuery('#new-meta-boxes-fwslider').css('display','none');
				jQuery('#new-meta-boxes-blogcats').css('display','block');
			}
		});
	
	
	
	//REV SLIDER
		jQuery('#new-meta-boxes-page_revslider').css('display','none');	
		var $ptselect = jQuery('#page_template');	
		var $ptselected = jQuery('#page_template').find(':selected').attr('value');
		if($ptselected == 'page-revslider.php'){		 	
				jQuery('#new-meta-boxes-page_revslider').css('display','block');							
		}	
		$ptselect.change(function(){
			if($ptselect.val() == 'page-revslider.php'){		 	
				jQuery('#new-meta-boxes-page_revslider').css('display','block');							
			}else{
				jQuery('#new-meta-boxes-page_revslider').css('display','none');			
			}
		});
	
		
	
	//PORTFOLIO SETTINGS
		if(jQuery('#page_template option:selected').val() == 'page-portfolio2.php' || jQuery('#page_template option:selected').val() == 'page-portfolio3.php' || jQuery('#page_template option:selected').val() == 'page-portfolio4.php'){
			jQuery('#new-meta-boxes-pfolio').css('display','block');			
		}else{
			jQuery('#new-meta-boxes-pfolio').css('display','none');
		}
		
		jQuery('#page_template').change(function(){
			if(jQuery('option:selected',this).val() == 'page-portfolio2.php' || jQuery('option:selected',this).val() == 'page-portfolio3.php' || jQuery('option:selected',this).val() == 'page-portfolio4.php'){
				jQuery('#new-meta-boxes-pfolio').css('display','block');				
			}else{
				jQuery('#new-meta-boxes-pfolio').css('display','none');				
			}
		});
	
	
	
	
	//POST FORMATS
		if(jQuery('#new-meta-boxes-postf').length != 0){
			jQuery('#new-meta-boxes-postf').insertAfter('#titlediv');
		}
		
		jQuery('#new-meta-boxes-postf, .postf-contents').css('display','none');
		var $postf = jQuery('input.post-format:checked');
		if($postf.val() == 'link'){		
			jQuery('#new-meta-boxes-postf,#postf-link').css('display','block');
		}
		else if($postf.val() == 'audio'){		
			jQuery('#new-meta-boxes-postf,#postf-audio').css('display','block');
		}
		else if($postf.val() == 'video'){		
			jQuery('#new-meta-boxes-postf,#postf-video').css('display','block');
		}
		jQuery('input.post-format').change(function(){
			$postf = jQuery('input.post-format:checked');
			jQuery('#new-meta-boxes-postf,.postf-contents').css('display','none');		
			if($postf.val() == 'link'){
				jQuery('#new-meta-boxes-postf,#postf-link').css('display','block');
			}
			else if($postf.val() == 'audio'){
				jQuery('#new-meta-boxes-postf,#postf-audio').css('display','block');
			}
			else if($postf.val() == 'video'){
				jQuery('#new-meta-boxes-postf,#postf-video').css('display','block');
			}
		});
		

	
	
	
	
});

	
	