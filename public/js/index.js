var socket=io.connect(),//与服务器进行连接
	button=document.getElementById('sendBtn');
	console.log(button);
	button.onclick=function(){
		console.log("hello");
		socket.emit('foo', 'hello');//发送一个名为foo的事件，并且传递一个字符串数据‘hello’
	};