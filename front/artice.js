const dbquery = require('../../config/connect_db');
const express = require('express');
const router = express.Router();
const generateUUID = require("../common/Unique");
const creatTime = require("../common/creatTime");
const moment = require('moment'); 
const {sqlHandle, readHandle, searchHandle, query} = dbquery;
router.get('/getNav', function (req, res, next) {
    const sqlone = 'select * from one_class';
    const sqltwo = 'select * from two_class';
    const asyncGetClass = async function () {
        let oneclass = await readHandle(sqlone);
        let twoclass = await readHandle(sqltwo);
        return {oneclass, twoclass};
    };
    asyncGetClass().then((data) => {
        let resdata = [];
        const {oneclass, twoclass} = data;
        oneclass.forEach(function (i) {
            let everydata = {
                onedata: i,
                twodata: []
            };
            twoclass.forEach((j) => {
                if (i.id === j.parent_id) {
                    everydata.twodata.push(j);
                }
            });
            resdata.push(everydata);
        });
        console.log(resdata);
        res.send({
            code: '6010',
            data: resdata,
            msg: '查询成功'
        });
    }).catch((err) => {
        res.send({
            code: '6011',
            data: null,
            msg: '查询错误'
        });
    });
});
router.get('/getArticleAll', function (req, res, next) {
    const sqlone = 'select * from one_class';
    const sqltwo = 'select * from two_class';
    const connectSql = (oneClass) => {
        const selectArtSql = 'select * from (';
        oneClass.forEach(function (i, index) {
            if (index < (oneClass.length - 1)) {
                selectArtSql += `select * from ${i.enname} UNION ALL `;
            } else {
                selectArtSql += ` select * from ${i.enname})as tabel_all where art_show=1 order by time desc`;
            }
        }, this);
        return selectArtSql;
    };
    const connectArticle = (data) => {
        const { articleData, oneClass, twoClass } = data;
        return articleData.map(function (i) {
            oneClass.forEach(function (j) {
                if (j.id === i.oneId) {
                    i.enname_one = j.enname;
                    i.cnname_one = j.cnname;
                }
            });
            twoClass.forEach(function (j) {
                if (j.id === i.twoId) {
                    i.enname_two = j.enname;
                    i.cnname_two = j.cnname;
                }
            });
            return i;
        });
    };

    const asyncGetArticle = async function () {
        let oneClass = await readHandle(sqlone);
        let twoClass = await readHandle(sqltwo);
        let articleData = await readHandle(connectSql(oneClass));
        return connectArticle({ articleData, oneClass, twoClass });
    };

    asyncGetArticle().then((data) => {
        res.send({
            code: '6012',
            data,
            msg: '查询成功'
        });
    }).catch((err) => {
        res.send({
            code: '6013',
            data: null,
            msg: '查询失败',
            err: err
        });
    });
});
router.post('/getClassTwo', function (req, res, next) {
    const sql = `select * from two_class where parent_id='${req.body.oneId}'`;
    readHandle(sql).then((data) => {
        res.send({
            code: '6020',
            msg: '数据查询成功',
            data
        });
    }).catch((err) => {
        res.send({
            code: '6021',
            msg: '数据查询失败'
        });
    });
});
router.get('/getArticle', function (req, res, next) {
    const sqlone = 'select * from one_class';
    const connectSql = (oneClass) => {
        const selectArtSql = 'select * from ('
        oneClass.forEach(function (i, index) {
            if (index < (oneClass.length - 1)) {
                selectArtSql += `select * from ${i.enname} UNION ALL `
            } else {
                selectArtSql += ` select * from ${i.enname})as tabel_all where id='${req.query.id}' and art_show=1 order by time desc`;
            }
        }, this);
        return selectArtSql;
    };
    const connectUpdataSql = (oneClass) => {
        if (articleData.length > 0) {
            let sql = 'CREATE VIEW all_article_table(id,visitors) AS SELECT id,visitors FROM ';
            oneClass.forEach((i, index) => {
                sql += `${i.enname} `;
            });
        }
    };
    const asyncGetArticle = async function () {
        let oneClass = await readHandle(sqlone);
        let articleData = await readHandle(connectSql(oneClass));
        return articleData;
    };

    asyncGetArticle().then((data) => {
        res.send({
            code: '6012',
            data,
            msg: '查询成功'
        });
    }).catch((err) => {
        res.send({
            code: '6013',
            data: null,
            msg: '查询失败'
        });
    });
});
module.exports = router;
