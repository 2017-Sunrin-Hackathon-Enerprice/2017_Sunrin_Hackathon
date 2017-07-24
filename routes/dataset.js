module.exports = dataset;

function dataset(fs, db) {
    fs.readFile('TV.json', 'utf-8', (err, data)=>{
        var setdata = JSON.parse(data)

        for(var i=0;i<setdata.length;i++){
            var price;
            if(i%2==0){
                price = 1000000
            }
            else if(i%3==0){
                price = 1500000
            }
            else if(i%7==0){
                price = 1750000
            }
            else {
                price = 1250000
            }
            var datasave = new db.Tv({
                "효율등급" : setdata[i].효율등급,
                "업체명": setdata[i].업체명,
                "모델명": setdata[i].모델명,
                "제조원": setdata[i].제조원,
                "화면대각선길이": setdata[i].화면대각선길이,
                "디스플레이방식": setdata[i].디스플레이방식,
                "소비전력": setdata[i].소비전력,
                "가격": price
            })
            datasave.save()
        }
    })
}