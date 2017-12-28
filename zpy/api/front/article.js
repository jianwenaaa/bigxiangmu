var dbquery = require('../../config/db_connect');
var express = require('express');
var router = express.Router();
const {sqlHandle, readHandle, searchHandle, query} = dbquery;
router.get('/getNav', function (req, res, next) {
    var sqlone = 'select * from one_class';
    var sqltwo = 'select * from two_class';
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
// router.get('/getArticleAll', function (req, res, next) {
//     var sqlone = 'select * from one_class';
//     var sqltwo = 'select * from two_class';
//     const connectSql = (oneClass) => {
//         var selectArtSql = 'select * from (';
//         oneClass.forEach(function (i, index) {
//             if (index < (oneClass.length - 1)) {
//                 selectArtSql += `select * from ${i.enname} UNION ALL `;
//             } else {
//                 selectArtSql += ` select * from ${i.enname})as tabel_all where art_show=1 order by time desc`;
//             }
//         }, this);
//         return selectArtSql;
//     };
//     const connectArticle = (data) => {
//         const { articleData, oneClass, twoClass } = data;
//         return articleData.map(function (i) {
//             oneClass.forEach(function (j) {
//                 if (j.id === i.oneId) {
//                     i.enname_one = j.enname;
//                     i.cnname_one = j.cnname;
//                 }
//             });
//             twoClass.forEach(function (j) {
//                 if (j.id === i.twoId) {
//                     i.enname_two = j.enname;
//                     i.cnname_two = j.cnname;
//                 }
//             });
//             return i;
//         });
//     };

//     const asyncGetArticle = async function () {
//         let oneClass = await readHandle(sqlone);
//         let twoClass = await readHandle(sqltwo);
//         let articleData = await readHandle(connectSql(oneClass));
//         return connectArticle({ articleData, oneClass, twoClass });
//     };

//     asyncGetArticle().then((data) => {
//         res.send({
//             code: '6012',
//             data,
//             msg: '查询成功'
//         });
//     }).catch((err) => {
//         res.send({
//             code: '6013',
//             data: null,
//             msg: '查询失败',
//             err: err
//         });
//     });
// });

module.exports = router;
