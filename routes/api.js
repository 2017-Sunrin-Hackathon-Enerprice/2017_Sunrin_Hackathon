module.exports = api;

function api(app, request) {
    app.post('/api/find', (req, res)=>{
        var find = req.param('find')
        console.log('FIND_PARAM ====== '+find)
        apifind(find)
        function apifind(get) {
            var options = {
                method: 'GET',
                url: 'https://openapi.naver.com/v1/search/shop.json',
                qs: {query:get, display: '20', sort: 'sim'},
                headers:
                    {
                        'postman-token': '28e26378-4016-c96e-8461-21208aa57942',
                        'cache-control': 'no-cache',
                        'x-naver-client-secret': 'DYg9qGMbrE',
                        'x-naver-client-id': 'mIT8ssontD1mRi0egkOu'
                    }
            };
            request(options, (error, response, body)=>{
                if (error) throw new Error(error);
                res.send(200, JSON.parse(body))
            });
        }
    })


}

