const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	try {
		await fs.writeFile(fileName, fileContent);
	} catch (err) {
		console.error(err);
	}
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	try {
		await fs.readFile(fileName, 'utf8');
		// console.log(data);
	} catch (err) {
		console.error(err);
	}
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	try {
		const data = await fs.readFile(fileName, 'utf8');
		await fs.writeFile(fileName, data + fileContent);
	} catch (err) {
		console.error(err);
	}
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	try {
		await fs.unlink(fileName);
	} catch (err) {
		console.error(err);
	}
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }