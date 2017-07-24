module.exports = auth;

function auth(afterload) {
    var i=0;
    afterload('http://search.danawa.com/dsearch.php?query=%EC%82%BC%EC%84%B1%2032%EC%9D%B8%EC%B9%98%20tv', function(html,$){
        // while(true){
        //     console.log(` ${$('.prod_name').eq(i).text()}`);
        //     i++;
        // }
        $('.prod_item').each(function (i, obj) {
            //console.log($(this).text())
            console.log($(this))
        })
    })
}
