const express = require('express');
const router = express.Router();
const { 
    query,
    sqlHandle,
    readHandle,
    searchHandle
} = require('../../config/db_connect')
router.get('/select', (req, res, next) => {
    const sql = `select * from apilist`;
    query(sql).then((data) => {
        console.log(data.title)
        res.send({
            code: '1010',
            msg: '读取数据成功',
            data
        })
    }).catch((err) => {
        console.log(err)
        res.send({
            code: '1011',
            msg: '读取数据成功',
            err
        })
    })
})
module.exports = router;