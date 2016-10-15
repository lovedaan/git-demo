define('./index.js',['./app.js'],function (require,exports,module) {
    var limit = require("./app.js");
    function Drag () {
        var oBox = document.getElementById('box');
        var disX = 0, disY = 0;
        oBox.onmousedown = function (ev) {
            var ev = ev || window.event;

            disX = ev.clientX - oBox.offsetLeft;
            disY = ev.clientY - oBox.offsetTop;

            document.onmousemove = function (ev) {
                var ev = ev || window.event;

                var l = ev.clientX - disX;
                var t = ev.clientY - disY;

                limit(l,t,oBox);
            }

            document.onmouseup = function () {
                document.onmousemove = document.onmouseup = null;
            }

            return false;

        }
    }

    exports.Drag = Drag;


});