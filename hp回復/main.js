var count = 3; //キャラの数

Counter = function(vit) {
    var that = this;
    this.hp = 10* vit; //hpはvitの１０倍
    

    console.log(this.hp);

};

Counter.prototype = {
    // インスタンス生成時の初期化
    constructor: function (vit) {
        // thisをthatに退避させておく
        var that = this;
        this.hp = 10* vit; //hpはvitの１０倍
        

        console.log(this.hp);

        // 表示要素の生成
        this.element = document.createElement('div');       // インスタンスのコンテナdiv生成
        this.element.className = 'counter';



        this.hpDisplay = document.createElement('div');  // 表示部div生成
        this.hpDisplay.className = 'hp';

        this.resetBtn = document.createElement('div');      //　リセットボタン生成
        this.resetBtn.className = 'reset';

        // コンテナにボタン、表示部、リセットボタンを追加
        // <div class="counter">
        //   <div class="button"></div>
        //   <div class="count"></div>
        //   <div class="reset"></div>
        // </div>
        this.element.appendChild(this.hpDisplay);
        this.element.appendChild(this.resetBtn);

        // HTML側のコンテナにインスタンスを追加
        document.getElementById('counterContainer').appendChild(this.element);

        // ボタン、リセットボタンのイベントリスナー設定
        // addEventListenerの１番目の引数はイベントタイプ
        // addEventListenerの２番目の引数に、function(event){that.ファンクション名(event)}　を指定すると
        // ファンクション内でthis.countを参照することが可能になる
        // .addEventListener('click', clicked)　のように書くとthis.countは参照できないので
        // 他の面倒な実装が必要になってくる
        this.resetBtn.addEventListener('click', function(event){that.counterReset(event)});

        // 初期化の最後に表示部のリセット（0を表示させる）
        // this.counterReset();
        this.hpDisplay.innerText = this.hp;       //　カウント数表示を更新





    },

    hpdown: function () {
        if(this.hp >=1){
            this.hp --; //--で数字減らす
            this.hpDisplay.innerHTML = this.hp;
        }else if (this.hp == 0){

            this.hpDisplay.innerHTML = "死にました";
        
        }
    },

    // リセットされたら（this.resetBtnのaddEventListenerから発火）
    counterReset: function () {
        this.hp = this.hp +20;                                 // カウントをリセットする
        this.hpDisplay.innerText = this.hp;       //　カウント数表示を更新
    }
};

// 必要な個数カウンターを生成する
for (var i = 0; i < count; i++) {
    var random = Math.floor( Math.random() * 11 );
    var instance = new Counter(random);

}

Counter.hpdown();

// window.setInterval(hp_down, 1000);
// function hp_down(){
//     for(var i = 0; i < this.count; i++){
//         console.log(instance);
//         instance[i].hpdown();

//     }
// }














// var characters = []; //キャラクターを入れる配列
// var count = 3; //キャラの数
// var namelist = ['rune', 'mario', 'peach','momo','cat','dog','toro'];

// Character = function(id,vit){ //キャラの基本データ作成
//     var that =this;
//     if(vit == 0){ //HPが0にならないようにする
//        vit ++;
//     };
//     console.log('vit'+vit);
    
//     this.hp = 10* vit; //hpはvitの１０倍
//     // text.innerHTML = this.hp + "/100";
//     this.maxhp =10* vit; //maxhp
//     this.element = document.getElementById('hp' + (id+1));
//     console.log(this.element);
//     this.btn = document.getElementById('reset');


//     // this.btn.addEventListener('click', function(event){that.counterReset(event)});



// }

// Character.prototype = {
//     counterReset: function () {
//         this.hp =  +10;                                 // カウントをリセットする
//         this.element.innerText = this.hp;       //　カウント数表示を更新
//     },
//     hpdown: function () {
//         if(this.hp >=1){
//             this.hp --; //--で数字減らす

//             this.element.innerHTML = this.hp;
//         }else if (this.hp == 0){

//             this.element.innerHTML = "死にました";
        
//         }
//     },
//     heel: function () {
//         console.log('おされたよ！'+this.hp);
        
//                 if(this.hp == 0){ //0のときには使えない
//                     this.hptext.innerHTML = "回復はできません。";
//                 } else if(this.hp >= 80){ //上限を超えない処理
//                     this.hp = 100;
            
//                 // } else  {
//                 //     this.hp += 20;　　//+20回復の処理
//                 //     if(this.hp >= 20 ) {
//                 //         chara_img.classList.replace('near_death' , 'fine')　//瀕死
//                 //     }
//                 }
        



//     },
//     main_html : function() {

//         // <div id="character_wrapper">
//     //     <div id="name"></div>
//     //     <div id="chara_img" class="fine"></div>
//     //     <div id="hp"><span id="text_hp"></span><span id="max_hp"></span></div>
//     //     <div id="buttun"></div>
//     // </div>
//         // 要素を作成
//         var chara_main = document.createElement('div');
//         chara_main.id = 'character_wrapper';
//         chara_main.className = this.characterId;
//         // 親要素を取得
//         var parent = document.getElementById('main_stage');
//         // 要素を追加
//         parent.appendChild(chara_main);

//         var chara_name = document.createElement('div');
//         chara_name.id = 'name' + this.id;
//         parent.appendChild(chara_name);
//         var element = document.getElementById("name" + this.id);
//         element.innerHTML = that.characterId;

//         console.log('id' + that.characterId);
//         console.log('self' + this.id);

//         var chara_img = document.createElement('div');
//         chara_img.id = 'chara_img';
//         chara_img.className = 'fine';
//         parent.appendChild(chara_img);

//         var chara_hp = document.createElement('div');
//         chara_hp.id = 'hp';
//         chara_img.className = 'fine';
//         parent.appendChild(chara_hp);

//         var chara_hp = document.createElement('span');
//         chara_hp.id = 'text_hp';

//         var parent_hp = document.getElementById('hp'); //hpの中につくりたいので
//         parent_hp.appendChild(chara_hp);

//         var chara_maxhp = document.createElement('span');
//         chara_maxhp.id = 'max_hp';
//         parent_hp.appendChild(chara_maxhp);

//         var chara_buttun = document.createElement('div');
//         chara_buttun.id = 'buttun';
//         parent.appendChild(buttun);

//         this.buttun.addEventListener('click',function(event){this.heel(event)});

//     }



// }

// for(var i = 0; i < count; i++){
//     var random = Math.floor( Math.random() * 11 );
//     characters.push(new Character(i, random));
//     console.log(random);
    
// }

// function txt(){
//     for(var i = 0; i < count; i++){
//         characters[i].txtupdate();
//     }
// }
// window.setInterval(hp_down, 800);
// function hp_down(){
//     for(var i = 0; i < count; i++){
//         characters[i].hpdown();
//     }
// }
// txt();

// // window.setInterval(hpdown, 1000);　//hp減らす処理
// // function hpdown(){
// //     for(var i = 0; i < count; i++){
// //         characters[i].hpdown();
// //     }
// // }