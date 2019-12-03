var characters = []; //キャラクターを入れる配列
var count = 3; //キャラの数

Character = function(id){ //キャラの基本データ作成
    this.id = id;
    this.hp = id *10;

    var that = this;

    var div_element = document.createElement("div");
    div_element.classList.add('hp');
    div_element.innerHTML = '■<span id="text'+ this.id + '">' + this.hp + '</span>/';
    var parent_object = document.getElementById("main_stage");
    main_stage.appendChild(div_element);

    this.chara_buttun = document.createElement('div');
    this.chara_buttun.id = 'buttun'+ this.id;
    this.chara_buttun.classList.add('buttun');
    var parent = document.getElementById('main_stage');
    parent.appendChild(this.chara_buttun);

    //this.addEvent();

    this.chara_buttun.addEventListener("click",function(event){
        // var that = this;

         console.log(that);
         console.log(this);
         console.log(that.id);
     });


}
Character.prototype = {
    heel: function () {
        console.log(that);
        console.log(that.hp);

    },

    addEvent: function(){
        //chara_buttun.addEventListener("click",that.heel);
        this.chara_buttun.addEventListener("click",function(event){
           // var that = this;

            console.log(that);
            console.log(this);
            console.log(that.id);
        });
    }
}

for(var i = 0; i < count; i++){
    var random = Math.floor( Math.random() * 11 );
    characters.push(new Character(i, random));
    console.log(random);
    
}
