var javascript={
	start:function start(){
		var count=0;
		$('.foothead,.footbody').click(function(){
			if (count%2==0) {
				$('.footbody').slideToggle(300);
				$('.main').css('transform','translateY(0px)');
				count++;
			}else{
				$('.footbody').slideToggle(300);
				$('.main').css('transform','translateY(90px)');
				count=0;
			}
		});
		$('.rule').click(function(){
			$('.rulemask').css('display','block');
			$('.rulemask').removeClass('dyna2');
			$('.rulemask').addClass('dyna');
		});
		$('.close,.ruleframe').click(function(){
			$('.rulemask').removeClass('dyna');
			$('.rulemask').addClass('dyna2');
		});
		$(document).bind('keypress', function(event){
			if(event.which){
				$('.rulemask').removeClass('dyna');
				$('.rulemask').addClass('dyna2');
			}
		});
		$('.rulelist').html(index[0]);
	},
	init:function(num){
		$('.levels').html(store[num].l);//Level
		$('.question').html(store[num].m);//message
		$('.t_tip').html(store[num].t);//tips
		$('.t_author').html(store[num].a);//author
	}
};