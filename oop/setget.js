/*  both are a special methods thru decalaring the keyword set | get
 *  using these allows conditions to be met first before setting values
 * 
 *  SETTER - through set propertyName(newPropertyValue){...}
 *  GETTER - through get propertyNams(newPropertyValue){...}
 * 
 *  putting underscore (e.g. _property) before the original attribute name makes it an imaginary private property
 */

class Account{
    static accCount = 0;
    
    constructor(username, password){
        this.username = username;
        this.password = password;
        Account.accCount += 1;
    }
    
    set username(newUsername){
        if(newUsername.length > 6){
            this._username = newUsername;
        } else{
            console.warn('username must be more than 6ch');
        }
    }
    
    set password(newPassword){
        if(newPassword.length >= 8){
            this._password = newPassword;
        } else{
            console.warn('password must be more than 8ch');
        }
    }
    
    
}

const teph = new Account('tephL123', '12282006');
console.log(teph.username); // cant be accessed anymore bc of setters and getters
console.log(teph.password);

console.log(teph._username); // those values are reassigned to these properties
console.log(teph._password);

console.log(Account.accCount);