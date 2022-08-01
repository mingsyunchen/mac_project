const { request } = require('express');
const express = require('express');
var mysql = require('mysql');

var  conn = mysql.createConnection({
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'bc8904ce5e35b8',
    password:'6badf3c6',
    database:'heroku_456e105fdfd4920',
    timezone:'UTC'
});

exports.queryall = ()=>{
    let promise = new Promise((resolve,reject)=>{
        var sql = 'SELECT * FROM emp ORDER BY 1';
        conn.query(sql, (err,result)=>{
            if (err) reject(err);
            else resolve(JSON.stringify(result));
            console.log(result[0].hiredate)
        });
    });
    return promise;
};

exports.queryone = (empno)=>{
    console.log(empno)
    let promise = new Promise((resolve,reject)=>{
        var sql = 'SELECT * FROM emp WHERE empno = ?';
        conn.query(sql, [empno], (err,result)=>{
            if (err) reject(err);
            else resolve(JSON.stringify(result));
        });
    });
    return promise;
};

exports.queryname = (name)=>{
    let promise = new Promise((resolve,reject)=>{
        var sql =` SELECT * FROM emp WHERE ename LIKE "${name}%"`;
        conn.query(sql, [name], (err,result)=>{
            if (err) reject(err);
            else resolve(JSON.stringify(result));
            console.log(result)
        });
    });
    return promise;
};

exports.update = (params)=>{
    let promise = new Promise((resolve,reject)=>{
        var sql = 'UPDATE emp SET ename = ?, hiredate = ?, salary = ?, deptno = ?, title = ? WHERE empno = ?';
        conn.query(sql, params, (err,result)=>{
            if (err) reject(err);
            else resolve(JSON.stringify(result));
        });
    });
    return promise;
};

exports.insert = (params)=>{
    let promise = new Promise((resolve,reject)=>{
        var sql = 'INSERT INTO emp VALUES(?,?,?,?,?,?)';
        console.log(params)
        conn.query(sql, params, (err,result)=>{
            if (err) reject(err);
            else resolve(JSON.stringify(result));
        });
    });
    return promise;
};

exports.delete = (empno)=>{
    let promise = new Promise((resolve,reject)=>{
        console.log(empno)
        var sql = 'DELETE FROM emp WHERE empno = ?';
        conn.query(sql, [empno], (err,result)=>{
            if (err) reject(err);
            else resolve(JSON.stringify(result));
        });
    });
    return promise;
};