const nouhau = [
  'idol',  //Select
  'date',  //Input
  'tag',  //Select1,Select2
  'head',  //Select,LvSelect (3)
  'seien',  //Select,LvSelect (4)
  'memoryNouhau',  //Select,LvSelect (5)
  'kirakiravo','kirakirada','kirakiravi',
  'matikadovo','matikadoda','matikadovi',
  'hoppinJamvo','hoppinJamda','hoppinJamvi',
  'eberesutovo','eberesutoda','eberesutovi',
  'iitomovo','iitomoda','iitomovi',
  'mezaseIdol',
  'utahimevo','utahimeda','utahimevi',
  'konya',
  'kansyasaiClear',  //Select,LvSelect (26)
  'leader1','leader2','vo1','vo2','da1','da2','vi1','vi2',
  'center1','center2','all1','all2',
  'voJougen1','voJougen2','voJougen3',
  'daJougen1','daJougen2','daJougen3',
  'viJougen1','viJougen2','viJougen3',
  'meJougen1','meJougen2','meJougen3',
  'voMaster','daMaster','viMaster',
  'slowStarter','startDash','memoryHigh','memoryRow',
  'ninkimono','monosizuka','tyuumoku','hikaeme',
  'kaihukuryou1','kaihukuryou2',
  'utareduyoi','utareyowai',
  'jokyoMeran1','jokyoMeran2',
  'lpSp',  //Select,LvSelect (68)
  'destination1','destination2',
  'baberu1','baberu2',
  'yumesaki1','yumesaki2',
  'amesuto1','amesuto2',
  'wondering1','wondering2',
  'itudatte1','itudatte2',
  'spread1','spread2',
  'snow1','snow2',
  'syaino1','syaino2',
  'resonance1','resonance2',
  'twincle1','twincle2',
  'black1','black2',
  'ryuuseigun1','ryuuseigun2',
  'double1','double2',
  'hide1','hide2',
  'voKansyasai','daKansyasai','viKansyasai',
  'voGrad','daGrad','viGrad',
  'voLp','daLp','viLp',
  'sp','appealUp',
  'entry','novice','middle','expert','exhibition',  //Select,LvSelect (110)~(114)
  'towakore',
  'memo'  //Textarea
  ];
  
  let nouhauName = []; //nouhauに対応した名前が入る。例 nouhauName[3]は'頭ノウハウ'
  
  const idolHenkan = ['真乃', '灯織', 'めぐる', '恋鐘', '摩美々', '咲耶', '結華', '霧子', '果穂', '智代子', '樹里', '凛世', '夏葉', '甘奈', '甜花', '千雪', 'あさひ', '冬優子', '愛依', '透', '円香', '小糸', '雛菜', 'にちか', '美琴'
  ];
  
  const headHenkan = [
  '0', 'voUP', 'voUP+', 'voUP++', 'voUP+++',
  'daUP', 'daUP+', 'daUP++', 'daUP+++',
  'viUP', 'viUP+', 'viUP++', 'viUP+++',
  'メンタルUP', 'メンタルUP+', 'メンタルUP++', 'メンタルUP+++',
  'vo上限UP', 'vo上限UP+', 'vo上限UP++', 'vo上限UP+++',
  'da上限UP', 'da上限UP+', 'da上限UP++', 'da上限UP+++',
  'vi上限UP', 'vi上限UP+', 'vi上限UP++', 'vi上限UP+++',
  'メンタル上限UP', 'メンタル上限UP+', 'メンタル上限UP++', 'メンタル上限UP+++'
  ];
  
  const plusHenkan = [0,'(無印)','+','++'];
  const vodaviHenkan = [0,'vo','da','vi'];
  
function $(name){
  return document.getElementById(name);  
}

let nextid = 1;

  class book{
    constructor(){
      this.idol = Number($('idolSelect').value);
      this.date = Number($('dateInput').value);
      this.tag = [Number($('tagSelect1').value),Number($('tagSelect2').value)];
      this.nouhausuu = 0;
      for(let i = 3;i<nouhau.length - 1;i++){
        this[nouhau[i]] = Number($(nouhau[i] + 'LvSelect').value);
        if(this[nouhau[i]] != 0){this.nouhausuu++;}
      }
      this.headX = Number($('headSelect').value);
      this.seienX = Number($('seienSelect').value);
      this.memoryNouhauX = Number($('memoryNouhauSelect').value);
      this.kansyasaiClearX = Number($('kansyasaiClearSelect').value);
      this.lpSpX = Number($('lpSpSelect').value);
      this.entryX = Number($('entrySelect').value);
      this.noviceX = Number($('noviceSelect').value);
      this.middleX = Number($('middleSelect').value);
      this.expertX = Number($('expertSelect').value);
      this.exhibitionX = Number($('exhibitionSelect').value);
      this.memo = $('memoTextarea').value;
      
      this.id = nextid;
    }
    
  }

  let siboriJouken = {};  //多次元連想配列。　例:siboriJoken['head']['lv']
  
  const sortFunctions = [
    function(a,b){
      return a-b;
    },
    function(a,b){
      let a1 = idkensaku(a)[1];
      let b1 = idkensaku(b)[1];
      if (books[a1] == 'deleated') { return 1; }
      if (books[b1] == 'deleated') { return -1; }
      
      let anouhau = books[a1]['nouhausuu'];
      let bnouhau = books[b1]['nouhausuu'];
      if(bnouhau - anouhau != 0){
        return bnouhau - anouhau;
      }else{
        return a-b;
      }
    },
    function(a,b){
      let a1 = idkensaku(a)[1];
      let b1 = idkensaku(b)[1];
      if(books[a1] == 'deleated'){return 1;}
      if(books[b1] == 'deleated'){return -1;}
      
      let anouhau=siborisort(a1)[0];
      let anouhauz=siborisort(a1)[1];
      let bnouhau=siborisort(b1)[0];
      let bnouhauz=siborisort(b1)[1];
      
 
      if (bnouhau - anouhau != 0) {
        return bnouhau - anouhau;
      } else if(anouhauz - bnouhauz != 0){
        return anouhauz - bnouhauz;
      }else if( books[a1]['nouhausuu'] - books[b1]['nouhausuu'] != 0 ){
        return books[b1]['nouhausuu'] - books[a1]['nouhausuu'];
      }else{
        return a-b;
      }
    }
    ];
    
function siborisort(index){
  let good = 0;
  let bad = 0;
  for(let n=3;n<116;n++){
        if($('nouhauCheckbox1_'+ n).checked){
       
          if(books[index][nouhau[n]] >= siboriJouken[nouhau[n]]['lv']){
             if(n==3 && siborijouken[nouhau[3]]['X'] != 0){//頭ノウハウで(指定なし)じゃない場合
               let x = siborijouken[nouhau[3]]['X'];
               let y = books[index]['headX'];
               if((x<=4&&x<=y&&y<=4)||(5>=x&&x<=8&&x<=y&&5>=y&&y<=8)||(x>=9&&x<=12&&x<=y&&y>=9&&y<=12)||
                 (x>=13&&x<=16&&x<=y&&y>=13&&y<=16)||(x>=17&&x<=20&&x<=y&&y>=17&&y<=20)||
                 (x>=21&&x<=24&&x<=y&&y>=21&&y<=24)||(x>=25&&x<=28&&x<=y&&y>=25&&y<=28)||
                 (x>=29&&x<=y&&y>=29)){
                   good++;
               
               }else{
                   bad++;
               }
             }else if(n==3){  //Lvのみ指定
               good++;
             
             }else if(n==4||n==5||n==26||n==68||n==114){
               if((siborijouken[nouhau[n]]['X'] > books[index][nouhau[n] + 'X']) && (books[index][nouhau[n] + 'X'] != 0 )){
                 bad++;
               }else if(siborijouken[nouhau[n]]['X'] <= books[index][nouhau[n] + 'X']  ){
                 good++;
               }
             }else if(n>=110 && n<=113){
                if((siborijouken[nouhau[n]]['X'] != books[index][nouhau[n] + 'X']) && books[index][nouhau[n] + 'X'] != 0 
                    && siborijouken[nouhau[n]]['X'] != 0 ){
                   bad++;
                }else if( siborijouken[nouhau[n]]['X'] == books[index][nouhau[n] + 'X'] || siborijouken[nouhau[n]]['X'] == 0 ) {
                  good++;
                }
             }else{
               good++;  //Lvだけ判定すればいいノウハウ
             }
          }else if( books[index][nouhau[n]] != 0 ){
            //Lv不足
            bad++;
          }
      }
   }
  return [good,bad];
}
