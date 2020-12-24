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
 }