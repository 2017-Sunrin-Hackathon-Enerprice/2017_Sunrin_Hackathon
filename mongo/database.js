var mongoose = require('mongoose')
var db = mongoose.connect('mongodb://localhost/Sunrinthon', (err) => {
    if (err) {
        console.log('DB Error!')
        throw err
    }
    else {
        console.log('DB Connect Success')
    }
})

var AirconSchema = mongoose.Schema({
    "효율등급": {type: String},
    "업체명": {type: String},
    "모델명": {type: String},
    "제조원": {type: String},
    "정격냉방능력": {type: String},
    "냉방기간월간소비전력량": {type: String}
})

var RefusSchema = mongoose.Schema({
    "효율등급": {type: String},
    "업체명": {type: String},
    "모델명": {type: String},
    "제조원": {type: String},
    "월간소비전력량": {type: String},
    "용량": {type: String}
})

var TvSchema = mongoose.Schema({
    "효율등급": {type: String},
    "업체명": {type: String},
    "모델명": {type: String},
    "제조원": {type: String},
    "화면대각선길이": {type: String},
    "디스플레이방식": {type: String},
    "소비전력": {type: String}
})


Tv = mongoose.model('TV', TvSchema)
Refus = mongoose.model('Refus', RefusSchema)
Aircon = mongoose.model('Aircon', AirconSchema)

exports.Tv = Tv
exports.Refus = Refus
exports.Aircon = Aircon
exports.db = db