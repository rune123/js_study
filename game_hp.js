var hp = 100; //HP表示

const chara_img = document.createElement('div'); //画像のDivをつくる

chara_img.classList.add('fine'); //画像入れるとこ


window.onload = function(){ //読み込んでから動作開始
    var hp_down = function(){
        if(hp >= 1){
            hp --; //--で数字減らす
            setTimeout(hp_down,500); //0.5秒ごとに処理
            text.innerHTML = hp + "/100";
        } else{
            text.innerHTML = "死にました";
            chara_img.classList.add('death')　//死亡CSSを当てる
        }
    } 

    hp_down(); //HPを継続的に減らす

    document.getElementById("reset").addEventListener("click", function(){
        
        if(hp == 0){ //0のときには使えない
            text.innerHTML = "回復はできません。";
        } else if(hp >= 80){ //上限を超えない処理
            hp = 100;
            text.innerHTML=hp+"/100";
        } else  {
            hp += 20;　　//+20回復の処理
            text.innerHTML=hp+"/100";
        }
        //テキスト表示
    console.log(hp+"です");
    
    });
};

document.body.appendChild(chara_img); //htmlを追記
