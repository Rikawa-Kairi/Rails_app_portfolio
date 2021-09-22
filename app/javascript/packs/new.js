window.onload = function() { //onloadでページを読み込んだときに処理が走る

  // getElementById()でidを取得
  town_id = document.getElementById("js_town_id");

  // ジャンルの選択肢が変更された際の動作
  // 駅カテゴリー 選別 取得
  city_category = document.getElementById("js_city_category");

  // カテゴリが変更されたときchangeCategory関数に飛ばす
  city_category.onchange = changeCategory;
}
// ジャンルの選択肢が変更された際の動作

function changeCategory() {

  // 変更後のカテゴリを取得

  var changedCategory = city_category.value;

  if (changedCategory == "豊島区") {

    // カテゴリに豊島区が選択された場合

    setTosimaku();

  } else if (changedCategory == "新宿区") {

    // カテゴリに新宿区が選択された場合

    setSinjyukuku();
  
  }
  else {

    // カテゴリにTestが選択された場合

    setTest();

  }

}

// if文で振り分けられる

function setTosimaku() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢

  var Tosima_station = [

    {cd:"", label:"選択して下さい"},

    {cd:"池袋", label:"池袋"},

    {cd:"池袋本町", label:"池袋本町"},

    {cd:"要町", label:"要町"}

  ];
// ここから下の解読と、関数がどこまで鑑賞するのか確認(スコープ問題)・・・・・・・・・・・・・・・・・・・・・・・・・
  // 配列を繰り返し処理で回す。(value)には’jFoods’で選択された物が１つずつ入る
  Tosima_station.forEach(function(value) {

    // createElementで動的にHTML要素を生成 からのdiv要素?
    var op = document.createElement("option");
    // jFoodsのCD:とlabel:のオブジェクトを代入
    op.value = value.cd;
    op.text = value.label;
    // appendChildは特定の親要素の中に要素を追加するメソッド
    town_id.appendChild(op);

  });

}

// アジア料理の選択肢を設定する

function setSinjyukuku() {

  // 好きな食べ物の選択肢を空にする

  town_id.textContent = null;

  // アジア料理の選択肢

  var Sinjyuku_station = [

    {cd:"", label:"選択して下さい"},

    {cd:"3", label:"愛住町"},

    {cd:"4", label:"赤城下町"},

    {cd:"5", label:"赤城元町"}

  ];

  Sinjyuku_station.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;

    op.text = value.label;

    town_id.appendChild(op);

  });

}

// ヨーロッパ料理の選択肢を設定する

function setTest() {

  // 好きな食べ物の選択肢を空にする

  town_id.textContent = null;

  // ヨーロッパ料理の選択肢

  var Test_station = [

    {cd:"", label:"選択して下さい"},

    {cd:"6", label:"test"},

    {cd:"7", label:"Test"},

    {cd:"8", label:"test"}

  ];

  Test_station.forEach(function(value) {

    var op = document.createElement("option");

    op.value = value.cd;

    op.text = value.label;

    town_id.appendChild(op);

  });

}
