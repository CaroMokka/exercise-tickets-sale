# Avengers Ticket Sale 🎟️

This is a simple greedy algorithm to check if a ticket seller can sell tickets and give correct change to all customers in line.

- Each ticket costs $25.
- Customers pay with $25, $50, or $100 bills.
- The seller starts with no money and must give change in order.

Returns **"YES"** if possible, **"NO"** if not.

## Example

```javascript
avengersTicketSale([25, 50, 25, 100]) // YES
avengersTicketSale([25, 50, 100]) // NO
avengersTicketSale([25, 25, 50]); // YES
avengersTicketSale([25, 100]);    // NO
