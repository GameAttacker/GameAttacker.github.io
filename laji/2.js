const G_BSPHP_URL='http://km.kkb.ink:88/AppEn.php?appid=16881688&m=1a9f870c89171e0fd4afde72c6c540be';
const G_BSPHP_KEY='c7598ed07f168c1cb96d8919bfa4dd25';
const Base64={'encode':_0x44206b=>{
	return window.btoa(unescape(encodeURIComponent(_0x44206b)));
},'decode':_0x1354b9=>{
	return decodeURIComponent(escape(window.atob(_0x1354b9)));
}};
function bin2hex(_0x19b0c8){
	var _0x4f09a1,_0x47b291,_0x28c165='',_0x4fc35b;
	_0x19b0c8+='';
	for(_0x4f09a1=0,_0x47b291=_0x19b0c8.length;_0x4f09a1<_0x47b291;_0x4f09a1++){
		_0x4fc35b=_0x19b0c8.charCodeAt(_0x4f09a1).toString(16);
		_0x28c165+=(_0x4fc35b.length<2)?'0'+_0x4fc35b:_0x4fc35b;
	}
	return _0x28c165;
}
function getUUID(){
	var _0x367eb6=document.createElement('canvas');
	var _0x4f94ce=_0x367eb6.getContext('2d');
	var _0x392a0e='shadowUUID';
	_0x4f94ce.textBaseline='bottom';
	_0x4f94ce.font='16px \'Arial\'';
	_0x4f94ce.textBaseline='shadow';
	_0x4f94ce.fillStyle='#FFF';
	_0x4f94ce.fillRect(125,1,62,20);
	_0x4f94ce.fillStyle='#FFF';
	_0x4f94ce.fillText(_0x392a0e,2,15);
	_0x4f94ce.fillStyle='rgba(255, 1, 0, 0.7)';
	_0x4f94ce.fillText(_0x392a0e,4,17);
	var _0x29aa77=_0x367eb6.toDataURL().replace('data:image/png;base64,','');
	var _0x4e842f=atob(_0x29aa77);
	var _0x8845ce=bin2hex(_0x4e842f.slice(-20,-12));
	return _0x8845ce;
}
function GetGlobalParameter(){
	var _0x3f6649={'BSphpSeSsL':getUUID(),'date':Date.parse(new Date())/1000,'md5':'','mutualkey':G_BSPHP_KEY};
	return _0x3f6649;
}
function obj2Url(_0x50c8e0,_0x456e24,_0x5e57cf){
	if(_0x50c8e0==null)return'';
	var _0x262b88='';
	var _0x117213=typeof _0x50c8e0;
	if((_0x117213=='string')||(_0x117213=='number')||(_0x117213=='boolean')){
		_0x262b88+=('&'+_0x456e24+'='+_0x5e57cf==null||_0x5e57cf?encodeURIComponent(_0x50c8e0):_0x50c8e0);
	}else{
		for(var _0x1c0d47 in _0x50c8e0){
			var _0x4dd2b2=_0x456e24==null?_0x1c0d47:(_0x456e24+_0x50c8e0 instanceof Array?('['+_0x1c0d47+']'):('.'+_0x1c0d47));
			_0x262b88+=obj2Url(_0x50c8e0[_0x1c0d47],_0x4dd2b2,_0x5e57cf);
		}
	}
	return _0x262b88;
}
function bsphpPost(_0x592bc1){
	_0x592bc1=obj2Url(_0x592bc1);
	_0x592bc1=('parameter='+Base64.encode(_0x592bc1));
	var _0x35ab0b=$.ajax({'url':G_BSPHP_URL,'type':'POST','data':_0x592bc1,'async':false});
	if(_0x35ab0b.status===200){
		return Base64.decode(_0x35ab0b.responseText);
	}
	return _0x35ab0b.statusText;
}
const UUID=getUUID();
const ayBSPHP={'v':()=>{
	var _0x3ac04f=GetGlobalParameter();
	_0x3ac04f.api='v.in';
	return bsphpPost(_0x3ac04f);
},'gg':()=>{
	var _0x51b85f=GetGlobalParameter();
	_0x51b85f.api='gg.in';
	return bsphpPost(_0x51b85f);
},'login':_0x1a8417=>{
	var _0x2cab7c=GetGlobalParameter();
	_0x2cab7c.api='login.ic';
	_0x2cab7c.icid=_0x1a8417;
	_0x2cab7c.key=UUID;
	_0x2cab7c.maxoror=UUID;
	return bsphpPost(_0x2cab7c);
},'getlkinfo':()=>{
	var _0x2b61d2=GetGlobalParameter();
	_0x2b61d2.api='getlkinfo.ic';
	return bsphpPost(_0x2b61d2);
},'getinfo':_0xfaad13=>{
	var _0x13e096=GetGlobalParameter();
	_0x13e096.api='getinfo.ic';
	_0x13e096.info=_0xfaad13;
	return bsphpPost(_0x13e096);
}};
