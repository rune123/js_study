var hp = 100; //HP表示
window.onload = function(){ //読み込んでから動作開始
    var hp_down = function(){
        if(hp >= 1){
        hp --; //--で数字減らす
        setTimeout(hp_down,500); //0.5秒ごとに処理
        text.innerHTML = hp + "/100";
        } else{
            text.innerHTML = "死にました";
        }
    } 
    hp_down();

    document.getElementById("reset").addEventListener("click", function(){
        //+20回復の処理
        if(hp >= 80){ //上限を超えない処理
        hp = 100;
        } else if(hp <= 0){ //0のときには使えない
            text.innerHTML = "回復はできません。";
        } else {
            hp += 20;　　//それ以外の処理
        }
        //テキスト表示
    console.log(hp+"です");
    text.innerHTML=hp+"/100";
    });
};
