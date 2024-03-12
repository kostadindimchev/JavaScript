function extractFile(input) {
    let start = input.lastIndexOf('\\');
    let end = input.lastIndexOf('.')
    let fileName = input.substring(start + 1, end);
    let extension = input.substring(end + 1)
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');