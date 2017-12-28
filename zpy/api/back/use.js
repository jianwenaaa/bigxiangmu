const express = require('express')
const router = express.Router()
const Unique = require('../common/Unique')
const createTime = require('../common/creatTime')
const { sqlHandle, readHandle, query } = require('../../config/connect_db')

// 注册用户名
router.post('/newUser', (req, res) => {
    const sqlSel = `select * from user where name='${req.body.name}'`
    const sqlInsert = `insert into user (id, name, password, privilege) values ('${Unique()}','${req.body.name}','${req.body.password}',0)`
    asyncNewUser = async function () {
        await query(sqlSel)
        await query(sqlInsert)
        return
    }
    asyncNewUser().then(() => {
        res.send({
            code: '0001',
            msg: '注册成功'
        })
    }).catch((err) => {
        res.send({
            code: '0002',
            msg: '用户已存在！',
            err
        })
    })
})

// 登录页面
router.post('/login', (req, res) => {
    const sqlSel = `select * from user where name='${req.body.name}'`
    query(sqlSel).then((data) => {
        if (data.length === 0) {
            res.send({
                code: '0010',
                msg: '用户不存在！'
            })
        }
        if (data[0].password == req.body.password) {
            res.send({
                code: '0012',
                msg: '登录成功'
            })
        } else {
            res.send({
                code: '0013',
                msg: '密码错误！'
            })
        }
    }).catch((err) => {
        res.send({
            code: '0014',
            msg: '操作有误！'
        })
    })
})


module.exports = router





