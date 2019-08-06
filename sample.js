// それぞれのコードの意味
// ① $(document).ready(function () { ~ });
      // DOMの読み込みが終わったらfunction(){}の中の処理を実行する
      // jQuery(JavaScript)はHTMLが完全に読み込まれていない状態で処理を実行しようとすると、
      // 正しく動作しない場合があるので,このreadyを使う。
      // 省略記法 -> $(function() {});

// ② $('#btn-evaluation').click(function () { ~ });
      // id="btn-evaluation"の要素(ランク)がクリックされた時に、
      // function(){}の中の処理(get_achievement();)を実行する。

// ③ $('#national_language, #english, #mathematics, #science, #society').change(function () { ~ });
      // 国語、英語、数学、理科、社会のinput要素の中身が変更された際に、
      // function(){}の中の処理(score_indicate();)を実行する。

// ④ $('#national_language').val()
      // 国語の点数を取得している。
      // .val()はHTMLタグ内に記述されているvalue属性を取得したり、変更したりすることができる。

// ⑤ Number()
      // 文字列を数値に変換する。.val()するとstring型で返ってくるので、計算をするために数値に変換する。

// ⑥ $("#sum_indicate").text(sum);
      // id="sum_indicate"の要素(合計点)のテキストに、sumを追加する。
      // text()は、HTML要素内にあるテキスト情報を取得、追加、変更することができる。

// ⑦ .append
      // 指定した要素内の最後にテキストやHTML要素を追加する

$(document).ready(function () {
  function score_indicate() {
    // このような記述をすることで、subject_pointsという変数の中に
    // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]という配列を作成できる。
    let subject_points = [Number($('#national_language').val()),
    Number($('#english').val()),
    Number($('#mathematics').val()),
    Number($('#science').val()),
    Number($('#society').val())
    ];

    // さらにこのような記述をすることで、「合計点：」となっている右の部分に合計点が出力される
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    $("#sum_indicate").text(sum);

    // ここに、上記を参考にして平均点を出力する処理を書き込む
  };

  function get_achievement() {
    // ここに、ランクの値の文字列（平均点が80点以上なら"A"、60点以上なら"B"、40点以上なら"C"、それ以下なら"D"）を出力する処理を書き込む
  }

  function get_pass_or_failure() {
    // ここに、全ての教科が60点以上なら"合格"の文字列、一つでも60点未満の教科があったら"不合格"の文字列を出す処理を書き込む
  }

  function judgement() {
    // ここに、「最終ジャッジ」のボタンを押したら「あなたの成績はAです。合格です」といった内容を出力する処理を書き込む
    // 下記の記述をすることで、「最終ジャッジ」のボタンを押すと「あなたの成績は（ここに「ランク」の値を入れる）です。（ここに「判定」の値を入れる）です」という文字の入った水色のフキダシが出力される処理が実装される。
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は（ここに「ランク」の値を入れる）です。（ここに「判定」の値を入れる）です</label>`);
  };

  $('#national_language, #english, #mathematics, #science, #society').change(function () {
    score_indicate();
  });

  $('#btn-evaluation').click(function () {
    get_achievement();
  });

  $('#btn-judge').click(function () {
    get_pass_or_failure();
  });

  $('#btn-declaration').click(function () {
    judgement();
  });
});