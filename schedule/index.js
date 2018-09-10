　
var schedule = require("node-schedule");
var fs = require('fs');
var path = require('path');


var service = require('./service');

//读取环境
var env = require('../lib/env').enabledModel('wrap', 'production');

var config = JSON.parse(fs.readFileSync(path.join(__dirname, './config.json')));

var rule = new schedule.RecurrenceRule();　　

config.schedule.hour !== undefined && (rule.hour = config.schedule.hour);
config.schedule.minute !== undefined && (rule.minute = config.schedule.minute);
config.schedule.second !== undefined && (rule.second = config.schedule.second);


var j = schedule.scheduleJob(rule, function () {
    console.info('任务正在执行...',new Date().toLocaleString())
    config.accounts.forEach(account => {
        //登录
        service.login(account[0], account[1], data => {
            var token = data.token
            console.info('登录成功:', token)
            //签到
            service.sign(token, () => {
                console.info('签到成功')
            });
            //周年庆送祝福
            //先分享增加机会
            service.share(token, () => {
                console.info('分享成功')
                for (let i = 0; i < 3; i++) {
                    service.bless(token, () => {
                        console.info('送祝福成功:', i)
                    });
                }
            });
        })
    })　　
});