var rights = 0;
	var wrongs = 0;
	var unanswered = 0;
	var questionindex = 0;
	var timegiven = 30;
	var tocheck = "";
	var quiz = {
 		0:{ 
 			q: "What is Leslie's Favorite restaurant?",
 			choices: ["Paunch Burger","Tom's Bistro","Sue's Salads", "JJ's Diner"],
 			answer:"JJ's Diner",
 			correct: "assets/images/green.gif",
 			wrong: "assets/images/red.gif",
 			},
 		1:{ 
 			q: "What is Ron Swanson's ex-wife's name?",
 			choices: ["Tammy","Tamara","Anna", "April"],
 			answer:"Tammy",
 			correct: "assets/images/green.gif",
 			wrong: "assets/images/red.gif",
 			},
 		2:{ 
 			q: "What is Jerry's Real Name?",
 			choices: ["Gary","Terry","Jeff", "Henry"],
 			answer:"Gary",
 			correct: "assets/images/green.gif",
 			wrong: "assets/images/red.gif",
 			},
 		3:{ 
 			q: "What is Pawnee's first and only media conglomerate?",
 			choices: ["Entertainment 420","Entertainment 320","Entertainment 720", "Entertainment 650"],
 			answer:"Entertainment 720",
 			correct: "assets/images/green.gif",
 			wrong: "assets/images/red.gif",
 			},
 		4:{ 
 			q: "Where does Donna have a condo in?",
 			choices: ["Portland","California","Seattle", "Maine"],
 			answer:"Seattle",
 			correct: "assets/images/green.gif",
 			wrong: "assets/images/red.gif",
 			},
 		5:{ 
 			q: "What did April major in?",
 			choices: ["Halloween Studies","Vet Tech","Mortician Studies", "Culinary"],
 			answer:"Halloween Studies",
 			correct: "assets/images/green.gif",
 			wrong: "assets/images/red.gif",
 			},
 		6:{ 
 			q: "When is TREAT YO SELF day?",
 			choices: ["October 13","Everyday","November 15", "December 25"],
 			answer:"October 13",
 			correct: "assets/images/green.gif",
 			wrong: "assets/images/red.gif",
 			},
 		7:{ 
 			q: "What meal does Leslie love?",
 			choices: ["Lunch","Dinner","Brunch", "Breakfast"],
 			answer:"Breakfast",
 			correct: "assets/images/green.gif",
 			wrong: "assets/images/red.gif",
 			},
 		8:{ 
 			q: "What is Ann Perkin's middle name?",
 			choices: ["Meredith","Anna","Lorraine", "Steve"],
 			answer:"Meredith",
 			correct: "assets/images/green.gif",
 			wrong: "assets/images/red.gif",
 			},
 		9:{
 			q: "",
 			choices: [""],
 			answer:"",
 			correct: "",
 			wrong: "",			
 		
 		}
}


function add(){

 		$("#question").html(quiz[questionindex].q);
 		for(i=0; i<4; i++){
 			var choices = $("<span" + " " + "class= choices" + " " +"id=topick_" + i + ">" +  "</span>" + "<br>");
 			$("#choices").append(choices);
 			}
 			$("#topick_0").append(quiz[questionindex].choices[0]).attr("data-value", quiz[questionindex].choices[0]);
 			$("#topick_1").append(quiz[questionindex].choices[1]).attr("data-value", quiz[questionindex].choices[1]);
 			$("#topick_2").append(quiz[questionindex].choices[2]).attr("data-value", quiz[questionindex].choices[2]);
 			$("#topick_3").append(quiz[questionindex].choices[3]).attr("data-value", quiz[questionindex].choices[3]);	 		
 			}
function remove(){
		 	$("#question").empty();
			$("#choices").empty();
		 	}
function checking(){
			if(tocheck === quiz[questionindex - 1].answer){
			timegiven = 30;	
			rights ++;
			right();
			setTimeout(remove,1999);
			setTimeout(add,2000);
			var addtime1 = setTimeout(timer,2000);
			}else{
			wrongs++
			timegiven = 30;	
			wrong();
			setTimeout(remove,1999);
			setTimeout(add,2000);
			setTimeout(timer,2000);
			}

			if(questionindex === 9){
				stop();
				$("#question").empty();
				$("#choices").empty();
				$("#rights").html("Rights:"+ rights);
				$("#wrongs").html("Wrongs:"+ wrongs);
				$("#unanswered").html("Unanswered:"+ unanswered);
				$("#reset").html("<span id= 'resetbutton' onclick=reset()>" + "RESET" + "</span>");
							}
			}

function right(){
				$("#question").html("<br>"+ "Good Job!!!");
				$("#choices").html("<img" +" " + "src="+ quiz[questionindex - 1].correct + ">");
			}

function wrong(){
				$("#question").html("<br>"+ quiz[questionindex - 1].answer);
				$("#choices").html("<img" +" " + "src="+ quiz[questionindex - 1].wrong + ">");
			}

function reset(){
				questionindex = 0;
				rights = 0;
				wrongs = 0;
				unanswered = 0;
				timegiven = 30;	
				$("#rights").empty();
				$("#wrongs").empty();
				$("#reset").empty();
				$("#unanswered").empty();
				add();
				timer();
			}

function timer(){
            counter = setInterval(decrement, 1000);
        }
function decrement(){
            timegiven--;
            $("#time").html(timegiven);
            if (timegiven === 0){
            	unanswered ++;
                stop();
                $("#question").html("Times Up!!");
				$("#choices").html("<img" + " "	+ "src= assets/images/timesup.gif"+ ">");
				timegiven = 30;	
				questionindex ++
              	setTimeout(remove,1999);
				setTimeout(add,2000);
				setTimeout(timer,2000);
				console.log("Unanswered:" + unanswered);
				console.log("Index:" + questionindex);

            }

           	if(questionindex === 9){
           		stop();
           	}
        }



 function stop(){
            clearInterval(counter);
        }


$("#start").on("click", function(){
 	add();
 	timer();
 	$(this).hide();
 });

$("body").on("click", ".choices", function(){
	stop();
	questionindex ++;
	var userchoice = $(this).data("value");
	console.log(userchoice)
	tocheck = userchoice;
	checking();

	console.log("Rights:"+ rights);
	console.log("Wrongs:" + wrongs);
	console.log("Index:" + questionindex);
});