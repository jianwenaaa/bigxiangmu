const express = require('express');
const router = express.Router();
const { 
    query,
    sqlHandle,
    readHandle,
    searchHandle
} = require('../../config/db_connect')
const Unique = require('../common/Unique')
const createTime = require('../common/creatTime')

router.post('/insertOneClass', function (req, res, next) {
    const {enname_one, cnname_one, enname_two, cnname_two} = req.body;
    // // console.log(enname_one, cnname_one, enname_two, cnname_two)
    const oneId = Unique()

    const testOneSql = `select id from one_class where enname='${req.body.enname_one}'`;
    // // console.log(testOneSql)
    // console.log(req.body.enname_one)
    const testTwoSql = `select id from two_class where enname='${enname_two}'`;
    const insertOneSql = `insert into one_class (id, enname,cnname, time) values ('${oneId}','${enname_one}','${cnname_one}', '${createTime()}')`
    const insertTwoSql = `insert into two_class(id,parent_id,enname,cnname,time) values('${Unique()}','${oneId}', ${enname_two}','${cnname_two}', '${createTime()}')`
    const createTable = `CREATE TABLE ${enname_one} (LIST INT(11) UNIQUE NOT NULL  AUTO_INCREMENT, id VARCHAR(255) UNIQUE  PRIMARY KEY, oneId VARCHAR(255), twoId VARCHAR(255), article_name VARCHAR(255), editer VARCHAR(255), content LONGTEXT, TIME DATETIME, visitors INT, daodu VARCHAR(255), imgsrc VARCHAR(255), recommend TINYINT, art_show TINYINT);`

    // const insertOneAsync = async function () {
    //     await searchHandle(testOneSql)
    //     await searchHandle(testTwosql)
    //     await sqlHandle(insertOneSql)
    //     await sqlHandle(insertTwoSql)
    //     await query(createTable)
    //     return 'ok'
    // }
    // insertOneAsync().then((data) => {
    //     return searchHandle(testOneSql)
    //     res.send({
    //         code: '1020',
    //         msg: '添加数据成功',
    //         data
    //     })
    // }).catch((err) => {
    //     console.log(err)
    //     res.send({
    //         code: '1021',
    //         msg: '添加数据失败',
    //         err
    //     })
    // })
    
    searchHandle(testOneSql).then((data) => {
        res.send({
            code: '1020',
            msg: '添加数据成功',
            data
        })
    }).catch((err) => {
        console.log(err)
        res.send({
            code: '1021',
            msg: '添加数据失败',
            err
        })
    })

    // sqlHandle(insertOneSql).then((data) => {
    //     res.send({
    //         code: '1000',
    //         msg: '添加数据成功',
    //         data
    //     })
    // }).catch((err) => {
    //     console.log(err)
    //     res.send({
    //         code: '1001',
    //         msg: '添加数据失败',
    //         err
    //     })
    // })



})
// 获取一级类名
router.post('/getOneClass', (req, res, next) => {
    const sql = `select enname, cnname,id from one_class`;
    readHandle(sql).then((data) => {
        console.log(data)
        res.send({
            code: '1010',
            msg: '读取一级类名成功',
            data
        })
    }).catch((err) => {
        console.log(err)
        res.send({
            code: '1011',
            msg: '读取一级类名成功',
            err
        })
    })
})
// 获取二级类名
router.post('/getTwoClass', (req, res, next) => {
    const sql = `select enname, cnname from two_class`;
    readHandle(sql).then((data) => {
        console.log(data)
        res.send({
            code: '1010',
            msg: '读取二级类名成功',
            data
        })
    }).catch((err) => {
        console.log(err)
        res.send({
            code: '1011',
            msg: '读取二级类名成功',
            err
        })
    })
})
// 获取列表
router.get('/getListClass', (req, res, next) => {
    const sqlFir = 'select * from one_class'
    const sqlSec = 'select * from two_class'
    const getClassList = async function () {
        const classOneList = await query(sqlFir)
        const classTwoList = await query(sqlSec)
        return {classOneList, classTwoList}
    }
    getClassList().then((data) => {
        let resultArr = []
        data.classOneList.forEach((i) => {
            let obj = {
                oneClass: i,
                twoClass: []
            }
            data.classTwoList.forEach((k) => {
                if(i.id == k.parent_id){
                    obj.twoClass.push(k)
                }
            })
            resultArr.push(obj)
        })
        res.send({
            code: '1120',
            msg: '数据获取成功',
            resultArr
        })
    }).catch((err) => {
        res.send({
            code: '1121',
            msg: '数据获取失败',
            err: err
        })
    })
})   

//  删除一级类名
router.post('/deleteOneClass', (req, res, next) => {
    const sqlOne  = `delete from one_class where id='${req.body.id}'`
    const sqlTwo  = `delete from two_class where parent_id='${req.body.id}'`
    const sqlArticle  = `DROP TABLE ${req.body.enname_one}`    
    const deleteClassOne =async function () {
        const deleteOne = await sqlHandle(sqlOne)
        const deleteTwo = await sqlHandle(sqlTwo)
        const dropTable = await query(sqlArticle)
        return 'ok'
    }
    deleteClassOne().then((data) => {
        res.send({
            code: '1141',
            msg: "一级类名删除成功"
        }).catch((err) => {
            res.send({
                code: "1142",
                msg: "一级类名删除失败"
                // err: err
            })
        })
    })
})

//  删除二级类名
router.post('/deleteTwoClass', (req, res, next) => {
    const sqlTwo  = `delete from two_class where id='${req.body.id}'`
    sqlHandle(sqlTwo).then((data) => {
        res.send({
            code: '1143',
            msg: "二级类名删除成功"
        }).catch((err) => {
            res.send({
                code: "1144",
                msg: "二级类名删除失败",
                err: err
            })
        })
    })
})


module.exports = router;