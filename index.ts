import { Observable } from 'rxjs'; 
import { logBlue, logRed } from './logs';

console.clear();

// Multi-casting
const o = window.o = new Observable((observer) => {
  // Imaging this code calls the server before calling .next
  logRed('making call to server')
  observer.next("THIS IS AN OBSERVABLE");
});

// Subscribing twice calls the server twice. Probably not cool.
o.subscribe(logRed); 
o.subscribe(logRed); 

// Try manually subscribing again in the console
// o.subscribe(console.log)