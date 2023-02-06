let books = [];  //[0]はタグ一覧、以降にbook情報
books[0] = ['---'];
let junban = [];  //bookIDの羅列
let isThirdSort = false;  //ソートが「特定のノウハウ数順」状態の時に「ノウハウの絞り込み」をした際、
                          //絞り込み条件外のノウハウを除外して再ソートするため。
                          //例　「特定のノウハウ」でvo適正を設定した後、vo適正をlv5以上に絞り込んだら、
                          //    「特定のノウハウ」からvo適正lv1~4を除外して再ソートする

document.getElementById('dllink').addEventListener('click', (event) => {
  // JSON ファイルを表す Blob オブジェクトを生成
  const json = JSON.stringify(books);
  const blob = new Blob([json], { type: 'application/json' });
 
  // a 要素の href 属性に Object URL を セット
  event.currentTarget.href = window.URL.createObjectURL(blob);
});



for(let n=0;n<nouhau.length;n++){  //nouhauNameを作成
  nouhauName[n] = $(nouhau[n] + 'Tr').children[0].innerHTML;
  //ついでにチェックボックスの作成
  if(n>=3 && n<116){
    siboriJouken[nouhau[n]] = {};
    siboriJouken[nouhau[n]]['lv'] = 1;
    siboriJouken[nouhau[n]]['hyouji'] = 1;
    
    let ele = document.createElement('input');
    ele.type = 'checkbox';
    ele.id = 'nouhauCheckbox1_' + n;
    $('nouhauCheckbox1').appendChild(ele);
    let ele2 = document.createElement('span');
    ele2.innerHTML = nouhauName[n] + '<br>';
    $('nouhauCheckbox1').appendChild(ele2);
        
    let ele3 = document.createElement('h5');
    ele3.innerHTML = nouhauName[n];
    $('nouhauCheckbox2').appendChild(ele3);
    let ele4 = document.createElement('input');
    ele4.type = 'radio';
    ele4.name = 'nouhauHihyouji' + n;
    ele4.value = 0;
    $('nouhauCheckbox2').appendChild(ele4);
    let ele5 = document.createElement('span');
    ele5.innerHTML = '非表示  ';
    $('nouhauCheckbox2').appendChild(ele5);
    let ele6 = document.createElement('input');
    ele6.type = 'radio';
    ele6.name = 'nouhauHihyouji' + n;
    ele6.value = 1;
    ele6.checked = true;
    $('nouhauCheckbox2').appendChild(ele6);
    let ele7 = document.createElement('span');
    ele7.innerHTML = '表示  <br>';
    $('nouhauCheckbox2').appendChild(ele7);
    let ele8 = document.createElement('input');
    ele8.type = 'radio';
    ele8.name = 'nouhauSibori' + n;
    ele8.value = 0;
    $('nouhauCheckbox2').appendChild(ele8);
    let ele9 = document.createElement('span');
    ele9.innerHTML = '含まない  ';
    $('nouhauCheckbox2').appendChild(ele9);
    let ele10 = document.createElement('input');
    ele10.type = 'radio';
    ele10.name = 'nouhauSibori' + n;
    ele10.value = 1;
    ele10.checked = true;
    $('nouhauCheckbox2').appendChild(ele10);
    let ele11 = document.createElement('span');
    ele11.innerHTML = 'どちらでもよい  ';
    $('nouhauCheckbox2').appendChild(ele11);
    let ele12 = document.createElement('input');
    ele12.type = 'radio';
    ele12.name = 'nouhauSibori' + n;
    ele12.value = 2;
    $('nouhauCheckbox2').appendChild(ele12);    
    let ele13 = document.createElement('span');
    ele13.innerHTML = '含む  <br>(含むとしたら';
    $('nouhauCheckbox2').appendChild(ele13);
    if(n==3){  //頭ノウハウ
      let el1 = document.createElement('select');
      el1.id = 'nouhauSibori3_2';
      $('nouhauCheckbox2').appendChild(el1);
      for(let num=0;num<headHenkan.length;num++){
        let op = document.createElement('option');
        op.value = num;
        op.innerHTML = headHenkan[num];
        if(num==0){op.innerHTML = '(指定なし)';}
        $('nouhauSibori3_2').appendChild(op);
      }
      let el2 = document.createElement('span');
      el2.innerHTML = '以上,  ';
      $('nouhauCheckbox2').appendChild(el2);
    }else if(n==4){  //ファンの声援
      let el1 = document.createElement('select');
      el1.id = 'nouhauSibori4_2';
      $('nouhauCheckbox2').appendChild(el1);
      for (let num = 1; num < plusHenkan.length; num++) {
        let op = document.createElement('option');
        op.value = num;
        op.innerHTML = plusHenkan[num];
        $('nouhauSibori4_2').appendChild(op);
      }
      let el2 = document.createElement('span');
      el2.innerHTML = '以上,  ';
      $('nouhauCheckbox2').appendChild(el2);        
    }else if(n==5){  //思い出(ノウハウ)
      let el1 = document.createElement('select');
      el1.id = 'nouhauSibori5_2';
      $('nouhauCheckbox2').appendChild(el1);
      for (let num = 2; num < plusHenkan.length; num++) {
        let op = document.createElement('option');
        op.value = num;
        op.innerHTML = plusHenkan[num];
        $('nouhauSibori5_2').appendChild(op);
      }
      let el2 = document.createElement('span');
      el2.innerHTML = '以上,  ';
      $('nouhauCheckbox2').appendChild(el2);
    }else if(nouhauName[n] == 'ファン感謝祭クリア' || nouhauName[n] == 'LP大成功(SP)' || nouhauName[n] == 'エキシビションマッチ'){
      let el1 = document.createElement('select');
      el1.id = 'nouhauSibori' + n + '_2';
      $('nouhauCheckbox2').appendChild(el1);
      for (let num = 1; num < plusHenkan.length; num++) {
        let op = document.createElement('option');
        op.value = num;
        op.innerHTML = plusHenkan[num];
        $('nouhauSibori' + n + '_2').appendChild(op);
      }
      let el2 = document.createElement('span');
      el2.innerHTML = '以上,  ';
      $('nouhauCheckbox2').appendChild(el2);
    }else if(nouhauName[n] == 'エントリー目標達成' || nouhauName[n] == 'ノービス目標達成' || nouhauName[n] == 'ミドル目標達成' || nouhauName[n] == 'エキスパート目標達成'){
      let el1 = document.createElement('select');
      el1.id = 'nouhauSibori' + n + '_2';
      $('nouhauCheckbox2').appendChild(el1);
      for (let num = 0; num < vodaviHenkan.length; num++) {
        let op = document.createElement('option');
        op.value = num;
        op.innerHTML = vodaviHenkan[num];
        if(num==0){op.innerHTML = '(指定なし)';}
        $('nouhauSibori' + n + '_2').appendChild(op);
      }
      let el2 = document.createElement('span');
      el2.innerHTML = ',  ';
      $('nouhauCheckbox2').appendChild(el2);
    }
    let ele14 = document.createElement('span');
    ele14.innerHTML = 'Lv';
    $('nouhauCheckbox2').appendChild(ele14);
    let ele15 = document.createElement('select');
    ele15.id = 'nouhauSibori' + n + '_1';
    $('nouhauCheckbox2').appendChild(ele15);
    for(let lv=1;lv<=5;lv++){
      let op = document.createElement('option');
      op.value = lv;
      op.innerHTML = lv;
      $('nouhauSibori' + n + '_1').appendChild(op);
    }
    let ele16 = document.createElement('span');
    ele16.innerHTML = '以上)<br><hr>';
    $('nouhauCheckbox2').appendChild(ele16);
    
    let ele17 = document.createElement('td');
    ele17.id = nouhau[n] + 'Td';
    $(nouhau[n] + 'Tr').appendChild(ele17);
    let ele18 = document.createElement('button');
    ele18.id = nouhau[n] + 'button';
    ele18.onclick = hihyoujiButton;
    ele18.innerHTML = '×';
    ele18.value = n;
    $(nouhau[n] + 'Td').appendChild(ele18);
    //チェックボックス作成終わり
  }
}




window.onload = function(){
  $('tourokuButton1').addEventListener('click',touroku);
  $('tourokuButton2').addEventListener('click',touroku);
  
  //indexeddbから読み込む
  var storeName = 'nouhauStore';
  
  var openReq = indexedDB.open('nouhaubookkanri', 1);
  // オブジェクトストアの作成・削除はDBの更新時しかできないので、バージョンを指定して更新
  
  openReq.onupgradeneeded = function(event) {
    var db = event.target.result;
    db.createObjectStore(storeName, { keyPath: 'id' })
  }
  var keyValue = 'A1';
  openReq.onsuccess = function(event) {
    var db = event.target.result;
    var trans = db.transaction(storeName, 'readonly');
    var store = trans.objectStore(storeName);
    var getReq = store.get(keyValue);
  
    getReq.onsuccess = function(event) {
      if(event.target.result){
        let data = event.target.result['data']; // {id : 'A1', data : []}
        datahanei(data);
      }
    }
    db.close();
  }
};

function touroku(){
  books.push(new book);
  let thisid = books.length-1;
  console.log(books[thisid]);
  junban.push(thisid);
  
  hyouji('tuika');
  
}

function hyouji(option){
  //option == null　junbanの順に追加で反映する。
  //option == 'tuika'　booksの最後尾のみ追加で反映する。
  for(let k = 0 ;k<junban.length ;k++){
    let n = junban[k];  //k:junbanの何番目か　n:bookid
    
    if(option == 'tuika'){n = books.length - 1;}
    if(books[n] == 'deleated'){continue;}
    
    for(let m = 0;m<118;m++){
      
      var ele = document.createElement('td');
      ele.id = 'td' +  n  + '_' + ( m + 1 ) ;
      ele.innerHTML = books[n][nouhau[m]];
      if(m==2){
        ele.innerHTML = books[0][ books[n][nouhau[m]][0] ] + '<br>' + books[0][ books[n][nouhau[m]][1] ];
      }
      if(m==3){
        ele.innerHTML = headHenkan[books[n][nouhau[m] + 'X']] + books[n][nouhau[m]];
      }
      
      if(m==4 || m==5 || m==26 || m==68 || m==114){
        ele.innerHTML = plusHenkan[books[n][nouhau[m] + 'X']] + books[n][nouhau[m]];
      }
      
      if (m == 110 || m == 111 || m == 112 || m == 113) {
        ele.innerHTML = vodaviHenkan[books[n][nouhau[m] + 'X']] + books[n][nouhau[m]];
      }
      
      if(m==117){
        ele.innerHTML = n;
        ele.onclick = infoHyouji;
      }
      
      if(m == 0){
        ele.innerHTML = idolHenkan[books[n][nouhau[m]]];
      }
      
      if(m>=3 && m<116 && siboriJouken[nouhau[m]]['hyouji'] == 0){
        ele.classList.add('nouhauHidden');
      }
      $('tr' + (m + 1)).appendChild(ele);
      

      
      
    }
    if(option =='tuika'){break;}
  }
  
}


function tagTuika(name = '---'){ //引数にタグ名を入れられる。入れない場合はinput要素から取得してくる。
  let newtag = $('tagTuikaInput').value;
  if(name != '---'){newtag = name;}
  if(newtag == '' || newtag == '---' || books[0].includes(newtag) ){return;}
  books[0].push(newtag);
  $('tagTuikaInput').value = '';

  for(let n=1;n<=6;n++){
    let ele = document.createElement('option');
    ele.value = books[0].indexOf(newtag);
    ele.innerHTML = newtag;
    $('tagSelect' + n).appendChild(ele);
  }
}

function tagHenkou(){
  if($('tagHenkouIdInput').value ==''){return;}
  
  let thisid = Number($('tagHenkouIdInput').value);
  if(books[thisid]){
    if(books[thisid] == 'deleated'){return;}
    books[thisid]['tag'] = [Number($('tagSelect3').value),Number($('tagSelect4').value)];
    $('td' + thisid  +'_3').innerHTML = books[0][ books[thisid]['tag'][0] ]+ '<br>' + books[0][ books[thisid]['tag'][1] ];
  }
}

function bookDeleat(){
  if($('bookDeleatIdInput').value ==''){return;}
  
  let thisid = Number($('bookDeleatIdInput').value );
  var check = window.confirm('really?'); 
  if(check && thisid != 0 && books[thisid]){
    books[thisid] = 'deleated';
    for(let m=0;m<118;m++){
      $('td' + thisid + '_' + (m+1)).remove();
    }
    alert('deleated.')
  }
}

//ソート機能
function sort(){
  let elements = document.getElementsByName('sortInput');
  let len = elements.length;
  let checkValue = '';

  for (let i = 0; i < len; i++) {
    if (elements.item(i).checked) {
      checkValue = elements.item(i).value;
    }
  }
  if(checkValue == 2){isThirdSort = true;}else{isThirdSort = false;}
  junban.sort(sortFunctions[checkValue]);
  removeHyouji();
  console.log('順番:' + junban);
  hyouji();
}

function removeHyouji(){ //表示をすべて消す。
  for (let k = 0; k < junban.length; k++) {
    for (let m = 0; m < 118; m++) {
      if($('td' + (k + 1) + '_' + (m + 1))){
        $('td' + (k + 1) + '_' + (m + 1)).remove();
      }
    }
  }
}

function sibori(){
  let hihyoujiBookId = [];//非表示にするbookのidをいれておく
  
  //siboriJoukenを取得
  for(let n=3;n<116;n++){
    let elements = document.getElementsByName('nouhauHihyouji' + n);
    let len = elements.length;
    let checkValue = '';

    for (let i = 0; i < len; i++) {
      if (elements.item(i).checked) {
        checkValue = elements.item(i).value;
        siboriJouken[nouhau[n]]['hyouji'] = checkValue;
        //ノウハウごとの非表示を実行
        if(checkValue == 0){
          nouhauHihyouji(n);
        }else if(checkValue == 1){
          nouhauHihyouji(n,false);
        }
      }
    }
    let elements2 = document.getElementsByName('nouhauSibori' + n);
    let len2 = elements2.length;
    let checkValue2 = '';

    for (let i2 = 0; i2 < len2; i2++) {
      if (elements2.item(i2).checked) {
        checkValue2 = elements2.item(i2).value;
        siboriJouken[nouhau[n]]['sibori'] = checkValue2;
        
      }
    }
    siboriJouken[nouhau[n]]['lv'] = $('nouhauSibori' + n + '_1').value;
    if($('nouhauSibori' + n + '_2')){
      siboriJouken[nouhau[n]]['X'] = $('nouhauSibori' + n + '_2').value;
    }
    
    //booksごとの非表示を実行
    for(let b=0;b<junban.length;b++){//n:nouhauid,id:bookid
      let id = junban[b];
      if(books[id] == 'deleated'){continue;}
      if(checkValue2 == 0){
        if(books[id][nouhau[n]] > 0){
          hihyoujiBookId.push(id);
        }
      }else if(checkValue2 == 1){
        if(books[id][nouhau[n]] > 0 && books[id][nouhau[n]] < siboriJouken[nouhau[n]]['lv']){
          hihyoujiBookId.push(id);
        }else if(books[id][nouhau[n]] != 0){//lvの条件はクリア
          if(n==3 && siborijouken[nouhau[3]]['X'] != 0){//頭ノウハウで(指定なし)じゃない場合
            let x = siborijouken[nouhau[3]]['X'];
            let y = books[id]['headX'];
            if((x<=4&&x<=y&&y<=4)||(5>=x&&x<=8&&x<=y&&5>=y&&y<=8)||(x>=9&&x<=12&&x<=y&&y>=9&&y<=12)||
               (x>=13&&x<=16&&x<=y&&y>=13&&y<=16)||(x>=17&&x<=20&&x<=y&&y>=17&&y<=20)||
               (x>=21&&x<=24&&x<=y&&y>=21&&y<=24)||(x>=25&&x<=28&&x<=y&&y>=25&&y<=28)||
               (x>=29&&x<=y&&y>=29)){
              //do nothing
            }else{
              hihyoujiBookId.push(id);
            }
          }else if(n==4||n==5||n==26||n==68||n==114){
            if(siborijouken[nouhau[n]]['X'] > books[id][nouhau[n] + 'X']){
              hihyoujiBookId.push(id);
            }
          }else if(n>=110 && n<=113){
            if(siborijouken[nouhau[n]]['X'] != books[id][nouhau[n] + 'X']){
              hihyoujiBookId.push(id);
            }
          }
        }
      }else if(checkValue2 == 2){
        if(books[id][nouhau[n]] < siboriJouken[nouhau[n]]['lv']){
          hihyoujiBookId.push(id);
        }else{//lv条件はクリア
            if (n == 3 && siborijouken[nouhau[3]]['X'] != 0) { //頭ノウハウで(指定なし)じゃない場合
              let x = siborijouken[nouhau[3]]['X'];
              let y = books[id]['headX'];
              if ((x <= 4 && x <= y && y <= 4) || (5 >= x && x <= 8 && x <= y && 5 >= y && y <= 8) || (x >= 9 && x <= 12 && x <= y && y >= 9 && y <= 12) ||
                  (x >= 13 && x <= 16 && x <= y && y >= 13 && y <= 16) || (x >= 17 && x <= 20 && x <= y && y >= 17 && y <= 20) ||
                  (x >= 21 && x <= 24 && x <= y && y >= 21 && y <= 24) || (x >= 25 && x <= 28 && x <= y && y >= 25 && y <= 28) ||
                  (x >= 29 && x <= y && y >= 29)) {
                  //do nothing
              } else {
                hihyoujiBookId.push(id);
              }
            } else if (n == 4 || n == 5 || n == 26 || n == 68 || n == 114) {
              if (siborijouken[nouhau[n]]['X'] > books[id][nouhau[n] + 'X']) {
                hihyoujiBookId.push(id);
              }
            } else if (n >= 110 && n <= 113) {
              if (siborijouken[nouhau[n]]['X'] != books[id][nouhau[n] + 'X']) {
                hihyoujiBookId.push(id);
              }
            }
        }
      }
    }
  
  }
  console.log(hihyoujiBookId);
  if(isThirdSort){
      junban.sort(sortFunctions[2]);
      removeHyouji();
      console.log('順番:' + junban);
      hyouji();
  }
  
  for(let count=1;count<books.length;count++){
    if(hihyoujiBookId.includes(count)){
      bookHihyouji(count);
    }else{
      bookHihyouji(count,false);
    }
  }
  
  let fescheck ;
  if($('festoursCheck').checked){
    fescheck = true;
  }else{
    fescheck = false;
  }
  for(let nu=69;nu<=98;nu++){
    nouhauHihyouji(nu,fescheck,true);
  }
}

function nouhauHihyouji(nouhauNum,option = true,isfestours = false){
  //ノウハウ単位で非表示にする。第二引数がfalseなら表示させる。
  let cl = 'nouhauHidden';
  if(isfestours){cl = 'festoursHidden';}
  
  if(option == true){
    $(nouhau[nouhauNum] + 'Tr').classList.add(cl);
    $('tr' + (nouhauNum + 1)).classList.add(cl);
    $(nouhau[nouhauNum] + 'LvSelect').options[0].selected = true;
    if($(nouhau[nouhauNum] + 'Select')){$(nouhau[nouhauNum] + 'Select').options[0].selected = true;}
    if(isfestours == false){
      let elements = document.getElementsByName('nouhauHihyouji' + nouhauNum);
      elements[0].checked = true;
      siboriJouken[nouhau[nouhauNum]]['hyouji'] = 0;
    }
  }else if(option == false){
    $(nouhau[nouhauNum] + 'Tr').classList.remove(cl);
    $('tr' + (nouhauNum + 1)).classList.remove(cl);
    if(isfestours == false){
      let elements = document.getElementsByName('nouhauHihyouji' + nouhauNum);
      elements[1].checked = true;
      siboriJouken[nouhau[nouhauNum]]['hyouji'] = 1;
    }
  }
  
}

function bookHihyouji(bookid,option = true,istag = false){//book単位で非表示にする
  if(books[bookid] == 'deleated'){return;}
  let cl = 'bookHidden';
  if(istag == true){cl= 'tagHidden';}
  
  if(option == true){
    for (let m = 0; m < 118; m++) {
      $('td' + bookid + '_' + (m + 1)).classList.add(cl);
    }
  }else if(option == false){
    for (let m = 0; m < 118; m++) {
      $('td' + bookid + '_' + (m + 1)).classList.remove(cl);
    }
  }
}

function hihyoujiButton(event){
  let n = Number(event.target.value);
  nouhauHihyouji(n);

}

function bookAllHyouji(){
    for (let count = 1; count < books.length; count++) {
        bookHihyouji(count, false);
    }
}

function bookAllHihyouji() {
  for (let count = 1; count < books.length; count++) {
    bookHihyouji(count);
  }
}

function nouhauAllHyouji(){
  console.log('unko');
  for(let n=3;n<116;n++){
    nouhauHihyouji(n,false);
    nouhauHihyouji(n,false,true);
  }
}


function tagSibori(){
  let tag1 = $('tagSelect5').value;
  let tag2 = $('tagSelect6').value;  
  let andor = $('andor').value;
  
  if(tag1==0&&tag2==0){
    for(let id =1;id<books.length;id++){
      bookHihyouji(id,false,true);
    }
  }else if(tag1==0||tag2==0){
    let tag3 = tag1 + tag2;
    for (let id = 1; id < books.length; id++) {
      if(books[id][tag].includes(tag3)){
        bookHihyouji(id,false,true);
      }else{
        bookHidden(id,true,true);
      }
    }
  }else if(andor == 0){//and
    for (let id = 1; id < books.length; id++) {
      if (books[id][tag].includes(tag1) && books[id][tag].includes(tag2)) {
        bookHihyouji(id, false, true);
      } else {
        bookHidden(id, true, true);
      }
    }
  }else if(andor == 1){//or
    for (let id = 1; id < books.length; id++) {
      if (books[id][tag].includes(tag1) || books[id][tag].includes(tag2)) {
        bookHihyouji(id, false, true);
      } else {
        bookHidden(id, true, true);
      }
    }
  }
  
}

function tokuteiHyouji(){
  let id = $('tokuteiIdInput').value;
  bookHihyouji(id,false,false);
  bookHihyouji(id,false,true);
}

function tokuteiHihyouji() {
  let id = $('tokuteiIdInput').value;
  bookHihyouji(id, true, false);
}


function datasounyuu(){
  var result = window.confirm('保存しますか?');
  if(result == false){return;}
  
  var data = {'id':'A1','data':books};
  var storeName = 'nouhauStore';
  var dbName = 'nouhaubookkanri';
  var openReq = indexedDB.open(dbName);
  
  openReq.onsuccess = function(event) {
    var db = event.target.result;
    var trans = db.transaction(storeName, 'readwrite');
    var store = trans.objectStore(storeName);
    var putReq = store.put(data);
  
    putReq.onsuccess = function() {
      alert('put data success');
    }
  
    trans.oncomplete = function() {
      // トランザクション完了時(putReq.onsuccessの後)に実行
      console.log('transaction complete');
    }
    db.close();
  
  }
  openReq.onerror = function(event) {
    // 接続に失敗
       alert('db open error');
  }
  
}


function datahanei(data){
  removeHyouji();
  books = data;
  junban = [];
  for(let m=1;m<books.length;m++){
    junban.push(m);
  }
  
  hyouji();
  
  for (let n = 1; n <= 6; n++) {
    let node = $('tagSelect' + n);
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
    
    let ele = document.createElement('option');
    ele.value = 0;
    ele.innerHTML = '---';
    $('tagSelect' + n).appendChild(ele);
  }
  if(books[0][1]){
    for(let n=1;n<books[0].length;n++){
      tagTuika(books[0][n]);
    }
  }
}

function readjson(){
    var result = window.confirm('読み込みますか?');
    if (result == false) { return; }
  
  var file = $('uploadfileInput').files[0];
  var reader = new FileReader();
  reader.onload = function(e) {
    let res = JSON.parse(e.target.result);
    datahanei(res);
    
  };
  reader.readAsText(file);
}

function syokika(){
    var result = window.confirm('本当に初期化しますか?この操作ではindexedDBのデータは消されません。');
    if (result == false) { return; }
    
    let data = [];
    data[0] = ['---'];
    datahanei(data);
}

function infoHyouji(event){
  let id = event.target.innerHTML;

  let bun = '';
  for(let n=0;n<nouhauName.length;n++){
    
    if(n==0){
      bun = bun + nouhauName[n] + ':' ;
      bun = bun + idolHenkan[books[id][nouhau[n]]] + '<br>';
    }
    else if(n==2){
      bun = bun + nouhauName[n] + ':' ;
      bun = bun + '<br>' + books[0][books[id]['tag'][0]] + ',<br>' +
            books[0][books[id]['tag'][1]] + '<br>';
    }
    else if(n==116){
      bun = bun + nouhauName[n] + ':' ;
      bun = bun + books[id][nouhau[n]] + '<br>';
    }
    if(n>=3&&n<116&&books[id][nouhau[n]] != 0){
      bun = bun + nouhauName[n] + ':' ;
      if(books[id][nouhau[n] + 'X']){
        if(n==3){
          bun = bun + headHenkan[books[id][nouhau[n] + 'X']];
        }else if(n==4||n==5||n==26||n==68||n==114){
          bun = bun + plusHenkan[books[id][nouhau[n] + 'X']];
        }else if(n==110||n==111||n==112||n==113){
          bun = bun + vodaviHenkan[books[id][nouhau[n] + 'X']];
        }
      }
      bun = bun + books[id][nouhau[n]] + '<br>';
    }
    
  }
  bun = bun + 'bookID:' + id;
  $('infobun').innerHTML = bun;
  $('info').classList.remove('infoHidden');
}

function infoHihyouji(){
  $('info').classList.add('infoHidden');
}
