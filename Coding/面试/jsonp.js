
var util = {};

 /**
  * [function 在页面中注入js脚本]
  * @param  {[type]} url     [description]
  * @param  {[type]} charset [description]
  * @return {[type]}         [description]
  */
 util.createScript = function (url, charset) {
	var script = document.createElement('script');
	script.setAttribute('type', 'text/javascript');
	charset && script.setAttribute('charset', charset);
	script.setAttribute('src', url);
	script.async = true;
	return script;
};

 /**
  * [function jsonp]
  * @param  {[type]} url      [description]
  * @param  {[type]} onsucess [description]
  * @param  {[type]} onerror  [description]
  * @param  {[type]} charset  [description]
  * @return {[type]}          [description]
  */
util.jsonp = function (url, onsuccess, onerror,charset) {
	var callbackName = util.getName('tt_player'); // 加载script标签的形式
	window[callbackName] = function () { // 以这个回调名称注册一个全局的函数
		if (onsuccess && util.isFunction(onsuccess)){
			onsuccess(arguments[0]);
		}
	};
	var script = util.createScript(url + '&callback' + callbackName,charset);
	script.onload = script.onreadystatechange = function () {
		if (!script.readyState || /loaded|complete/.test(script.readyState)) {
			script.onload = script.onreadystatechange = null;
			// 移除该script的 DOM 对象
			if (script.parentNode) {
				script.parentNode.removeChild(script);
			}
			// 删除函数或变量
			window[callbackName] = null;
		}
	};
	script.onerror = function () {
		if (onerror && util.isFunction(onerror)) {
			onerror();
		}
	};
	document.getElementsByTagName('head')[0].appendChild(script);
};


// AJAX
util.extend(opt,options);
if(opt.url){
	// 声明XMLHttpRequest 对象的工作流程
	var xhr = XMLHttpRequest ? new XMLHttpRequest () : new window.ActiveXObject('Microsoft.XMLHTTP');
	var data = opt.data,
		url = opt.url,
		type = opt.type.toUpperCase(),
		dataArr = [];
	for (var k in data) {
		dataArr.push(k + '=' + data[k]);
	}
	if (type === 'GET') {
		url = url +'?' + dataArry.join('&');
		xhr.open(type,url.replace(/\?$/g,''),true);
		xhr.send();
	}
	if (type === 'POST') {
		xhr.open(type,url,true);
		xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
		xhr.send(dataArry.join('&'));
	}
	// 监听它成功失败
	xhr.onload = function () {
		// 200：客户端请求成功 304：重定向，利用本地缓存
		if (xhr.status === 200 || xhr.status === 304 ) { // 媒体资源加206
			var res;
			if (opt.success && opt.success instanceof Function) {
				res = xhr.responseText;
				if(typeof res === 'String') {
					res = JSON.parse(res);
					opt.success.call(xhr,res);
				}
			}
		} else {
			if (opt.error && opt.error instanceof Function) {
				opt.error.call(xhr,res); 
				}
			}
		}
	}
	
export default util;
