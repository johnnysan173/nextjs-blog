---
title: 'NPMの電子名刺を挑戦'
date: '2020-11-10'
thumb: '/images/npx-namecard.PNG'
tag: 'Programming'
---

## まず、成果物はこれ

自分の名刺をNPMで公開し、相手に簡単にアクセスできる。Terminal（NPMインストール済）に下記を叩いたら。。。
```
npx johnnysan
```
下記の電子名刺を出来くる😎
![NPX Namecardサンプル](/images/npx-namecard.PNG)

## 今回電子名刺作るきっかけと参考

今回のNPM 電子名刺は下記のリンクを見つけて、参考で作りました。
> [@kin29ma_nさんのサイト](https://kin29.info/npx%E3%81%A7%E9%9B%BB%E5%AD%90%E5%90%8D%E5%88%BA%E3%81%A4%E3%81%8F%E3%81%A3%E3%81%9F%E3%82%88%EF%BC%81/)を今回のNPM電子名刺を見つけて、自分もチャレンジした。
> ソースに関して、[@bnbさんのGithub](https://github.com/bnb/bitandbang)を参考した。

## 実際作った感想

コードを編集自体はそんなに難しくないが、「Build.js」に自分のSNS口座などを記入すると「package.json」にPackage名を少し編集くらい。初めてNpmにアップするとき少しハマった.

@kin29ma_nさんはGithubと連携すると書いているが、バージョン変更があまりないと思って、直接ローカルで編集してNPMにアップした。但し、アップするにはRegistryリンクの設定を変更しないとうまくいかなかった。

私の場合はpackage.jsonを下記に編集したら、成功した。謎。。。。

```
 "publishConfig": {    
    "registry": "https://registry.yarnpkg.com"
}
```

皆さんもやってみませんか？