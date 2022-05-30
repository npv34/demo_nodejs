let fs = require('fs');
let http = require('http');

//b1 tao server
let server = http.createServer(((req, res) => {

    let urlArr = ['/search', '/'];

    // lấy url của request gửi lên server
    let urlRequest = req.url;

    let checkUrl = urlArr.filter(item => {
        return item === urlRequest
    })

    if (checkUrl.length === 0) {
        // đọc file
        fs.readFile('404.html', 'utf8', ((err, data) => {
            if (err) {
                throw Error('Error')
            }
            // set header tra ve dang Html
            res.writeHead(200, {'content-type': 'text/html'})

            // trả về response cho trình duyệt
            return res.end(data)
        }))
    }

    if (req.url === '/search' && req.method === 'POST') {
        console.log('form submited!')
        return res.end()
    }
    fs.readFile('index.html', 'utf8', ((err, data) => {
        if (err) {
            throw Error('Error')
        }
        // set header tra ve dang Html
        res.writeHead(200, {'content-type': 'text/html'})
        return res.end(data)
    }))
}))

server.listen('8080', function () {
    console.log('server running in port 8080')
})

