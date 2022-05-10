# nodeオフィシャルのベースイメージ（軽量版・安定版）を指定
FROM node:lts-stretch-slim
# コンテナ内のカレントワーキングディレクトリを/appに設定
WORKDIR /usr/src/app
# package.jsonをコンテナのカレントワーキングディレクトリの/appに複製
COPY package*.json .
# パッケージのインストール（package.jsonを参照している）
RUN npm install
# プロジェクトフォルダ内の全フォルダ・ファイルを、カレントワーキングディレクトリの/appに複製
COPY . .
# コンテナのポート番号
EXPOSE 80
CMD ["npm", "start"]