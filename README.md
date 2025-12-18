# Display Component

Next.js + Docker + Nginx + FullCalendar の構成でカレンダー表示を行うプロジェクトです。

## 構成

- **フロントエンド**: Next.js (React)
- **カレンダー**: FullCalendar
- **Webサーバー**: Nginx（リバースプロキシ）
- **コンテナ**: Docker / Docker Compose

## ディレクトリ構造

```
display-component/
├── frontend/              # Next.jsアプリケーション
│   ├── app/              # Next.js App Router
│   │   ├── components/   # Reactコンポーネント
│   │   │   └── Calendar.tsx  # FullCalendarコンポーネント
│   │   ├── layout.tsx    # レイアウトコンポーネント
│   │   └── page.tsx      # メインページ
│   ├── Dockerfile        # Next.js用Dockerfile
│   ├── next.config.js    # Next.js設定
│   ├── package.json      # 依存関係
│   └── tsconfig.json     # TypeScript設定
├── nginx/                # Nginx設定
│   └── nginx.conf        # Nginx設定ファイル
└── docker-compose.yml    # Docker Compose設定
```

## 起動方法

### 1. コンテナのビルドと起動

```bash
docker compose up -d --build
```

### 2. アプリケーションへのアクセス

ブラウザで以下のURLにアクセスしてください：

```
http://localhost:8080
```

美しいグラデーション背景に「Hello World!」とFullCalendarによるインタラクティブなカレンダーが表示されます。

### カレンダー機能

- 📅 月・週・日の表示切り替え
- 🎯 日付クリックでイベント選択
- 📝 サンプルイベント表示（ミーティング、ランチなど）
- 🎨 カスタムスタイリング
- 🔄 ドラッグ＆ドロップ対応

### 3. コンテナの停止

```bash
docker compose down
```

## コンテナ情報

### Next.jsコンテナ（frontend）
- コンテナ名: `nextjs-app`
- 内部ポート: 3000
- ベースイメージ: node:20-alpine

### Nginxコンテナ（nginx）
- コンテナ名: `nginx-proxy`
- 外部ポート: 8080 → 内部ポート: 80
- ベースイメージ: nginx:alpine
- Next.jsアプリへのリバースプロキシとして機能

## ログの確認

### Next.jsアプリのログ
```bash
docker logs nextjs-app
```

### Nginxのログ
```bash
docker logs nginx-proxy
```

### 全コンテナのログ
```bash
docker compose logs -f
```

## 開発環境での実行

Docker を使わずにローカルで実行する場合：

```bash
cd frontend
npm install
npm run dev
```

開発サーバーは http://localhost:3000 で起動します。

## トラブルシューティング

### ポート8080が使用中の場合

`docker-compose.yml` の以下の行を変更：

```yaml
ports:
  - "8080:80"  # 8080を別のポート番号に変更
```

### コンテナが起動しない場合

```bash
# コンテナの状態を確認
docker ps -a

# コンテナを完全に削除して再作成
docker compose down
docker compose up -d --build
```

## 技術スタック

- **Next.js**: 14.2.5
- **React**: 18.3.1
- **FullCalendar**: 6.1.10
  - @fullcalendar/react
  - @fullcalendar/daygrid
  - @fullcalendar/timegrid
  - @fullcalendar/interaction
- **TypeScript**: 5.x
- **Node.js**: 20 (Alpine)
- **Nginx**: latest (Alpine)
- **Docker Compose**: 3.8

## カレンダーの機能詳細

### 表示モード

- **月表示**: 月全体のカレンダービュー
- **週表示**: 週単位の詳細ビュー
- **日表示**: 1日の詳細スケジュール

### インタラクション

- 日付クリック：コンソールに日付を出力
- イベントクリック：イベント詳細をアラート表示
- ドラッグ＆ドロップ：イベントの移動が可能

### サンプルイベント

プロジェクトには以下のサンプルイベントが含まれています：
- ミーティング（本日 10:00-11:00）
- ランチ（本日 12:00-13:00）
- プロジェクトレビュー（明日 14:00-16:00）
- チーム会議（明後日 9:00-10:30）

## ライセンス

MIT

