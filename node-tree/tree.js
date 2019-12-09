const fs=require('fs');
const path=require('path');
const fsStruct={"files":[],"dirs":[]};

function dirTreeSync(currentDirPath=path.join(__dirname,''),indent=``,rootFlag=true) {
    if(rootFlag) {console.log(`${path.basename(currentDirPath)}[ROOT_DIR]`);
    fsStruct.dirs.push(path.basename(currentDirPath));}
    else{
        fsStruct.dirs.push(fsStruct.dirs[fsStruct.dirs.length-1]+"/"+path.basename(currentDirPath))
    }
    fs.readdirSync(currentDirPath).forEach(function (name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile()) {
            fsStruct.files.push(fsStruct.dirs[fsStruct.dirs.length-1]+"/"+path.basename(filePath));
            console.log(`\t${indent}|-${name}`);
        } else if (stat.isDirectory()) {
            indent+=`\t`;
            console.log(`${indent+name}[DIR]`);
            dirTreeSync(filePath,indent,false);
        }
    });
}

dirTreeSync();
console.log(JSON.stringify(fsStruct));

