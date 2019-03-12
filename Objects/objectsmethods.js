let restaurant = {
name: "Lone Star",
guestCapacity: 75,
guestCount: 0,
checkAvail: function (partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatsLeft;
},
seatParty: function(amount) {
    restaurant.guestCount = restaurant.guestCount + amount;
},
removeParty: function (amount) {
    restaurant.guestCount = restaurant.guestCount - amount;
}
}


restaurant.seatParty(72)
console.log(restaurant.checkAvail(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvail(4));

