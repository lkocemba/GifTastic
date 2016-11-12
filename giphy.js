
var topics = ['SnowBoarding', 'Motocross', 'Basketball', 'Hockey', 'Rugby', 'Football','baseketball'];
function clear(){
	
}
function displaySports(){

	var sport = $(this).data('sports');
	var queryURL = "http:api.giphy.com/v1/gifs/search?q=" + sport + "&api_key=dc6zaTOxFJmzC&limit=10"  
	
	$.ajax({url: queryURL, method: 'GET'}).done(function(response){
		var results= response.data;

		 for (var i = 0; i < results.length; i++) {
                    var sportDiv = $('<div class="item">')
		
		var rating = results[i].rating;

			
			var pRating  = $('<p>').text( "Rating:" + rating);

			sportDiv.append(pRating);

			var image = $('<img>');
                   image.attr('src', results[i].images.fixed_height.url);


			
			sportDiv.append(image);

			$('#images').prepend(sportDiv);
		}

	});
}

function renderButtons(){ 

		
		$('#buttons').empty();

		 
		for (var i = 0; i < topics.length; i++){

			
		    var a = $('<button>') 
		    a.addClass('sport'); 
		    a.attr('data-sports', topics[i]); 
		    a.text(topics[i]); 
		    $('#buttons').append(a); 
		}
	}

	$('#addSport').on('click', function(){

		
		var sports = $('#sport-input').val().trim();


		
		topics.push(sports);
		
		
		renderButtons();

		
		return false;
	})
		
	
	
	$(document).on('click','.sport', displaySports);


	
	renderButtons();

    