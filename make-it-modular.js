const mymodule = require('./mymodule');

const dir = process.argv[2];
const ext = process.argv[3];

if (!dir || !ext) {
    console.error("err");
    process.exit(1);
}

mymodule(dir, ext, (err, files) => {
    if (err) {
        console.error('Error:', err);
        return;
    }

    files.forEach(file => console.log(file));
});
