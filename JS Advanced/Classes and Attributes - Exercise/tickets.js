function tickets(tickets, criteria) {
  const sorted = [];

  while (tickets.length > 0) {
    const [destination, price, status] = tickets.shift().split("|");

    class Ticket {
      constructor(destination, price, status) {
        this.destination = destination;
        this.price = Number(price);
        this.status = status;
      }
    }

    let ticket = new Ticket(destination, price, status);
    sorted.push(ticket);
  }

  if (criteria === "price") {
    sorted.sort((a, b) => a[criteria] - b[criteria]);
  } else {
    sorted.sort((a, b) => a[criteria].localeCompare(b[criteria]));
  }

  return sorted
}

tickets(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "destination"
);
