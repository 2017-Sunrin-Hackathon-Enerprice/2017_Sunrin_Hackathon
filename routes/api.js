module.exports = api;

function api(app, request, db) {
    app.post('/api/find', (req, res)=>{
        var apifind;
        var model = req.param('model')
        var kind = req.param('kind')
        var option = req.param('option')
        console.log('MODEL_PARAM ====== '+model)
        console.log('OPTION ===== '+option)
        apifind(model, option)
        function apifind(get, option) {
            var options = { method: 'GET',
                url: 'https://apis.daum.net/shopping/search',
                qs:
                    { apikey: 'b332541766bce2231a8806ee04255cb5',
                        q: get,
                        pageno: '1',
                        result: '20',
                        sort: option,
                        output: 'json' },
                headers:
                    { 'postman-token': '54c6e3bb-cbc5-4edd-a850-2695fe8c9d05',
                        'cache-control': 'no-cache',
                        'content-type': 'application/x-www-form-urlencoded' },
                form: {} };

            request(options, function (err, response, body) {
                if (err) {
                    throw new Error(err);
                }
                else {
                    if(kind == 1){
                        Aircon(model)
                    }
                    else if(kind == 2){
                        Refus(model)
                    }
                    else if(kind == 3){
                        TV(model)
                    }
                    function Aircon(model) {
                        db.Aircon.findOne({
                            모델명 : model
                        }, (err, result)=>{
                            if(err){
                                console.log('/db/find Aircon Error')
                                throw err
                            }
                            else if(result){
                                res.send(200, result)
                            }
                            else {
                                res.send(404,'Data Not Founded')
                            }
                        })
                    }
                    function Refus(model) {
                        db.Refus.findOne({
                            모델명 : model
                        }, (err, result)=>{
                            if(err){
                                console.log('/db/find Aircon Error')
                                throw err
                            }
                            else if(result){
                                res.send(200, result)
                            }
                            else {
                                res.send(404,'Data Not Founded')
                            }
                        })

                    }

                    function TV(model) {
                        db.Tv.findOne({
                            모델명 : model
                        }, (err, result)=>{
                            if(err){
                                console.log('/db/find Aircon Error')
                                throw err
                            }
                            else if(result){
                                res.send(200, result)
                            }
                            else {
                                res.send(404,'Data Not Founded')
                            }
                        })

                    }
                }

            });

        }
    })


}

