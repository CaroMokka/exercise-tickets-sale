function avengersTicketSale(people) {
  let count25 = 0;
  let count50 = 0;

  for (let bill of people) {
    if (bill === 25) {
      count25++;
    } else if (bill === 50) {
      if (count25 === 0) return "NO";
      count25--;
      count50++;
    } else if (bill === 100) {
      if (count50 > 0 && count25 > 0) {
        count50--;
        count25--;
      } else if (count25 >= 3) {
        count25 -= 3;
      } else {
        return "NO";
      }
    } else {
      return "NO";
    }
  }

  return "YES";
}

// Caso de pruebas
console.log(avengersTicketSale([25, 50, 25, 100])); // YES
console.log(avengersTicketSale([25, 25, 50])); // YES
console.log(avengersTicketSale([25, 100])); // NO
console.log(avengersTicketSale([25, 25, 50, 50, 100])); // NO
console.log(avengersTicketSale([25, 25, 25, 100])); // YES
console.log(avengersTicketSale([25, 50, 100])); // NO
console.log(avengersTicketSale([25, 25, 50, 25, 100])); // YES
console.log(avengersTicketSale([50])); //  NO
console.log(avengersTicketSale([100])); // NO
console.log(avengersTicketSale([25, 50, 25, 50, 100])); // NO
console.log(avengersTicketSale([25, 25, 50, 100, 25, 25, 50, 100])); // YES
