!(function(){
    var oBtn = document.querySelector('#btn');

    oBtn.onclick = function() {
        var oBox = document.createElement('div');
        oBox.style.width = '300px';
        oBox.style.height = '300px';
        oBox.className = 'box';
        oBox.style.border = '1px solid blue';
        document.body.appendChild(oBox);
    };

    document.onclick = function(ev){
        var ev = ev || window.event;
        if(ev.target.className == 'box'){
            alert('这是新增加的盒子');
        }
    };   
    
})();