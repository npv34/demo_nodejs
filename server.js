let fs = require('fs');
let http = require('http');

//b1 tao server
let server = http.createServer(((req, res) => {
    // lấy url của request gửi lên server
    let urlRequest = req.url;

    switch (urlRequest) {
        case '/':
            getTemplate('index', req, res);
            break;
        case '/search':
            getTemplate('search', req, res);
            break;
        default:
            getTemplate('404', req, res)
    }
}))

function getTemplate(templatePath, req, res) {
    fs.readFile(`${templatePath}.html`, 'utf8', ((err, data) => {
        if (err) {
            throw Error('Error')
        }
        // set header tra ve dang Html
        res.writeHead(200, {'content-type': 'text/html'})
        return res.end(data)
    }))
}
server.listen('8080', function () {
    console.log('server running in port 8080')
})

