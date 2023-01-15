class Password{
	constructor(){
		console.log("Welcome to the password generator: ");
		this.pass = "";
	}
	generatePassword(len){
		let chars = "abcdefghijklmnopqrstuvwxyz";
		let nums = "1234567890";
		let schars = "!@#$%^&*()_+-=;:'{}[],.<>/?~`"
		if(len < 5){
			console.log("Password should be atleast 5 characters long");
		}else{
			let i = 0;
			while(i < len){
				this.pass += chars[Math.floor(Math.random() * chars.length)];
				this.pass += nums[Math.floor(Math.random() * nums.length)];
				this.pass += schars[Math.floor(Math.random() * schars.length)];
				i = i + 3;
			}
			this.pass = this.pass.substr(0, len);
			return this.pass;
		}
	}
}

let password = new Password;
let p = password.generatePassword(10);
console.log(p);