//dotenvを呼び出し、.envファイルの環境変数がprocess.envで呼び出せるようになる。
require('dotenv').config();

config = {
    username: process.env.DB_ROOT_USERNAME,
    password: process.env.DB_ROOT_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT
}

module.exports = config;