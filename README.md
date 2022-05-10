### 開発環境の作成
1.プロジェクトが格納されているディレクトリに移動 
&emsp;cd missing-person-search
2.dockerイメージのビルド  
&emsp;docker-compose build  
3.コンテナの起動  
&emsp;docker-compose up  
4.マイグレーションの実行
&emsp;docker-compose run --rm app npx sequelize-cli db:migrate
5.疎通確認  
&emsp;ブラウザより下記URLにアクセス。  
&emsp;http://localhost:80