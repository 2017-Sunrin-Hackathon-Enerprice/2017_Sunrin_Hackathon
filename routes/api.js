module.exports = api;

function api(app, request, db) {
    app.post('/api/find', (req, res)=>{
        var model = req.param('model')
        var option = req.param('option')
        console.log('MODEL_PARAM ====== '+model)
        console.log('OPTION ===== '+option)
        apifindd(model, option)
        function apifindd(model, option) {
            var options = { method: 'GET',
                url: 'https://openapi.naver.com/v1/search/shop.json',
                qs: { query: model, display: '100', sort: 'sim' },
                headers:
                    { 'postman-token': 'd7121316-13e1-03f5-f535-56c2f0be1bd2',
                        'cache-control': 'no-cache',
                        'x-naver-client-secret': 'DYg9qGMbrE',
                        'x-naver-client-id': 'mIT8ssontD1mRi0egkOu' } };

            request(options, function (error, response, body) {
                if (error) throw new Error(error);

                res.send(body);
            });

            /*
            var options = { method: 'GET',
                url: 'https://apis.daum.net/shopping/search',
                qs:
                    { apikey: 'b332541766bce2231a8806ee04255cb5',
                        q: model,
                        pageno: '1',
                        result: '20',
                        sort: option,
                        output: 'json' },
                headers:
                    { 'postman-token': '4fb308e5-e522-cc99-b3d8-d01833ec931f',
                        'cache-control': 'no-cache',
                        'content-type': 'application/x-www-form-urlencoded' },
                form: {} };

            request(options, function (error, response, body) {
                if (error) throw new Error(error);

                res.send(JSON.parse(body));
            });*/

        }
    })


}

