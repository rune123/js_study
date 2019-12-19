var snow = []; //雪の粒の情報いれる
var count = 50;

Snow = function(id){
    this.id = id;
    //最小値「5」と最大値から最小値を引いた「6」を使う
    var random = Math.floor( Math.random() * 7 ) + 3;
    this.size = random;

    var that = this;
    
    var opacity = Math.floor( Math.random() * 6 ) + 1;

    this.elem_snow = document.createElement('div');
    this.elem_snow.className = 'snow';
    this.elem_snow.style.animationDelay = 8 * Math.random() + "s";
    this.elem_snow.style.width = this.size + "px";
    this.elem_snow.style.height = this.size + "px";

    this.elem_snow.style.opacity = opacity /10;
    // HTML側のメインステージに追加
    document.getElementById('stage').appendChild(this.elem_snow);

    var random = Math.floor( Math.random() * 10 ) + 1;
    if (random <= 1){
        this.elem_snow.classList.add('move');
    } else if(random <= 5){
        this.elem_snow.classList.add('move2');
    } else if(random <= 8){
        this.elem_snow.classList.add('move3');
    } else if(random <= 10){
        this.elem_snow.classList.add('move4');
    }

};
Snow.prototype = {
    move:function(event){
        var random = Math.floor( Math.random() * 10 ) + 1;

        if (random >= 5){
            this.elem_snow.classList.remove('move2');
            this.elem_snow.classList.toggle('move');
        } else {
            this.elem_snow.classList.remove('move');
            this.elem_snow.classList.toggle('move2');
        }

    }
};


for(var i = 0; i < count; i ++){
    snow.push(new Snow(i));
}

//時間で画面をかえる
var count = 0
var snow_efeect = function(){
    count ++;
    console.log({count});
    if (count >=2){
        
    }
  }
  setInterval(snow_efeect, 30000);
