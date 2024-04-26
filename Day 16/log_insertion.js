const fs = require("fs");
var file_path = __dirname + "\\log_file.txt";

exports.writing_content = function (msg) {
    let date=new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    // Format the time
    var time = hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

    let data = msg+" request on date: "+date.toDateString()+" time: "+time+ ".\n";

    
    var writer_stream = fs.createWriteStream(file_path, { flags: 'a' });
    writer_stream.write(data, 'UTF8');
    writer_stream.end();

    // writer_stream.on('finish', () => {
    //     console.log("finished writing");
    // });
    writer_stream.on('error', (err) => {
        console.log("error" + err.stack);
    });

}