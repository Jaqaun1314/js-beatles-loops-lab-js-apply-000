// add solution here
function theBeatlesPlay(musicians, instruments) {
  var firstArr = [];
  for (let i = 0; i < musicians.length; i++) {
    firstArr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return firstArr
}

function johnLennonFacts(facts) {
  let i = 0;
  while (i < facts.length) {
   facts[i] = facts[i] + "!!!"
   i++;
  }
  return facts;
}