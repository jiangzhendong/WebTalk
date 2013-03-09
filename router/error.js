/**
 +------------------------------------------------------------------------------
 * Author zhpengle
 +------------------------------------------------------------------------------
 * error.js
 * 2012-10-31
 +------------------------------------------------------------------------------
 */
 

/**
 +------------------------------------------------------------------------------
 * 当访问未经处理的请求时提示此错误信息
 +------------------------------------------------------------------------------
 */
exports.notfound = function(req, res){
	res.render('error', { 
		title:'Error! Not Found',
		js_path:'',
		css_path:''
	});
}