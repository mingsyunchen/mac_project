const express = require('express');
var empmodel = require('./empmodel');

exports.queryall = (req,res)=>{
    empmodel.queryall().then((data)=>{
        data = JSON.parse(data);
        // console.log(data[0].hiredate)
        res.render('queryall',{emp:data});
    }).catch((err)=>{
        console.log('Error: '+err);
    });
};

exports.queryone = (req,res)=>{
    console.log(req.query.empno)
    empmodel.queryone(req.query.empno).then((data)=>{
        data = JSON.parse(data);
        res.render('queryone',{emp:data});
    }).catch((err)=>{
        console.log('Error: '+err);
    });
};

exports.queryname = (req,res)=>{
    console.log(req.query.name)
    empmodel.queryname(req.query.name).then((data)=>{
        data = JSON.parse(data);
        res.render('queryname',{emp:data});
    }).catch((err)=>{
        console.log('Error: '+err);
    });
};

exports.update = (req,res) => {
    var {ename,hiredate,salary,deptno,title,empno} = req.body;
    var params =[ename,hiredate,salary,deptno,title,empno];
    console.log(req.body)
    // console.log(params)
    empmodel.update(params).then((data)=>{
        data =JSON.parse(data);
        res.render('update',{emps:data});
    }).catch((err)=>{
        console.log("Error:" + err);
    });
}

exports.insert = (req,res) => {
    var {ename,hiredate,salary,deptno,title,empno} = req.body;
    var params =[empno,ename,hiredate,salary,deptno,title];
    console.log(params)
    // console.log(params)
    empmodel.insert(params).then((data)=>{
        data =JSON.parse(data);
        res.render('update',{emps:data});
    }).catch((err)=>{
        console.log("Error:" + err);
    });
}

exports.delete = (req,res)=>{
    console.log(req.query.empno)
    empmodel.delete(req.query.empno).then((data)=>{
        data = JSON.parse(data);
        res.render('update',{emp:data});
    }).catch((err)=>{
        console.log('Error: '+err);
    });
};