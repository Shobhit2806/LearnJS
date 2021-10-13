function Zomato(DeliveryPerson) {
  console.log("Shobhit Placed a order!");
  DeliveryPerson();
}
Zomato(function DeliveryPerson() {
  console.log("Could you please deliver food?");
});
