var app = new Vue({
    el: "#app",
    data() {
        return {
            colorGamer: '#409EFF',
            colorAi: '#02F702',
            value1: false,
            value2: false,
            value3: 1,
            value5: false,
            value9: 50,
            ifshow: true,
            checked: false,
            radio: '1',
            fangshi: '1',
            weizhi: [{
                value: '1',//实际内容
                label: '开火开镜'//显示文案
            }, {
                value: '2',
                label: '开火自瞄'
            }],
            activeSelect: '1',
            selectOption: [{
                value: '1',//实际内容
                label: '随机颜色'//显示文案
            }, {
                value: '2',
                label: '自定义颜色'
            }],
            value: 1,
            input: "",
            showOption: false,
            zhiMiao: false,
            tabValue: "one",
            checkedDarw: {
                isBox: false,
                isLine: false,
                isBone: false,
                isHp: false,
                isName: false,
                isDis: false,
                isZm: false,
            }

        }
    },

    mounted() {

        this.setRect(360, 320);

        //竖屏
        var sWidth = window.screen.width; //屏幕宽
        var sHeight = window.screen.height; //屏幕高

        //全屏显示
        if (window.screen.availWidth > window.screen.availHeight) {
            //横屏，宽高置换
            sWidth = window.screen.height; //屏幕宽
            sHeight = window.screen.width; //屏幕高
        }
        setWindowRect(0, 0, sWidth, sHeight);

        setButtonAction(function () {
            var menu = document.querySelector("#app");
            if (menu.style.display == 'none') {
                menu.style.display = 'block';
                //显示菜单之后, 设置触控不可穿透悬浮窗口
                setWindowTouch(true);
            } else {
                menu.style.display = 'none';
                //隐藏菜单之后, 设置触控穿透悬浮窗口
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
        //切换导航栏
        changeTab(v) {
            this.tabValue = v;
        },
        closeimgui() {
            var menu = document.querySelector("#app");
            menu.style.display = 'none';
            setWindowTouch(false);
        }
    }
});