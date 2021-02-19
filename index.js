//自动播放
function auto_play(){
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
	slideTo(index);
	index[0] = index[1];
	index[1]++; 
	if(index[1] >= num_item){
		index[1] = 0;
	}
	
}
//上一个
function previous(index){
	slideTo(index);
	index[0] = index[1];
	index[1]--;
	if(index[1] < 0){
		index[1] = num_item - 1;
	}
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
