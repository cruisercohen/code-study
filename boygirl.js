
let haveChildren = function() {

  let numberOfFamiliesWithoutGirl = 99999;
  let boys = 0;
  let girls = 0;
  do {
    let newBoys = 0;
    let newGirls = 0;
    for (let i = 1; i <= numberOfFamiliesWithoutGirl; i ++) {
      if (Math.random() > 0.5) {
        newGirls += 1;
      } else {
        newBoys += 1;
      }
    }
    // console.log('newBoys', newBoys, 'newGirls', newGirls);
    boys += newBoys;
    girls += newGirls;
    numberOfFamiliesWithoutGirl = newBoys;
  } while (numberOfFamiliesWithoutGirl >= 1)


  console.log('boys', boys, 'girls', girls);
  console.log('ratio', boys/girls);
}

for (let i = 1; i <= 10; i++) {
  haveChildren();
}