async function getaccountname (){
const Flutterwave = require('flutterwave-node-v3');
const flw = new Flutterwave("FLWPUBK_TEST-dba9b430b915b88da9d4af4077e185fc-X", "FLWSECK_TEST88f30b5527c8");
const payload = {"account_number": "0018639501", "account_bank": "044"};
const response = await flw.Misc.verify_Account(payload);

return response;
}


export default getaccountname