---
title: '電子名刺を作ってみない？（作成中）'
date: '2020-11-11'
thumb: '/images/profile.jpg'
tag: 'Programming'
---

### まず、成果物はこれ

自分の名刺をネットで公開し、リンクとかQR Codeを相手につたえば、簡単にアクセスできる。
![電子名刺のgif](http://placehold.jp/006699/99bbdd/320x500.png?text=Preview)

使用場面
- あ、名刺が忘れてしもうた
- 軽くL/Tの自己紹介
- Web会議などの自己紹介

### 作成したら、何を学べる？

今回下記の3点を体験し、基本を学べる
- HTMLとCSSの基本
- WebのIconの使い方
- iPadでもクラウド開発

### 事前準備の道具/材料

パンを焼くと同じ、事前に道具と材料を揃わないと作業進まないので、作業する前にまず下記の材料を準備してください。
- SafariなどのBrowser（iPadでも可）
- Gmail又はGithub口座（クラウド開発環境登録用）
- 自己紹介のネタ
    - 短く自分を紹介する文章
    - メールアドレス
    - SNS口座（Twitterとか）
    - 自分が熱中している物3つ

### 作り方のStep by Step

さって、ステップ分けて一緒に完成しよう〜
1. 開発環境ワンタッチで構築
2. 初めてHTMLに記入
3. 初めてCSS追加と記入
4. 主な内容をHTMLに追記
5. CSS追加
6. アイコン追加
7. Deploy

#### 1. Browserで開発環境一発で立ち上げ

- この[codesandbox.io](https://codesandbox.io)をクリックして、Github又はGoogleで登録してください。

- 右上の青い「Create Sandbox」をクリックし、次「Import Project」選択したら、import from git hubというタブが出てきて、↓のリンクコピーして貼り付ける。[<address>https://www.github.com/johnnysan173/blankhtml</address>](https://www.github.com/johnnysan173/blankhtml)

- 「Import and Fork」を押せば、開発環境完了！

> 今、空の「index.html」しかない。Browserでサイトを表示するために、まず「index.html」というファイルが必要です。このファイルに何か記入したら、右の画面（Browser）すぐ更新するはず。やってみて～

#### 2. HTML基本な要素を入れる

自分が記入したい内容を記入する前に、まず下記の通り、基本な要素とサンプル内容を記入する。
```
<!DOCTYPE html>
<html>

  <head>
    <title>My Profile</title>
  </head>

  <body>
    <h1>Profile Content</h1>
  </body>

</html>
```
記入完了したら、右の画面はProfile Contentを表示できるはず。ご確認ください。

> HTML基本的このような「<タグ>内容</タグ>」タグという物を囲まれている。
例えば、「タイトル」は「My Profile」をBroswerに伝えたい場合
```<title>My Profile</title>```になる。では、まずここは3つのタグを覚えましょう。**body**は体の意味で、Browserで表示する内容は全てこのタグに記述する。次は**head**、Browserでは表示しない情報を記述できる。例えば、**title**、これはBrowserのタブに表示したり、サイトをブックマークする際とかで使う。各Tagの意味が知りたいなら、公式サイトを参考してください。[<address>https://developer.mozilla.org/ja/docs/Learn/Getting_started_with_the_web/HTML_basics</address>](https://developer.mozilla.org/ja/docs/Learn/Getting_started_with_the_web/HTML_basics)

#### 3. CSS Styling

Wordなどだと上にある編集ツールを選択すれば、文字の大きさと色とか編集できるが、Webの場合はこういった編集は基本的にCSSというファイルで行る。
まず、style.cssというファイルを新規して、下記を編集してください。
```
h1 {
    color: red
}
```
> ファイルの新規方法は左のFiles Barの右上2番目のアイコン📄(ファイルの形)をクリックして、ファイル名を「style.css」を入力したら、中身を編集できる

これはh1タグの文字を赤色と設定という意味。但し、保存しても、何でPreviewのところで何も反映しないか？実はHTMLファイルにCSSを参照する記述していない。下記通りHTMLに入れてください。

```
<head>
    <title>My Profile</title>
    <link rel="stylesheet" href="style.css" />
</head>
```

これを入れたら、文字を赤くなったでしょ。

> このリンクのTagは今までのTagと少し違って、<link></link>ではなくて、<link />という方式です。内容をないが、属性がいくつかある。「rel」は「relation」の略で、関係の意味、このリンクはStylesheetだよと指定する。「href」は「Hypertext Reference」要は参考住所。今回同フォルダーに保管しているので、そのままファイル名で済む。

#### 4. HTMLに基本な内容を記入しよう

さて、基本の環境を整えたら、どんどん内容を記入しに行こう！と思いきや、日本語を入れると、文字化けになるので、まず、**head**に下記を追加しよう
```
<head>
    <title>My Profile</title>
    <meta charset="utf-8" />  <--これで文字化けByeBye
</head>
```

追加したら、**Body**の中に日本語を入れて、文字化けがなくなったら、落ち着いて、本文を記入しよう。私の場合は下記とおり。

```
<body>
    <h3>ジョニー（JOHNNY）</h3>
        <p>
            自由になるレシピを模索中<br />
            30%：持続できる自然農<br />
            30%：周りを貢献する<br />
            30%：家族を大切にする<br />
        </p>

    <h3>連絡先</h3>
        <p>email: johnnysan173@gmail.com</p>
        <p>twitter: twitter.com/stupidmore</p>
        <p>facebook: facebook.com/stupidmore</p>
        <p>instagram: instagram.com/stupidmore</p>

    <h3>特技</h3>
        <p>自然農</p>
        <p>プログラミング</p>
        <p>パン作り</p>

</body>
```
どうでしょ、うまく何か表示されているでしょうか？
> 関連タグを簡単に説明するよ。**h3**のhはheading見出し、見出しの3番目サイズの意味。**p**はparagraph文章の意味。**br**はbreak改行の意味

#### 6. 写真とSNSリンクの追加

Profileではまず写真が入れたほうがいいでしょ、FacebookとかTwitterとかもProfile写真があると思う。写真の名前を「profile.jpg」と設定して、Codesandboxにアップロードしたら、HTMLは下記通り記述する。

```
<body>
    <img src="profile.jpg" />
    <h3>ジョニー（JOHNNY）</h3>
    ...

```

写真をうまく表示できるでしょ？

> 自分PCに保存している写真をそのままFiles PanelsのところにDropすれば、自動でCodesandboxにアップロードする。iPadも同様で、ファイルにある写真をそのままDropできる。

次はSNSのリンクも追加しましょう。そうすれば、皆さんがリンクをクリックしたら、自分のSNSに飛んでいく。やり方は簡単
```
<body>
    ...
    <h3>連絡先</h3>
        <p>email: <a href="mailto: johnnysan173@gmail.com">johnnysan173@gmail.com</a></p>
        <p>twitter: <a href="https://www.twitter.com/stupidmore">twitter.com/stupidmore</a></p>
        <p>facebook: <a href="https://www.facebook.com/stupidmore">facebook.com/stupidmore<a/></p>
        <p>instagram: <a href="https://www.instagram.com/stupidmore">instagram.com/stupidmore</a></p>
    ...
```
Preview画面にある各リンクをクリックしたら、うまく自分のSNSサイトを表示できるでしょうか？

> **a**はAnchorアンカー⚓の意味。**a**なかの属性**href**はアンカー先を記述。**href**はHypertext Reference、直訳すると「連結文書の参考」。今回は連結文書はそれぞれ自分のSNSサイトのリンク。こんな感じになる```<a href="自分のSNSサイト">Profileに表示するリンク</a>```。ちなみに、メールの場合は**mailto**という少し特別の記述方法。

#### 7. CSS Styling

スタイルがなさすぎて、我慢の限界だ。今一気でスタイルを整えて、しゅっとた感じに。


HTMLファイルにある部分をスタイルを付けたい場合、タグにClass属性を追加し、CSSファイルにあるClassを編集するイメージ。


HTML部分

```
<div class="card">
    <h3>なになになに</h3>
</div>
```

CSS部分

```
.card {
    width: 320px;
    margin: auto;
    ...
}
```
> **div**はdivision区分の意味、**h3**とか**p**とかと違った特に初期の特性が持っていないため、自由に使える

- 全体的名刺風にカードする


    HTMLファイルに**div**で全て内容を囲む
    ```
    <body>
        <div class="card">  追加
            <img src="profile.jpg" />
            ...
            <p>パン作り</p>
        </div>　            追加
    </body>
    ```
    CSSファイルに該当スタイルを編集
    ```
    .card {
        width: 300px;
        margin: auto;
        box-shadow: 5px 5px 10px gray;
    }
    ```
    > **width**は幅、この名刺全体の幅を300pxを設定、これは丁度初代iphoneSEでびったり。**margin**は余白、auto自動と設定すれば、うまく300pxの幅を中央に揃う。**box-shadow**はボックスの影、名刺が浮いていると見える

- 写真のサイズを整える
    
    
    HTMLファイルのProfile写真に**class**を追加
    ```
    <img src="profile.jpg" />
            ↓　class追加
    <img class="profile-pic" src="profile.jpg" />
    ```
    CSSファイルに該当スタイルを編集
    ```
    .profile-pic {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
    ```
    > 写真の**width**幅をはみ出さなく、ボックスいっぱいまで伸ばす、**height**高さを200pxまで制限。その時、写真若干変形してしまった。**object-fit**物を合わせでcoverの属性を入れたら、綺麗にカバーしてくれる。


#### 8. NetifyでDeploy
