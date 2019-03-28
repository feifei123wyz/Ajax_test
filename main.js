// ロードするファイルのパス
let path = "country.json";

// ボタンのクリックのイベント
let btn = document.getElementById("myBtn");
btn.addEventListener("click", loadFile, false);

// テキストファイルをロードする
function loadFile() {
  let req = new XMLHttpRequest();
  req.responseType = "json";
  req.open("GET", path, true);
  // loadイベントのイベントリスナーを設定
  req.addEventListener("load", function(ev) {
    if ((ev.target.status == 200) && (ev.target.readyState == 4)) {
      // document.getElementById("myArea").innerHTML = ev.target.responseText;
      showData(ev.target.response);
    } else {
      console.log("読み込めませんでした");
    }
  });
  req.send(null);
}

function showData(response){
  let country = response.country;
  let str = "";
  for(let i = 0; i < country.length;i++){
    str += country[i].countryname + " " + country[i].capital + "<br/>";
  }
  let myArea = document.getElementById("myArea");
  myArea.innerHTML = str;
}