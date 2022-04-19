## ぐるめらいん
<img width="1440" alt="スクリーンショット 2022-04-18 16 05 20" src="https://user-images.githubusercontent.com/78610933/163770317-19e82b49-af16-4154-89a5-ad6ca46f30f5.png">

## 概要
* 飲食店同士を繋げるアプリケーションです。地元の飲食店をターゲットにしています。<br>
* 飲食店間での、酒類や備品のやり取りや、売買ができる。<br>
* 私自身の前職が飲食店であった為,「もっと近くの飲食店と繋がれる場があれば良いのになぁ。」という思いから作成しました。

## 制作背景
* 何かアプリケーションを作ってみたいという興味本位から作り始めました。
* 飲食店で働いていた経験から、近隣店舗での物の貸し借りが頻繁に行われていたことから作成しました。

## App URL
https://heroku-gurume-line-app.herokuapp.com/<br>

ユーザー名/ sample<br>
Eメール/ sample@sample.com<br>
パスワード/ 0011227<br>
新規登録も可能ですがこちらをご利用頂けたら幸いです。
## 機能一覧
* CRUD機能<br>
* コメント機能<br>
* メッセージ機能<br>
* 連動プルダウン(非同期)<br>
* 画像プレビュー機能<br>
* キーワード検索機能<br>
* ユーザー登録,ログイン機能(devise)<br>
* マイページ(投稿一覧)<br>
* レスポンシブ対応<br>
* ハンバーガーメニュー<br>


## 使用技術
* HTML / CSS / JavaScript / Ruby(3.0.3) / Ruby on Rails(6.0.4)<br>
* heroku / Mysql(ClearDB) / AWS(S3)<br>
* Git / GitHub / Visual Studio Code

## 工夫したポイント
* レスポンシブ対応。見やすくシンプルなレイアウト構成。<br>
<img width="1322" alt="スクリーンショット 2022-04-19 1 59 57" src="https://user-images.githubusercontent.com/78610933/163844022-c73ee291-7d7e-4b87-98cf-6b48ba7a3fe7.png"><br>
* 新規投稿時に都道府県,市区郡,駅名とプルダウンで絞り込めるようにした。(非同期)<br>
* デプロイの際にherokuのストレージだけでは画像の保存が少量しかできない為、 AWSのS3を使用した。DBは開発環境と同じMysqlを使用した。(CleaDB)

## ER図
![ER](https://user-images.githubusercontent.com/78610933/163702459-51f19f8a-8ad0-4c57-8e4c-5b6a493d3cc2.png)


## テーブル設計
## users テーブル
| Column | Type | Options |
| :--- | :--- | :--- |
| id | integer | null: |
| email | string | null: false, default: "" |
| name | string | null: |
| encryped_password | string | null: false, default: "" |
| reset_password_token | string | null: |
| reset_password_sent_at | string | null: |
| remember_created_at | string | null: |

## posts テーブル
| Column | Type | Options |
| :--- | :--- | :--- |
| id | integer | null: |
| title | string | null: |
| content | text | null: |
| image | string | null: |
| price | integer | null: |
| city_id | string | null: |
| town_id | string | null: |
| prefectures | string | null: |
| user_id | integer | null: |

## comments テーブル
| Column | Type | Options |
| :--- | :--- | :--- |
| id | integer | null: |
| comment_content | string | null: |
| user_id | references | null: false, foreign_key: true |
| post_id | references | null: false, foreign_key: true |

## entries テーブル
| Column | Type | Options |
| :--- | :--- | :--- |
| id | integer | null: |
| user_id | references | null: false, foreign_key: true |
| room_id | references | null: false, foreign_key: true |
| post_id | references | null: false, foreign_key: true |

## rooms テーブル
| Column | Type | Options |
| :--- | :--- | :--- |
| id | integer | null: |

## messages テーブル
| Column | Type | Options |
| :--- | :--- | :--- |
| id | integer | null: |
| user_id | references | null: false, foreign_key: true |
| room_id | references | null: false, foreign_key: true |
| content | text | null: |
