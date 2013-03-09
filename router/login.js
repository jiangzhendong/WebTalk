/**
 +------------------------------------------------------------------------------
 * Author zhpengle
 +------------------------------------------------------------------------------
 * login.js
 * 2012-10-31
 +------------------------------------------------------------------------------
 */

/**
 +------------------------------------------------------------------------------
 * 输出登录页面，用户登录
 +------------------------------------------------------------------------------
 */
exports.index = function(req, res){
	res.render('login', { 
		title:'Login',
		js_path:'login.js',
		css_path:'login_style.css'
	});
}

/**
 +------------------------------------------------------------------------------
 * 处理登录请求，主要是POST请求
 +------------------------------------------------------------------------------
 */
exports.login = function(req, res){
	req.session.username = req.body.username;
	res.redirect('/');
}

/**
 +------------------------------------------------------------------------------
 * 处理登出请求，GET就行了
 +------------------------------------------------------------------------------
 */
exports.logout = function(req, res){
	res.redirect('/login');
}