$(document).ready(function() {
	
	function randomInteger(min, max){
		return Math.floor(Math.random()*(max - min + 1)) + min;
	}
	
	function setNum(num, value){
		num.html(value);
		num.css({"top":top, "left":left, "visibility":"visible"});
	}

	function findPos(p1, p2){
		top = 285 - ((p2-p1)*35/2) + 'px';
		left = 60+(p1*39)+((p2-p1)*39/2) + 'px';
	}
	
	function drawCurve(p1, p2){
		ctx.strokeStyle = "red";

		var x_delt = 39;
		var y_delt = 164;
		
		var point1x = 50+(p1*x_delt);
		var point2x = 50+(p1*x_delt)+((p2-p1)*x_delt/2);
		var point2y = y_delt-((p2-p1)*x_delt/2);
		var point3x = 50+(p2*x_delt);
		
		ctx.moveTo(point1x,y_delt);
		ctx.quadraticCurveTo(point2x , point2y, point3x, y_delt);
		ctx.moveTo(point3x,y_delt);
		ctx.lineTo(point3x-7,y_delt);
		ctx.moveTo(point3x,y_delt);
		ctx.lineTo(point3x,y_delt-7);
		ctx.stroke();
		
		//drawInput
		findPos(p1, p2);
		var w = 20 + 'px';

		$('body').append('<input type="number" id="in1"></input>');
		$("#in1").css({"width":w, "top":top, "left":left});
	}

	var text = $("#example");

	var a, b, c;
	var top, left;

	a = randomInteger(1, 7);
	c = randomInteger(11, 14);
	b = c - a;

	text.html(a +" + "+ b +" = ?");

	// graph
	var canvas = document.getElementById('graph1');
	var ctx = canvas.getContext('2d');

	drawCurve(0, a);

	$('#in1').keyup(function(){
		var value = $('#in1').val();
		  
		if(value == a){
			$('#in1').remove();
			
			findPos(0, a);
			setNum($("#num1"), a);
			
			drawCurve(a, c);
			
			$('#in1').keyup(function(){
				value = $('#in1').val();
		  
				if(value == b){
					$('#in1').remove();	
					
					findPos(a, c);
					setNum($("#num2"), b);	
					
					$('body').append('<input type="number" id="in1"></input>');
					$("#in1").css({"top":5, "left":510, "font-size":34+"px",
					"width":50 +"px", "hight":36 + "px"});
					
					$('#in1').keyup(function(){
						value = $('#in1').val();
		  
						if(value == c){
							text.html(a +" + "+ b +" = " + c);
							$('#in1').remove();
						}
						else{
							$('#in1').css({"color":"red"});
						}
					});	
				}
				else{
					$('#in1').css({"color":"red"});
				}
			});	
		}
		else{
			$('#in1').css({"color":"red"});
		}
	});
});












