const fs = require("fs");
const path = require("path");

const folderPath = "/Users/Abdullah/Documents/rust-programming";


// read all files in the directory
let filesArr = fs.readdirSync(folderPath);


// Loop through array and rename all files 

filesArr.forEach((file, index) => {
  let fullPath = path.join(folderPath, file);
  let fileExtension = path.extname(file);
  let fileName = path.basename(file, fileExtension);

  let newFileName;
  if (fileName?.length === 7){
    // newFileName = fileName.slice(0, 6) + '00' + fileName.slice(6);
    newFileName = fileName.replace('lesson', 'lesson00') + "." + fileExtension;
  }  else if (fileName?.length === 8){
    // newFileName = fileName.slice(0, 7) + '0' + fileName.slice(7);
    newFileName = fileName.replace('lesson', 'lesson0') + "." + fileExtension;
  } else{
    newFileName = fileName + "." + fileExtension;
  }
try {
  fs.renameSync(fullPath, path.join(folderPath, newFileName));
} catch (error) {
  console.error(error)
}
});