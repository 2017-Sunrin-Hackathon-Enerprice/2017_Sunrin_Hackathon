module.exports = api;

function api(app, request) {
    app.post('/api/find', (req, res)=>{
        var apifind;
        var find = req.param('find')
        var option = req.param('option')
        console.log('FIND_PARAM ====== '+find)
        console.log('OPTION ===== '+option)
        apifind(find, option)
        function apifind(get, option) {
            var options = { method: 'GET',
                url: 'https://apis.daum.net/shopping/search',
                qs:
                    { apikey: 'b332541766bce2231a8806ee04255cb5',
                        q: find,
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
                    apifind = JSON.parse(body)
                    for (var i=0;i<apifind.length;i++){
                        console.log(apifind.channal.item[i])
                    }
                }

            });

        }
    })


}

