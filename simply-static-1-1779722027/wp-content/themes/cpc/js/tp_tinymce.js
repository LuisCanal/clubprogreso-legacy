/*

ThemePrince.com
TinyMCE SC handler v1.1

*/

tinymce.PluginManager.add('tp_sc', function(editor, url) {

	// ADD MY BUTTONS
		editor.addButton( 'tp_buttons_12_12', {
            title: '1/2 + 1/2 column',            			
            icon: 'tp-12-12',            
            onclick: function() {				
				editor.insertContent('<div class="one_half">1/2 column</div><div class="hidden">one_half_end</div><div class="one_half last">1/2 column</div><div class="hidden">one_half_end</div><div class="clear"><!-- col_clear --></div>&nbsp;');
			}
		});
		
		editor.addButton( 'tp_buttons_13_13_13', {
            title: '1/3 + 1/3 + 1/3 column',            			
            icon: 'tp-13-13-13',            
            onclick: function() {
				editor.insertContent('<div class="one_third">1/3 column</div><div class="hidden">one_third_end</div><div class="one_third">1/3 column</div><div class="hidden">one_third_end</div><div class="one_third last">1/3 column</div><div class="hidden">one_third_end</div><div class="clear"><!-- col_clear --></div>&nbsp;');
			}
		});
		
		editor.addButton( 'tp_buttons_13_23', {
            title: '1/3 + 2/3 column',            			
            icon: 'tp-13-23',            
            onclick: function() {
				editor.insertContent('<div class="one_third">1/3 column</div><div class="hidden">one_third_end</div><div class="two_third last">2/3 column</div><div class="hidden">two_third_end</div><div class="clear"><!-- col_clear --></div>&nbsp;');
			}
		});
		
		editor.addButton( 'tp_buttons_23_13', {
            title: '2/3 + 1/3 column',            			
            icon: 'tp-23-13',            
            onclick: function() {
				editor.insertContent('<div class="two_third">2/3 column</div><div class="hidden">two_third_end</div><div class="one_third last">1/3 column</div><div class="hidden">one_third_end</div><div class="clear"><!-- col_clear --></div>&nbsp;');
			}
		});
		
		editor.addButton( 'tp_buttons_14_14_14_14', {
            title: '1/4 + 1/4 + 1/4 + 1/4 column',            			
            icon: 'tp-14-14-14-14',            
            onclick: function() {
				editor.insertContent('<div class="one_fourth">1/4 column</div><div class="hidden">one_fourth_end</div><div class="one_fourth">1/4 column</div><div class="hidden">one_fourth_end</div><div class="one_fourth">1/4 column</div><div class="hidden">one_fourth_end</div><div class="one_fourth last">1/4 column</div><div class="hidden">one_fourth_end</div><div class="clear"><!-- col_clear --></div>&nbsp;');
			}
		});
		
		editor.addButton( 'tp_buttons_14_34', {
            title: '1/4 + 3/4 column',            			
            icon: 'tp-14-34',            
            onclick: function() {
				editor.insertContent('<div class="one_fourth">1/4 column</div><div class="hidden">one_fourth_end</div><div class="three_fourth last">3/4 column</div><div class="hidden">three_fourth_end</div><div class="clear"><!-- col_clear --></div>&nbsp;');
			}
		});
		
		editor.addButton( 'tp_buttons_34_14', {
            title: '3/4 + 1/4 column',            			
            icon: 'tp-34-14',            
            onclick: function() {
				editor.insertContent('<div class="three_fourth">3/4 column</div><div class="hidden">three_fourth_end</div><div class="one_fourth last">1/4 column</div><div class="hidden">one_fourth_end</div><div class="clear"><!-- col_clear --></div>&nbsp;');
			}
		});
		
		editor.addButton( 'tp_buttons_12_14_14', {
            title: '1/2 + 1/4 + 1/4 column',            			
            icon: 'tp-12-14-14',            
            onclick: function() {
				editor.insertContent('<div class="one_half">1/2 column</div><div class="hidden">one_half_end</div><div class="one_fourth">1/4 column</div><div class="hidden">one_fourth_end</div><div class="one_fourth last">1/4 column</div><div class="hidden">one_fourth_end</div><div class="clear"><!-- col_clear --></div>&nbsp;');
			}
		});
		
		editor.addButton( 'tp_buttons_14_12_14', {
            title: '1/4 + 1/2 + 1/4 column',            			
            icon: 'tp-14-12-14',            
            onclick: function() {
				editor.insertContent('<div class="one_fourth">1/4 column</div><div class="hidden">one_fourth_end</div><div class="one_half">1/2 column</div><div class="hidden">one_half_end</div><div class="one_fourth last">1/4 column</div><div class="hidden">one_fourth_end</div><div class="clear"><!-- col_clear --></div>&nbsp;');
			}
		});
		
		editor.addButton( 'tp_buttons_14_14_12', {
            title: '1/4 + 1/4 + 1/2 column',            			
            icon: 'tp-14-14-12',            
            onclick: function() {
				editor.insertContent('<div class="one_fourth">1/4 column</div><div class="hidden">one_fourth_end</div><div class="one_fourth">1/4 column</div><div class="hidden">one_fourth_end</div><div class="one_half last">1/2 column</div><div class="hidden">one_half_end</div><div class="clear"><!-- col_clear --></div>&nbsp;');
			}
		});
		
		editor.addButton( 'tp_buttons_15_15_15_15_15', {
            title: '1/5 + 1/5 + 1/5 + 1/5 + 1/5 column',            			
            icon: 'tp-15-15-15-15-15',            
            onclick: function() {
				editor.insertContent('<div class="one_fifth">1/5 column</div><div class="hidden">one_fifth_end</div><div class="one_fifth">1/5 column</div><div class="hidden">one_fifth_end</div><div class="one_fifth">1/5 column</div><div class="hidden">one_fifth_end</div><div class="one_fifth">1/5 column</div><div class="hidden">one_fifth_end</div><div class="one_fifth last">1/5 column</div><div class="hidden">one_fifth_end</div><div class="clear"><!-- col_clear --></div>&nbsp;');
			}
		});
				
				
				
				
				
				
    // SWITCH TO VISUAL MODE
        editor.on( 'BeforeSetContent', function( e ) {
            if ( e.content ) {                			
		
				var findSc;
				var scAtts;
				var finalString;
								
					
						
						e.content = e.content.replace( /<p>\[/gi,'[' );
						e.content = e.content.replace( /]<\/p>/gi,']' );	
						
						
						
					//dropcap
						findSc = e.content.match(/\[dropcap](.|[\r\n\s\S]*?)\[\/dropcap]/gi);
						if(findSc){ 
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);	
																
								finalString = String(findSc[i]);	
								finalString = finalString.replace('[dropcap]','<span class="dropcap">');
								finalString = finalString.replace('[/dropcap]','</span>');
								e.content = e.content.replace(scAtts,finalString);
							}
						}
						
						
						
					//pricing table
						findSc = e.content.match(/\[plan(.*?)](.|[\r\n\s\S]*?)\[\/plan]/gi);
						if(findSc){ 
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);	
																
								//tab content SC conversion first -- reason: necessary to save original tab shortcode intact 					
								safeSC = scAtts.replace(/\[/g,'&#91;');
								safeSC = safeSC.replace(/]/g,'&#93;');
									
								//replace
									finalString = '<div class="tp-pricingtable"><p><i class="fa fa-dollar"></i><br />PRICING TABLE</p><!-- tp_plan_start --><!-- '+safeSC+' --><!-- tp_plan_end --></div>';
								
									e.content = e.content.replace(scAtts,finalString);
								
							}
						}
						
						
						
						
					//pullquote
						findSc = e.content.match(/\[pullquote(.*?)](.|[\r\n\s\S]*?)\[\/pullquote]/gi);
						if(findSc){ 
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);	
																
								scAttsStyle = String(scAtts.match(/style=".*?"/g));
								scAttsStyle = scAttsStyle.replace('style="','');
								scAttsStyle = scAttsStyle.replace('"','');
								if(scAttsStyle == 'modern'){ scAttsStyle = ' modern'; scDataStyle = 'modern'; }else{ scAttsStyle = ''; scDataStyle = ''; }
								
								scAttsAlign = String(scAtts.match(/align=".*?"/g));
								scAttsAlign = scAttsAlign.replace('align="','');
								scAttsAlign = scAttsAlign.replace('"','');
								if(scAttsAlign == 'right'){ scAttsAlign = ' alignright'; scDataAlign = 'right'; }else{ scAttsAlign = ''; scDataAlign = ''; }
																
								finalString = String(findSc[i]);	
								finalString = finalString.replace(/\[pullquote(.*?)]/,'<span class="pullquote'+scAttsStyle+scAttsAlign+'" data-align="'+scDataAlign+'" data-style="'+scDataStyle+'">');
								finalString = finalString.replace('[/pullquote]','</span>');
								e.content = e.content.replace(scAtts,finalString);
							}
						}
						
						
						
					//rulers
						findSc = e.content.match(/\[hr]/gi);
						if(findSc){ 
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);	
																
								finalString = finalString.replace('[hr]','<hr />');
								e.content = e.content.replace(scAtts,finalString);
							}
						}
						
						findSc = e.content.match(/\[hr2]/gi);
						if(findSc){ 
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);	
																
								finalString = finalString.replace('[hr2]','<hr class="hr2" />');
								e.content = e.content.replace(scAtts,finalString);
							}
						}
						
						findSc = e.content.match(/\[hr3]/gi);
						if(findSc){ 
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);	
																
								finalString = finalString.replace('[hr3]','<hr class="hr3" />');
								e.content = e.content.replace(scAtts,finalString);
							}
						}
						
						
							
					//testemonials
						findSc = e.content.match(/\[testemonial(.*?)](.|[\r\n\s\S]*?)\[\/testemonial]/gi);
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);	
								
								//get atts
									scAttsAuthor = String(scAtts.match(/author=".*?"/g));
									scAttsAuthor = scAttsAuthor.replace('author="','');
									scAttsAuthor = scAttsAuthor.replace('"','');
									if(!scAttsAuthor || scAttsAuthor == 'null'){ scAttsAuthor = ''; }
									
									scAttsCompany = String(scAtts.match(/company=".*?"/g));
									scAttsCompany = scAttsCompany.replace('company="','');
									scAttsCompany = scAttsCompany.replace('"','');
									if(!scAttsCompany || scAttsCompany == 'null'){ scAttsCompany = ''; }
									
									scAttsImage = String(scAtts.match(/image=".*?"/g));
									scAttsImage = scAttsImage.replace('image="','');
									scAttsImage = scAttsImage.replace('"','');									
									if(!scAttsImage || scAttsImage == 'null'){ scAttsImage = ''; }
								
								if(scAttsImage && scAttsImage != 'null'){
									timg = '<div class="client" style="background-image: url('+scAttsImage+')"></div>';
								}else{
									timg = '<div class="client anonym"></div>';
								}
								
								
								finalString = String(findSc[i]);																
								finalString = finalString.replace(/\[testemonial(.*?)]/,'<div class="tp-testemonial" data-author="'+scAttsAuthor+'" data-company="'+scAttsCompany+'" data-image="'+scAttsImage+'">'+timg+'<div class="text">');
								
								tcite = '<br /><br /><strong>―'+scAttsAuthor+'</strong><br /><span>'+scAttsCompany+'</span>';
								
								finalString = finalString.replace('[/testemonial]',tcite+'</div></div><!-- tp_testemonial_end -->');
								e.content = e.content.replace(scAtts,finalString);
								
							}	
						}
						
						
						
						
					//buttons
						findSc = e.content.match(/\[button(.*?)](.|[\r\n\s\S]*?)\[\/button]/gi);
						if(findSc){ 
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);	
								
								//get atts
									scAttsLink = String(scAtts.match(/link=".*?"/g));
									scAttsLink = scAttsLink.replace('link="','');
									scAttsLink = scAttsLink.replace('"','');
									
									var cssalign = '';
									scAttsClass = String(scAtts.match(/align=".*?"/g));
									scAttsClass = scAttsClass.replace('align="','');
									scAttsClass = scAttsClass.replace('"','');
									if(scAttsClass == 'right'){ cssalign = ' alignright'; }
									
									var scAttsStyle = '';
									scAttsColor = String(scAtts.match(/ color=".*?"/g));
									scAttsColor = scAttsColor.replace(' color="','');
									scAttsColor = scAttsColor.replace('"','');											
									if(scAttsColor){ scAttsStyle = 'color: '+scAttsColor+'; '; }
									
									scAttsBGColor = String(scAtts.match(/bgcolor=".*?"/g));
									scAttsBGColor = scAttsBGColor.replace('bgcolor="','');
									scAttsBGColor = scAttsBGColor.replace('"','');
									if(scAttsBGColor){ scAttsStyle += 'background-color: '+scAttsBGColor+';'; }
									
									
								
								finalString = String(findSc[i]);																
								finalString = finalString.replace(/\[button(.*?)]/,'<a href="'+scAttsLink+'" class="button'+cssalign+'" data-bgcolor="'+scAttsBGColor+'" data-color="'+scAttsColor+'" data-align="'+scAttsClass+'" style="'+scAttsStyle+'">');
								finalString = finalString.replace('[/button]','</a><!-- tp_button_end -->');
								e.content = e.content.replace(scAtts,finalString);
							}
						}
					

						
					//titles						
						findSc = e.content.match(/\[title(.*?)]/gi);
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);	
								
								//get atts
									scAttsStyle = String(scAtts.match(/style=".*?"/g));
									scAttsStyle = scAttsStyle.replace('style="','');
									scAttsStyle = scAttsStyle.replace('"','');
									
									scAttsSubtitle = String(scAtts.match(/ subtitle=".*?"/g));
									scAttsSubtitle = scAttsSubtitle.replace(' subtitle="','');
									scAttsSubtitle = scAttsSubtitle.replace('"','');	
									
									scAttsTitle = String(scAtts.match(/ title=".*?"/g));
									scAttsTitle = scAttsTitle.replace(' title="','');
									scAttsTitle = scAttsTitle.replace('"','');		
									
									scAttsAlign = String(scAtts.match(/align=".*?"/g));
									scAttsAlign = scAttsAlign.replace('align="','');
									scAttsAlign = scAttsAlign.replace('"','');					

									
								//process atts				
									
									var cssclass = '';
									if(scAttsAlign == 'left'){
										cssclass = ' alignleft';
									}else if(scAttsAlign == 'right'){
										cssclass = ' alignright';
									}
									
								
									if(scAttsStyle == '2'){										
										finalString = '<div class="tp-title style2'+cssclass+'"><div class="titles"><h1>'+scAttsTitle+'</h1>';									
										if(scAttsSubtitle != ''){
											finalString += '<br /><h5>'+scAttsSubtitle+'</h5>';
										}									
										finalString += '</div></div><!-- tp_title_end -->';
									}else if(scAttsStyle == '3'){
										finalString = '<div class="tp-title style3'+cssclass+'"><h1>'+scAttsTitle+'</h1>';									
										if(scAttsSubtitle != ''){
											finalString += '<h5>'+scAttsSubtitle+'</h5>';
										}									
										finalString += '</div><!-- tp_title_end -->';
									}else{											
										finalString = '<div class="tp-title'+cssclass+'"><h1>'+scAttsTitle+'</h1>';									
										if(scAttsSubtitle != ''){
											finalString += '<h5>'+scAttsSubtitle+'</h5>';
										}									
										finalString += '</div><!-- tp_title_end -->';
									}
								
								
									
									
								//replace	
									e.content = e.content.replace(scAtts,finalString);
								
								
							}
						}
						
					
					
						
					//alerts
						findSc = e.content.match(/\[alert(.*?)](.[\s\S]*?)\[\/alert]/gi);
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);	
																
								//get atts									
									scAttsType = String(scAtts.match(/type=".*?"/g));
									scAttsType = scAttsType.replace('type="','');
									scAttsType = scAttsType.replace('"','');	
									if(scAttsType == 'null'){ scAttsType = ''; }
									
									scAttsIcon = String(scAtts.match(/icon=".*?"/g));
									scAttsIcon = scAttsIcon.replace('icon="','');
									scAttsIcon = scAttsIcon.replace('"','');										
									if(scAttsIcon == 'null' || scAttsIcon == ''){
										if(scAttsType == 'error'){ scAttsIcon = 'fa-exclamation-circle';  }
										if(scAttsType == 'info'){ scAttsIcon = 'fa-info-circle'; }
										if(scAttsType == 'note'){ scAttsIcon = 'fa-warning'; }
										if(scAttsType == 'success'){ scAttsIcon = 'fa-thumbs-up'; }
										alerticon = '<i class="fa '+scAttsIcon+'"></i>';
										dataicon = '';
									}else{
										alerticon = '<i class="fa '+scAttsIcon+'"></i>';
										dataicon = scAttsIcon;
									}
									
								//replace
									fString = scAtts;
									finalString = '<div class="tp-alerts '+scAttsType+'" data-type="'+scAttsType+'" data-icon="'+dataicon+'">'+alerticon;
									fString = fString.replace(/\[alert(.*?)]/,finalString);
									
									finalString = '<!-- tp_alerts_end --></div>';
									fString = fString.replace(/\[\/alert]/,finalString);
									
								
									e.content = e.content.replace(scAtts,fString);
								
							}								
						}
						
						
					//google font
						findSc = e.content.match(/\[font(.*?)](.[\s\S]*?)\[\/font]/gi);
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);	
						
								//get atts									
									scAttsName = String(scAtts.match(/name=".*?"/g));
									scAttsName = scAttsName.replace('name="','');
									scAttsName = scAttsName.replace('"','');
									if(scAttsName == 'null'){ scAttsName = ''; }
									
									scAttsSize = String(scAtts.match(/size=".*?"/g));
									scAttsSize = scAttsSize.replace('size="','');
									scAttsSize = scAttsSize.replace('"','');
									if(scAttsSize == 'null'){ scAttsSize = ''; }
									
									scAttsStyle = String(scAtts.match(/style=".*?"/g));
									scAttsStyle = scAttsStyle.replace('style="','');
									scAttsStyle = scAttsStyle.replace('"','');
									if(scAttsStyle == 'null'){ scAttsStyle = ''; }
								
								finalString = '<div class="tp-gfont" data-name="'+scAttsName+'" data-size="'+scAttsSize+'" data-style="'+scAttsStyle+'">';
								fString = scAtts.replace(/\[font(.*?)]/,finalString);
								fString = fString.replace(/\[\/font]/,'</div><!-- tp_gfont_end -->');
								
								e.content = e.content.replace(scAtts,fString);
							}
						
						}
						
						
						
					//responsive display
						findSc = e.content.match(/\[respo(.*?)](.[\s\S]*?)\[\/respo]/gi);
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);	
						
								//get atts									
									scAttsDevice = String(scAtts.match(/device=".*?"/g));
									scAttsDevice = scAttsDevice.replace('device="','');
									scAttsDevice = scAttsDevice.replace('"','');
									if(scAttsDevice == 'null'){ scAttsDevice = 'desktop'; }
									scDev = scAttsDevice.toUpperCase();
								
								finalString = '<div class="tp-respo" data-device="'+scAttsDevice+'"><p class="tp-respo-info"><i class="fa fa-mobile"></i><br />RESPONSIVE DISPLAY - '+scDev+' ONLY<br />********</p>';
								fString = scAtts.replace(/\[respo(.*?)]/,finalString);
								fString = fString.replace(/\[\/respo]/,'</div><!-- tp_respo_end -->');
								
								e.content = e.content.replace(scAtts,fString);
							}
						
						}
						
						
						
						
					//tabs
						findSc = e.content.match(/\[tabs(.*?)](.[\s\S]*?)\[\/tabs]/gi);
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);	
																
								//tab content SC conversion first -- reason: necessary to save original tab shortcode intact 					
								safeSC = scAtts.replace(/\[/g,'&#91;');
								safeSC = safeSC.replace(/]/g,'&#93;');
									
								//replace
									finalString = '<div class="tp-tabs"><p><i class="fa fa-ellipsis-h"></i><br />TABS</p><!-- tp_tabs_start --><!-- '+safeSC+' --><!-- tp_tabs_end --></div>';
								
									e.content = e.content.replace(scAtts,finalString);
								
							}								
						}
						
						
						
					//google maps
						findSc = e.content.match(/\[map(.*?)](.[\s\S]*?)\[\/map]/gi);
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);	
																
								//map content SC conversion first -- reason: necessary to save original tab shortcode intact 					
								safeSC = scAtts.replace(/\[/g,'&#91;');
								safeSC = safeSC.replace(/]/g,'&#93;');
									
								//replace
									finalString = '<div class="tp-map"><p><i class="fa fa-map-marker"></i><br />GOOGLE MAP</p><!-- tp_map_start --><!-- '+safeSC+' --><!-- tp_map_end --></div>';
								
									e.content = e.content.replace(scAtts,finalString);
								
							}								
						}
						
					
					
					
					//columns
						//one half
						findSc = e.content.match(/\[one_half last](.|[\r\n\s\S]*?)\[\/one_half]/gi);
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);	
								
								finalString = String(findSc[i]);																
								finalString = finalString.replace('[one_half last]','<div class="one_half last">');
								finalString = finalString.replace('[/one_half]','</div><div class="hidden">one_half_end</div><div class="clear"><!-- col_clear --></div>');
								e.content = e.content.replace(scAtts,finalString);
							}
						}
						
						findSc = e.content.match(/\[one_half](.|[\r\n\s\S]*?)\[\/one_half]/gi);     
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);	
								
								finalString = String(findSc[i]);																
								finalString = finalString.replace('[one_half]','<div class="one_half">');								
								finalString = finalString.replace('[/one_half]','</div><div class="hidden">one_half_end</div>');
								e.content = e.content.replace(scAtts,finalString);
							}
						}
						
						
						
						//one third
						findSc = e.content.match(/\[one_third last](.|[\r\n\s\S]*?)\[\/one_third]/gi);
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);	
								
								finalString = String(findSc[i]);																
								finalString = finalString.replace('[one_third last]','<div class="one_third last">');
								finalString = finalString.replace('[/one_third]','</div><div class="hidden">one_third_end</div><div class="clear"><!-- col_clear --></div>');
								e.content = e.content.replace(scAtts,finalString);
							}
						}
						
						findSc = e.content.match(/\[one_third](.|[\r\n\s\S]*?)\[\/one_third]/gi);     
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);	
								
								finalString = String(findSc[i]);																
								finalString = finalString.replace('[one_third]','<div class="one_third">');								
								finalString = finalString.replace('[/one_third]','</div><div class="hidden">one_third_end</div>');
								e.content = e.content.replace(scAtts,finalString);
							}
						}
						
						
						
						//two third
						findSc = e.content.match(/\[two_third last](.|[\r\n\s\S]*?)\[\/two_third]/gi);
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);	
								
								finalString = String(findSc[i]);																
								finalString = finalString.replace('[two_third last]','<div class="two_third last">');
								finalString = finalString.replace('[/two_third]','</div><div class="hidden">two_third_end</div><div class="clear"><!-- col_clear --></div>');
								e.content = e.content.replace(scAtts,finalString);
							}
						}
						
						findSc = e.content.match(/\[two_third](.|[\r\n\s\S]*?)\[\/two_third]/gi);     
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);	
								
								finalString = String(findSc[i]);																
								finalString = finalString.replace('[two_third]','<div class="two_third">');								
								finalString = finalString.replace('[/two_third]','</div><div class="hidden">two_third_end</div>');
								e.content = e.content.replace(scAtts,finalString);
							}
						}
						
						
						//one fourth
						findSc = e.content.match(/\[one_fourth last](.|[\r\n\s\S]*?)\[\/one_fourth]/gi);
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);	
								
								finalString = String(findSc[i]);																
								finalString = finalString.replace('[one_fourth last]','<div class="one_fourth last">');
								finalString = finalString.replace('[/one_fourth]','</div><div class="hidden">one_fourth_end</div><div class="clear"><!-- col_clear --></div>');
								e.content = e.content.replace(scAtts,finalString);
							}
						}
						
						
						findSc = e.content.match(/\[one_fourth](.|[\r\n\s\S]*?)\[\/one_fourth]/gi);     
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);	
								
								finalString = String(findSc[i]);																
								finalString = finalString.replace('[one_fourth]','<div class="one_fourth">');								
								finalString = finalString.replace('[/one_fourth]','</div><div class="hidden">one_fourth_end</div>');
								e.content = e.content.replace(scAtts,finalString);
							}
						}						
						
						
						//three fourth
						findSc = e.content.match(/\[three_fourth last](.|[\r\n\s\S]*?)\[\/three_fourth]/gi);
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);	
								
								finalString = String(findSc[i]);																
								finalString = finalString.replace('[three_fourth last]','<div class="three_fourth last">');
								finalString = finalString.replace('[/three_fourth]','</div><div class="hidden">three_fourth_end</div><div class="clear"><!-- col_clear --></div>');
								e.content = e.content.replace(scAtts,finalString);
							}
						}
						
						findSc = e.content.match(/\[three_fourth](.|[\r\n\s\S]*?)\[\/three_fourth]/gi);     
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);	
								
								finalString = String(findSc[i]);																
								finalString = finalString.replace('[three_fourth]','<div class="three_fourth">');								
								finalString = finalString.replace('[/three_fourth]','</div><div class="hidden">three_fourth_end</div>');
								e.content = e.content.replace(scAtts,finalString);
							}
						}
												
						
						//one fifth
						findSc = e.content.match(/\[one_fifth last](.|[\r\n\s\S]*?)\[\/one_fifth]/gi);
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);	
								
								finalString = String(findSc[i]);																
								finalString = finalString.replace('[one_fifth last]','<div class="one_fifth last">');
								finalString = finalString.replace('[/one_fifth]','</div><div class="hidden">one_fifth_end</div><div class="clear"><!-- col_clear --></div>');
								e.content = e.content.replace(scAtts,finalString);
							}
						}
						
						findSc = e.content.match(/\[one_fifth](.|[\r\n\s\S]*?)\[\/one_fifth]/gi);     
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);	
								
								finalString = String(findSc[i]);																
								finalString = finalString.replace('[one_fifth]','<div class="one_fifth">');								
								finalString = finalString.replace('[/one_fifth]','</div><div class="hidden">one_fifth_end</div>');
								e.content = e.content.replace(scAtts,finalString);
							}
						}
						
						
						
						
				
					//icon	
						findSc = e.content.match(/\[icon(.[^<]*?)\]/g);
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);
								
								//get atts
									scAttsName = String(scAtts.match(/name=".*?"/g));
									scAttsName = scAttsName.replace('name="','');
									scAttsName = scAttsName.replace('"','');
									
									scAttsLink = String(scAtts.match(/link=".*?"/g));
									scAttsLink = scAttsLink.replace('link="','');
									scAttsLink = scAttsLink.replace('"','');
									
									scAttsTarget = String(scAtts.match(/target=".*?"/g));
									scAttsTarget = scAttsTarget.replace('target="','');
									scAttsTarget = scAttsTarget.replace('"','');
									
									scAttsStyle = String(scAtts.match(/style=".*?"/g));
									scAttsStyle = scAttsStyle.replace('style="','');
									scAttsStyle = scAttsStyle.replace('"','');
								
								//replace
									if(scAttsStyle != 'null'){
										finalString = '<i class="fa '+scAttsName+'" style="'+scAttsStyle+'"></i>';
									}else{
										finalString = '<i class="fa '+scAttsName+'"></i>';
									}
																	
									if(scAttsLink != 'null'){
										if(scAttsTarget != 'null'){
											finalString = '<a href="'+scAttsLink+'" target="'+scAttsTarget+'">' + finalString + '</a>';								
										}else{
											finalString = '<a href="'+scAttsLink+'" target="_blank">' + finalString + '</a>';								
										}
									}

									e.content = e.content.replace(scAtts,finalString);																	
							}
						}
						
						
						
					//call to action
						findSc = e.content.match(/\[cta(.*?)](.|[\n\r\s\S]*?)\[\/cta]/gi);
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);	
								
								//get atts
									scAttsTitle = String(scAtts.match(/title=".*?"/g));
									scAttsTitle = scAttsTitle.replace('title="','');
									scAttsTitle = scAttsTitle.replace('"','');
									
									scAttsLink = String(scAtts.match(/link=".*?"/g));
									scAttsLink = scAttsLink.replace('link="','');
									scAttsLink = scAttsLink.replace('"','');
									
									scAttsTarget = String(scAtts.match(/target=".*?"/g));
									scAttsTarget = scAttsTarget.replace('target="','');
									scAttsTarget = scAttsTarget.replace('"','');
									
									scAttsButton = String(scAtts.match(/button=".*?"/g));
									scAttsButton = scAttsButton.replace('button="','');
									scAttsButton = scAttsButton.replace('"','');
									
									scAttsIcon = String(scAtts.match(/icon=".*?"/g));
									scAttsIcon = scAttsIcon.replace('icon="','');
									scAttsIcon = scAttsIcon.replace('"','');
									
									scAttsCircle = String(scAtts.match(/circle=".*?"/g));
									scAttsCircle = scAttsCircle.replace('circle="','');
									scAttsCircle = scAttsCircle.replace('"','');
									
									scAttsHover = String(scAtts.match(/circle=".*?"/g));
									scAttsHover = scAttsHover.replace('circle="','');
									scAttsHover = scAttsHover.replace('"','');
									
									scAttsAlign = String(scAtts.match(/align=".*?"/g));
									scAttsAlign = scAttsAlign.replace('align="','');
									scAttsAlign = scAttsAlign.replace('"','');
									
									scAttsStyle = String(scAtts.match(/style=".*?"/g));
									scAttsStyle = scAttsStyle.replace('style="','');
									scAttsStyle = scAttsStyle.replace('"','');
									
									
									
								//replace											
								
									finalString = '<div class="tp-cta';
									
									var ctastyle = '1';
									if(scAttsStyle == '2'){
										finalString += ' style2';
										ctastyle = '2';
									}else{
										finalString += ' style1';
									}
									
									
									if(scAttsAlign != 'null' && scAttsAlign != ''){
										finalString += ' '+scAttsAlign;
									}
																		
									if(scAttsHover != 'null' && scAttsHover != ''){
										finalString += ' hover';
									}
									
									finalString += '" data-title="'+scAttsTitle+'" data-link="'+scAttsLink+'" data-target="'+scAttsTarget+'" data-button="'+scAttsButton+'" data-icon="'+scAttsIcon+'" data-circle="'+scAttsCircle+'" data-hover="'+scAttsHover+'" data-align="'+scAttsAlign+'" data-style="'+scAttsStyle+'">';

									if(scAttsStyle == 'null' || scAttsStyle == '1' || scAttsStyle == ''){
										if(scAttsIcon == 'null' || scAttsIcon == ''){
											scAttsIcon = 'fa-angle-right';
										}
									}
									
									var circlecss = '';
									if(scAttsCircle != 'null' && scAttsCircle != ''){
										circlecss = ' circle';
									}
									
									
									
									if(ctastyle == '1'){
										finalString += '<div class="cta-icon-holder"><div class="cta-icon'+circlecss+'"><i class="fa '+scAttsIcon+'"></i></div></div><p>';
										
										if(scAttsLink != 'null' && scAttsLink != ''){
											if(scAttsTarget != 'null' && scAttsTarget != ''){
												finalString += '<a href="'+scAttsLink+'" target="'+scAttsTarget+'">';
											}else{
												finalString += '<a href="'+scAttsLink+'">';
											}
										}									
										
										if(scAttsTitle != 'null' && scAttsTitle != ''){
											finalString += scAttsTitle;
										}
										
										finalString += '<br /><span><!-- tp_cta_content -->';
										
										
										//content start
										contentfinal = scAtts.replace(/\[cta(.*?)]/,finalString);
										
										
										finalString = '<!-- tp_cta_content_end --></span>';
										
										if(scAttsLink != 'null' && scAttsLink != ''){
											finalString +='</a>';
										}		
										
										finalString += '</p></div><!-- call_to_action_end -->';
										
										
										//content end
										contentfinal = contentfinal.replace(/\[\/cta]/,finalString);
									
									}else{
									//style 2
									
										finalString += '<div class="inner"><div class="text">';
										
										if(scAttsTitle != 'null' && scAttsTitle != ''){
											finalString += '<h1>'+scAttsTitle+'</h1>';
										}
										
										finalString += '<p><!-- tp_cta_content -->';
										
										
										//content start
										contentfinal = scAtts.replace(/\[cta(.*?)]/,finalString);
										
										
										
										finalString = '<!-- tp_cta_content_end --></p></div>';
										
										//button
										if(scAttsButton != 'null' && scAttsButton != ''){
											
											finalString += '<a href="'+scAttsLink+'" class="button">';					
						
											if(scAttsIcon != 'null' && scAttsIcon != '' && scAttsAlign == 'right'){
												finalString += '<i class="fa '+scAttsIcon+' '+circlecss+'"></i>';
											}
										
											finalString += scAttsButton;
											
											if(scAttsIcon != 'null' && scAttsIcon != '' && scAttsAlign != 'right'){
												finalString += '<i class="fa '+scAttsIcon+' '+circlecss+'"></i>';
											}
											
											finalString += '</a>';
										}
										
										
										
										finalString += '</div></div><!-- call_to_action_end -->';
										
										//content end
										contentfinal = contentfinal.replace(/\[\/cta]/,finalString);
										
									}
									
									
																
									
									
									
									e.content = e.content.replace(findSc[i],contentfinal);															
							}
						}
						
						
						
						
					//portfolio-posts
						findSc = e.content.match(/\[portfolio(.*?)]/gi);
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);	
								
								//get atts
									scAttsCategory = String(scAtts.match(/ category=".*?"/g));
									scAttsCategory = scAttsCategory.replace(' category="','');
									scAttsCategory = scAttsCategory.replace('"','');	
								
									scAttsCols = String(scAtts.match(/columns=".*?"/g));
									scAttsCols = scAttsCols.replace('columns="','');
									scAttsCols = scAttsCols.replace('"','');
									scAttsCols = parseInt(scAttsCols);									
									if(scAttsCols != 4 && scAttsCols != 3 && scAttsCols != 2){ scAttsCols = '3'; }
									
									scAttsLimit = String(scAtts.match(/limit=".*?"/g));
									scAttsLimit = scAttsLimit.replace('limit="','');
									scAttsLimit = scAttsLimit.replace('"','');				
									scAttsLimit = parseInt(scAttsLimit);
									if(!scAttsLimit || scAttsLimit == 'null' || scAttsLimit == ''){ scAttsLimit = '3'; }	
									
									scAttsShowtitle = String(scAtts.match(/showtitle=".*?"/g));
									scAttsShowtitle = scAttsShowtitle.replace('showtitle="','');
									scAttsShowtitle = scAttsShowtitle.replace('"','');	
									if(!scAttsLimit || scAttsLimit == 'null' || scAttsLimit == ''){ scAttsShowtitle = ''; }	
									
									scAttsShowexcerpt = String(scAtts.match(/showexcerpt=".*?"/g));
									scAttsShowexcerpt = scAttsShowexcerpt.replace('showexcerpt="','');
									scAttsShowexcerpt = scAttsShowexcerpt.replace('"','');	
									if(!scAttsShowexcerpt || scAttsShowexcerpt == 'null' || scAttsShowexcerpt == ''){ scAttsShowexcerpt = ''; }	
									
									scAttsShowcategory = String(scAtts.match(/showcategory=".*?"/g));
									scAttsShowcategory = scAttsShowcategory.replace('showcategory="','');
									scAttsShowcategory = scAttsShowcategory.replace('"','');	
									if(!scAttsShowcategory || scAttsShowcategory == 'null' || scAttsShowcategory == ''){ scAttsShowcategory = ''; }	
									
									scAttsAlign = String(scAtts.match(/align=".*?"/g));
									scAttsAlign = scAttsAlign.replace('align="','');
									scAttsAlign = scAttsAlign.replace('"','');	
									if(!scAttsAlign || scAttsAlign == 'null' || scAttsAlign == ''){ scAttsAlign = ''; }	
									
									
								//replace											
									finalString = '<div class="tp-portfolio '+scAttsAlign+'" data-category="'+scAttsCategory+'" data-cols="'+scAttsCols+'" data-limit="'+scAttsLimit+'" data-showtitle="'+scAttsShowtitle+'" data-showexcerpt="'+scAttsShowexcerpt+'" data-showcategory="'+scAttsShowcategory+'" data-align="'+scAttsAlign+'">';
									
									var k = 1;
									for(var j=0;j < scAttsLimit;j++){																	
										finalString += '<div class="tp-post ';
											if(scAttsCols == 4){
												finalString += 'col-4';
											}else if(scAttsCols == 2){											
												finalString += 'col-2';
											}else{
												finalString += 'col-3';											
											}
										finalString += '">';	
											
										
										//thumb									
											finalString += '<div class="thumb"></div>';
										
										
										if(scAttsShowtitle == 'yes' || scAttsShowtitle == 'true'){
											finalString += '<h4><a href="#">SAMPLE TITLE #'+(j+1)+'</a></h4>';
										}
										
										if(scAttsShowcategory == 'yes' || scAttsShowcategory == 'true'){
											finalString += '<span class="category">CATEGORY</span>';
										}
										
										if(scAttsShowexcerpt == 'yes' || scAttsShowexcerpt == 'true'){
											finalString += '<div class="excerpt">Sample excerpt text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat velit, facilisis eget commodo et...</div>';
										}
										
										finalString += '</div>';
										
										//clear cols
										if(k == scAttsCols && scAttsLimit > scAttsCols){
											finalString += '<div class="clear"></div>';
											k = 0;
										}
										
										k++;
										
									}
									
									finalString += '</div><div class="clear"></div><!-- tp_portfolio_end -->';

									
									e.content = e.content.replace(scAtts,finalString);	
							}
						}
					
					
					
					
					
					
					//toggles
						findSc = e.content.match(/\[toggle(.*?)](.[\n\r\s\S]*?)\[\/toggle]/gi);						
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);	
								
								
								//get atts
									scAttsTitle = String(scAtts.match(/title=".*?"/g));
									scAttsTitle = scAttsTitle.replace('title="','');
									scAttsTitle = scAttsTitle.replace('"','');	
									
									scAttsOpen = String(scAtts.match(/open=".*?"/g));
									scAttsOpen = scAttsOpen.replace('open="','');
									scAttsOpen = scAttsOpen.replace('"','');
									
									scAttsIcon = String(scAtts.match(/icon=".*?"/g));
									scAttsIcon = scAttsIcon.replace('icon="','');
									scAttsIcon = scAttsIcon.replace('"','');
									if(scAttsIcon == '' || scAttsIcon == 'null'){ scAttsIcon = 'fa-angle-right'; }
									
									scAttsContent = scAtts.replace(/\[toggle(.*?)]/g,'');
									scAttsContent = scAttsContent.replace(/\[\/toggle]/g,'');
									
									
								//replace
									finalString = '<p><a class="toggle" href="#" data-icon="'+scAttsIcon+'" data-open="'+scAttsOpen+'"><i class="fa '+scAttsIcon+' circle"></i>'+scAttsTitle+'</a></p><div class="toggle_box"><div class="block">'+scAttsContent+'</div></div><div class="clear"></div><!-- tp_toggle_end -->';
									
									e.content = e.content.replace(scAtts,finalString); 
							}
						}
					
					
						
					//remove auto p & br
						e.content = e.content.replace( /<p>\[/gi,'[' );
						e.content = e.content.replace( /]<\/p>/gi,']' );				
						
						e.content = e.content.replace( /<div class="one_half"><br \/>/gi,'<div class="one_half">' );
						e.content = e.content.replace( /<p><div class="one_half"><\/p>/gi,'<div class="one_half">' );
						e.content = e.content.replace( /<div class="one_half last"><br \/>/gi,'<div class="one_half last">' );
						e.content = e.content.replace( /<p><div class="one_half last"><\/p>/gi,'<div class="one_half last">' );
						
						e.content = e.content.replace( /<div class="one_third"><br \/>/gi,'<div class="one_third">' );						
						e.content = e.content.replace( /<p><div class="one_third"><\/p>/gi,'<div class="one_third">' );
						e.content = e.content.replace( /<div class="one_third last"><br \/>/gi,'<div class="one_third last">' );
						e.content = e.content.replace( /<p><div class="one_third last"><\/p>/gi,'<div class="one_third last">' );
						
						e.content = e.content.replace( /<div class="two_third"><br \/>/gi,'<div class="two_third">' );						
						e.content = e.content.replace( /<p><div class="two_third"><\/p>/gi,'<div class="two_third">' );
						e.content = e.content.replace( /<div class="two_third last"><br \/>/gi,'<div class="two_third last">' );
						e.content = e.content.replace( /<p><div class="two_third last"><\/p>/gi,'<div class="two_third last">' );
						
						e.content = e.content.replace( /<div class="one_fourth"><br \/>/gi,'<div class="one_fourth">' );						
						e.content = e.content.replace( /<p><div class="one_fourth"><\/p>/gi,'<div class="one_fourth">' );
						e.content = e.content.replace( /<div class="one_fourth last"><br \/>/gi,'<div class="one_fourth last">' );
						e.content = e.content.replace( /<p><div class="one_fourth last"><\/p>/gi,'<div class="one_fourth last">' );
						
						e.content = e.content.replace( /<div class="three_fourth"><br \/>/gi,'<div class="three_fourth">' );						
						e.content = e.content.replace( /<p><div class="three_fourth"><\/p>/gi,'<div class="three_fourth">' );
						e.content = e.content.replace( /<div class="three_fourth last"><br \/>/gi,'<div class="three_fourth last">' );
						e.content = e.content.replace( /<p><div class="three_fourth last"><\/p>/gi,'<div class="three_fourth last">' );						
											
						e.content = e.content.replace( /<div class="one_fifth"><br \/>/gi,'<div class="one_fifth">' );						
						e.content = e.content.replace( /<p><div class="one_fifth"><\/p>/gi,'<div class="one_fifth">' );
						e.content = e.content.replace( /<div class="one_fifth last"><br \/>/gi,'<div class="one_fifth last">' );
						e.content = e.content.replace( /<p><div class="one_fifth last"><\/p>/gi,'<div class="one_fifth last">' );
						
						e.content = e.content.replace( /<div class="text"><br \/>/gi,'<div class="text">' );
						
			}
        });
		
		
		
		
		
    // SWITCH TO TEXT MODE
        editor.on( 'PostProcess', function( e ) {
            if ( e.content ) {               				
				
				var findSc;
				var scAtts;
				var finalString;
				
				
									
				
					//columns
						//remove column clears
						e.content = e.content.replace(/<div class="clear"><!-- col_clear --><\/div>/g,'');
					
					
						//one half																		
						e.content = e.content.replace(/<div class="one_half">/g,'[one_half]');
						e.content = e.content.replace(/<div class="one_half"><br \/>/g,'[one_half]');
						e.content = e.content.replace(/<div class="one_half last">/g,'[one_half last]');						
						e.content = e.content.replace(/<\/div><div class="hidden">one_half_end<\/div>/g,'[/one_half]');
					
						//one third																		
						e.content = e.content.replace(/<div class="one_third">/g,'[one_third]');
						e.content = e.content.replace(/<div class="one_third"><br \/>/g,'[one_third]');
						e.content = e.content.replace(/<div class="one_third last">/g,'[one_third last]');						
						e.content = e.content.replace(/<\/div><div class="hidden">one_third_end<\/div>/g,'[/one_third]');
						
						//two third																		
						e.content = e.content.replace(/<div class="two_third">/g,'[two_third]');
						e.content = e.content.replace(/<div class="two_third"><br \/>/g,'[two_third]');
						e.content = e.content.replace(/<div class="two_third last">/g,'[two_third last]');						
						e.content = e.content.replace(/<\/div><div class="hidden">two_third_end<\/div>/g,'[/two_third]');					
						
						//one fourth																
						e.content = e.content.replace(/<div class="one_fourth">/g,'[one_fourth]');
						e.content = e.content.replace(/<div class="one_fourth"><br \/>/g,'[one_fourth]');
						e.content = e.content.replace(/<div class="one_fourth last">/g,'[one_fourth last]');						
						e.content = e.content.replace(/<\/div><div class="hidden">one_fourth_end<\/div>/g,'[/one_fourth]');				
						
						//three fourth																
						e.content = e.content.replace(/<div class="three_fourth">/g,'[three_fourth]');
						e.content = e.content.replace(/<div class="three_fourth"><br \/>/g,'[three_fourth]');
						e.content = e.content.replace(/<div class="three_fourth last">/g,'[three_fourth last]');						
						e.content = e.content.replace(/<\/div><div class="hidden">three_fourth_end<\/div>/g,'[/three_fourth]');		
						
						//one fifth											
						e.content = e.content.replace(/<div class="one_fifth">/g,'[one_fifth]');
						e.content = e.content.replace(/<div class="one_fifth"><br \/>/g,'[one_fifth]');
						e.content = e.content.replace(/<div class="one_fifth last">/g,'[one_fifth last]');						
						e.content = e.content.replace(/<\/div><div class="hidden">one_fifth_end<\/div>/g,'[/one_fifth]');
						
						
						
					
					//toggle
						findSc = e.content.match(/\<p><a class="toggle"(.*?)>(.[\n\r\s\S]*?)<!-- tp_toggle_end -->/gi);
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);
								
								
								scAttsIcon = String(scAtts.match(/data-icon=".*?"/g));	
								scAttsIcon = scAttsIcon.replace('data-icon="','');
								scAttsIcon = scAttsIcon.replace('"','');																
								
								scAttsTitle = String(scAtts.match(/data-title=".*?"/g));	
								scAttsTitle = scAttsTitle.replace('data-title="','');
								scAttsTitle = scAttsTitle.replace('"','');									
								
								scAttsOpen = String(scAtts.match(/data-open=".*?"/g));	
								scAttsOpen = scAttsOpen.replace('data-open="','');
								scAttsOpen = scAttsOpen.replace('"','');	
								
								scAttsContent = String(scAtts.match(/\<div class="block">(.[\n\r\s\S]*?)<\/div>/));
								scAttsContent = scAttsContent.replace('<div class="block">','');
								scAttsContent = scAttsContent.replace('</div>','');
								
								
								finalString = '[toggle';
								if(scAttsIcon != 'null' && scAttsIcon != ''){ finalString += ' icon="'+scAttsIcon+'"'; }
								if(scAttsTitle != 'null' && scAttsTitle != ''){ finalString += ' title="'+scAttsTitle+'"'; }
								if(scAttsOpen != 'null' && scAttsOpen != ''){ finalString += ' open="'+scAttsOpen+'"'; }
								finalString += ']'+scAttsContent+'[/toggle]';
								
								e.content = e.content.replace(scAtts,finalString);
								
							}
						}
						
						
						
						
					//alerts
						findSc = e.content.match(/\<div class="tp-alerts(.*?)>(.[\n\r\s\S]*?)<!-- tp_alerts_end --><\/div>/gi);
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);
								
								
								scAttsIcon = String(scAtts.match(/data-icon=".*?"/g));	
								scAttsIcon = scAttsIcon.replace('data-icon="','');
								scAttsIcon = scAttsIcon.replace('"','');																
								
								scAttsType = String(scAtts.match(/data-type=".*?"/g));	
								scAttsType = scAttsType.replace('data-type="','');
								scAttsType = scAttsType.replace('"','');									
															
								scAttsContent = scAtts;
								scAttsContent = scAttsContent.replace(/\<div class="tp-alerts(.*?)><i(.*?)<\/i>/,'');
								scAttsContent = scAttsContent.replace(/\<!-- tp_alerts_end --><\/div>/,'');
								
								
								finalString = '[alert';
								if(scAttsIcon != 'null' && scAttsIcon != ''){ finalString += ' icon="'+scAttsIcon+'"'; }
								if(scAttsType != 'null' && scAttsType != ''){ finalString += ' type="'+scAttsType+'"'; }
								finalString += ']'+scAttsContent+'[/alert]';
								
								e.content = e.content.replace(scAtts,finalString);
								
							}
						}
						
						
						
					//responsive display
						findSc = e.content.match(/\<div class="tp-respo(.*?)>(.[\n\r\s\S]*?)<\/div><!-- tp_respo_end -->/gi);
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);
								
								
								scAttsDevice = String(scAtts.match(/data-device=".*?"/g));	
								scAttsDevice = scAttsDevice.replace('data-device="','');
								scAttsDevice = scAttsDevice.replace('"','');																
								
								scAttsContent = scAtts;
								scAttsContent = scAttsContent.replace(/\<div class="tp-respo(.*?)>/,'');
								scAttsContent = scAttsContent.replace(/\<\/div><!-- tp_respo_end -->/,'');
								scAttsContent = scAttsContent.replace(/\<\/div>(.[\n\r\s\S]*?)<!-- tp_respo_end -->/,'');
								scAttsContent = scAttsContent.replace(/\<p class="tp-respo-info">(.[\n\r\s\S]*?)<\/p>/,'');
								
								
								
								finalString = '[respo';
								if(scAttsDevice != 'null' && scAttsDevice != ''){ finalString += ' device="'+scAttsDevice+'"'; }
								finalString += ']'+scAttsContent+'[/respo]';
								
								e.content = e.content.replace(scAtts,finalString);
								
							}
						}
						
						
						
						
					//google font
						findSc = e.content.match(/\<div class="tp-gfont(.*?)>(.[\n\r\s\S]*?)<\/div><!-- tp_gfont_end -->/gi);
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);
								
								
								scAttsName = String(scAtts.match(/data-name=".*?"/g));	
								scAttsName = scAttsName.replace('data-name="','');
								scAttsName = scAttsName.replace('"','');																
								
								scAttsSize = String(scAtts.match(/data-size=".*?"/g));	
								scAttsSize = scAttsSize.replace('data-size="','');
								scAttsSize = scAttsSize.replace('"','');															
								
								scAttsStyle = String(scAtts.match(/data-style=".*?"/g));	
								scAttsStyle = scAttsStyle.replace('data-style="','');
								scAttsStyle = scAttsStyle.replace('"','');									
												
								scAttsContent = scAtts;
								scAttsContent = scAttsContent.replace(/\<div class="tp-gfont(.*?)>/,'');
								scAttsContent = scAttsContent.replace(/\<\/div><!-- tp_gfont_end -->/,'');
								scAttsContent = scAttsContent.replace(/\<\/div>(.[\n\r\s\S]*?)<!-- tp_gfont_end -->/,'');
								
								finalString = '[font';
								if(scAttsName != 'null' && scAttsName != ''){ finalString += ' name="'+scAttsName+'"'; }
								if(scAttsSize != 'null' && scAttsSize != ''){ finalString += ' size="'+scAttsSize+'"'; }
								if(scAttsStyle != 'null' && scAttsStyle != ''){ finalString += ' style="'+scAttsStyle+'"'; }
								finalString += ']'+scAttsContent+'[/font]';
								
								e.content = e.content.replace(scAtts,finalString);
								
							}
						}
						
						
					
					//buttons
						findSc = e.content.match(/\<a(.*?)class="button(.*?)">(.[\n\r\s\S]*?)<!-- tp_button_end -->/gi);
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);
								
								
								scAttsLink = String(scAtts.match(/href=".*?"/g));	
								scAttsLink = scAttsLink.replace('href="','');
								scAttsLink = scAttsLink.replace('"','');																
								
								scAttsColor = String(scAtts.match(/data-color=".*?"/g));	
								scAttsColor = scAttsColor.replace('data-color="','');
								scAttsColor = scAttsColor.replace('"','');									
								
								scAttsBGColor = String(scAtts.match(/data-bgcolor=".*?"/g));	
								scAttsBGColor = scAttsBGColor.replace('data-bgcolor="','');
								scAttsBGColor = scAttsBGColor.replace('"','');	
								
								scAttsAlign = String(scAtts.match(/data-align=".*?"/g));	
								scAttsAlign = scAttsAlign.replace('data-align="','');
								scAttsAlign = scAttsAlign.replace('"','');	
								
								scAttsContent = String(findSc[i]);
								scAttsContent = scAttsContent.replace(/\<a(.*?)class="button(.*?)">/,'');	
								scAttsContent = scAttsContent.replace(/\<\/a><!-- tp_button_end -->/,'');	
								scAttsContent = scAttsContent.replace(/\<\/a>(.*?)<!-- tp_button_end -->/,'');	
																
								
								finalString = '[button link="'+scAttsLink+'"';
								if(scAttsAlign != 'null'){ finalString += ' align="'+scAttsAlign+'"'; }
								if(scAttsColor != 'null'){ finalString += ' color="'+scAttsColor+'"'; }
								if(scAttsBGColor != 'null'){ finalString += ' bgcolor="'+scAttsBGColor+'"'; }
								finalString += ']'+scAttsContent+'[/button]';
								
								e.content = e.content.replace(scAtts,finalString);
								
							}
						}
						
						
						
					//titles
						findSc = e.content.match(/\<div class="tp-title(.*?)>(.[\n\r\s\S]*?)<!-- tp_title_end -->/gi);
						
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);
																
								scAttsTitle = String(findSc[i]);
								scAttsTitle = scAttsTitle.replace(/(.[\n\r\s\S]*?)<h1>/gi,'');								
								scAttsTitle = scAttsTitle.replace(/\<\/h1>(.[\n\r\s\S]*?)<!-- tp_title_end -->/gi,'');
								
								scAttsSubTitle = String(findSc[i]);
								scAttsSubTitle = scAttsSubTitle.replace(/(.[\n\r\s\S]*?)<h5>/gi,'');								
								scAttsSubTitle = scAttsSubTitle.replace(/\<\/h5>(.[\n\r\s\S]*?)<!-- tp_title_end -->/gi,'');
								
								scAttsStyle = '';
								scAttsStyle2 = String(findSc[i]).match(/\<div class="tp-title style2/gi);
								if(scAttsStyle2){
									scAttsStyle = '2';
								}
								
								scAttsStyle3 = String(findSc[i]).match(/\<div class="tp-title style3/gi);
								if(scAttsStyle3){
									scAttsStyle = '3';
								}
								
								scAttsAlign = '';
								scAttsAlignLeft = String(findSc[i]).match(/\<div class="tp-title(.[^>]*?)alignleft/gi);
								if(scAttsAlignLeft){
									scAttsAlign = 'left';
								}
								scAttsAlignRight = String(findSc[i]).match(/\<div class="tp-title(.[^>]*?)alignright/gi);
								if(scAttsAlignRight){
									scAttsAlign = 'right';
								}
								
								finalString = '[title title="'+scAttsTitle+'" subtitle="'+scAttsSubTitle+'" align="'+scAttsAlign+'" style="'+scAttsStyle+'"]';
								e.content = e.content.replace(scAtts,finalString);
							}
						}
						
						
						
					//pullquote
						findSc = e.content.match(/\<span class="pullquote(.[\n\r\s\S]*?)<\/span>/gi);
						
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);
								
								//get atts
									scAttsAlign = String(scAtts.match(/data-align=".*?"/g));	
									scAttsAlign = scAttsAlign.replace('data-align="','');
									scAttsAlign = scAttsAlign.replace('"','');	
									
									scAttsStyle = String(scAtts.match(/data-style=".*?"/g));	
									scAttsStyle = scAttsStyle.replace('data-style="','');
									scAttsStyle = scAttsStyle.replace('"','');	
								
								
								scContent = String(findSc[i]);
								scContent = scContent.replace(/\<span class="pullquote(.*?)">/,'');
								scContent = scContent.replace(/\<\/span>/,'');
								
								finalString = '[pullquote';
								if(scAttsStyle){
									finalString += ' style="'+scAttsStyle+'"';
								}
								if(scAttsAlign){
									finalString += ' align="'+scAttsAlign+'"';
								}
								
								finalString += ']'+scContent+'[/pullquote]';
								e.content = e.content.replace(scAtts,finalString);
							}
						}
						
						
					//testemonial
						findSc = e.content.match(/\<div class="tp-testemonial(.*?)>(.[\n\r\s\S]*?)<!-- tp_testemonial_end -->/gi);
						
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);
								
								scAttsAuthor = String(scAtts.match(/data-author=".*?"/g));
								scAttsAuthor = scAttsAuthor.replace('data-author="','');
								scAttsAuthor = scAttsAuthor.replace('"','');
								if(scAttsAuthor == 'null' || scAttsAuthor == ''){ scAttsAuthor = ''; }
								
								scAttsCompany = String(scAtts.match(/data-company=".*?"/g));
								scAttsCompany = scAttsCompany.replace('data-company="','');
								scAttsCompany = scAttsCompany.replace('"','');
								if(scAttsCompany == 'null' || scAttsCompany == ''){ scAttsCompany = ''; }
								
								scAttsImage = String(scAtts.match(/data-image=".*?"/g));
								scAttsImage = scAttsImage.replace('data-image="','');
								scAttsImage = scAttsImage.replace('"','');
								if(scAttsImage == 'null' || scAttsImage == ''){ scAttsImage = ''; }
								
								scContent = String(findSc[i]);
								scContent = scContent.replace(/\<div class="tp-testemonial(.[\n\r\s\S]*?)<div class="text">/gi,'');
								scContent = scContent.replace(/\<br \/><br \/><strong>(.[\n\r\s\S]*?)<!-- tp_testemonial_end -->/gi,'');
								scContent = scContent.replace(/\<strong>(.[\n\r\s\S]*?)<!-- tp_testemonial_end -->/gi,'');
								
								
								finalString = '[testemonial author="'+scAttsAuthor+'" company="'+scAttsCompany+'" image="'+scAttsImage+'"]'+scContent+'[/testemonial]';
								e.content = e.content.replace(scAtts,finalString);
							}
						}
						
						
						
					//call to action
						findSc = e.content.match(/\<div class="tp-cta(.*?)>(.[\n\r\s\S]*?)<!-- call_to_action_end -->/gi);
						
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);
								
								//get atts
									scAttsTitle = String(scAtts.match(/data-title=".*?"/g));
									scAttsTitle = scAttsTitle.replace('data-title="','');
									scAttsTitle = scAttsTitle.replace('"','');
									
									scAttsLink = String(scAtts.match(/data-link=".*?"/g));
									scAttsLink = scAttsLink.replace('data-link="','');
									scAttsLink = scAttsLink.replace('"','');
									
									scAttsTarget = String(scAtts.match(/data-target=".*?"/g));
									scAttsTarget = scAttsTarget.replace('data-target="','');
									scAttsTarget = scAttsTarget.replace('"','');
									
									scAttsIcon = String(scAtts.match(/data-icon=".*?"/g));
									scAttsIcon = scAttsIcon.replace('data-icon="','');
									scAttsIcon = scAttsIcon.replace('"','');
									
									scAttsStyle = String(scAtts.match(/data-style=".*?"/g));
									scAttsStyle = scAttsStyle.replace('data-style="','');
									scAttsStyle = scAttsStyle.replace('"','');
									
									scAttsButton = String(scAtts.match(/data-button=".*?"/g));
									scAttsButton = scAttsButton.replace('data-button="','');
									scAttsButton = scAttsButton.replace('"','');
									
									scAttsAlign = String(scAtts.match(/data-align=".*?"/g));
									scAttsAlign = scAttsAlign.replace('data-align="','');
									scAttsAlign = scAttsAlign.replace('"','');
									
									scAttsHover = String(scAtts.match(/data-hover=".*?"/g));
									scAttsHover = scAttsHover.replace('data-hover="','');
									scAttsHover = scAttsHover.replace('"','');
									
									scAttsCircle = String(scAtts.match(/data-circle=".*?"/g));
									scAttsCircle = scAttsCircle.replace('data-circle="','');
									scAttsCircle = scAttsCircle.replace('"','');
									
								
								//get content								
									var getContent = String(scAtts.match(/<!-- tp_cta_content -->(.[\n\r\s\S]*?)<!-- tp_cta_content_end -->/g));
									getContent = getContent.replace('<!-- tp_cta_content -->','');
									getContent = getContent.replace('<!-- tp_cta_content_end -->','');
									
								
									finalString = '[cta';
									if(scAttsTitle != 'null'){ finalString += ' title="'+scAttsTitle+'"'; }
									if(scAttsLink != 'null'){ finalString += ' link="'+scAttsLink+'"'; }
									if(scAttsTarget != 'null'){ finalString += ' target="'+scAttsTarget+'"'; }
									if(scAttsIcon != 'null'){ finalString += ' icon="'+scAttsIcon+'"'; }
									if(scAttsStyle != 'null'){ finalString += ' style="'+scAttsStyle+'"'; }
									if(scAttsButton != 'null'){ finalString += ' button="'+scAttsButton+'"'; }
									if(scAttsAlign != 'null'){ finalString += ' align="'+scAttsAlign+'"'; }
									if(scAttsCircle != 'null'){ finalString += ' circle="'+scAttsCircle+'"'; }
									if(scAttsHover != 'null'){ finalString += ' hover="'+scAttsHover+'"'; }
									
									finalString += ']'+getContent+'[/cta]';
									e.content = e.content.replace(scAtts,finalString);
							}
						}						
					
						
						
						
						
					//maps
						findSc = e.content.match(/<div class="tp-map">(.[\s\S]*?)<!-- tp_map_start --><!-- (.[\s\S]*?) --><!-- tp_map_end --><\/div>/gi);
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);
								
								finalString = scAtts;
								finalString = finalString.replace(/<div class="tp-map">(.[\s\S]*?)<!-- tp_map_start --><!-- /gi,'');
								finalString = finalString.replace(/--><!-- tp_map_end --><\/div>/gi,'');
								
								//tab content SC back conversion 
								finalString = finalString.replace(/&#91;/g,'[');
								finalString = finalString.replace(/&#93;/g,']');
								


								e.content = e.content.replace(scAtts,finalString);
							}
						}
						
						
						
						
					//pricing table
						findSc = e.content.match(/<div class="tp-pricingtable">(.[\s\S]*?)<!-- tp_plan_start --><!-- (.[\s\S]*?) --><!-- tp_plan_end --><\/div>/gi);
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);
								
								finalString = scAtts;
								finalString = finalString.replace(/<div class="tp-pricingtable">(.[\s\S]*?)<!-- tp_plan_start --><!-- /gi,'');
								finalString = finalString.replace(/--><!-- tp_plan_end --><\/div>/gi,'');
								
								//tab content SC back conversion 
								finalString = finalString.replace(/&#91;/g,'[');
								finalString = finalString.replace(/&#93;/g,']');
								
								e.content = e.content.replace(scAtts,finalString);
							}
						}
						
						
						
					//tabs
						findSc = e.content.match(/<div class="tp-tabs">(.[\s\S]*?)<!-- tp_tabs_start --><!-- (.[\s\S]*?) --><!-- tp_tabs_end --><\/div>/gi);
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);
								
								finalString = scAtts;
								finalString = finalString.replace(/<div class="tp-tabs">(.[\s\S]*?)<!-- tp_tabs_start --><!-- /gi,'');
								finalString = finalString.replace(/--><!-- tp_tabs_end --><\/div>/gi,'');
								
								//tab content SC back conversion 
								finalString = finalString.replace(/&#91;/g,'[');
								finalString = finalString.replace(/&#93;/g,']');
								
								e.content = e.content.replace(scAtts,finalString);
							}
						}
						
						
						
					//toggles	
						findSc = e.content.match(/<div><a(.*?)class="tp-toggle"(.*?)>(.[\s\S]*?)<!-- tp_toggle_end -->/gi);
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);
								
								//get atts
									scAttsOpen = String(scAtts.match(/data-open=".*?"/g));
									scAttsOpen = scAttsOpen.replace('data-open="','');
									scAttsOpen = scAttsOpen.replace('"','');
									
									scAttsTitle = String(scAtts.match(/<a(.*?)class="tp-toggle"(.*?)>(.*?)<\/a>/gi));
									scAttsTitle = scAttsTitle.replace(/<a(.*?)class="tp-toggle"(.*?)>/gi,'');
									scAttsTitle = scAttsTitle.replace(/<i(.*?)><\/a>/gi,'');
								
									scAttsContent = scAtts.replace(/(.[\s\S]*?)<div class="block">/gi,'');
									scAttsContent = scAttsContent.replace(/<\/div>(.[\s\S]*?)<!-- tp_toggle_end -->/gi,'');
									
								
									finalString = '[toggle title="'+scAttsTitle+'"';
									if(scAttsOpen == 'yes'){ finalString += ' open="yes"'; }
									finalString += ']'+scAttsContent+'[/toggle]';
									
									e.content = e.content.replace(scAtts,finalString);
								
							}
						}
						
						

					//icon	
						//with links
						findSc = e.content.match(/<a href="(.[^>]*?)"><i class="fa(.*?)<\/i><\/a>/g);
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);
								
								//get atts
									scAttsLink = String(scAtts.match(/href=".*?"/g));
									scAttsLink = scAttsLink.replace('href="','');
									scAttsLink = scAttsLink.replace('"','');
									
									scAttsTarget = String(scAtts.match(/target=".*?"/g));
									scAttsTarget = scAttsTarget.replace('target="','');
									scAttsTarget = scAttsTarget.replace('"','');
									
									scAttsName = String(scAtts.match(/i class="fa .*?"/g));
									scAttsName = scAttsName.replace('i class="fa ','');
									scAttsName = scAttsName.replace('"','');
									
									scAttsStyle = String(scAtts.match(/style=".*?"/g));
									scAttsStyle = scAttsStyle.replace('style="','');
									scAttsStyle = scAttsStyle.replace('"','');
									
								//replace
									finalString = '[icon name="'+scAttsName+'"';
									
									if(scAttsLink != 'null'){
										finalString += ' link="'+scAttsLink+'"';
										if(scAttsTarget != 'null'){
											finalString += ' target="'+scAttsTarget+'"';	
										}
									}
									
									if(scAttsStyle != 'null'){
										finalString += ' style="'+scAttsStyle+'"';	
									}
									
									finalString += ']';
								
								
								e.content = e.content.replace(scAtts,finalString);
							}
						}							
						
								
						//without links
						findSc = e.content.match(/<i class="fa(.*?)<\/i>/g);
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);
								
								//get atts									
									scAttsName = String(scAtts.match(/i class="fa .*?"/g));
									scAttsName = scAttsName.replace('i class="fa ','');
									scAttsName = scAttsName.replace('"','');
									
									scAttsStyle = String(scAtts.match(/style=".*?"/g));
									scAttsStyle = scAttsStyle.replace('style="','');
									scAttsStyle = scAttsStyle.replace('"','');
									
								//replace
									finalString = '[icon name="'+scAttsName+'"';
																		
									if(scAttsStyle != 'null'){
										finalString += ' style="'+scAttsStyle+'"';	
									}
									
									finalString += ']';
								
								
								e.content = e.content.replace(scAtts,finalString);
							}
						}										

						


					//posts
						findSc = e.content.match(/<div class="tp-portfolio(.[\s\S]*?)<!-- tp_portfolio_end -->/gi);
						
						if(findSc){
							for(var i=0;i < findSc.length;i++){
								scAtts = String(findSc[i]);
								
								//get atts									
								
									scAttsCategory = String(scAtts.match(/data-category="(.*?)"/gi));									
									scAttsCategory = scAttsCategory.replace('data-category="','');
									scAttsCategory = scAttsCategory.replace('"','');
									
									scAttsCols = String(scAtts.match(/data-cols="(.*?)"/gi));									
									scAttsCols = scAttsCols.replace('data-cols="','');
									scAttsCols = scAttsCols.replace('"','');
									
									scAttsLimit = String(scAtts.match(/data-limit="(.*?)"/gi));									
									scAttsLimit = scAttsLimit.replace('data-limit="','');
									scAttsLimit = scAttsLimit.replace('"','');									
									
									scAttsShowtitle = String(scAtts.match(/data-showtitle="(.*?)"/gi));									
									scAttsShowtitle = scAttsShowtitle.replace('data-showtitle="','');
									scAttsShowtitle = scAttsShowtitle.replace('"','');
									
									scAttsShowcategory = String(scAtts.match(/data-showcategory="(.*?)"/gi));									
									scAttsShowcategory = scAttsShowcategory.replace('data-showcategory="','');
									scAttsShowcategory = scAttsShowcategory.replace('"','');
									
									scAttsShowexcerpt = String(scAtts.match(/data-showexcerpt="(.*?)"/gi));									
									scAttsShowexcerpt = scAttsShowexcerpt.replace('data-showexcerpt="','');
									scAttsShowexcerpt = scAttsShowexcerpt.replace('"','');
									
									scAttsAlign = String(scAtts.match(/data-align="(.*?)"/gi));									
									scAttsAlign = scAttsAlign.replace('data-align="','');
									scAttsAlign = scAttsAlign.replace('"','');
									
									
																		
									finalString = '[portfolio';									
									if(scAttsCategory != 'null' && scAttsCategory != ''){
										finalString += ' category="'+scAttsCategory+'"';
									}
									if(scAttsCols != 'null' && scAttsCols != ''){
										finalString += ' columns="'+scAttsCols+'"';
									}									
									if(scAttsLimit != 'null' && scAttsLimit != ''){
										finalString += ' limit="'+scAttsLimit+'"';
									}						
									if(scAttsShowtitle != 'null' && scAttsShowtitle != ''){
										finalString += ' showtitle="'+scAttsShowtitle+'"';
									}			
									if(scAttsShowcategory != 'null' && scAttsShowcategory != ''){
										finalString += ' showcategory="'+scAttsShowcategory+'"';
									}					
									if(scAttsShowexcerpt != 'null' && scAttsShowexcerpt != ''){
										finalString += ' showexcerpt="'+scAttsShowexcerpt+'"';
									}		
									if(scAttsAlign != 'null' && scAttsAlign != ''){
										finalString += ' align="'+scAttsAlign+'"';
									}			 
									finalString += ']';
									
									e.content = e.content.replace(scAtts,finalString);
							}
						}
						
						
					
						
					//remove auto p & br
					e.content = e.content.replace( /<p>\[/gi,'[' );										
					e.content = e.content.replace( /]<\/p>/gi,']' );
					e.content = e.content.replace( /]<br \/>/gi,']' );
					
					
						
			             
            }
        });

    
});