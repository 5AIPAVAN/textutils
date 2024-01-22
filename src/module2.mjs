import hah from './module1.mjs'  //DEFAULT EXPORTS CAN BE IMPORTED WITH ANY NAME.
import {a,c} from './module1.mjs'  //NAMED EXPORTS MUST BE IMPORTED STRITLY WITH ITS NAME .

console.log(hah);
// console.log(a1);   GIVES ERROR AS a1 IS NOT IMPORTED
console.log(a);
console.log(c);