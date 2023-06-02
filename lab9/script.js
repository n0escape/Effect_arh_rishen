class OperationsWithVideo{
	constructor(){
	}

	setVideo(fileName){
			this.fileName = fileName;
			console.log(`Set file ${this.fileName}`) 
	}

	convertVideo(){ console.log(`Convert video ${this.fileName} to needed format`) }

	processingVideo(){ console.log(`Processing video ${this.fileName}...`) }

	postingVideo(){ console.log(`Posting video ${this.fileName} on YouTube`) }

	generateAPIKey(){
		console.log(`Generating API key for YouTube`)
		return this.apiKey = Math.floor(Math.random() * 10000);
	}

	usingAPIKey(){ 
		this.apiKey = this.generateAPIKey();
		console.log(`Using API key: ${this.apiKey} on library`)
	}
}

class FacadePattern {
	constructor(operations){
			this.operations = operations;
	}

	uploadToYouTube(fileName){
			this.operations.setVideo(fileName);
			this.operations.convertVideo();
			this.operations.processingVideo();
			this.operations.postingVideo();
	}

	apiForYouTube(fileName){
			this.operations.setVideo(fileName);
			this.operations.usingAPIKey();
	}

}

let facade = new FacadePattern(new OperationsWithVideo())

console.log("----------Uploading video----------")
facade.uploadToYouTube("exampleVideo.mp4")
console.log("----------API key operations----------")
facade.apiForYouTube("exampleVideo.mp4")