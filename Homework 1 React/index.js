///Posetete ja stranata https://swapi.dev/ i pronajdete ja dokumentacijata.
// Otkako kje dojdete na stranata so dokumentacija, pobarajte go endpointot za "People", odnosno, endpointot koj 
// shto koga kje go povikate kje vi vrati kako Response lista od karakteri od Star Wars filmovite.
// Koristejki go Fetch API, napravete GET request do ovoj endpoint, a potoa za dobieniot 
// Response da se napravi slednoto:
//     - Izfiltrirajte go Response objektot, zemete go sekoj mashki akter i dodadete mu go imeto vo niza "men"
//     - Soodvetno i za zenskite akteri, izfiltrirajte go odgovorot, pronajdete gi site zenski akteri i 
//     dodadete im gi iminjata vo niza "women"

// Hint:
//     - Pred da izvrshite filtriranje na Response-ot, proverete koja e strukturata na toj Response i kade 
//     tochno vo odgovorot se smesteni akterite so nivnite informacii.


fetch('https://swapi.dev/api/people/')
.then((response) => response.json())
.then((response ) => {
    
    console.log(response)
    
   const men = response.results.filter(resp => resp.gender === "male")
   const menName = men.map(men => men.name)

   console.log(menName)

   const women = response.results.filter(resp => resp.gender === "female")
   const womenName = women.map(women => women.name)

   console.log(womenName)
    });
        
 