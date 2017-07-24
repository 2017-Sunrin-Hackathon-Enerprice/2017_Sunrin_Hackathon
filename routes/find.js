module.exports = find;

function find(app, db) {
    app.post('/db/find', (req, res)=>{
        var model = req.param('model')
        var kind = req.param('kind')
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
            db.Aircon.find({
                제조원 : model
            }, (err, result)=>{
                if(err){
                    console.log('/db/find Aircon Error')
                    throw err
                }
                else if(result[0]!=undefined){
                    res.send(200, result)
                }
                else {
                    res.send(404,'Data Not Founded')
                }
            })
        }
        function Refus(model) {
            db.Refus.find({
                제조원 : model
            }, (err, result)=>{
                if(err){
                    console.log('/db/find Aircon Error')
                    throw err
                }
                else if(result[0]!=undefined){
                    res.send(200, result)
                }
                else {
                    res.send(404,'Data Not Founded')
                }
            })

        }

        function TV(model) {
            db.Tv.find({
                제조원 : model
            }, (err, result)=>{
                if(err){
                    console.log('/db/find Aircon Error')
                    throw err
                }
                else if(result[0]!=undefined){
                    res.send(200, result)
                }
                else {
                    res.send(404,'Data Not Founded')
                }
            })

        }
    })

}