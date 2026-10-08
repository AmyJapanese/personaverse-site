# Personaverse 公式サイト

カスタムドメイン不要の静的サイト。GitHub Pagesにそのまま公開できる構成です。

## ファイル
- `index.html`：トップ
- `about.html`：ABOUT
- `guidelines.html`：二次創作ガイドライン（アップロードされた `二次創作規約.md` から作成。文意変更なし）
- `copyright.html`：著作権・利用について（公開前に確認してね）
- `assets/style.css`：デザイン
- `assets/config.js`：SNSリンク設定
- `assets/site.js`：ナビゲーションなど

## 公開前にやること
1. `assets/config.js` を開いて `x: ""` と `youtube: ""` に実際のHTTPS URLを入力。未設定時は「準備中」と表示されます。
2. `copyright.html` の連絡先「準備中」を、問い合わせフォームまたは公開可能な連絡方法に差し替える。
3. 作品紹介 `about.html` の文章が公式設定と一致するかチェック。
4. 著作権・素材のライセンスに個別規定がある場合、対象を明記する。

## GitHub Pages公開
1. GitHubで公開リポジトリ `personaverse-site` を作成。
2. このフォルダ内のファイルを**フォルダごとではなく中身**をリポジトリの一番上へアップロードする（`index.html` がルートに来るように）。
3. `Settings` → `Pages` → `Build and deployment` → `Deploy from a branch` → `main` / `/(root)` → Save。
4. `https://ユーザー名.github.io/personaverse-site/` で公開。

HTMLを直接ダブルクリックしてもローカルプレビュー可能（Google Fontsの読み込みのみネット接続が必要）。

## 日本語 / English
- 日本語版はルート、英語版は `en/` に配置しています。全4ページに英語版があります。
- ヘッダーの切り替えで、表示中のページに対応する別言語へ移動します。
- 言語選択はブラウザーに保存され、次回の閲覧にも適用されます。保存が無効でも切り替えリンクと通常のページ移動は利用できます。
- JavaScriptが無効でも、両言語の本文と切り替えリンクを利用できます。
- 内容の更新時は、日本語・英語の両ページを更新してください。

## CSSの隔離
- 全ページの `body.personaverse` がサイトの境界です。
- スタイルは `.personaverse` または `:where(.personaverse)` 配下に限定し、CSS変数には `--pv-` 接頭辞を付けています。
- メニュー・SNSなどの処理もサイトのルート配下だけを対象にします。
- フォントの読み込みを除き、サイトの外側の要素にはスタイルを適用しません。

## 言語切り替えのテスト
Node.jsがある環境では、サイトのフォルダで `node --test tests/language.test.cjs` を実行できます。保存した言語、明示的な切り替え、サブディレクトリ、ローカルファイル、保存機能が無効な環境を検証します。
