const fs = require('fs');
const path = require('path');
const FILE_SIZE = 8*1024*100; //размер генерируемого файла в битах
const MAX_CHUNK_SIZE = FILE_SIZE/2;//размер чанка
let chunkBuf = Buffer.alloc(1);//однобайтовый буффер для записи из элемента из файла в чанк


function bigFileCreator(filePath = __dirname, fileName = 'big.file') {//функция создания начального файла
    let flag = true;
    while (flag) {
        let buf = Buffer.from(Math.floor(Math.random() * 1000).toString() + ' ');
        //console.log(buf.toString());
        //console.log(`buf length=${buf.length}; but buf includes ${buf.byteLength}; in buffer :${buf.toString()}`);
        fs.appendFileSync(path.join(filePath, fileName), buf);
        if (fs.statSync(path.join(filePath, fileName)).size >= FILE_SIZE) flag = false;
    }
}

function chunkingFile(filePath, fileName) {//функция выделения двух сортированных чанков из итогового файла
    let fileOffset = 0;
    let chunkNumber = '1';
    let chunkSize = 0;
    let flagOversize = false;//флаг выхода за размер чанка, сигнал к началу сортировки массива
    let chunkarr = [];//массив элементов чанка
    let fd = fs.openSync(path.join(filePath, fileName), 'r');//открываем большой файл для считывания
    let el = '';
    while (FILE_SIZE >= fileOffset) {//считываем элементы до конца файла
        fs.readSync(fd, chunkBuf, 0, 1, fileOffset);
        if (chunkBuf[0] == ' '.charCodeAt(0)) {//считываем элементы до пробела и пушим его в массив
            chunkarr.push(el);
            el = '';
        } else {
            el += chunkBuf.toString();
        }
        fileOffset += 1;
        chunkSize += 1;
        if (chunkSize === MAX_CHUNK_SIZE) flagOversize = true;
        if (flagOversize) {//сортируем массив элементов чанка перед записью его в файл
            chunkarr = chunkarr.sort((a, b) => {
                return Number(a) - Number(b);
            });
            for (let val of chunkarr) {
                //console.log(`${val.toString()} `);
                fs.appendFileSync(`./chunk${chunkNumber}.file`, val + ' ');
            }
            chunkarr = [];
            chunkNumber = '2';
            flagOversize = false;
            chunkSize = 0;
        }
    }
    fs.close(fd, () => console.log(`end working with big file`));
}

function mergeSort(pathToBigFile = __dirname, bigFileName = 'big.file') {//алгоритм сортировки слиянием
    let offset1 = 0;//смещение указателя в первом чанке
    let offset2 = 0;//смещение указателя во 2 чанке
    let buf = Buffer.alloc(1);
    let el1 = '';//элемент считанный из первого чанка
    let el2 = '';//элемент считанный из второго чанка
    let flag = true;//флаг окончания сортировки
    let indicator1 = true;//индикатор из какого чанка следует считывать новый элемент
    let indicator2 = true;
    if (!fs.readdirSync(pathToBigFile).includes(bigFileName)) {
        bigFileCreator();
    }
    chunkingFile(pathToBigFile, bigFileName);
    const chunk_size1=fs.statSync('./chunk1.file').size;//получение размера чанков
    const chunk_size2=fs.statSync('./chunk2.file').size;
    while (flag) {
        if (indicator1 && offset1<chunk_size1) {
            el1='';
            let fdChunk1 = fs.openSync('./chunk1.file', 'r');
            while (buf[0] != ' '.charCodeAt(0) && offset1 != chunk_size1) {//считываем элемент до пробела или конца файла
                fs.readSync(fdChunk1, buf, 0, 1, offset1);
                el1 += buf;
                offset1 += 1;
            }
            fs.closeSync(fdChunk1);
        }
        buf = Buffer.alloc(1);
        if (indicator2 && offset2<chunk_size2) {
            el2='';
            let fdChunk2 = fs.openSync('./chunk2.file', 'r');
            while (buf[0] != ' '.charCodeAt(0) && offset2 != chunk_size2) {
                fs.readSync(fdChunk2, buf, 0, 1, offset2);
                el2 += buf;
                offset2 += 1;
            }
            fs.closeSync(fdChunk2);
        }
        buf = Buffer.alloc(1);
        if (Number(el1)<Number(el2)) {
            fs.appendFileSync('./result_big.file', el1 + ' ');
            el1 = '1000';
                indicator2 = false;
                indicator1 = true;
        } else {
            fs.appendFileSync('./result_big.file', el2 + ' ');
            el2 = '1000';
                indicator1 = false;
                indicator2 = true;
        }
        if (offset1 == chunk_size1 && offset2 == chunk_size2) {//смотрим не обрезалили мы хвост последнего чанка
            flag = false;
           if(Number(el1)>Number(el2)){
               fs.appendFileSync('./result_big.file',el2+';')
           }else {
               if(el1!==el2) fs.appendFileSync('./result_big.file',el1+';')
           }
        }
    }
}

mergeSort();
