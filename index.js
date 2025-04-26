function generatedpassword(length, lowercase, uppercase, nums, symbols){
       const lowercasechar = `abcdefghijklmnopqrstuvwxyz`;
       const uppercasechar = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
       const numchar = `0123456789`;
       const symbolchar = `!@#$%^&*()_+-=":>?`;

       let allowedchar ="";
       let password = "";

       allowedchar += lowercase ? lowercasechar : "";
       allowedchar += uppercase ? uppercasechar : "";
       allowedchar += nums ? numchar : "";
       allowedchar += symbols ? symbolchar : "";

       if(length <= 7){
        return `(password lenght must be atleast 8)`;
       }
       if(allowedchar.length === 0){
        return `(At least 1 set of character needs to be selected)`;
       }

       for(let i = 0; i < length; i++){
        const randomindex = Math.floor(Math.random() * allowedchar.length);
        password += allowedchar[randomindex];
       }
    
       return password;
}

const passwordLength = 14;
const lowercase = true;
const uppercase = true;
const nums = true;
const symbols = true;

const password = generatedpassword(passwordLength, 
                                   lowercase, 
                                   uppercase, 
                                   nums, 
                                   symbols);

console.log(`Generated Password : ${password}`);
