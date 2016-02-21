document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){


	document.getElementById('rhymeSubmit').addEventListener('click', function(event){

		
		var req = new XMLHttpRequest();
		var userInput =  document.getElementById('rhymeWord').value;



		
		
        req.open("GET","https://wordsapiv1.p.mashape.com/words/" + userInput  + "/rhymes");
        req.setRequestHeader("X-Mashape-Key","mNEEltMgVbmshACg15Gt4milplE4p1yNOdejsnn95dP4yhTyQj");
		req.setRequestHeader("Accept","application/json");
		req.send();

		req.addEventListener('load',function(){

      var response = (JSON.parse(req.responseText));
      console.log(response);
      
     	
		doRhymes(response);

		});

		event.preventDefault();
	

	})



	document.getElementById('simSubmit').addEventListener('click', function(event){

		
		var req = new XMLHttpRequest();
		var userInput =  document.getElementById('simWord').value;



		
		
        req.open("GET","https://wordsapiv1.p.mashape.com/words/" + userInput  + "/synonyms");
        req.setRequestHeader("X-Mashape-Key","mNEEltMgVbmshACg15Gt4milplE4p1yNOdejsnn95dP4yhTyQj");
		req.setRequestHeader("Accept","application/json");
		req.send();

		req.addEventListener('load',function(){

      var response = (JSON.parse(req.responseText));
      console.log(response);
      
     	
		doSim(response);

		});

		event.preventDefault();


	})



document.getElementById('ranSubmit').addEventListener('click', function(event){

		
		var req = new XMLHttpRequest();



		
		
        req.open("GET","https://wordsapiv1.p.mashape.com/words/?random=true");
        req.setRequestHeader("X-Mashape-Key","mNEEltMgVbmshACg15Gt4milplE4p1yNOdejsnn95dP4yhTyQj");
		req.setRequestHeader("Accept","application/json");
		req.send();

		req.addEventListener('load',function(){

      var response = (JSON.parse(req.responseText));
      console.log(response);
      
     	
		doRan(response);

		});

		event.preventDefault();


	})


document.getElementById('spcSubmit').addEventListener('click', function(event){

		var userInput =  document.getElementById('spcWord').value;
		var req = new XMLHttpRequest();
		console.log(userInput);
		
        req.open("GET","https://wordsapiv1.p.mashape.com/words/?partOfSpeech=" + userInput +"&random=true");
        req.setRequestHeader("X-Mashape-Key","mNEEltMgVbmshACg15Gt4milplE4p1yNOdejsnn95dP4yhTyQj");
		req.setRequestHeader("Accept","application/json");
		req.send();

		req.addEventListener('load',function(){

      var response = (JSON.parse(req.responseText));
      console.log(response);
      
     	
		doSpc(response);

		});

		event.preventDefault();


	})


}//end bind buttons




function doRhymes(response){

		

					document.getElementById('rhymeDiv').textContent = "";	
    
    				if(Object.keys(response.rhymes).length < 1)	{

    					document.getElementById('rhymeDiv').textContent = "Sorry no Results.";

    				}


    				else


    				{


    				

    				for (i = 0; i < response.rhymes.all.length; i++) { 
     

    			
      				document.getElementById('rhymeDiv').innerHTML = document.getElementById('rhymeDiv').innerHTML + response.rhymes.all[i] + "<br>";
      				}

      			}


 		

}


function doSim(response){

		

					document.getElementById('rhymeDiv').textContent = "";	
    
    				if(Object.keys(response.synonyms).length < 1)	{

    					document.getElementById('rhymeDiv').textContent = "Sorry no Results.";

    				}


    				else


    				{


    				

    				for (i = 0; i < response.synonyms.length; i++) { 
     

    			
      				document.getElementById('rhymeDiv').innerHTML = document.getElementById('rhymeDiv').innerHTML + response.synonyms[i] + "<br>";
      				}

      			}


}


function doRan(response){

		

					document.getElementById('rhymeDiv').textContent = "";	
    
    				if(Object.keys(response.word).length < 1)	{

    					document.getElementById('rhymeDiv').textContent = "Sorry no Results.";

    				}


    				else


    				{	

				     	
						document.getElementById('rhymeDiv').textContent = response.word;


      			}// end else

 		

}




function doSpc(response){

		

					document.getElementById('rhymeDiv').textContent = "";	
    
    				if(Object.keys(response.word).length < 1)	{

    					document.getElementById('rhymeDiv').textContent = "Sorry no Results.";

    				}


    				else


    				{	

 
				     	
						document.getElementById('rhymeDiv').textContent = response.word;

		
      				

      			}// end else


}