
//ele
var items_img = document.getElementsByClassName("item_pic");
var dots = document.getElementsByClassName("item_dot");
var timer;
//自动播放
function auto_play(index){
	clearInterval(timer);
	timer = setInterval(function(){
		next(index);
	}, 1000)
}
function stop_play(){
	clearInterval(timer);
}
//计算下一个
function next(index){
	index[0] = index[1];
	index[1]++; 
	console.log(index);
	if(index[1] >= items_img.length){
		index[1] = 0;
	}
	slideTo(index);
}
//上一个
function previous(index){
	index[0] = index[1];
	index[1]--;
	if(index[1] < 0){
		index[1] = items_img.length - 1;
	}
	slideTo(index);
}
//切图
function slideTo(index){
	let item_now = items_img[index[0]];
	let item_next = items_img[index[1]];
	item_now.style.display = "none";
	item_next.style.display = "block";
	dots[index[1]].style.backgroundColor = "red";
	dots[index[0]].style.backgroundColor = "gray";
}
