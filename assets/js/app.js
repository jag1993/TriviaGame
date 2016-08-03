var rights = 0;
	var wrongs = 0;
	var unanswered = 0;
	var questionindex = 0;
	var timegiven = 30;
	var tocheck = "";
	var quiz = {
 		0:{ 
 			q: "What is HTML?",
 			choices: ["Hyperspace Time Machine Lover","Hypertext Markup Language","Hypertext Meta Links", "Hyperloop Time Makeup Language"],
 			answer:"Hypertext Markup Language",
 			correct: "assets/images/green.png",
 			wrong: "assets/images/red.png",
 			},
 		1:{ 
 			q: "What is the original name of JavaScript?",
 			choices: ["Frustrating Language","Google","AskJeeves", "Mocha"],
 			answer:"Mocha",
 			correct: "assets/images/green.png",
 			wrong: "assets/images/red.png",
 			},
 		2:{ 
 			q: "What is a boolean?",
 			choices: ["A type of noodle","A type of loop","A data type that is either true or false", "A lean boo"],
 			answer:"A data type that is either true or false",
 			correct: "assets/images/green.png",
 			wrong: "assets/images/red.png",
 			},
 		3:{ 
 			q: "Who invented the internet?",
 			choices: ["Bill Gates","The Government","Melania Trump", "Robert E. Kahn and Vint Cerf"],
 			answer:"Robert E. Kahn and Vint Cerf",
 			correct: "assets/images/green.png",
 			wrong: "assets/images/red.png",
 			},
 		4:{ 
 			q: "What JavaScript method turns an array into a string?",
 			choices: [".push",".pull",".toString", ".parseInt"],
 			answer:".toString",
 			correct: "assets/images/green.png",
 			wrong: "assets/images/red.png",
 			},
 		5:{ 
 			q: "What does DOM mean??",
 			choices: ["Dirty Old Man","Document Object Model","Document On Modem", "Document Over Monitor"],
 			answer:"Document Object Model",
 			correct: "assets/images/green.png",
 			wrong: "assets/images/red.png",
 			},
 		6:{ 
 			q: "Which is not a data type?",
 			choices: ["List","String","Object", "Array"],
 			answer:"List",
 			correct: "assets/images/green.png",
 			wrong: "assets/images/red.png",
 			},
 		7:{ 
 			q: "What JS event will execute a function when the page loads?",
 			choices: ["style=","script=","data-value=", "onload="],
 			answer:"onload=",
 			correct: "assets/images/green.png",
 			wrong: "assets/images/red.png",
 			},
 		8:{ 
 			q: "What git command stages all your changes?",
 			choices: ["git pull","git push","git add", "git config"],
 			answer:"git add",
 			correct: "assets/images/green.png",
 			wrong: "assets/images/red.png",
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
				$("#reset").html("<span onclick=reset()>" + "RESET" + "</span>");
							}
			}

function right(){
				$("#question").html("<br>"+ "Good Job!!!");
				$("#choices").html("<img" +" " + "style='width:360px;height:300px'" + "src="+ quiz[questionindex - 1].correct + ">");
			}

function wrong(){
				$("#question").html("<br>"+ quiz[questionindex - 1].answer);
				$("#choices").html("<img" +" " + "style='width:300px;height:300px'" + "src="+ quiz[questionindex - 1].wrong + ">");
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
				$("#choices").html("<img" + " "	+ "style='width:500px;height:300px'" + "src= assets/images/timesup.png"+ ">");
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