const fs = require('fs/promises')
const myFileWriter = async (fileName, fileContent) => {
    // write code here
    // dont chnage function name
    const data = await fs.writeFile(fileName,fileContent)
    console.log(data);
}
myFileWriter("test.txt", "this is the content for test.txt file")
const myFileReader = async (fileName) => {
    // write code here
    // dont chnage function name
    const data =await fs.readFile(fileName)
    console.log(data);
}
myFileReader("test.txt")
const myFileUpdater = async (fileName, fileContent) => {
    // write code here
    // dont chnage function name
    const data= await fs.appendFile(fileName,fileContent)
    console.log(data);
}
myFileUpdater("test.txt","\n this is the updated content of test.txt")
const myFileDeleter = async (fileName) => {
    // write code here
    // dont chnage function name
    const data =await fs.unlink(fileName)
}
myFileDeleter("test.txt")
module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }