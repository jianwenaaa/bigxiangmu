const mysql = require('mysql');
const config = require('./config');
const connection = mysql.createPool(config.product_sql_config);
const moment = require('moment');
//和数据库建立接口
const query = (sql) => {
    return new Promise((resolve, reject) => {
        connection.getConnection((err, connect) => {
            if (err) {
                reject(err);
                return;
            }
            connect.query(sql, (err, rows, fileds) => {
                resolve(rows);
                connect.release();
            })
        })
    })
}
//判断查没查到数据库中的值或者更改了的值
const sqlHandle = (sql) => {
    return new Promise((resolve, reject) => {
        query(sql).then((data) => {
            if (data.affectedRows > 0) {
                resolve('ok');
                connect.release();
            } else {
                reject(err);
            }
        }).catch((err) => {
            reject(err);
        })
    })
}
//读取操作    更改时间
const readHandle = (sql) => {
    return new Promise((resolve, reject) => {
        query(sql).then((data) => {
            data = data.map((i) => {
                i.item = moment(i.item).format('YYY-MM-DD HH:mm:ss');
                return i;
            })
            resolve(data);
            connect.release();
        }).catch((err) => {
            reject(err);
        })
    })
}
//判断数据库中是否存过这个值
const searchHandle = (sql) => {
    return new Promise((resolve, reject) => {
        query(sql).then((data) => {
            if (data.length > 0) {
                reject('干啥那！已经存在了');
            } else {
                resolve('ok');
            }
        })
    })
}
module.exports = {
    query,
    sqlHandle,
    readHandle,
    searchHandle
}