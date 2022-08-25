(function(){
	_0x5e0dd7(this,function(){
		var _0x58e4a6=new RegExp('function *\\( *\\)');
		var _0x469f1b=new RegExp('\\+\\+ *(?:(?:[a-z0-9A-Z_]){1,8}|(?:\\b|\\d)[a-z0-9_]{1,8}(?:\\b|\\d))','i');
		var _0x3f3fad=_0x585090('init');
		if(!_0x58e4a6.test(_0x3f3fad+'chain')||!_0x469f1b.test(_0x3f3fad+'input')){
			_0x3f3fad('0');
		}else{
			_0x585090();
		}
	})();
}());
var app=new Vue({
	'el':'#app','data'(){
		return{'ifshow':true,'isdebug':false,'showOption':false,'tabValue':'one','bscard':'','bsok':false,'bsgg':'暂无公告'};
	},'mounted'(){
		this.bsInit();
		this.setRect(360,320);
		setWindowRect(0,0,sWidth,sHeight);
	},'methods':{
		'bsInit'(){
			this.bsgg=ayBSPHP.gg();
		},'bsLogin'(){
			var _0x3ce6ae=ayBSPHP.login(this.bscard);
			if(_0x3ce6ae.indexOf('01|1081')!=-1){
				this.$message({'message':'登录成功','type':'success'});
				this.bsok=true;
			}else{
				this.$message({'message':_0x3ce6ae,'type':'error'});
				this.bsok=false;
			}
		},'setRect'(_0x1467c0,_0x200981,_0x407844=-1,_0x456310=-1){
			var _0x2818b5=_0x1467c0;
			var _0x35ef39=_0x200981;
			var _0x29d0b1=this.$refs.menuMain;
			_0x29d0b1.style.width=_0x2818b5+'px';
			_0x29d0b1.style.height=_0x35ef39+'px';
			if(_0x407844==-1)_0x29d0b1.style.left='calc(50% - '+(_0x2818b5/2)+'px)';
			if(_0x456310==-1)_0x29d0b1.style.top='calc(50% - '+_0x35ef39/2+'px)';
		},'titleTouchStart'(_0xe133ad){
			this.touchStartX=parseInt(_0xe133ad.touches[0].clientX);
			this.touchStartY=parseInt(_0xe133ad.touches[0].clientY);
			var _0x235434=this.$refs.menuMain;
			this.menuLastX=_0x235434.offsetLeft;
			this.menuLastY=_0x235434.offsetTop;
		},'titleTouchMove'(_0x4def77){
			_0x4def77.preventDefault();
			var _0x523cac=(_0x4def77.touches[0].clientX-this.touchStartX);
			var _0x1e2204=(_0x4def77.touches[0].clientY-this.touchStartY);
			var _0x1dea92=this.$refs.menuMain;
			_0x1dea92.style.left=(this.menuLastX+_0x523cac+'px');
			_0x1dea92.style.top=(this.menuLastY+_0x1e2204+'px');
		},'changeTab'(_0x1d8f15){
			this.tabValue=_0x1d8f15;
		},'closeimgui'(){
			var _0x308658=document.querySelector('#app');
			_0x308658.style.display='none';
			setWindowTouch(false);
		}
	}
});
