define('./app.js',[],function (require,exports,module) {
    function limit(l,t,obj){

        if(l <0){
            l = 0;
        }
        else if(l > document.documentElement.clientWidth - obj.offsetWidth){
            l = document.documentElement.clientWidth - obj.offsetWidth;
        }

        if(t < 0){
            t = 0;
        }
        else if(t > document.documentElement.clientHeight - obj.offsetHeight){
            t = document.documentElement.clientHeight - obj.offsetHeight;
        }


        obj.style.left = l +'px';
        obj.style.top = t +'px';
    }

    exports.limit = limit;
});