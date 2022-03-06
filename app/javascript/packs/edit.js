// 変更なし
window.addEventListener('load', function() {
  hidden_town_id = document.getElementById('hidden_town_id');
  // console.log(hidden_town_id.value);
  // ジャンルの選択肢が変更された際の動作
  // 駅カテゴリー 選別 取得
  city_category = document.getElementById("js_city_category");

  // console.log(city_category.value);

  // getElementById()でidを取得
  town_id = document.getElementById("js_town_id");
  
  // カテゴリが変更されたときchangeCategory関数に飛ばす
  if (city_category.value) {
    changeCategory();
  }
  city_category.onchange = changeCategory;
})

// ジャンルの選択肢が変更された際の動作
function city_mix(city) {
  for( var i=0; i<city.length; i++) {
    if( city[i].label == hidden_town_id.value) {
    city.unshift({cd:hidden_town_id.value, label:hidden_town_id.value});
    //配列.labelと保存済み駅名が同じ場合配列の最上位に駅名を追加

    var target_cd = "";
    city.some(function(v, i){
        if (v.cd==target_cd) city.splice(i,1); //iはindex番号、今回は""がifの条件なのでiは1番目の選択してくださいが入る。第二引数は削除する数。
        console.log("通過");
    });
    //ニュートラル表示の"選択してください"を削除
    const result = city.filter((element, index, self) =>
    self.findIndex(e =>
      e.cd === element.cd &&
      e.label === element.label
      ) === index
      );
      city = Array.from(result);
    break;
    }
  }
  city.forEach(function(station) {
    var op = document.createElement("option");
    op.value = station.cd;
    op.text = station.label;
    town_id.appendChild(op);

  });
}

function changeCategory() {
  
  // 変更後のカテゴリを取得

  var changedCategory = city_category.value;
  switch (changedCategory) {
    case '足立区':
      setAdati();
      break;
    case '荒川区':
      setArakawa();
      break;
    case '板橋区':
      setItabasi();
      break;
    case '江戸川区':
      setEdogawa();
      break;
    case '大田区':
      setOta();
      break;
    case '葛飾区':
      setKatusika();
      break;
    case '北区':
      setKita();
      break;
    case '江東区':
      setKoutou();
      break;
    case '品川区':
      setSinagawa();
      break;
    case '渋谷区':
      setSibuya();
      break;
    case '新宿区':
      setSinjyuku();
      break;
    case '杉並区':
      setSuginami();
      break;
    case '墨田区':
      setSumida();
      break;
    case '世田谷区':
      setSetagaya();
      break;
    case '台東区':
      setTaitou();
      break;
    case '中央区':
      setTyuuou();
      break;

    case '千代田区':
      setTiyoda();
      break;
    case '豊島区':
      setTosima();
      break;      
    case '中野区':
      setNakano();
      break;
    case '練馬区':
      setNerima();
      break;
    case '文京区':
      setBunkyou();
      break;
    case '港区':
      setMinato();
      break;
    case '目黒区':
      setMeguro();
      break;
    case '昭島市':
      setAkisima();
      break;
    case 'あきる野市':
      setAkiruno();
      break;
    case '稲城市':
      setInagi();
      break;
    case '青梅市':
      setOume();
      break;
    case '清瀬市':
      setKiyose();
      break;
    case '国立市':
      setKunitati();
      break;
    case '小金井市':
      setKoganei();
      break;
    case '国分寺市':
      setKokubunji();
      break;
    case '小平市':
      setKodaira();
      break;
    case '狛江市':
      setKomae();
      break;
    case '立川市':
      setTatikawa();
      break;
    case '多摩市':
      setTama();
      break;
    case '調布市':
      setTyoufu();
      break;
    case '西東京市':
      setNisitoukyou();
      break;
    case '八王子市':
      setHatiouji();
      break;
    case '羽村市':
      setHamura();
      break;
    case '東久留米市':
      setHigasikurume();
      break;
    case '東村山市':
      setHigasimurayama();
      break;
    case '東大和市':
      setHigasiyamato();
      break;
    case '日野市':
      setHino();
      break;
    case '府中市':
      setFutyuu();
      break;
    case '福生市':
      setFussa();
      break;
    case '町田市':
      setMatida();
      break;
    case '三鷹市':
      setMitaka();
      break;
    case '武蔵野市':
      setMusasino();
      break;
    case '武蔵村山市':
      setMusasimurayama();
      break;
  }

}

// if文で振り分けられる
function setAdati() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;
  
  // 駅の選択肢
// lable:表示される cd:保存される

  var Adati_station = [
      {cd:"", label:"選択してださい"},
      {cd:"青井（１〜３丁目）", label:"青井（１〜３丁目）"},
      {cd:"青井（４〜６丁目）", label:"青井（４〜６丁目）"},
      {cd:"足立", label:"足立"},
      {cd:"綾瀬", label:"綾瀬"},
      {cd:"伊興", label:"伊興"},
      {cd:"伊興本町", label:"伊興本町"},
      {cd:"入谷", label:"入谷"},
      {cd:"入谷町", label:"入谷町"},
      {cd:"梅島", label:"梅島"},
      {cd:"梅田", label:"梅田"},
      {cd:"扇", label:"扇"},
      {cd:"大谷田", label:"大谷田"},
      {cd:"興野", label:"興野"},
      {cd:"小台", label:"小台"},
      {cd:"加賀", label:"加賀"},
      {cd:"加平", label:"加平"},
      {cd:"北加平町", label:"北加平町"},
      {cd:"栗原", label:"栗原"},
      {cd:"弘道", label:"弘道"},
      {cd:"江北", label:"江北"},
      {cd:"古千谷", label:"古千谷"},
      {cd:"古千谷本町", label:"古千谷本町"},
      {cd:"佐野", label:"佐野"},
      {cd:"皿沼", label:"皿沼"},
      {cd:"鹿浜", label:"鹿浜"},
      {cd:"島根", label:"島根"},
      {cd:"新田", label:"新田"},
      {cd:"神明", label:"神明"},
      {cd:"神明南", label:"神明南"},
      {cd:"関原", label:"関原"},
      {cd:"千住", label:"千住"},
      {cd:"千住曙町", label:"千住曙町"},
      {cd:"千住旭町", label:"千住旭町"},
      {cd:"千住東", label:"千住東"},
      {cd:"千住大川町", label:"千住大川町"},
      {cd:"千住河原町", label:"千住河原町"},
      {cd:"千住寿町", label:"千住寿町"},
      {cd:"千住桜木", label:"千住桜木"},
      {cd:"千住関屋町", label:"千住関屋町"},
      {cd:"千住龍田", label:"千住龍田"},
      {cd:"千住中居", label:"千住中居"},
      {cd:"千住仲", label:"千住仲"},
      {cd:"千住橋戸町", label:"千住橋戸町"},
      {cd:"千住緑町", label:"千住緑町"},
      {cd:"千住宮元町", label:"千住宮元町"},
      {cd:"千住元", label:"千住元"},
      {cd:"千住柳町", label:"千住柳町"},
      {cd:"竹の塚", label:"竹の塚"},
      {cd:"辰沼", label:"辰沼"},
      {cd:"中央本町（１、２丁目）", label:"中央本町（１、２丁目）"},
      {cd:"中央本町（３〜５丁目）", label:"中央本町（３〜５丁目）"},
      {cd:"椿", label:"椿"},
      {cd:"東和", label:"東和"},
      {cd:"舎人", label:"舎人"},
      {cd:"舎人公園", label:"舎人公園"},
      {cd:"舎人町", label:"舎人町"},
      {cd:"中川", label:"中川"},
      {cd:"西綾瀬", label:"西綾瀬"},
      {cd:"西新井", label:"西新井"},
      {cd:"西新井栄町", label:"西新井栄町"},
      {cd:"西新井本町", label:"西新井本町"},
      {cd:"西伊興", label:"西伊興"},
      {cd:"西加平", label:"西加平"},
      {cd:"西竹の塚", label:"西竹の塚"},
      {cd:"西保木間", label:"西保木間"},
      {cd:"花畑", label:"花畑"},
      {cd:"東綾瀬", label:"東綾瀬"},
      {cd:"東伊興", label:"東伊興"},
      {cd:"東保木間", label:"東保木間"},
      {cd:"東六月町", label:"東六月町"},
      {cd:"一ツ家", label:"一ツ家"},
      {cd:"日ノ出町", label:"日ノ出町"},
      {cd:"平野", label:"平野"},
      {cd:"保木間", label:"保木間"},
      {cd:"保塚町", label:"保塚町"},
      {cd:"堀之内", label:"堀之内"},
      {cd:"南花畑", label:"南花畑"},
      {cd:"宮", label:"宮"},
      {cd:"六木", label:"六木"},
      {cd:"本木", label:"本木"},
      {cd:"本木東町", label:"本木東町"},
      {cd:"本木西町", label:"本木西町"},
      {cd:"本木南町", label:"本木南町"},
      {cd:"本木北町", label:"本木北町"},
      {cd:"谷在家", label:"谷在家"},
      {cd:"谷中", label:"谷中"},
      {cd:"柳原", label:"柳原"},
      {cd:"六月", label:"六月"},
      {cd:"六町", label:"六町"}
    ];

  city_mix(Adati_station);

}

function setArakawa() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Arakawa_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"荒川", label:"荒川"},
    {cd:"西尾久", label:"西尾久"},
    {cd:"西日暮里", label:"西日暮里"},
    {cd:"東尾久", label:"東尾久"},
    {cd:"東日暮里", label:"東日暮里"},
    {cd:"町屋", label:"町屋"},
    {cd:"南千住", label:"南千住"}
  
  ];
  
  city_mix(Arakawa_station);

}

function setItabasi() {

  town_id.textContent = null;

  var Itabasi_station = [
    {cd:"", label:"選択して下さい"},
    {cd:"相生町", label:"相生町"},
    {cd:"赤塚", label:"赤塚"},
    {cd:"赤塚新町", label:"赤塚新町"},
    {cd:"小豆沢", label:"小豆沢"},
    {cd:"泉町", label:"泉町"},
    {cd:"板橋", label:"板橋"},
    {cd:"稲荷台", label:"稲荷台"},
    {cd:"大原町", label:"大原町"},
    {cd:"大谷口", label:"大谷口"},
    {cd:"大谷口上町", label:"大谷口上町"},
    {cd:"大谷口北町", label:"大谷口北町"},
    {cd:"大山金井町", label:"大山金井町"},
    {cd:"大山東町", label:"大山東町"},
    {cd:"大山西町", label:"大山西町"},
    {cd:"大山町", label:"大山町"},
    {cd:"加賀", label:"加賀"},
    {cd:"上板橋", label:"上板橋"},
    {cd:"熊野町", label:"熊野町"},
    {cd:"小茂根", label:"小茂根"},
    {cd:"幸町", label:"幸町"},
    {cd:"栄町", label:"栄町"},
    {cd:"坂下", label:"坂下"},
    {cd:"桜川", label:"桜川"},
    {cd:"清水町", label:"清水町"},
    {cd:"志村", label:"志村"},
    {cd:"新河岸", label:"新河岸"},
    {cd:"大門", label:"大門"},
    {cd:"高島平", label:"高島平"},
    {cd:"東新町", label:"東新町"},
    {cd:"常盤台", label:"常盤台"},
    {cd:"徳丸", label:"徳丸"},
    {cd:"中板橋", label:"中板橋"},
    {cd:"仲宿", label:"仲宿"},
    {cd:"中台", label:"中台"},
    {cd:"仲町", label:"仲町"},
    {cd:"中丸町", label:"中丸町"},
    {cd:"成増", label:"成増"},
    {cd:"西台（１丁目）", label:"西台（１丁目）"},
    {cd:"西台（２〜４丁目）", label:"西台（２〜４丁目）"},
    {cd:"蓮沼町", label:"蓮沼町"},
    {cd:"蓮根", label:"蓮根"},
    {cd:"氷川町", label:"氷川町"},
    {cd:"東坂下", label:"東坂下"},
    {cd:"東山町", label:"東山町"},
    {cd:"富士見町", label:"富士見町"},
    {cd:"双葉町", label:"双葉町"},
    {cd:"舟渡", label:"舟渡"},
    {cd:"本町", label:"本町"},
    {cd:"前野町", label:"前野町"},
    {cd:"三園", label:"三園"},
    {cd:"南町", label:"南町"},
    {cd:"南常盤台", label:"南常盤台"},
    {cd:"宮本町", label:"宮本町"},
    {cd:"向原", label:"向原"},
    {cd:"大和町", label:"大和町"},
    {cd:"弥生町", label:"弥生町"},
    {cd:"四葉", label:"四葉"},
    {cd:"若木", label:"若木"}
  
  ];
  
  city_mix(Itabasi_station);
}



function setEdogawa() {

  town_id.textContent = null;

  var Edogawa_station = [

    {cd:"", label:"選択して下さい"},
  
    {cd:"一之江", label:"一之江"},
    {cd:"一之江町", label:"一之江町"},
    {cd:"宇喜田町", label:"宇喜田町"},
    {cd:"江戸川（１〜３丁目、４丁目１〜１４番）", label:"江戸川（１〜３丁目、４丁目１〜１４番）"},
    {cd:"江戸川（その他）", label:"江戸川（その他）"},
    {cd:"大杉", label:"大杉"},
    {cd:"興宮町", label:"興宮町"},
    {cd:"上一色", label:"上一色"},
    {cd:"上篠崎", label:"上篠崎"},
    {cd:"北葛西", label:"北葛西"},
    {cd:"北小岩", label:"北小岩"},
    {cd:"北篠崎", label:"北篠崎"},
    {cd:"小松川", label:"小松川"},
    {cd:"鹿骨", label:"鹿骨"},
    {cd:"鹿骨町", label:"鹿骨町"},
    {cd:"篠崎町", label:"篠崎町"},
    {cd:"下篠崎町", label:"下篠崎町"},
    {cd:"清新町", label:"清新町"},
    {cd:"中央", label:"中央"},
    {cd:"中葛西", label:"中葛西"},
    {cd:"新堀", label:"新堀"},
    {cd:"西一之江", label:"西一之江"},
    {cd:"西葛西", label:"西葛西"},
    {cd:"西小岩", label:"西小岩"},
    {cd:"西小松川町", label:"西小松川町"},
    {cd:"西篠崎", label:"西篠崎"},
    {cd:"西瑞江（３丁目、４丁目３〜９番）", label:"西瑞江（３丁目、４丁目３〜９番）"},
    {cd:"西瑞江（４丁目１〜２番・１０〜２７番、５丁目）", label:"西瑞江（４丁目１〜２番・１０〜２７番、５丁目）"},
    {cd:"二之江町", label:"二之江町"},
    {cd:"春江町（１〜３丁目）", label:"春江町（１〜３丁目）"},
    {cd:"春江町（４、５丁目）", label:"春江町（４、５丁目）"},
    {cd:"東葛西", label:"東葛西"},
    {cd:"東小岩", label:"東小岩"},
    {cd:"東小松川", label:"東小松川"},
    {cd:"東篠崎", label:"東篠崎"},
    {cd:"東篠崎町", label:"東篠崎町"},
    {cd:"東松本", label:"東松本"},
    {cd:"東瑞江", label:"東瑞江"},
    {cd:"平井", label:"平井"},
    {cd:"船堀", label:"船堀"},
    {cd:"本一色", label:"本一色"},
    {cd:"松江", label:"松江"},
    {cd:"松島", label:"松島"},
    {cd:"松本", label:"松本"},
    {cd:"瑞江", label:"瑞江"},
    {cd:"南葛西", label:"南葛西"},
    {cd:"南小岩", label:"南小岩"},
    {cd:"南篠崎町", label:"南篠崎町"},
    {cd:"谷河内（１丁目）", label:"谷河内（１丁目）"},
    {cd:"谷河内（２丁目）", label:"谷河内（２丁目）"},
    {cd:"臨海町", label:"臨海町"}
  
  ];
  
  city_mix(Edogawa_station);
}

function setOta() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Ota_station = [
    {cd:"", label:"選択して下さい"},

    {cd:"池上", label:"池上"},
    {cd:"石川町", label:"石川町"},
    {cd:"鵜の木", label:"鵜の木"},
    {cd:"大森中", label:"大森中"},
    {cd:"大森本町", label:"大森本町"},
    {cd:"大森東", label:"大森東"},
    {cd:"大森西", label:"大森西"},
    {cd:"大森南", label:"大森南"},
    {cd:"大森北", label:"大森北"},
    {cd:"蒲田", label:"蒲田"},
    {cd:"蒲田本町", label:"蒲田本町"},
    {cd:"上池台", label:"上池台"},
    {cd:"北糀谷", label:"北糀谷"},
    {cd:"北千束", label:"北千束"},
    {cd:"北馬込", label:"北馬込"},
    {cd:"北嶺町", label:"北嶺町"},
    {cd:"久が原", label:"久が原"},
    {cd:"京浜島", label:"京浜島"},
    {cd:"山王", label:"山王"},
    {cd:"下丸子", label:"下丸子"},
    {cd:"城南島", label:"城南島"},
    {cd:"昭和島", label:"昭和島"},
    {cd:"新蒲田", label:"新蒲田"},
    {cd:"多摩川", label:"多摩川"},
    {cd:"千鳥", label:"千鳥"},
    {cd:"中央", label:"中央"},
    {cd:"田園調布", label:"田園調布"},
    {cd:"田園調布本町", label:"田園調布本町"},
    {cd:"田園調布南", label:"田園調布南"},
    {cd:"東海", label:"東海"},
    {cd:"仲池上", label:"仲池上"},
    {cd:"中馬込", label:"中馬込"},
    {cd:"仲六郷", label:"仲六郷"},
    {cd:"西蒲田", label:"西蒲田"},
    {cd:"西糀谷", label:"西糀谷"},
    {cd:"西馬込", label:"西馬込"},
    {cd:"西嶺町", label:"西嶺町"},
    {cd:"西六郷", label:"西六郷"},
    {cd:"萩中", label:"萩中"},
    {cd:"羽田", label:"羽田"},
    {cd:"羽田旭町", label:"羽田旭町"},
    {cd:"羽田空港", label:"羽田空港"},
    {cd:"東蒲田", label:"東蒲田"},
    {cd:"東糀谷", label:"東糀谷"},
    {cd:"東馬込", label:"東馬込"},
    {cd:"東嶺町", label:"東嶺町"},
    {cd:"東矢口", label:"東矢口"},
    {cd:"東雪谷", label:"東雪谷"},
    {cd:"東六郷", label:"東六郷"},
    {cd:"ふるさとの浜辺公園", label:"ふるさとの浜辺公園"},
    {cd:"平和島", label:"平和島"},
    {cd:"平和の森公園", label:"平和の森公園"},
    {cd:"本羽田", label:"本羽田"},
    {cd:"南蒲田", label:"南蒲田"},
    {cd:"南久が原", label:"南久が原"},
    {cd:"南千束", label:"南千束"},
    {cd:"南馬込", label:"南馬込"},
    {cd:"南雪谷", label:"南雪谷"},
    {cd:"南六郷", label:"南六郷"},
    {cd:"矢口", label:"矢口"},
    {cd:"雪谷大塚町", label:"雪谷大塚町"},
    {cd:"令和島", label:"令和島"}
  
  ];
    
  city_mix(Ota_station);

}

function setKatusika() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Katusika_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"青戸", label:"青戸"},
    {cd:"奥戸", label:"奥戸"},
    {cd:"お花茶屋", label:"お花茶屋"},
    {cd:"金町", label:"金町"},
    {cd:"金町浄水場", label:"金町浄水場"},
    {cd:"鎌倉", label:"鎌倉"},
    {cd:"亀有", label:"亀有"},
    {cd:"小菅", label:"小菅"},
    {cd:"柴又", label:"柴又"},
    {cd:"白鳥", label:"白鳥"},
    {cd:"新小岩", label:"新小岩"},
    {cd:"高砂", label:"高砂"},
    {cd:"宝町", label:"宝町"},
    {cd:"立石", label:"立石"},
    {cd:"新宿", label:"新宿"},
    {cd:"西亀有（１、２丁目）", label:"西亀有（１、２丁目）"},
    {cd:"西亀有（３、４丁目）", label:"西亀有（３、４丁目）"},
    {cd:"西新小岩", label:"西新小岩"},
    {cd:"西水元", label:"西水元"},
    {cd:"東金町", label:"東金町"},
    {cd:"東新小岩", label:"東新小岩"},
    {cd:"東立石", label:"東立石"},
    {cd:"東堀切", label:"東堀切"},
    {cd:"東水元", label:"東水元"},
    {cd:"東四つ木", label:"東四つ木"},
    {cd:"細田", label:"細田"},
    {cd:"堀切", label:"堀切"},
    {cd:"水元", label:"水元"},
    {cd:"水元公園", label:"水元公園"},
    {cd:"南水元", label:"南水元"},
    {cd:"四つ木", label:"四つ木"}
  
  ];
  city_mix(Katusika_station);

}

function setKita() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Kita_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"赤羽", label:"赤羽"},
    {cd:"赤羽台", label:"赤羽台"},
    {cd:"赤羽西", label:"赤羽西"},
    {cd:"赤羽南", label:"赤羽南"},
    {cd:"赤羽北", label:"赤羽北"},
    {cd:"岩淵町", label:"岩淵町"},
    {cd:"浮間", label:"浮間"},
    {cd:"王子", label:"王子"},
    {cd:"王子本町", label:"王子本町"},
    {cd:"上十条", label:"上十条"},
    {cd:"上中里", label:"上中里"},
    {cd:"神谷", label:"神谷"},
    {cd:"岸町", label:"岸町"},
    {cd:"桐ケ丘", label:"桐ケ丘"},
    {cd:"栄町", label:"栄町"},
    {cd:"志茂", label:"志茂"},
    {cd:"十条台", label:"十条台"},
    {cd:"十条仲原", label:"十条仲原"},
    {cd:"昭和町", label:"昭和町"},
    {cd:"滝野川", label:"滝野川"},
    {cd:"田端", label:"田端"},
    {cd:"田端新町", label:"田端新町"},
    {cd:"豊島", label:"豊島"},
    {cd:"中里", label:"中里"},
    {cd:"中十条", label:"中十条"},
    {cd:"西が丘", label:"西が丘"},
    {cd:"西ケ原", label:"西ケ原"},
    {cd:"東十条", label:"東十条"},
    {cd:"東田端", label:"東田端"},
    {cd:"堀船", label:"堀船"}
  
  ];
  city_mix(Kita_station);

}

function setKoutou() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Koutou_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"青海", label:"青海"},
    {cd:"有明", label:"有明"},
    {cd:"石島", label:"石島"},
    {cd:"海の森", label:"海の森"},
    {cd:"海辺", label:"海辺"},
    {cd:"永代", label:"永代"},
    {cd:"枝川", label:"枝川"},
    {cd:"越中島", label:"越中島"},
    {cd:"扇橋", label:"扇橋"},
    {cd:"大島", label:"大島"},
    {cd:"亀戸", label:"亀戸"},
    {cd:"北砂", label:"北砂"},
    {cd:"木場", label:"木場"},
    {cd:"清澄", label:"清澄"},
    {cd:"佐賀", label:"佐賀"},
    {cd:"猿江", label:"猿江"},
    {cd:"塩浜", label:"塩浜"},
    {cd:"潮見", label:"潮見"},
    {cd:"東雲", label:"東雲"},
    {cd:"白河", label:"白河"},
    {cd:"新大橋", label:"新大橋"},
    {cd:"新木場", label:"新木場"},
    {cd:"新砂", label:"新砂"},
    {cd:"住吉", label:"住吉"},
    {cd:"千石", label:"千石"},
    {cd:"千田", label:"千田"},
    {cd:"高橋", label:"高橋"},
    {cd:"辰巳", label:"辰巳"},
    {cd:"中央防波堤", label:"中央防波堤"},
    {cd:"東陽", label:"東陽"},
    {cd:"常盤", label:"常盤"},
    {cd:"富岡", label:"富岡"},
    {cd:"豊洲", label:"豊洲"},
    {cd:"豊洲豊洲センタービル", label:"豊洲豊洲センタービル"},
    {cd:"東砂", label:"東砂"},
    {cd:"平野", label:"平野"},
    {cd:"深川", label:"深川"},
    {cd:"福住", label:"福住"},
    {cd:"冬木", label:"冬木"},
    {cd:"古石場", label:"古石場"},
    {cd:"牡丹", label:"牡丹"},
    {cd:"南砂", label:"南砂"},
    {cd:"三好", label:"三好"},
    {cd:"毛利", label:"毛利"},
    {cd:"森下", label:"森下"},
    {cd:"門前仲町", label:"門前仲町"},
    {cd:"夢の島", label:"夢の島"},
    {cd:"若洲", label:"若洲"}
  
  ];
  city_mix(Koutou_station);

}

function setSinagawa() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Sinagawa_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"荏原", label:"荏原"},
    {cd:"大井", label:"大井"},
    {cd:"大崎", label:"大崎"},
    {cd:"大崎ＴｈｉｎｋＰａｒｋＴｏｗｅｒ", label:"大崎ＴｈｉｎｋＰａｒｋＴｏｗｅｒ"},
    {cd:"勝島", label:"勝島"},
    {cd:"上大崎", label:"上大崎"},
    {cd:"北品川（１〜４丁目）", label:"北品川（１〜４丁目）"},
    {cd:"北品川（５、６丁目）", label:"北品川（５、６丁目）"},
    {cd:"小山", label:"小山"},
    {cd:"小山台", label:"小山台"},
    {cd:"戸越", label:"戸越"},
    {cd:"中延", label:"中延"},
    {cd:"西大井", label:"西大井"},
    {cd:"西五反田", label:"西五反田"},
    {cd:"西品川", label:"西品川"},
    {cd:"西中延", label:"西中延"},
    {cd:"旗の台", label:"旗の台"},
    {cd:"東大井", label:"東大井"},
    {cd:"東五反田", label:"東五反田"},
    {cd:"東品川", label:"東品川"},
    {cd:"東中延", label:"東中延"},
    {cd:"東八潮", label:"東八潮"},
    {cd:"平塚", label:"平塚"},
    {cd:"広町", label:"広町"},
    {cd:"二葉", label:"二葉"},
    {cd:"南大井", label:"南大井"},
    {cd:"南品川", label:"南品川"},
    {cd:"八潮", label:"八潮"},
    {cd:"豊町", label:"豊町"}
  
  ];
  
  city_mix(Sinagawa_station);

}

function setSibuya() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Sibuya_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"上原", label:"上原"},
    {cd:"鶯谷町", label:"鶯谷町"},
    {cd:"宇田川町", label:"宇田川町"},
    {cd:"恵比寿", label:"恵比寿"},
    {cd:"恵比寿恵比寿ガーデンプレイス", label:"恵比寿恵比寿ガーデンプレイス"},
    {cd:"恵比寿西", label:"恵比寿西"},
    {cd:"恵比寿南", label:"恵比寿南"},
    {cd:"大山町", label:"大山町"},
    {cd:"神山町", label:"神山町"},
    {cd:"桜丘町", label:"桜丘町"},
    {cd:"笹塚", label:"笹塚"},
    {cd:"猿楽町", label:"猿楽町"},
    {cd:"渋谷", label:"渋谷"},
    {cd:"渋谷渋谷スクランブルスクエア", label:"渋谷渋谷スクランブルスクエア"},
    {cd:"松濤", label:"松濤"},
    {cd:"神宮前", label:"神宮前"},
    {cd:"神泉町", label:"神泉町"},
    {cd:"神南", label:"神南"},
    {cd:"千駄ヶ谷", label:"千駄ヶ谷"},
    {cd:"代官山町", label:"代官山町"},
    {cd:"道玄坂", label:"道玄坂"},
    {cd:"富ヶ谷", label:"富ヶ谷"},
    {cd:"南平台町", label:"南平台町"},
    {cd:"西原", label:"西原"},
    {cd:"幡ヶ谷", label:"幡ヶ谷"},
    {cd:"鉢山町", label:"鉢山町"},
    {cd:"初台", label:"初台"},
    {cd:"東", label:"東"},
    {cd:"広尾", label:"広尾"},
    {cd:"本町", label:"本町"},
    {cd:"円山町", label:"円山町"},
    {cd:"元代々木町", label:"元代々木町"},
    {cd:"代々木", label:"代々木"},
    {cd:"代々木神園町", label:"代々木神園町"}
  
  ];
  city_mix(Sibuya_station);

}

function setSinjyuku() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Sinjyuku_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"愛住町", label:"愛住町"},
    {cd:"赤城下町", label:"赤城下町"},
    {cd:"赤城元町", label:"赤城元町"},
    {cd:"揚場町", label:"揚場町"},
    {cd:"荒木町", label:"荒木町"},
    {cd:"市谷加賀町", label:"市谷加賀町"},
    {cd:"市谷甲良町", label:"市谷甲良町"},
    {cd:"市谷砂土原町", label:"市谷砂土原町"},
    {cd:"市谷左内町", label:"市谷左内町"},
    {cd:"市谷鷹匠町", label:"市谷鷹匠町"},
    {cd:"市谷田町", label:"市谷田町"},
    {cd:"市谷台町", label:"市谷台町"},
    {cd:"市谷長延寺町", label:"市谷長延寺町"},
    {cd:"市谷仲之町", label:"市谷仲之町"},
    {cd:"市谷八幡町", label:"市谷八幡町"},
    {cd:"市谷船河原町", label:"市谷船河原町"},
    {cd:"市谷本村町", label:"市谷本村町"},
    {cd:"市谷薬王寺町", label:"市谷薬王寺町"},
    {cd:"市谷柳町", label:"市谷柳町"},
    {cd:"市谷山伏町", label:"市谷山伏町"},
    {cd:"岩戸町", label:"岩戸町"},
    {cd:"榎町", label:"榎町"},
    {cd:"大久保", label:"大久保"},
    {cd:"改代町", label:"改代町"},
    {cd:"神楽河岸", label:"神楽河岸"},
    {cd:"神楽坂", label:"神楽坂"},
    {cd:"霞ケ丘町", label:"霞ケ丘町"},
    {cd:"片町", label:"片町"},
    {cd:"歌舞伎町", label:"歌舞伎町"},
    {cd:"上落合", label:"上落合"},
    {cd:"河田町", label:"河田町"},
    {cd:"喜久井町", label:"喜久井町"},
    {cd:"北新宿", label:"北新宿"},
    {cd:"北町", label:"北町"},
    {cd:"北山伏町", label:"北山伏町"},
    {cd:"細工町", label:"細工町"},
    {cd:"左門町", label:"左門町"},
    {cd:"信濃町", label:"信濃町"},
    {cd:"下落合", label:"下落合"},
    {cd:"下宮比町", label:"下宮比町"},
    {cd:"白銀町", label:"白銀町"},
    {cd:"新小川町", label:"新小川町"},
    {cd:"新宿", label:"新宿"},
    {cd:"水道町", label:"水道町"},
    {cd:"須賀町", label:"須賀町"},
    {cd:"住吉町", label:"住吉町"},
    {cd:"大京町", label:"大京町"},
    {cd:"高田馬場", label:"高田馬場"},
    {cd:"箪笥町", label:"箪笥町"},
    {cd:"築地町", label:"築地町"},
    {cd:"津久戸町", label:"津久戸町"},
    {cd:"筑土八幡町", label:"筑土八幡町"},
    {cd:"天神町", label:"天神町"},
    {cd:"戸塚町", label:"戸塚町"},
    {cd:"富久町", label:"富久町"},
    {cd:"戸山（３丁目１８・２１番）", label:"戸山（３丁目１８・２１番）"},
    {cd:"戸山（その他）", label:"戸山（その他）"},
    {cd:"内藤町", label:"内藤町"},
    {cd:"中井", label:"中井"},
    {cd:"中落合", label:"中落合"},
    {cd:"中里町", label:"中里町"},
    {cd:"中町", label:"中町"},
    {cd:"納戸町", label:"納戸町"},
    {cd:"西落合", label:"西落合"},
    {cd:"西五軒町", label:"西五軒町"},
    {cd:"西新宿", label:"西新宿"},
    {cd:"西新宿小田急第一生命ビル", label:"西新宿小田急第一生命ビル"},
    {cd:"西新宿新宿アイランドタワー", label:"西新宿新宿アイランドタワー"},
    {cd:"西新宿新宿ＮＳビル", label:"西新宿新宿ＮＳビル"},
    {cd:"西新宿新宿エルタワー", label:"西新宿新宿エルタワー"},
    {cd:"西新宿新宿スクエアタワー", label:"西新宿新宿スクエアタワー"},
    {cd:"西新宿新宿住友ビル", label:"西新宿新宿住友ビル"},
    {cd:"西新宿新宿センタービル", label:"西新宿新宿センタービル"},
    {cd:"西新宿新宿野村ビル", label:"西新宿新宿野村ビル"},
    {cd:"西新宿新宿パークタワー", label:"西新宿新宿パークタワー"},
    {cd:"西新宿新宿三井ビル", label:"西新宿新宿三井ビル"},
    {cd:"西新宿新宿モノリス", label:"西新宿新宿モノリス"},
    {cd:"西新宿住友不動産新宿オークタワー", label:"西新宿住友不動産新宿オークタワー"},
    {cd:"西新宿東京オペラシティ（地階・階層不明）", label:"西新宿東京オペラシティ（地階・階層不明）"},
    {cd:"二十騎町", label:"二十騎町"},
    {cd:"西早稲田（２丁目１番１〜２３号、２番）", label:"西早稲田（２丁目１番１〜２３号、２番）"},
    {cd:"西早稲田（その他）", label:"西早稲田（その他）"},
    {cd:"馬場下町", label:"馬場下町"},
    {cd:"払方町", label:"払方町"},
    {cd:"原町", label:"原町"},
    {cd:"東榎町", label:"東榎町"},
    {cd:"東五軒町", label:"東五軒町"},
    {cd:"百人町", label:"百人町"},
    {cd:"袋町", label:"袋町"},
    {cd:"舟町", label:"舟町"},
    {cd:"弁天町", label:"弁天町"},
    {cd:"南榎町", label:"南榎町"},
    {cd:"南町", label:"南町"},
    {cd:"南元町", label:"南元町"},
    {cd:"南山伏町", label:"南山伏町"},
    {cd:"山吹町", label:"山吹町"},
    {cd:"矢来町", label:"矢来町"},
    {cd:"横寺町", label:"横寺町"},
    {cd:"余丁町", label:"余丁町"},
    {cd:"四谷", label:"四谷"},
    {cd:"四谷坂町", label:"四谷坂町"},
    {cd:"四谷三栄町", label:"四谷三栄町"},
    {cd:"四谷本塩町", label:"四谷本塩町"},
    {cd:"若葉", label:"若葉"},
    {cd:"若松町", label:"若松町"},
    {cd:"若宮町", label:"若宮町"},
    {cd:"早稲田鶴巻町", label:"早稲田鶴巻町"},
    {cd:"早稲田南町", label:"早稲田南町"},
    {cd:"早稲田町", label:"早稲田町"}
  
  ];
  
  city_mix(Sinjyuku_station);

}

function setSuginami() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Suginami_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"阿佐谷南", label:"阿佐谷南"},
    {cd:"阿佐谷北", label:"阿佐谷北"},
    {cd:"天沼", label:"天沼"},
    {cd:"井草", label:"井草"},
    {cd:"和泉", label:"和泉"},
    {cd:"今川", label:"今川"},
    {cd:"梅里", label:"梅里"},
    {cd:"永福", label:"永福"},
    {cd:"大宮", label:"大宮"},
    {cd:"荻窪", label:"荻窪"},
    {cd:"上井草", label:"上井草"},
    {cd:"上荻", label:"上荻"},
    {cd:"上高井戸", label:"上高井戸"},
    {cd:"久我山", label:"久我山"},
    {cd:"高円寺南", label:"高円寺南"},
    {cd:"高円寺北", label:"高円寺北"},
    {cd:"清水", label:"清水"},
    {cd:"下井草", label:"下井草"},
    {cd:"下高井戸", label:"下高井戸"},
    {cd:"松庵", label:"松庵"},
    {cd:"善福寺", label:"善福寺"},
    {cd:"高井戸東", label:"高井戸東"},
    {cd:"高井戸西", label:"高井戸西"},
    {cd:"成田東", label:"成田東"},
    {cd:"成田西", label:"成田西"},
    {cd:"西荻南", label:"西荻南"},
    {cd:"西荻北", label:"西荻北"},
    {cd:"浜田山", label:"浜田山"},
    {cd:"方南", label:"方南"},
    {cd:"堀ノ内", label:"堀ノ内"},
    {cd:"本天沼", label:"本天沼"},
    {cd:"松ノ木", label:"松ノ木"},
    {cd:"南荻窪", label:"南荻窪"},
    {cd:"宮前", label:"宮前"},
    {cd:"桃井", label:"桃井"},
    {cd:"和田", label:"和田"}
  
  ];
  
  city_mix(Suginami_station);

}

function setSumida() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Sumida_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"吾妻橋", label:"吾妻橋"},
    {cd:"石原", label:"石原"},
    {cd:"押上", label:"押上"},
    {cd:"亀沢", label:"亀沢"},
    {cd:"菊川", label:"菊川"},
    {cd:"京島", label:"京島"},
    {cd:"錦糸", label:"錦糸"},
    {cd:"江東橋", label:"江東橋"},
    {cd:"墨田", label:"墨田"},
    {cd:"太平", label:"太平"},
    {cd:"立花", label:"立花"},
    {cd:"立川", label:"立川"},
    {cd:"千歳", label:"千歳"},
    {cd:"堤通", label:"堤通"},
    {cd:"業平", label:"業平"},
    {cd:"東駒形", label:"東駒形"},
    {cd:"東墨田", label:"東墨田"},
    {cd:"東向島", label:"東向島"},
    {cd:"文花", label:"文花"},
    {cd:"本所", label:"本所"},
    {cd:"緑", label:"緑"},
    {cd:"向島", label:"向島"},
    {cd:"八広", label:"八広"},
    {cd:"横網", label:"横網"},
    {cd:"横川", label:"横川"},
    {cd:"両国", label:"両国"}
  
  ];
  
  city_mix(Sumida_station);

}

function setSetagaya() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Setagaya_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"赤堤", label:"赤堤"},
    {cd:"池尻", label:"池尻"},
    {cd:"宇奈根", label:"宇奈根"},
    {cd:"梅丘", label:"梅丘"},
    {cd:"大蔵", label:"大蔵"},
    {cd:"大原", label:"大原"},
    {cd:"岡本", label:"岡本"},
    {cd:"奥沢", label:"奥沢"},
    {cd:"尾山台", label:"尾山台"},
    {cd:"粕谷", label:"粕谷"},
    {cd:"鎌田", label:"鎌田"},
    {cd:"上馬", label:"上馬"},
    {cd:"上北沢", label:"上北沢"},
    {cd:"上祖師谷", label:"上祖師谷"},
    {cd:"上野毛", label:"上野毛"},
    {cd:"上用賀", label:"上用賀"},
    {cd:"北烏山", label:"北烏山"},
    {cd:"北沢", label:"北沢"},
    {cd:"喜多見", label:"喜多見"},
    {cd:"砧", label:"砧"},
    {cd:"砧公園", label:"砧公園"},
    {cd:"給田", label:"給田"},
    {cd:"経堂", label:"経堂"},
    {cd:"豪徳寺", label:"豪徳寺"},
    {cd:"駒沢", label:"駒沢"},
    {cd:"駒沢公園", label:"駒沢公園"},
    {cd:"桜", label:"桜"},
    {cd:"桜丘", label:"桜丘"},
    {cd:"桜新町", label:"桜新町"},
    {cd:"桜上水", label:"桜上水"},
    {cd:"三軒茶屋", label:"三軒茶屋"},
    {cd:"下馬", label:"下馬"},
    {cd:"新町", label:"新町"},
    {cd:"成城", label:"成城"},
    {cd:"瀬田", label:"瀬田"},
    {cd:"世田谷", label:"世田谷"},
    {cd:"祖師谷", label:"祖師谷"},
    {cd:"太子堂", label:"太子堂"},
    {cd:"代沢", label:"代沢"},
    {cd:"代田", label:"代田"},
    {cd:"玉川", label:"玉川"},
    {cd:"玉川台", label:"玉川台"},
    {cd:"玉川田園調布", label:"玉川田園調布"},
    {cd:"玉堤", label:"玉堤"},
    {cd:"千歳台", label:"千歳台"},
    {cd:"弦巻", label:"弦巻"},
    {cd:"等々力", label:"等々力"},
    {cd:"中町", label:"中町"},
    {cd:"野毛", label:"野毛"},
    {cd:"野沢", label:"野沢"},
    {cd:"八幡山", label:"八幡山"},
    {cd:"羽根木", label:"羽根木"},
    {cd:"東玉川", label:"東玉川"},
    {cd:"深沢", label:"深沢"},
    {cd:"船橋", label:"船橋"},
    {cd:"松原", label:"松原"},
    {cd:"三宿", label:"三宿"},
    {cd:"南烏山", label:"南烏山"},
    {cd:"宮坂", label:"宮坂"},
    {cd:"用賀", label:"用賀"},
    {cd:"若林", label:"若林"}
  
  ];
  city_mix(Setagaya_station);

}

function setTaitou() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Taitou_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"秋葉原", label:"秋葉原"},
    {cd:"浅草", label:"浅草"},
    {cd:"浅草橋", label:"浅草橋"},
    {cd:"池之端", label:"池之端"},
    {cd:"今戸", label:"今戸"},
    {cd:"入谷", label:"入谷"},
    {cd:"上野", label:"上野"},
    {cd:"上野公園", label:"上野公園"},
    {cd:"上野桜木", label:"上野桜木"},
    {cd:"雷門", label:"雷門"},
    {cd:"北上野", label:"北上野"},
    {cd:"清川", label:"清川"},
    {cd:"蔵前", label:"蔵前"},
    {cd:"小島", label:"小島"},
    {cd:"寿", label:"寿"},
    {cd:"駒形", label:"駒形"},
    {cd:"下谷", label:"下谷"},
    {cd:"千束", label:"千束"},
    {cd:"台東", label:"台東"},
    {cd:"鳥越", label:"鳥越"},
    {cd:"西浅草", label:"西浅草"},
    {cd:"日本堤", label:"日本堤"},
    {cd:"根岸", label:"根岸"},
    {cd:"橋場", label:"橋場"},
    {cd:"花川戸", label:"花川戸"},
    {cd:"東浅草", label:"東浅草"},
    {cd:"東上野", label:"東上野"},
    {cd:"松が谷", label:"松が谷"},
    {cd:"三筋", label:"三筋"},
    {cd:"三ノ輪", label:"三ノ輪"},
    {cd:"元浅草", label:"元浅草"},
    {cd:"谷中", label:"谷中"},
    {cd:"柳橋", label:"柳橋"},
    {cd:"竜泉", label:"竜泉"}
  
  ];
  
  city_mix(Taitou_station);

}

function setTyuuou() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Tyuuou_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"明石町", label:"明石町"},
    {cd:"入船", label:"入船"},
    {cd:"勝どき", label:"勝どき"},
    {cd:"京橋", label:"京橋"},
    {cd:"銀座", label:"銀座"},
    {cd:"新川", label:"新川"},
    {cd:"新富", label:"新富"},
    {cd:"月島", label:"月島"},
    {cd:"築地", label:"築地"},
    {cd:"佃", label:"佃"},
    {cd:"豊海町", label:"豊海町"},
    {cd:"日本橋", label:"日本橋"},
    {cd:"日本橋東京日本橋タワー", label:"日本橋東京日本橋タワー"},
    {cd:"日本橋大伝馬町", label:"日本橋大伝馬町"},
    {cd:"日本橋蛎殻町", label:"日本橋蛎殻町"},
    {cd:"日本橋兜町", label:"日本橋兜町"},
    {cd:"日本橋茅場町", label:"日本橋茅場町"},
    {cd:"日本橋小網町", label:"日本橋小網町"},
    {cd:"日本橋小伝馬町", label:"日本橋小伝馬町"},
    {cd:"日本橋小舟町", label:"日本橋小舟町"},
    {cd:"日本橋富沢町", label:"日本橋富沢町"},
    {cd:"日本橋中洲", label:"日本橋中洲"},
    {cd:"日本橋人形町", label:"日本橋人形町"},
    {cd:"日本橋箱崎町", label:"日本橋箱崎町"},
    {cd:"日本橋浜町", label:"日本橋浜町"},
    {cd:"日本橋馬喰町", label:"日本橋馬喰町"},
    {cd:"日本橋久松町", label:"日本橋久松町"},
    {cd:"日本橋堀留町", label:"日本橋堀留町"},
    {cd:"日本橋本石町", label:"日本橋本石町"},
    {cd:"日本橋本町", label:"日本橋本町"},
    {cd:"日本橋室町", label:"日本橋室町"},
    {cd:"日本橋横山町", label:"日本橋横山町"},
    {cd:"八丁堀", label:"八丁堀"},
    {cd:"浜離宮庭園", label:"浜離宮庭園"},
    {cd:"晴海", label:"晴海"},
    {cd:"晴海オフィスタワーＸ", label:"晴海オフィスタワーＸ"},
    {cd:"晴海オフィスタワーＹ", label:"晴海オフィスタワーＹ"},
    {cd:"晴海オフィスタワーＺ", label:"晴海オフィスタワーＺ"},
    {cd:"東日本橋", label:"東日本橋"},
    {cd:"湊", label:"湊"},
    {cd:"八重洲  ", label:"八重洲"}
  
  ];
  city_mix(Tyuuou_station);

}

function setTiyoda() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Tiyoda_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"飯田橋", label:"飯田橋"},
    {cd:"一番町", label:"一番町"},
    {cd:"岩本町", label:"岩本町"},
    {cd:"内神田", label:"内神田"},
    {cd:"内幸町", label:"内幸町"},
    {cd:"大手町", label:"大手町"},
    {cd:"大手町ＪＡビル", label:"大手町ＪＡビル"},
    {cd:"鍛冶町", label:"鍛冶町"},
    {cd:"霞が関", label:"霞が関"},
    {cd:"霞が関霞が関ビル", label:"霞が関霞が関ビル"},
    {cd:"神田相生町", label:"神田相生町"},
    {cd:"神田淡路町", label:"神田淡路町"},
    {cd:"神田和泉町", label:"神田和泉町"},
    {cd:"神田岩本町", label:"神田岩本町"},
    {cd:"神田小川町", label:"神田小川町"},
    {cd:"神田鍛冶町", label:"神田鍛冶町"},
    {cd:"神田北乗物町", label:"神田北乗物町"},
    {cd:"神田紺屋町", label:"神田紺屋町"},
    {cd:"神田佐久間河岸", label:"神田佐久間河岸"},
    {cd:"神田佐久間町", label:"神田佐久間町"},
    {cd:"神田猿楽町", label:"神田猿楽町"},
    {cd:"神田神保町", label:"神田神保町"},
    {cd:"神田須田町", label:"神田須田町"},
    {cd:"神田駿河台", label:"神田駿河台"},
    {cd:"神田多町", label:"神田多町"},
    {cd:"神田司町", label:"神田司町"},
    {cd:"神田富山町", label:"神田富山町"},
    {cd:"神田錦町", label:"神田錦町"},
    {cd:"神田西福田町", label:"神田西福田町"},
    {cd:"神田練塀町", label:"神田練塀町"},
    {cd:"神田花岡町", label:"神田花岡町"},
    {cd:"神田東紺屋町", label:"神田東紺屋町"},
    {cd:"神田東松下町", label:"神田東松下町"},
    {cd:"神田平河町", label:"神田平河町"},
    {cd:"神田松永町", label:"神田松永町"},
    {cd:"神田美倉町", label:"神田美倉町"},
    {cd:"神田三崎町", label:"神田三崎町"},
    {cd:"神田美土代町", label:"神田美土代町"},
    {cd:"紀尾井町", label:"紀尾井町"},
    {cd:"北の丸公園", label:"北の丸公園"},
    {cd:"九段南", label:"九段南"},
    {cd:"九段北", label:"九段北"},
    {cd:"皇居外苑", label:"皇居外苑"},
    {cd:"麹町", label:"麹町"},
    {cd:"五番町", label:"五番町"},
    {cd:"三番町", label:"三番町"},
    {cd:"外神田", label:"外神田"},
    {cd:"千代田", label:"千代田"},
    {cd:"永田町", label:"永田町"},
    {cd:"永田町山王パークタワー", label:"永田町山王パークタワー"},
    {cd:"西神田", label:"西神田"},
    {cd:"二番町", label:"二番町"},
    {cd:"隼町", label:"隼町"},
    {cd:"東神田", label:"東神田"},
    {cd:"一ツ橋", label:"一ツ橋"},
    {cd:"日比谷公園", label:"日比谷公園"},
    {cd:"平河町", label:"平河町"},
    {cd:"富士見", label:"富士見"},
    {cd:"丸の内", label:"丸の内"},
    {cd:"丸の内グラントウキョウサウスタワー", label:"丸の内グラントウキョウサウスタワー"},
    {cd:"丸の内グラントウキョウノースタワー", label:"丸の内グラントウキョウノースタワー"},
    {cd:"丸の内ＪＰタワー", label:"丸の内ＪＰタワー"},
    {cd:"丸の内新丸の内ビルディング", label:"丸の内新丸の内ビルディング"},
    {cd:"丸の内東京ビルディング", label:"丸の内東京ビルディング"},
    {cd:"丸の内丸の内パークビルディング", label:"丸の内丸の内パークビルディング"},
    {cd:"丸の内丸の内ビルディング", label:"丸の内丸の内ビルディング"},
    {cd:"有楽町", label:"有楽町"},
    {cd:"四番町", label:"四番町"},
    {cd:"六番町", label:"六番町"}
  
  ];
  
  city_mix(Tiyoda_station);

}

function setTosima() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Tosima_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"池袋（１丁目）", label:"池袋（１丁目）"},
    {cd:"池袋（２〜４丁目）", label:"池袋（２〜４丁目）"},
    {cd:"池袋本町", label:"池袋本町"},
    {cd:"要町", label:"要町"},
    {cd:"上池袋", label:"上池袋"},
    {cd:"北大塚", label:"北大塚"},
    {cd:"駒込", label:"駒込"},
    {cd:"巣鴨", label:"巣鴨"},
    {cd:"千川", label:"千川"},
    {cd:"雑司が谷", label:"雑司が谷"},
    {cd:"高田", label:"高田"},
    {cd:"高松", label:"高松"},
    {cd:"千早", label:"千早"},
    {cd:"長崎", label:"長崎"},
    {cd:"西池袋", label:"西池袋"},
    {cd:"西巣鴨", label:"西巣鴨"},
    {cd:"東池袋", label:"東池袋"},
    {cd:"東池袋サンシャイン", label:"東池袋サンシャイン"},
    {cd:"南池袋", label:"南池袋"},
    {cd:"南大塚", label:"南大塚"},
    {cd:"南長崎", label:"南長崎"},
    {cd:"目白", label:"目白"}
  
  ];
  city_mix(Tosima_station);

}

function setNakano() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Nakano_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"新井", label:"新井"},
    {cd:"江古田", label:"江古田"},
    {cd:"江原町", label:"江原町"},
    {cd:"上鷺宮", label:"上鷺宮"},
    {cd:"上高田", label:"上高田"},
    {cd:"鷺宮", label:"鷺宮"},
    {cd:"白鷺", label:"白鷺"},
    {cd:"中央", label:"中央"},
    {cd:"中野", label:"中野"},
    {cd:"沼袋", label:"沼袋"},
    {cd:"野方", label:"野方"},
    {cd:"東中野", label:"東中野"},
    {cd:"本町", label:"本町"},
    {cd:"松が丘", label:"松が丘"},
    {cd:"丸山", label:"丸山"},
    {cd:"南台", label:"南台"},
    {cd:"大和町", label:"大和町"},
    {cd:"弥生町", label:"弥生町"},
    {cd:"若宮", label:"若宮"}
  
  ];
  city_mix(Nakano_station);

}

function setNerima() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Nerima_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"旭丘", label:"旭丘"},
    {cd:"旭町", label:"旭町"},
    {cd:"大泉学園町", label:"大泉学園町"},
    {cd:"大泉町", label:"大泉町"},
    {cd:"春日町", label:"春日町"},
    {cd:"上石神井", label:"上石神井"},
    {cd:"上石神井南町", label:"上石神井南町"},
    {cd:"北町", label:"北町"},
    {cd:"向山", label:"向山"},
    {cd:"小竹町", label:"小竹町"},
    {cd:"栄町", label:"栄町"},
    {cd:"桜台", label:"桜台"},
    {cd:"下石神井", label:"下石神井"},
    {cd:"石神井台", label:"石神井台"},
    {cd:"石神井町", label:"石神井町"},
    {cd:"関町東", label:"関町東"},
    {cd:"関町南", label:"関町南"},
    {cd:"関町北", label:"関町北"},
    {cd:"高野台", label:"高野台"},
    {cd:"高松", label:"高松"},
    {cd:"田柄", label:"田柄"},
    {cd:"立野町", label:"立野町"},
    {cd:"土支田", label:"土支田"},
    {cd:"豊玉上", label:"豊玉上"},
    {cd:"豊玉中", label:"豊玉中"},
    {cd:"豊玉南", label:"豊玉南"},
    {cd:"豊玉北", label:"豊玉北"},
    {cd:"中村", label:"中村"},
    {cd:"中村南", label:"中村南"},
    {cd:"中村北", label:"中村北"},
    {cd:"西大泉", label:"西大泉"},
    {cd:"西大泉町", label:"西大泉町"},
    {cd:"錦", label:"錦"},
    {cd:"貫井", label:"貫井"},
    {cd:"練馬", label:"練馬"},
    {cd:"羽沢", label:"羽沢"},
    {cd:"早宮", label:"早宮"},
    {cd:"光が丘", label:"光が丘"},
    {cd:"氷川台", label:"氷川台"},
    {cd:"東大泉", label:"東大泉"},
    {cd:"富士見台", label:"富士見台"},
    {cd:"平和台", label:"平和台"},
    {cd:"南大泉", label:"南大泉"},
    {cd:"南田中", label:"南田中"},
    {cd:"三原台", label:"三原台"},
    {cd:"谷原", label:"谷原"}
  
  ];
  city_mix(Nerima_station);

}

function setBunkyou() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Bunkyou_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"大塚", label:"大塚"},
    {cd:"音羽", label:"音羽"},
    {cd:"春日", label:"春日"},
    {cd:"小石川", label:"小石川"},
    {cd:"後楽", label:"後楽"},
    {cd:"小日向", label:"小日向"},
    {cd:"水道", label:"水道"},
    {cd:"関口", label:"関口"},
    {cd:"千石", label:"千石"},
    {cd:"千駄木", label:"千駄木"},
    {cd:"西片", label:"西片"},
    {cd:"根津", label:"根津"},
    {cd:"白山（１丁目）", label:"白山（１丁目）"},
    {cd:"白山（２〜５丁目）", label:"白山（２〜５丁目）"},
    {cd:"本駒込", label:"本駒込"},
    {cd:"本郷", label:"本郷"},
    {cd:"向丘", label:"向丘"},
    {cd:"目白台", label:"目白台"},
    {cd:"弥生", label:"弥生"},
    {cd:"湯島", label:"湯島"}
  
  ];
  city_mix(Bunkyou_station);

}

function setMinato() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Minato_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"赤坂", label:"赤坂"},
    {cd:"赤坂赤坂アークヒルズ・アーク森ビル", label:"赤坂赤坂アークヒルズ・アーク森ビル"},
    {cd:"赤坂赤坂パークビル", label:"赤坂赤坂パークビル"},
    {cd:"赤坂赤坂Ｂｉｚタワー", label:"赤坂赤坂Ｂｉｚタワー"},
    {cd:"赤坂ミッドタウン・タワー", label:"赤坂ミッドタウン・タワー"},
    {cd:"麻布十番", label:"麻布十番"},
    {cd:"麻布台", label:"麻布台"},
    {cd:"麻布永坂町", label:"麻布永坂町"},
    {cd:"麻布狸穴町", label:"麻布狸穴町"},
    {cd:"愛宕", label:"愛宕"},
    {cd:"愛宕愛宕グリーンヒルズＭＯＲＩタワー", label:"愛宕愛宕グリーンヒルズＭＯＲＩタワー"},
    {cd:"海岸（１、２丁目）", label:"海岸（１、２丁目）"},
    {cd:"海岸（３丁目）", label:"海岸（３丁目）"},
    {cd:"海岸東京ポートシティ竹芝オフィスタワー", label:"海岸東京ポートシティ竹芝オフィスタワー"},
    {cd:"港南", label:"港南"},
    {cd:"港南品川インターシティＡ棟", label:"港南品川インターシティＡ棟"},
    {cd:"港南品川インターシティＢ棟", label:"港南品川インターシティＢ棟"},
    {cd:"港南品川インターシティＣ棟", label:"港南品川インターシティＣ棟"},
    {cd:"芝（１〜３丁目）", label:"芝（１〜３丁目）"},
    {cd:"芝（４、５丁目）", label:"芝（４、５丁目）"},
    {cd:"芝浦（１丁目）", label:"芝浦（１丁目）"},
    {cd:"芝浦（２〜４丁目）", label:"芝浦（２〜４丁目）"},
    {cd:"芝公園", label:"芝公園"},
    {cd:"芝大門", label:"芝大門"},
    {cd:"白金", label:"白金"},
    {cd:"白金台", label:"白金台"},
    {cd:"新橋", label:"新橋"},
    {cd:"台場", label:"台場"},
    {cd:"高輪", label:"高輪"},
    {cd:"虎ノ門", label:"虎ノ門"},
    {cd:"虎ノ門神谷町トラストタワー", label:"虎ノ門神谷町トラストタワー"},
    {cd:"虎ノ門城山トラストタワー", label:"虎ノ門城山トラストタワー"},
    {cd:"虎ノ門虎ノ門ヒルズビジネスタワー", label:"虎ノ門虎ノ門ヒルズビジネスタワー"},
    {cd:"虎ノ門虎ノ門ヒルズ森タワー", label:"虎ノ門虎ノ門ヒルズ森タワー"},
    {cd:"西麻布", label:"西麻布"},
    {cd:"西新橋", label:"西新橋"},
    {cd:"浜松町", label:"浜松町"},
    {cd:"東麻布", label:"東麻布"},
    {cd:"東新橋", label:"東新橋"},
    {cd:"東新橋汐留シティセンター", label:"東新橋汐留シティセンター"},
    {cd:"東新橋汐留メディアタワー", label:"東新橋汐留メディアタワー"},
    {cd:"東新橋電通本社ビル", label:"東新橋電通本社ビル"},
    {cd:"東新橋東京汐留ビルディング", label:"東新橋東京汐留ビルディング"},
    {cd:"東新橋日本テレビタワー", label:"東新橋日本テレビタワー"},
    {cd:"三田", label:"三田"},
    {cd:"三田住友不動産三田ツインビル西館", label:"三田住友不動産三田ツインビル西館"},
    {cd:"南青山", label:"南青山"},
    {cd:"南麻布", label:"南麻布"},
    {cd:"元赤坂", label:"元赤坂"},
    {cd:"元麻布", label:"元麻布"},
    {cd:"六本木", label:"六本木"},
    {cd:"六本木泉ガーデンタワー", label:"六本木泉ガーデンタワー"},
    {cd:"六本木住友不動産六本木グランドタワー", label:"六本木住友不動産六本木グランドタワー"},
    {cd:"六本木六本木ヒルズ森タワー", label:"六本木六本木ヒルズ森タワー"}
  
  ];
  city_mix(Minato_station);

}

function setMeguro() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Meguro_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"青葉台", label:"青葉台"},
    {cd:"大岡山", label:"大岡山"},
    {cd:"大橋", label:"大橋"},
    {cd:"柿の木坂", label:"柿の木坂"},
    {cd:"上目黒", label:"上目黒"},
    {cd:"五本木", label:"五本木"},
    {cd:"駒場", label:"駒場"},
    {cd:"下目黒", label:"下目黒"},
    {cd:"自由が丘", label:"自由が丘"},
    {cd:"洗足", label:"洗足"},
    {cd:"平町", label:"平町"},
    {cd:"鷹番", label:"鷹番"},
    {cd:"中央町", label:"中央町"},
    {cd:"中町", label:"中町"},
    {cd:"中根", label:"中根"},
    {cd:"中目黒", label:"中目黒"},
    {cd:"原町", label:"原町"},
    {cd:"東が丘", label:"東が丘"},
    {cd:"東山", label:"東山"},
    {cd:"碑文谷", label:"碑文谷"},
    {cd:"三田", label:"三田"},
    {cd:"緑が丘", label:"緑が丘"},
    {cd:"南", label:"南"},
    {cd:"目黒", label:"目黒"},
    {cd:"目黒本町", label:"目黒本町"},
    {cd:"八雲", label:"八雲"},
    {cd:"祐天寺", label:"祐天寺"}
  
  ];
  city_mix(Meguro_station);

}

function setAkisima() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Akisima_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"朝日町", label:"朝日町"},
    {cd:"東町", label:"東町"},
    {cd:"大神町", label:"大神町"},
    {cd:"郷地町", label:"郷地町"},
    {cd:"上川原町", label:"上川原町"},
    {cd:"昭和町", label:"昭和町"},
    {cd:"田中町", label:"田中町"},
    {cd:"玉川町", label:"玉川町"},
    {cd:"築地町", label:"築地町"},
    {cd:"つつじが丘", label:"つつじが丘"},
    {cd:"中神町", label:"中神町"},
    {cd:"拝島町", label:"拝島町"},
    {cd:"福島町", label:"福島町"},
    {cd:"松原町", label:"松原町"},
    {cd:"緑町", label:"緑町"},
    {cd:"美堀町", label:"美堀町"},
    {cd:"宮沢町", label:"宮沢町"},
    {cd:"武蔵野", label:"武蔵野"},
    {cd:"もくせいの杜", label:"もくせいの杜"}
  
  ];
  city_mix(Akisima_station);

}

function setAkiruno() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Akiruno_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"秋川", label:"秋川"},
    {cd:"秋留", label:"秋留"},
    {cd:"網代", label:"網代"},
    {cd:"油平", label:"油平"},
    {cd:"雨間", label:"雨間"},
    {cd:"五日市", label:"五日市"},
    {cd:"伊奈", label:"伊奈"},
    {cd:"入野", label:"入野"},
    {cd:"上ノ台", label:"上ノ台"},
    {cd:"牛沼", label:"牛沼"},
    {cd:"小川", label:"小川"},
    {cd:"小川東", label:"小川東"},
    {cd:"乙津", label:"乙津"},
    {cd:"上代継", label:"上代継"},
    {cd:"切欠", label:"切欠"},
    {cd:"草花", label:"草花"},
    {cd:"小中野", label:"小中野"},
    {cd:"小峰台", label:"小峰台"},
    {cd:"小和田", label:"小和田"},
    {cd:"三内", label:"三内"},
    {cd:"下代継", label:"下代継"},
    {cd:"菅生", label:"菅生"},
    {cd:"瀬戸岡", label:"瀬戸岡"},
    {cd:"高尾", label:"高尾"},
    {cd:"舘谷", label:"舘谷"},
    {cd:"舘谷台", label:"舘谷台"},
    {cd:"戸倉", label:"戸倉"},
    {cd:"留原", label:"留原"},
    {cd:"二宮", label:"二宮"},
    {cd:"二宮東", label:"二宮東"},
    {cd:"野辺", label:"野辺"},
    {cd:"原小宮", label:"原小宮"},
    {cd:"引田", label:"引田"},
    {cd:"平沢", label:"平沢"},
    {cd:"平沢西", label:"平沢西"},
    {cd:"平沢東", label:"平沢東"},
    {cd:"深沢", label:"深沢"},
    {cd:"渕上", label:"渕上"},
    {cd:"山田", label:"山田"},
    {cd:"養沢", label:"養沢"},
    {cd:"横沢", label:"横沢"}
  
  ];
  city_mix(Akiruno_station);

}

function setInagi() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Inagi_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"大丸", label:"大丸"},
    {cd:"押立", label:"押立"},
    {cd:"向陽台", label:"向陽台"},
    {cd:"坂浜", label:"坂浜"},
    {cd:"長峰", label:"長峰"},
    {cd:"東長沼", label:"東長沼"},
    {cd:"平尾", label:"平尾"},
    {cd:"百村", label:"百村"},
    {cd:"矢野口", label:"矢野口"},
    {cd:"若葉台", label:"若葉台"}
  
  ];
  city_mix(Inagi_station);

}

function setOume() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Oume_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"天ケ瀬町", label:"天ケ瀬町"},
    {cd:"今井", label:"今井"},
    {cd:"今寺", label:"今寺"},
    {cd:"裏宿町", label:"裏宿町"},
    {cd:"大柳町", label:"大柳町"},
    {cd:"小曾木", label:"小曾木"},
    {cd:"勝沼", label:"勝沼"},
    {cd:"河辺町", label:"河辺町"},
    {cd:"上町", label:"上町"},
    {cd:"木野下", label:"木野下"},
    {cd:"黒沢", label:"黒沢"},
    {cd:"駒木町", label:"駒木町"},
    {cd:"沢井", label:"沢井"},
    {cd:"塩船", label:"塩船"},
    {cd:"新町", label:"新町"},
    {cd:"末広町", label:"末広町"},
    {cd:"住江町", label:"住江町"},
    {cd:"大門", label:"大門"},
    {cd:"滝ノ上町", label:"滝ノ上町"},
    {cd:"千ケ瀬町", label:"千ケ瀬町"},
    {cd:"富岡", label:"富岡"},
    {cd:"友田町", label:"友田町"},
    {cd:"仲町", label:"仲町"},
    {cd:"長淵", label:"長淵"},
    {cd:"成木", label:"成木"},
    {cd:"西分町", label:"西分町"},
    {cd:"根ケ布", label:"根ケ布"},
    {cd:"野上町", label:"野上町"},
    {cd:"梅郷", label:"梅郷"},
    {cd:"畑中", label:"畑中"},
    {cd:"東青梅", label:"東青梅"},
    {cd:"日向和田", label:"日向和田"},
    {cd:"吹上", label:"吹上"},
    {cd:"藤橋", label:"藤橋"},
    {cd:"二俣尾", label:"二俣尾"},
    {cd:"本町", label:"本町"},
    {cd:"御岳", label:"御岳"},
    {cd:"御岳山", label:"御岳山"},
    {cd:"御岳本町", label:"御岳本町"},
    {cd:"森下町", label:"森下町"},
    {cd:"師岡町", label:"師岡町"},
    {cd:"谷野", label:"谷野"},
    {cd:"柚木町", label:"柚木町"},
    {cd:"和田町", label:"和田町"}
  
  ];
  
  city_mix(Oume_station);

}

function setKiyose() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Kiyose_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"旭が丘", label:"旭が丘"},
    {cd:"梅園", label:"梅園"},
    {cd:"上清戸", label:"上清戸"},
    {cd:"下宿", label:"下宿"},
    {cd:"下清戸", label:"下清戸"},
    {cd:"竹丘", label:"竹丘"},
    {cd:"中清戸", label:"中清戸"},
    {cd:"中里", label:"中里"},
    {cd:"野塩", label:"野塩"},
    {cd:"松山", label:"松山"},
    {cd:"元町", label:"元町"}
  
  ];
  city_mix(Kiyose_station);

}

function setKunitati() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Kunitati_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"青柳", label:"青柳"},
    {cd:"石田", label:"石田"},
    {cd:"泉", label:"泉"},
    {cd:"北", label:"北"},
    {cd:"中", label:"中"},
    {cd:"西", label:"西"},
    {cd:"東", label:"東"},
    {cd:"富士見台", label:"富士見台"},
    {cd:"矢川", label:"矢川"},
    {cd:"谷保", label:"谷保"}
  
  ];
  city_mix(Kunitati_station);

}

function setKoganei() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Koganei_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"梶野町", label:"梶野町"},
    {cd:"桜町", label:"桜町"},
    {cd:"関野町", label:"関野町"},
    {cd:"中町", label:"中町"},
    {cd:"貫井南町", label:"貫井南町"},
    {cd:"貫井北町", label:"貫井北町"},
    {cd:"東町", label:"東町"},
    {cd:"本町", label:"本町"},
    {cd:"前原町", label:"前原町"},
    {cd:"緑町", label:"緑町"}
  
  ];
  city_mix(Koganei_station);

}

function setKokubunji() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Kokubunji_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"泉町", label:"泉町"},
    {cd:"北町", label:"北町"},
    {cd:"新町", label:"新町"},
    {cd:"高木町", label:"高木町"},
    {cd:"戸倉", label:"戸倉"},
    {cd:"内藤", label:"内藤"},
    {cd:"並木町", label:"並木町"},
    {cd:"西恋ケ窪", label:"西恋ケ窪"},
    {cd:"西町", label:"西町"},
    {cd:"西元町", label:"西元町"},
    {cd:"光町", label:"光町"},
    {cd:"東恋ケ窪", label:"東恋ケ窪"},
    {cd:"東戸倉", label:"東戸倉"},
    {cd:"東元町", label:"東元町"},
    {cd:"日吉町", label:"日吉町"},
    {cd:"富士本", label:"富士本"},
    {cd:"本多", label:"本多"},
    {cd:"本町", label:"本町"},
    {cd:"南町", label:"南町"}
  
  ];
  city_mix(Kokubunji_station);

}

function setKodaira() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Kodaira_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"大沼町", label:"大沼町"},
    {cd:"小川東町", label:"小川東町"},
    {cd:"小川西町", label:"小川西町"},
    {cd:"小川町", label:"小川町"},
    {cd:"学園東町", label:"学園東町"},
    {cd:"学園西町", label:"学園西町"},
    {cd:"喜平町", label:"喜平町"},
    {cd:"栄町", label:"栄町"},
    {cd:"上水新町", label:"上水新町"},
    {cd:"上水本町", label:"上水本町"},
    {cd:"上水南町", label:"上水南町"},
    {cd:"鈴木町", label:"鈴木町"},
    {cd:"たかの台", label:"たかの台"},
    {cd:"津田町", label:"津田町"},
    {cd:"天神町", label:"天神町"},
    {cd:"中島町", label:"中島町"},
    {cd:"仲町", label:"仲町"},
    {cd:"花小金井", label:"花小金井"},
    {cd:"花小金井南町", label:"花小金井南町"},
    {cd:"美園町", label:"美園町"},
    {cd:"御幸町", label:"御幸町"},
    {cd:"回田町", label:"回田町"}
  
  ];
  
  city_mix(Kodaira_station);

}

function setKomae() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Komae_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"和泉本町", label:"和泉本町"},
    {cd:"猪方", label:"猪方"},
    {cd:"岩戸南", label:"岩戸南"},
    {cd:"岩戸北", label:"岩戸北"},
    {cd:"駒井町", label:"駒井町"},
    {cd:"中和泉", label:"中和泉"},
    {cd:"西和泉", label:"西和泉"},
    {cd:"西野川", label:"西野川"},
    {cd:"東和泉", label:"東和泉"},
    {cd:"東野川", label:"東野川"},
    {cd:"元和泉", label:"元和泉"}
  
  ];
  city_mix(Komae_station);

}

function setTatikawa() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Tatikawa_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"曙町", label:"曙町"},
    {cd:"泉町", label:"泉町"},
    {cd:"一番町", label:"一番町"},
    {cd:"柏町", label:"柏町"},
    {cd:"上砂町", label:"上砂町"},
    {cd:"幸町", label:"幸町"},
    {cd:"栄町", label:"栄町"},
    {cd:"柴崎町", label:"柴崎町"},
    {cd:"砂川町", label:"砂川町"},
    {cd:"高松町", label:"高松町"},
    {cd:"錦町", label:"錦町"},
    {cd:"西砂町", label:"西砂町"},
    {cd:"羽衣町", label:"羽衣町"},
    {cd:"富士見町", label:"富士見町"},
    {cd:"緑町", label:"緑町"},
    {cd:"若葉町", label:"若葉町"}
  
  ];
  city_mix(Tatikawa_station);

}

function setTama() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Tama_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"愛宕", label:"愛宕"},
    {cd:"一ノ宮", label:"一ノ宮"},
    {cd:"落合", label:"落合"},
    {cd:"落川", label:"落川"},
    {cd:"貝取", label:"貝取"},
    {cd:"唐木田", label:"唐木田"},
    {cd:"乞田", label:"乞田"},
    {cd:"桜ヶ丘", label:"桜ヶ丘"},
    {cd:"山王下", label:"山王下"},
    {cd:"諏訪", label:"諏訪"},
    {cd:"関戸", label:"関戸"},
    {cd:"鶴牧", label:"鶴牧"},
    {cd:"豊ヶ丘", label:"豊ヶ丘"},
    {cd:"中沢", label:"中沢"},
    {cd:"永山", label:"永山"},
    {cd:"東寺方", label:"東寺方"},
    {cd:"聖ヶ丘", label:"聖ヶ丘"},
    {cd:"馬引沢", label:"馬引沢"},
    {cd:"南野", label:"南野"},
    {cd:"百草", label:"百草"},
    {cd:"連光寺", label:"連光寺"},
    {cd:"和田", label:"和田"}
  
  ];
  city_mix(Tama_station);

}

function setTyoufu() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Tyoufu_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"入間町", label:"入間町"},
    {cd:"上石原", label:"上石原"},
    {cd:"菊野台", label:"菊野台"},
    {cd:"国領町", label:"国領町"},
    {cd:"小島町", label:"小島町"},
    {cd:"佐須町", label:"佐須町"},
    {cd:"柴崎", label:"柴崎"},
    {cd:"下石原", label:"下石原"},
    {cd:"深大寺東町", label:"深大寺東町"},
    {cd:"深大寺南町", label:"深大寺南町"},
    {cd:"深大寺北町", label:"深大寺北町"},
    {cd:"深大寺元町", label:"深大寺元町"},
    {cd:"仙川町", label:"仙川町"},
    {cd:"染地", label:"染地"},
    {cd:"多摩川", label:"多摩川"},
    {cd:"調布ケ丘", label:"調布ケ丘"},
    {cd:"飛田給", label:"飛田給"},
    {cd:"西つつじケ丘", label:"西つつじケ丘"},
    {cd:"西町", label:"西町"},
    {cd:"野水", label:"野水"},
    {cd:"東つつじケ丘", label:"東つつじケ丘"},
    {cd:"富士見町", label:"富士見町"},
    {cd:"布田", label:"布田"},
    {cd:"緑ケ丘", label:"緑ケ丘"},
    {cd:"八雲台", label:"八雲台"},
    {cd:"若葉町", label:"若葉町"}
  
  ];
  city_mix(Tyoufu_station);

}

function setNisitoukyou() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Nisitoukyou_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"泉町", label:"泉町"},
    {cd:"北原町", label:"北原町"},
    {cd:"北町", label:"北町"},
    {cd:"栄町", label:"栄町"},
    {cd:"芝久保町", label:"芝久保町"},
    {cd:"下保谷", label:"下保谷"},
    {cd:"新町", label:"新町"},
    {cd:"住吉町", label:"住吉町"},
    {cd:"田無町", label:"田無町"},
    {cd:"中町", label:"中町"},
    {cd:"西原町", label:"西原町"},
    {cd:"東町", label:"東町"},
    {cd:"東伏見", label:"東伏見"},
    {cd:"ひばりが丘", label:"ひばりが丘"},
    {cd:"ひばりが丘北", label:"ひばりが丘北"},
    {cd:"富士町", label:"富士町"},
    {cd:"保谷町", label:"保谷町"},
    {cd:"緑町", label:"緑町"},
    {cd:"南町", label:"南町"},
    {cd:"向台町", label:"向台町"},
    {cd:"柳沢", label:"柳沢"},
    {cd:"谷戸町", label:"谷戸町"}
  
  ];
  city_mix(Nisitoukyou_station);

}

function setHatiouji() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Hatiouji_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"暁町", label:"暁町"},
    {cd:"旭町", label:"旭町"},
    {cd:"東町", label:"東町"},
    {cd:"石川町", label:"石川町"},
    {cd:"泉町", label:"泉町"},
    {cd:"犬目町", label:"犬目町"},
    {cd:"上野町", label:"上野町"},
    {cd:"打越町", label:"打越町"},
    {cd:"宇津木町", label:"宇津木町"},
    {cd:"宇津貫町", label:"宇津貫町"},
    {cd:"梅坪町", label:"梅坪町"},
    {cd:"裏高尾町", label:"裏高尾町"},
    {cd:"追分町", label:"追分町"},
    {cd:"大塚", label:"大塚"},
    {cd:"大船町", label:"大船町"},
    {cd:"大谷町", label:"大谷町"},
    {cd:"大横町", label:"大横町"},
    {cd:"大和田町", label:"大和田町"},
    {cd:"小門町", label:"小門町"},
    {cd:"尾崎町", label:"尾崎町"},
    {cd:"小津町", label:"小津町"},
    {cd:"鹿島", label:"鹿島"},
    {cd:"加住町", label:"加住町"},
    {cd:"片倉町", label:"片倉町"},
    {cd:"叶谷町", label:"叶谷町"},
    {cd:"上壱分方町", label:"上壱分方町"},
    {cd:"上恩方町", label:"上恩方町"},
    {cd:"上川町", label:"上川町"},
    {cd:"上柚木", label:"上柚木"},
    {cd:"川口町", label:"川口町"},
    {cd:"川町", label:"川町"},
    {cd:"北野台", label:"北野台"},
    {cd:"北野町", label:"北野町"},
    {cd:"絹ケ丘", label:"絹ケ丘"},
    {cd:"清川町", label:"清川町"},
    {cd:"椚田町", label:"椚田町"},
    {cd:"久保山町", label:"久保山町"},
    {cd:"越野", label:"越野"},
    {cd:"小比企町", label:"小比企町"},
    {cd:"小宮町", label:"小宮町"},
    {cd:"子安町", label:"子安町"},
    {cd:"左入町", label:"左入町"},
    {cd:"散田町", label:"散田町"},
    {cd:"下恩方町", label:"下恩方町"},
    {cd:"下柚木", label:"下柚木"},
    {cd:"城山手", label:"城山手"},
    {cd:"新町", label:"新町"},
    {cd:"諏訪町", label:"諏訪町"},
    {cd:"千人町", label:"千人町"},
    {cd:"台町", label:"台町"},
    {cd:"大楽寺町", label:"大楽寺町"},
    {cd:"平町", label:"平町"},
    {cd:"高尾町", label:"高尾町"},
    {cd:"高倉町", label:"高倉町"},
    {cd:"高月町", label:"高月町"},
    {cd:"滝山町", label:"滝山町"},
    {cd:"館町", label:"館町"},
    {cd:"田町", label:"田町"},
    {cd:"丹木町", label:"丹木町"},
    {cd:"寺田町", label:"寺田町"},
    {cd:"寺町", label:"寺町"},
    {cd:"天神町", label:"天神町"},
    {cd:"廿里町", label:"廿里町"},
    {cd:"戸吹町", label:"戸吹町"},
    {cd:"中町", label:"中町"},
    {cd:"中野上町", label:"中野上町"},
    {cd:"中野山王", label:"中野山王"},
    {cd:"中野町", label:"中野町"},
    {cd:"中山", label:"中山"},
    {cd:"長沼町", label:"長沼町"},
    {cd:"長房町", label:"長房町"},
    {cd:"七国", label:"七国"},
    {cd:"並木町", label:"並木町"},
    {cd:"楢原町", label:"楢原町"},
    {cd:"南陽台", label:"南陽台"},
    {cd:"西浅川町", label:"西浅川町"},
    {cd:"西片倉", label:"西片倉"},
    {cd:"西寺方町", label:"西寺方町"},
    {cd:"弐分方町", label:"弐分方町"},
    {cd:"狭間町", label:"狭間町"},
    {cd:"八幡町", label:"八幡町"},
    {cd:"初沢町", label:"初沢町"},
    {cd:"東浅川町", label:"東浅川町"},
    {cd:"東中野", label:"東中野"},
    {cd:"兵衛", label:"兵衛"},
    {cd:"日吉町", label:"日吉町"},
    {cd:"平岡町", label:"平岡町"},
    {cd:"富士見町", label:"富士見町"},
    {cd:"別所", label:"別所"},
    {cd:"堀之内", label:"堀之内"},
    {cd:"本郷町", label:"本郷町"},
    {cd:"本町", label:"本町"},
    {cd:"松が谷", label:"松が谷"},
    {cd:"松木", label:"松木"},
    {cd:"丸山町", label:"丸山町"},
    {cd:"三崎町", label:"三崎町"},
    {cd:"みつい台", label:"みつい台"},
    {cd:"緑町", label:"緑町"},
    {cd:"南浅川町", label:"南浅川町"},
    {cd:"南大沢", label:"南大沢"},
    {cd:"南新町", label:"南新町"},
    {cd:"南町", label:"南町"},
    {cd:"みなみ野", label:"みなみ野"},
    {cd:"宮下町", label:"宮下町"},
    {cd:"美山町", label:"美山町"},
    {cd:"明神町", label:"明神町"},
    {cd:"めじろ台", label:"めじろ台"},
    {cd:"元八王子町", label:"元八王子町"},
    {cd:"元本郷町", label:"元本郷町"},
    {cd:"元横山町", label:"元横山町"},
    {cd:"八木町", label:"八木町"},
    {cd:"谷野町", label:"谷野町"},
    {cd:"山田町", label:"山田町"},
    {cd:"鑓水", label:"鑓水"},
    {cd:"八日町", label:"八日町"},
    {cd:"横川町", label:"横川町"},
    {cd:"横山町", label:"横山町"},
    {cd:"四谷町", label:"四谷町"},
    {cd:"万町", label:"万町"}
  
  ];
  city_mix(Hatiouji_station);

}

function setHamura() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Hamura_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"小作台", label:"小作台"},
    {cd:"川崎", label:"川崎"},
    {cd:"五ノ神", label:"五ノ神"},
    {cd:"栄町", label:"栄町"},
    {cd:"神明台", label:"神明台"},
    {cd:"玉川", label:"玉川"},
    {cd:"羽", label:"羽"},
    {cd:"羽加美", label:"羽加美"},
    {cd:"羽中", label:"羽中"},
    {cd:"羽東", label:"羽東"},
    {cd:"羽西", label:"羽西"},
    {cd:"富士見平", label:"富士見平"},
    {cd:"双葉町", label:"双葉町"},
    {cd:"緑ケ丘", label:"緑ケ丘"}
  
  ];
  city_mix(Hamura_station);

}

function setHigasikurume() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Higasikurume_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"上の原", label:"上の原"},
    {cd:"学園町", label:"学園町"},
    {cd:"金山町", label:"金山町"},
    {cd:"小山", label:"小山"},
    {cd:"幸町", label:"幸町"},
    {cd:"下里", label:"下里"},
    {cd:"新川町", label:"新川町"},
    {cd:"神宝町", label:"神宝町"},
    {cd:"浅間町", label:"浅間町"},
    {cd:"大門町", label:"大門町"},
    {cd:"滝山", label:"滝山"},
    {cd:"中央町", label:"中央町"},
    {cd:"野火止", label:"野火止"},
    {cd:"八幡町", label:"八幡町"},
    {cd:"氷川台", label:"氷川台"},
    {cd:"東本町", label:"東本町"},
    {cd:"ひばりが丘団地", label:"ひばりが丘団地"},
    {cd:"本町", label:"本町"},
    {cd:"前沢", label:"前沢"},
    {cd:"南沢", label:"南沢"},
    {cd:"南町", label:"南町"},
    {cd:"柳窪", label:"柳窪"},
    {cd:"弥生", label:"弥生"}
  
  ];
  city_mix(Higasikurume_station);

}

function setHigasimurayama() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Higasimurayama_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"青葉町", label:"青葉町"},
    {cd:"秋津町", label:"秋津町"},
    {cd:"恩多町", label:"恩多町"},
    {cd:"久米川町", label:"久米川町"},
    {cd:"栄町", label:"栄町"},
    {cd:"諏訪町", label:"諏訪町"},
    {cd:"多摩湖町", label:"多摩湖町"},
    {cd:"野口町", label:"野口町"},
    {cd:"萩山町", label:"萩山町"},
    {cd:"富士見町", label:"富士見町"},
    {cd:"本町", label:"本町"},
    {cd:"美住町", label:"美住町"},
    {cd:"廻田町", label:"廻田町"}
  
  ];  
  city_mix(Higasimurayama_station);

}

function setHigasiyamato() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Higasiyamato_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"芋窪", label:"芋窪"},
    {cd:"上北台", label:"上北台"},
    {cd:"清原", label:"清原"},
    {cd:"湖畔", label:"湖畔"},
    {cd:"桜が丘", label:"桜が丘"},
    {cd:"狭山", label:"狭山"},
    {cd:"清水", label:"清水"},
    {cd:"新堀", label:"新堀"},
    {cd:"蔵敷", label:"蔵敷"},
    {cd:"高木", label:"高木"},
    {cd:"立野", label:"立野"},
    {cd:"多摩湖", label:"多摩湖"},
    {cd:"中央", label:"中央"},
    {cd:"仲原", label:"仲原"},
    {cd:"奈良橋", label:"奈良橋"},
    {cd:"南街", label:"南街"},
    {cd:"向原", label:"向原"}
  
  ];
  city_mix(Higasiyamato_station);

}

function setHino() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Hino_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"旭が丘", label:"旭が丘"},
    {cd:"新井", label:"新井"},
    {cd:"石田", label:"石田"},
    {cd:"大坂上", label:"大坂上"},
    {cd:"落川", label:"落川"},
    {cd:"上田", label:"上田"},
    {cd:"川辺堀之内", label:"川辺堀之内"},
    {cd:"栄町", label:"栄町"},
    {cd:"さくら町", label:"さくら町"},
    {cd:"下田", label:"下田"},
    {cd:"新町", label:"新町"},
    {cd:"神明", label:"神明"},
    {cd:"高幡", label:"高幡"},
    {cd:"多摩平", label:"多摩平"},
    {cd:"豊田（大字）", label:"豊田（大字）"},
    {cd:"豊田（丁目）", label:"豊田（丁目）"},
    {cd:"西平山", label:"西平山"},
    {cd:"東豊田", label:"東豊田"},
    {cd:"東平山", label:"東平山"},
    {cd:"日野", label:"日野"},
    {cd:"日野台", label:"日野台"},
    {cd:"日野本町", label:"日野本町"},
    {cd:"平山", label:"平山"},
    {cd:"富士町", label:"富士町"},
    {cd:"程久保", label:"程久保"},
    {cd:"万願寺", label:"万願寺"},
    {cd:"三沢", label:"三沢"},
    {cd:"南平", label:"南平"},
    {cd:"宮", label:"宮"},
    {cd:"百草", label:"百草"}
  
  ];
  city_mix(Hino_station);

}

function setFutyuu() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Futyuu_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"朝日町", label:"朝日町"},
    {cd:"押立町", label:"押立町"},
    {cd:"片町", label:"片町"},
    {cd:"北山町", label:"北山町"},
    {cd:"寿町", label:"寿町"},
    {cd:"小柳町", label:"小柳町"},
    {cd:"是政", label:"是政"},
    {cd:"幸町", label:"幸町"},
    {cd:"栄町", label:"栄町"},
    {cd:"清水が丘", label:"清水が丘"},
    {cd:"白糸台", label:"白糸台"},
    {cd:"新町", label:"新町"},
    {cd:"住吉町", label:"住吉町"},
    {cd:"浅間町", label:"浅間町"},
    {cd:"多磨町", label:"多磨町"},
    {cd:"天神町", label:"天神町"},
    {cd:"東芝町", label:"東芝町"},
    {cd:"西原町", label:"西原町"},
    {cd:"西府町", label:"西府町"},
    {cd:"日鋼町", label:"日鋼町"},
    {cd:"日新町", label:"日新町"},
    {cd:"八幡町", label:"八幡町"},
    {cd:"晴見町", label:"晴見町"},
    {cd:"日吉町", label:"日吉町"},
    {cd:"府中町", label:"府中町"},
    {cd:"分梅町", label:"分梅町"},
    {cd:"本宿町32", label:"本宿町32"},
    {cd:"本町", label:"本町"},
    {cd:"緑町", label:"緑町"},
    {cd:"南町", label:"南町"},
    {cd:"宮西町", label:"宮西町"},
    {cd:"宮町", label:"宮町"},
    {cd:"美好町", label:"美好町"},
    {cd:"武蔵台", label:"武蔵台"},
    {cd:"紅葉丘", label:"紅葉丘"},
    {cd:"矢崎町", label:"矢崎町"},
    {cd:"四谷", label:"四谷"},
    {cd:"若松町", label:"若松町"}
  
  ];
  city_mix(Futyuu_station);

}

function setFussa() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Fussa_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"牛浜", label:"牛浜"},
    {cd:"加美平", label:"加美平"},
    {cd:"北田園", label:"北田園"},
    {cd:"熊川", label:"熊川"},
    {cd:"熊川二宮", label:"熊川二宮"},
    {cd:"志茂", label:"志茂"},
    {cd:"東町", label:"東町"},
    {cd:"福生", label:"福生"},
    {cd:"福生二宮", label:"福生二宮"},
    {cd:"本町", label:"本町"},
    {cd:"南田園", label:"南田園"},
    {cd:"武蔵野台", label:"武蔵野台"},
    {cd:"横田基地内", label:"横田基地内"}
  
  ];
  city_mix(Fussa_station);

}

function setMatida() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Matida_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"相原町", label:"相原町"},
    {cd:"旭町", label:"旭町"},
    {cd:"大蔵町", label:"大蔵町"},
    {cd:"小川", label:"小川"},
    {cd:"小野路町", label:"小野路町"},
    {cd:"小山ヶ丘", label:"小山ヶ丘"},
    {cd:"小山田桜台", label:"小山田桜台"},
    {cd:"小山町", label:"小山町"},
    {cd:"金井", label:"金井"},
    {cd:"金井ヶ丘", label:"金井ヶ丘"},
    {cd:"金井町", label:"金井町"},
    {cd:"金森", label:"金森"},
    {cd:"金森東", label:"金森東"},
    {cd:"上小山田町", label:"上小山田町"},
    {cd:"木曽西", label:"木曽西"},
    {cd:"木曽東", label:"木曽東"},
    {cd:"木曽町", label:"木曽町"},
    {cd:"高ヶ坂", label:"高ヶ坂"},
    {cd:"下小山田町", label:"下小山田町"},
    {cd:"真光寺", label:"真光寺"},
    {cd:"真光寺町", label:"真光寺町"},
    {cd:"図師町", label:"図師町"},
    {cd:"忠生", label:"忠生"},
    {cd:"玉川学園", label:"玉川学園"},
    {cd:"つくし野", label:"つくし野"},
    {cd:"鶴川", label:"鶴川"},
    {cd:"鶴間", label:"鶴間"},
    {cd:"常盤町", label:"常盤町"},
    {cd:"中町", label:"中町"},
    {cd:"成瀬", label:"成瀬"},
    {cd:"成瀬が丘", label:"成瀬が丘"},
    {cd:"成瀬台", label:"成瀬台"},
    {cd:"西成瀬", label:"西成瀬"},
    {cd:"根岸", label:"根岸"},
    {cd:"根岸町", label:"根岸町"},
    {cd:"能ヶ谷", label:"能ヶ谷"},
    {cd:"野津田町", label:"野津田町"},
    {cd:"原町田", label:"原町田"},
    {cd:"東玉川学園", label:"東玉川学園"},
    {cd:"広袴", label:"広袴"},
    {cd:"広袴町", label:"広袴町"},
    {cd:"藤の台（１、２丁目）", label:"藤の台（１、２丁目）"},
    {cd:"藤の台（３丁目）", label:"藤の台（３丁目）"},
    {cd:"本町田", label:"本町田"},
    {cd:"南大谷", label:"南大谷"},
    {cd:"南つくし野", label:"南つくし野"},
    {cd:"南成瀬", label:"南成瀬"},
    {cd:"南町田", label:"南町田"},
    {cd:"三輪町", label:"三輪町"},
    {cd:"三輪緑山", label:"三輪緑山"},
    {cd:"森野", label:"森野"},
    {cd:"薬師台", label:"薬師台"},
    {cd:"矢部町", label:"矢部町"},
    {cd:"山崎", label:"山崎"},
    {cd:"山崎町", label:"山崎町"}
  
  ];
  
  city_mix(Matida_station);

}

function setMitaka() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Mitaka_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"井口", label:"井口"},
    {cd:"井の頭", label:"井の頭"},
    {cd:"大沢", label:"大沢"},
    {cd:"上連雀", label:"上連雀"},
    {cd:"北野", label:"北野"},
    {cd:"下連雀", label:"下連雀"},
    {cd:"新川", label:"新川"},
    {cd:"深大寺", label:"深大寺"},
    {cd:"中原", label:"中原"},
    {cd:"野崎", label:"野崎"},
    {cd:"牟礼", label:"牟礼"}
    
  ];
  city_mix(Mitaka_station);

}

function setMusasino() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Musasino_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"吉祥寺本町", label:"吉祥寺本町"},
    {cd:"吉祥寺東町", label:"吉祥寺東町"},
    {cd:"吉祥寺南町", label:"吉祥寺南町"},
    {cd:"吉祥寺北町", label:"吉祥寺北町"},
    {cd:"境南町", label:"境南町"},
    {cd:"御殿山", label:"御殿山"},
    {cd:"境", label:"境"},
    {cd:"桜堤", label:"桜堤"},
    {cd:"関前", label:"関前"},
    {cd:"中町", label:"中町"},
    {cd:"西久保", label:"西久保"},
    {cd:"緑町", label:"緑町"},
    {cd:"八幡町", label:"八幡町"}
    
  ];
  city_mix(Musasino_station);

}

function setMusasimurayama() {

  // 市区郡が選択されたときに駅名フォームの'選択してくだいさい'をnull

  town_id.textContent = null;

  // 駅の選択肢
  var Musasimurayama_station = [
    {cd:"", label:"選択して下さい"},
  
    {cd:"伊奈平", label:"伊奈平"},
    {cd:"榎", label:"榎"},
    {cd:"大南", label:"大南"},
    {cd:"学園", label:"学園"},
    {cd:"岸", label:"岸"},
    {cd:"残堀", label:"残堀"},
    {cd:"神明", label:"神明"},
    {cd:"中央", label:"中央"},
    {cd:"中藤", label:"中藤"},
    {cd:"中原", label:"中原"},
    {cd:"本町", label:"本町"},
    {cd:"三ツ木", label:"三ツ木"},
    {cd:"三ツ藤", label:"三ツ藤"},
    {cd:"緑が丘", label:"緑が丘"}
  
  ];
  
  city_mix(Musasimurayama_station);

}
