window.onload = function(){
	//ele
	var box = document.getElementById("box");
	var items_img = document.getElementsByClassName("item_pic");
	var btn = document.getElementsByClassName("button");
	var dots = document.getElementsByClassName("item_dot");
	
	var index = [0,0];
	
	
	//box
	box.addEventListener("mouseout", function(){
		auto_play(index);
		btn[0].style.display = "none";
		btn[1].style.display = "none";
	}, false);
	box.addEventListener("mouseover", function(){
		stop_play();
		btn[0].style.display = "block";
		btn[1].style.display = "block";
	}, false);
	
	//btn
	for(let i = 0; i < btn.length; i++){
		btn[i].addEventListener("mouseover", function(){
			this.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
		}, false);
		btn[i].addEventListener("mouseout", function(){
			this.style.backgroundColor = "rgba(0, 0, 0, 0.4)"
		}, false)
	}
	btn[0].addEventListener("click", function(){
		previous(index);
	}, false);
	btn[1].addEventListener("click", function(){
		next(index);
	}, false);
	
	//dot
	for(let i = 0; i < dots.length; i++){
		dots[i].addEventListener("mouseover", function(){
			dots[i].style.backgroundColor = "red";

		});
		dots[i].addEventListener("mouseout", function(){
			dots[i].style.backgroundColor = "gray";
		});
		dots[i].addEventListener("click", function(){
			
			index[0] = index[1];  
			index[1] = i;
			slideTo(index);
			console.log(index);
		});
	}
}
