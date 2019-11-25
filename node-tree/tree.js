const fs=require('fs');
const path=require('path');

function dirTreeSync(currentDirPath=path.join(__dirname,''),indent=``,rootFlag=true) {
    if(rootFlag) console.log(`${path.basename(currentDirPath)}[ROOT_DIR]`);
    fs.readdirSync(currentDirPath).forEach(function (name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile()) {
            console.log(`\t${indent}|-${name}`);
        } else if (stat.isDirectory()) {
            indent+=`\t`;
            console.log(`${indent+name}[DIR]`);
            dirTreeSync(filePath,indent,false);
        }
    });
}

dirTreeSync();

