var characters = []; //キャラクターを入れる配列
var count = 10; //キャラの数
var namelist = ['rune', 'mario', 'peach','momo','cat','dog','toro'];

Character = function(id,vit){ //キャラの基本データ作成
    if(vit == 0){ //HPが0にならないようにする
       vit ++;
    }

    this.hp = 10* vit; //hpはvitの１０倍
    this.maxhp =10* vit; //maxhp
    this.chara_id = id + 1; //キャラ個別にIDを


    var r = Math.floor(Math.random() * namelist.length);   //名前を配列から。同じ名前を選ばないようにしたい
    this.name = namelist[r];

    var that = this;

    //HTML生成
    // <div class="character_space" id="キャラのid">
    //     <div class="name"></div>
    //     <div id="chara_img+キャラのID" class="fine"></div>
    //     <div id="hp"><span id="text_hp"></span><span id="max_hp"></span></div>
    //     <div id="buttun"></div>
    // </div>



    this.element_chara = document.createElement('div');
    this.element_chara.id = 'character_space'+this.chara_id;
    this.element_chara.className = 'character_space';

    this.element_chara_name = document.createElement('div');
    this.element_chara_name.className = 'name';
    this.element_chara_name.innerHTML = this.name;

    this.element_chara_img = document.createElement('div');
    this.element_chara_img.id = 'chara_img'+this.chara_id;
    this.element_chara_img.className = 'fine';

    this.element_chara_hp = document.createElement("div");
    this.element_chara_hp.classList.add('hp');
    this.element_chara_hp.innerHTML = '■<span id="text'+ this.chara_id + '">' + this.hp + '</span>/<span class="max_hp">' + this.maxhp + '</span>';

    this.chara_buttun = document.createElement('div');
    this.chara_buttun.id = 'buttun';

    this.element_chara.appendChild(this.element_chara_name);
    this.element_chara.appendChild(this.element_chara_img);
    this.element_chara.appendChild(this.element_chara_hp);
    this.element_chara.appendChild(this.chara_buttun);

    // HTML側のメインステージに追加
    document.getElementById('main_stage').appendChild(this.element_chara);

    // this.chara_buttun.addEventListener("click",function(event){
    //     // var that = this;

    //     if(that.hp == 0){ //0のときには使えない
    //         that.hptext.innerHTML = "回復はできません。";
    //         } else   {
    //             if(that.hp >= that.maxhp - 20){ //上限を超えない処理
    //                 that.hp = that.maxhp;
    //             } else {
    //             that.hp += 20;　　//+20回復の処理

    //         // if(this.hp >= 20 ) {
    //         //     chara_img.classList.replace('near_death' , 'fine')　//瀕死
    //         // }
    //             }
    //      }


    //  });
    this.chara_buttun.addEventListener("click",function(event){that.heel(event)});
}

Character.prototype = {

    hpdown: function (event) {
        var that = this;

        // console.log(that.hp);
        if(that.hp >=1){
            that.hp --; //--で数字減らす
            that.hptext = document.getElementById("text" + this.chara_id);
            that.hptext.innerHTML = that.hp;
        }else if (that.hp == 0){
            this.hptext.innerHTML = "死にました";
        
        }
    },
    heel: function (event) {
        var that= this;

        console.log('this'+this);
        console.log('thisHP'+this.hp);
        console.log('that'+that);
        console.log('thatHP'+that.hp);
        if(this.hp == 0){ //0のときには使えない
            this.hptext.innerHTML = "回復はできません。";
            } else   {
                if(this.hp >= this.maxhp - 20){ //上限を超えない処理
                    this.hp = this.maxhp;
                } else {
                this.hp += 10;　　//+20回復の処理

            // if(this.hp >= 20 ) {
            //     chara_img.classList.replace('near_death' , 'fine')　//瀕死
            // }
                }
         }
        



    }




}

for(var i = 0; i < count; i++){
    var random = Math.floor( Math.random() * 11 )+2;
    characters.push(new Character(i, random));
    console.log(random);
    
}


window.setInterval(hp_down, 800);
function hp_down(){
    for(var i = 0; i < count; i++){
        characters[i].hpdown();
    }
}

var parent = document.getElementById('main_stage');
all_buttun = document.createElement('div');
all_buttun.id = 'all_buttun';
parent.appendChild(all_buttun);


all_buttun.addEventListener("click",function(event){Character.prototype.heel(event)});