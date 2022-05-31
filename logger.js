'use strict';

const setLogger = () => { 
    const log4js = require('log4js')
    log4js.configure({
    appenders : {
    system : {type : 'file', filename : 'system.log'}
    },
    categories : {
    //テスト完了したらwarnに変更予定
    default : {appenders : ['system'], level : 'debug'},
    }
    });
    const logger = log4js.getLogger('system');
};
   
// exports を使って他のファイルから getName をインポートできるようにする
module.exports = setLogger; 