$( function(){
	$('div.text').hide()
	$('div.expand').click( function(){
		$(this).animate( {height : "500px", width:"500px"} ) ;
		console.log('hello world');
		$('div.text').fadeIn('slow');
	});
});
