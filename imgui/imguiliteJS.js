	<script>
		var app = new Vue({
			el: "#app",
			data() {
				return {
					ifshow: true,
					checked: false,
					radio: '1',
					activeSelect: '',
					selectOption: [{
						value: '1',
						label: 'One'
					}, {
						value: '2',
						label: 'Two'
					}],
					input: "",
					showOption: false,
					tabValue: "one",
				}
			},
			mounted() {
				this.setRect(360, 320);

				var sWidth = window.screen.width; 
				var sHeight = window.screen.height; 

				if (window.screen.availWidth > window.screen.availHeight) {
					sWidth = window.screen.height; 
					sHeight = window.screen.width; 
				}
				setWindowRect(0, 0, sWidth, sHeight);

				setButtonAction(function () {
					var menu = document.querySelector("#app");
					if (menu.style.display == 'none') {
						menu.style.display = 'block';
						setWindowTouch(true);
					} else {
						menu.style.display = 'none';
						setWindowTouch(false);
					}
				});
			},
			methods: {
				setRect(w, h, x = -1, y = -1) {
					var boxW = w;
					var boxH = h;

					var ayMenu = this.$refs.menuMain;
					ayMenu.style.width = `${boxW}px`;
					ayMenu.style.height = `${boxH}px`;
					if (x == -1) ayMenu.style.left = `calc(50% - ${boxW / 2}px)`;
					if (y == -1) ayMenu.style.top = `calc(50% - ${boxH / 2}px)`;
				},
				titleTouchStart(event) {
					this.touchStartX = parseInt(event.touches[0].clientX);
					this.touchStartY = parseInt(event.touches[0].clientY);

					var ayMenu = this.$refs.menuMain;
					this.menuLastX = ayMenu.offsetLeft;
					this.menuLastY = ayMenu.offsetTop;
				},
				titleTouchMove(event) {
					event.preventDefault();
					var distanceX = event.touches[0].clientX - this.touchStartX;
					var distanceY = event.touches[0].clientY - this.touchStartY;

					var ayMenu = this.$refs.menuMain;
					ayMenu.style.left = this.menuLastX + distanceX + "px";
					ayMenu.style.top = this.menuLastY + distanceY + "px";
				},
				changeTab(v) {
					this.tabValue = v;
				},
				closeimgui() {
					var menu = document.querySelector("#app");
					menu.style.display = 'none';
				}
			}
		});
	</script>
