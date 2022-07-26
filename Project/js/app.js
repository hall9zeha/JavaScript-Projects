

//mantener variables privadas y que no se mezclen entre archivos diferentes
//puede hacerse con iife pero no es una solución para código mas extenso

// (function( ){
//     console.log('Desde un IIFE');
// })();

/**
 * Importamos desde app.js
 */
 import functionExportDefault,{client, balance,showBalance,haveBalance,Client } from './cliente.js';
 import {Enterprise} from './empresa.js';

 console.log(client);
 console.log(balance);
 console.log(showBalance(client,balance));
 haveBalance(balance);

 const clientInstance= new Client(client,balance);

 console.log(clientInstance.showInfoClientOfClass());

 const enterpriseInstance= new Enterprise('multivac',5000, 'computer services');

 console.log(enterpriseInstance);
 console.log(enterpriseInstance.showInfoEnterprise());
 //llamando a export function default
 functionExportDefault();
