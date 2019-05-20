Counter = function() {
    // カウント数
    this.count = 0;
};

Counter.prototype = {
    // インスタンス生成時の初期化
    constructor: function () {
        // thisをthatに退避させておく
        var that = this;

        // 表示要素の生成
        this.element = document.createElement('div');       // インスタンスのコンテナdiv生成
        this.element.className = 'counter';

        this.button = document.createElement('div');        //　ボタンdiv生成
        this.button.className = 'button';

        this.countDisplay = document.createElement('div');  // 表示部div生成
        this.countDisplay.className = 'count';

        this.resetBtn = document.createElement('div');      //　リセットボタン生成
        this.resetBtn.className = 'reset';

        // コンテナにボタン、表示部、リセットボタンを追加
        // <div class="counter">
        //   <div class="button"></div>
        //   <div class="count"></div>
        //   <div class="reset"></div>
        // </div>
        this.element.appendChild(this.button);
        this.element.appendChild(this.countDisplay);
        this.element.appendChild(this.resetBtn);

        // HTML側のコンテナにインスタンスを追加
        document.getElementById('counterContainer').appendChild(this.element);

        // ボタン、リセットボタンのイベントリスナー設定
        // addEventListenerの１番目の引数はイベントタイプ
        // addEventListenerの２番目の引数に、function(event){that.ファンクション名(event)}　を指定すると
        // ファンクション内でthis.countを参照することが可能になる
        // .addEventListener('click', clicked)　のように書くとthis.countは参照できないので
        // 他の面倒な実装が必要になってくる
        this.button.addEventListener('click', function(event){that.clicked(event)});
        this.resetBtn.addEventListener('click', function(event){that.counterReset(event)});

        // 初期化の最後に表示部のリセット（0を表示させる）
        this.counterReset();
    },

    // クリックされたら（this.buttonのaddEventListenerから発火）
    clicked: function () {
        this.count++;                                   // カウント数をインクリメント
        this.countDisplay.innerText = this.count;       // カウント数表示を更新
    },

    // リセットされたら（this.resetBtnのaddEventListenerから発火）
    counterReset: function () {
        this.count = 0;                                 // カウントをリセットする
        this.countDisplay.innerText = this.count;       //　カウント数表示を更新
    }
};

// 必要な個数カウンターを生成する
for (var i = 0; i < 5; i++) {
    var instance = new Counter();
    instance.constructor();
}