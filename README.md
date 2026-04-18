# CAI Solusions / Masato Saiki - Portfolio

20年以上にわたり、製造、建設、小売、保険、医療など様々な業界向けのシステム開発に携わってきました。
VB.NET、Java、PHP など多岐にわたる言語やフレームワークを習得し、柔軟な対応力を身につけました。
開発系社内SEとして、要件定義から保守運用まで一貫して担当した経験があり、独力でのシステム開発能力を有しています。
同時に大規模プロジェクトではPLとして移行プロジェクトやシステムテストの進捗管理も経験もあります。

ここでは、バックエンドエンジニア(PHP / MySQL)としてのサンプルコードを掲載しています。

---

# 職務経歴

## 概要

* 実務経験：20年以上
* 担当工程：要件定義 / 基本設計 / 詳細設計 / 実装 / 保守
* 得意分野：業務システム開発、DB設計、既存システム改修

## 使用技術

### Windowsアプリケーション

* VB.NET
* VB
* SQL Server
* Oracle

### バックエンド

* PHP (CodeIgniter)
* Java
* MySQL
* Smarty

### フロントエンド

* JavaScript
* jQuery
* Ajax
* HTML / CSS

---

# サンプルアプリケーション

## TimeCardDemo（Ajaxタイムカード入力デモ）

Ajax通信を使用したタイムカード入力のデモです。
打刻処理・一覧表示・非同期更新を実装しています。

### デモページ

https://caisolution/app/

### ソースコード

http://www.caisolutions.shop/login

### 機能

* 出勤打刻
* 退勤打刻
* 一覧表示
* Ajax非同期更新
* JSONレスポンス

### 技術構成

#### フロントエンド

* jQuery
* Ajax
* JSON

#### バックエンド

* PHP
* MySQL

#### 処理フロー

1. 打刻ボタン押下
2. AjaxでPHPへPOST
3. DBへINSERT
4. JSONレスポンス返却
5. 画面を非同期更新

---

# 設計ポイント

* Ajaxによる画面リロードなし更新
* API形式のPHP構成
* JSONレスポンス設計
* DB正規化
* 業務システムを想定した構成

---

# ディレクトリ構成

```
app/
├── index.html
├── js/
│   └── timecard.js
├── api/
│   └── timecard.php
├── db/
│   └── schema.sql
└── css/
    └── style.css
```

---

# 連絡先

Mail:cai.solutions.biz@gmail.com
