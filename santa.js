function deliverPresents(houses) {
  if (houses.length ===0) return 0
  console.log('Delivering presents to ' + houses[0])
  
  var first = houses.slice(0,1)[0]
  var rest = houses.slice(1, houses.length)

 deliverPresents(rest) ;
}

var houses = ["Sasha", "Mom", "Dad", "Joe"]

module.exports = deliverPresents

