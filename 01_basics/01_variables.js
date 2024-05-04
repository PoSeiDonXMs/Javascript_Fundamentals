const accountId = 144553
let accountEmail = "madhav@google.com"
var accountPassword= "12345"
accountCity="Jaipur"
// accountId= 2

accountEmail= "hc@hc.com"
accountPassword = 12349
accountCity = "Bengaluru"
let accountState;
/* 
Prefer not to use var!!
because of issue in block scope and functional scope
*/
console.log(accountId); 
console.table([accountId,accountEmail, accountPassword, accountCity, accountState])