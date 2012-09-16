/*
	Author : Abdy Malik Mulky
	Galeria Plugin
	~Sept 17 2012 
	~Newbie
	~'Very Simple Jquery Plugin (First Touch)'
*/

(function()
{
	$.fn.galeria = function()
	{
		var gal = $('#bingkai #galeria li a');		
		var heightdoc = $(document).height();
		$('#kotakgambar').hide();
		gal.click(function()
		{

			$('<div id="belakang"></div>').css('top',$(document).scrollTop()).css('opacity','0').animate({'opacity':'0.75'},'slow').appendTo('body').show();
			
			$('<div id="kotakgambar"></div>').appendTo('body');
			
			$('#kotakgambar').fadeIn('slow');
			
			$('<div id="title">&nbsp;'+$(this).attr('title')+'</div>').appendTo('#kotakgambar');
				
			$('<img />').attr('src',$(this).attr('href')).load(function()
			{
				$('#title').css('top',$(this).height()-($('#title').height()+10))
				if(heightdoc < $(this).height())
				{
					$(this).css('height',heightdoc-50);
					$('#title').css('top',$(this).height()-($('#title').height()+10))
				}
				muncul();
			}).click(function()
			{
				hilang();
			}).appendTo('#kotakgambar');
			
			
			return false;
		
		});
		function muncul()
		{
		
		$('body').css('overflow','hidden');
		 var top = ($(window).height() - $('#kotakgambar').height()) / 2;
		 var left = ($(window).width() - $('#kotakgambar').width()) / 2;
		
		 $('#kotakgambar').css({
		 'top': top + $(document).scrollTop(),
		 'left': left
		 }).fadeIn();
		}
		
		function hilang()
		{
			$('#belakang, #kotakgambar').fadeOut('slow',function()
			{
				$(this).remove();
				$('body').css('overflow-y','auto');
			});
		}

	}
})(jQuery);
