 export default class Lib {
     static renderFullPlace(place) {
         let placeParts = [];
         let tPlace = place;
         while (tPlace) {
             placeParts.push(tPlace.placeName);
             tPlace = tPlace.parentPlace;
         }
         return placeParts.join(", ");
     }
     static formatCurrency(price) {
         var formatter = new Intl.NumberFormat('vn-VN', {
             style: 'currency',
             currency: 'VND',
         });

         return formatter.format(price);
     }
     static formatDate(date) {
         const dateObj = new Date(date);
         return `${dateObj.getHours().toString().padStart(2,"0")}h${dateObj.getMinutes().toString().padStart(2,"0")} ${dateObj.toDateString()}`
     }
     static getNextDate(date, hours) { 
         const nextDateObj = new Date(date);
         nextDateObj.setHours(nextDateObj.getHours() + hours);
         return nextDateObj;
     }
 }