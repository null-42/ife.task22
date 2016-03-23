
/**
* 先序遍历
*/
function preOrder(node){
	queue.push(node);
	node.firstElementChild?preOrder(node.firstElementChild):0;
	node.lastElementChild?preOrder(node.lastElementChild):0;
}
/**
* 中序遍历
*/
function inOrder(node){
	node.firstElementChild?inOrder(node.firstElementChild):0;
	queue.push(node);
	node.lastElementChild?inOrder(node.lastElementChild):0;
}
/**
* 后序遍历
*/
function postOrder(node){
	node.firstElementChild?postOrder(node.firstElementChild):0;
	node.lastElementChild?postOrder(node.lastElementChild):0;
	queue.push(node);
}
/**
* 动画
*/
function animate(){
	// 初始化状态
	clearInterval(timer);
	var i, branch = document.getElementsByClassName('branch');
	for(i = 0; i < branch.length; i++){
		branch[i].style.background = '#fff';
	}
	// 执行动画
	i = 0;
	queue[0].style.background = 'blue';
	timer = setInterval(function(){
		i++;
		if(i >= queue.length){
			queue[i-1].style.background = '#fff';
			clearInterval(timer);
		}else{
			queue[i].style.background = 'blue';
			queue[i-1].style.background = '#fff';
		}
	}, 1000);
}

var queue=[];    // 存储队列
var timer=null;  // 计时器
window.onload=function(){
	var root=document.getElementsByClassName('tree-0')[0];
	document.getElementById('c1').onclick=function(){
		queue=[];
		preOrder(root);
		animate();
	}
	document.getElementById('c2').onclick=function(){
		queue=[];
		inOrder(root);
		animate();
	}
	document.getElementById('c3').onclick=function(){
		queue=[];
		postOrder(root);
		animate();
	}
}