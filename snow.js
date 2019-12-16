var snow = []; //雪の粒の情報いれる
var count = 20;

Snow = function(id){
    this.id = id;
    //最小値「5」と最大値から最小値を引いた「6」を使う
    var random = Math.floor( Math.random() * 10 ) + 5;
    this.size = random;

    var that = this;
    console.log({random});

    this.elem_snow = document.createElement('div');
    this.elem_snow.className = 'snow';
    this.elem_snow.style.animationDelay = 8 * Math.random() + "s";
    this.elem_snow.style.width = this.size + "px";
    this.elem_snow.style.height = this.size + "px";
    // HTML側のメインステージに追加
    document.getElementById('stage').appendChild(this.elem_snow);
};
Snow.prototype = {
    move:function(event){
        this.elem_snow.classList.add('move');

    }
};


for(var i = 0; i < count; i ++){
    snow.push(new Snow(i));
}

window.setInterval(move, 800);
function move(){
    for(var i = 0; i < count; i++){
        snow[i].move();
    }
}
