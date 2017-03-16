$(document).ready(function(){
	$('.nav-left ul li:nth-of-type(1)').click(function(event){
		event.preventDefault();		
		$('#data').hide().load('b.html',function(){
			$(this).fadeIn();
		});
	});
	$('.nav-left ul li:nth-of-type(2)').click(function(event){
		event.preventDefault();	
		$.getJSON('c.json', function(data){
			var html='';
			$.each(data,function(index,replay){
				html+='<article class="main-replay">';
				
				    $.each(replay.replay,function(index,line){
						html+='<p>'+line+'</p>';
						}); 
				html+='</article>';
				html+='<article class="main-question">';
			        $.each(replay.question,function(index,line){
						html+='<p>'+line+'</p>';
						});
				html+='</article>';
				});
				$('#data').html(html);
			
		});
	});
   $('.nav-left ul li:nth-of-type(2)').click(function(event){
		event.preventDefault();
		
			$('#data').load})
});



window.onload=function(){
	var Odiv=document.getElementById("navRight");
	
	var Oli=Odiv.getElementsByTagName("li");
	var Ospan=Odiv.getElementsByTagName("span");
	
	 
	 
	for(var i=0;i < Oli.length;i++){
		Oli[i].index=i;
		Oli[i].onclick=function(){	
		   if(!localStorage.local_count){
		         window.localStorage.local_count=0;
		   }
			localStorage.local_count++;
			Ospan[this.index].innerHTML=localStorage.local_count;
			}
		};
		
	 };