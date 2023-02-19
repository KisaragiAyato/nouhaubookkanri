# nouhaubookkanri

・機能
ノウハウブック情報を登録して、並び替えや絞り込みができます。
ノウハウブックに2個までタグ付けができます。

indexedDBに、ノウハウブックのデータとタグのデータを保存できます。
保存ボタンを押さないと保存されません。


・仕様の注意
個別にデータを消去したノウハウブックは、books配列内で'deleated'になります。
indexedDBへの保存時やJSONファイル出力時に、'deleated'を除外したbooks配列を保存します。

books配列は、books[0]にタグ一覧の配列、以降にbookインスタンスが入ります。


・unko
最初はbooks配列のindex番号をbookiDとしていましたが、
それだと個別にブック情報を消してもデータ量(books配列)が減らないので、
後からbookクラスに.idを追加しました。
それ故、main.js内で、booksのindexを扱う変数でid等の名前が使われている場合があります。

ミスやバグがあるかもしれません。
そしてhtmlの要素が多すぎる。

twitter @kisaragiayato11
