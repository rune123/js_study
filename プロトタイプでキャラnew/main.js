var characters = []; //キャラクターを入れる配列
var count = 3; //キャラの数
var namelist = ['rune', 'mario', 'peach','momo','cat','dog','toro'];

Character = function(id,vit){ //キャラの基本データ作成
    that =this;
    if(vit == 0){ //HPが0にならないようにする
       vit ++;
    }
    console.log('vit'+vit);
    
    this.hp = 10* vit; //hpはvitの１０倍
    // text.innerHTML = this.hp + "/100";
    this.maxhp =10* vit; //maxhp
    this.id = id + 1;


    var r = Math.floor(Math.random() * namelist.length); // 0~2の値
    this.name = namelist[r];

//同じ名前を選ばないようにしたい


}

Character.prototype = {
    txtupdate: function () {
        var chara_main = document.createElement('div');
        chara_main.id = 'character_space';
        chara_main.className = this.id;
        // 親要素を取得
        var parent = document.getElementById('main_stage');
        // 要素を追加
        main_stage.appendChild(chara_main);
        var div_element = document.createElement("div");
        div_element.classList.add('hp');
        div_element.innerHTML = '■'+this.name + '■<span id="text'+ this.id + '">' + this.hp + '</span>/' + this.maxhp;
        var parent_object = document.getElementById("main_stage");
        main_stage.appendChild(div_element);

        var chara_buttun = document.createElement('div');
        chara_buttun.id = 'buttun';
        parent.appendChild(chara_buttun);

        chara_buttun.getElementById("buttun").addEventListener("click",that.heel);


    },
    hpdown: function () {
        if(this.hp >=1){
            this.hp --; //--で数字減らす
            this.hptext = document.getElementById("text" + this.id);
            this.hptext.innerHTML = this.hp;
        }else if (this.hp == 0){
            this.hptext.innerHTML = "死にました";
        
        }
    },
    heel: function () {
        
                if(this.hp == 0){ //0のときには使えない
                    this.hptext.innerHTML = "回復はできません。";
                } else if(this.hp >= 80){ //上限を超えない処理
                    this.hp = 100;
            
                // } else  {
                //     this.hp += 20;　　//+20回復の処理
                //     if(this.hp >= 20 ) {
                //         chara_img.classList.replace('near_death' , 'fine')　//瀕死
                //     }
                }
        



    },
    main_html : function() {

        // <div id="character_wrapper">
    //     <div id="name"></div>
    //     <div id="chara_img" class="fine"></div>
    //     <div id="hp"><span id="text_hp"></span><span id="max_hp"></span></div>
    //     <div id="buttun"></div>
    // </div>
        // 要素を作成
        var chara_main = document.createElement('div');
        chara_main.id = 'character_wrapper';
        chara_main.className = this.characterId;
        // 親要素を取得
        var parent = document.getElementById('main_stage');
        // 要素を追加
        parent.appendChild(chara_main);

        var chara_name = document.createElement('div');
        chara_name.id = 'name' + this.id;
        parent.appendChild(chara_name);
        var element = document.getElementById("name" + this.id);
        element.innerHTML = that.characterId;

        console.log('id' + that.characterId);
        console.log('self' + this.id);

        var chara_img = document.createElement('div');
        chara_img.id = 'chara_img';
        chara_img.className = 'fine';
        parent.appendChild(chara_img);

        var chara_hp = document.createElement('div');
        chara_hp.id = 'hp';
        chara_img.className = 'fine';
        parent.appendChild(chara_hp);

        var chara_hp = document.createElement('span');
        chara_hp.id = 'text_hp';

        var parent_hp = document.getElementById('hp'); //hpの中につくりたいので
        parent_hp.appendChild(chara_hp);

        var chara_maxhp = document.createElement('span');
        chara_maxhp.id = 'max_hp';
        parent_hp.appendChild(chara_maxhp);

        var chara_buttun = document.createElement('div');
        chara_buttun.id = 'buttun';
        parent.appendChild(chara_buttun);

    }



}

for(var i = 0; i < count; i++){
    var random = Math.floor( Math.random() * 11 );
    characters.push(new Character(i, random));
    console.log(random);
    
}

function txt(){
    for(var i = 0; i < count; i++){
        characters[i].txtupdate();
    }
}
window.setInterval(hp_down, 800);
function hp_down(){
    for(var i = 0; i < count; i++){
        characters[i].hpdown();
    }
}
txt();

// window.setInterval(hpdown, 1000);　//hp減らす処理
// function hpdown(){
//     for(var i = 0; i < count; i++){
//         characters[i].hpdown();
//     }
// }