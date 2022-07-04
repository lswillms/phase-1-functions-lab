const hQ = 42
const feet = 264

function distanceFromHqInBlocks(pickUp) {
    if (pickUp>hQ) {
      return pickUp - hQ
     } else
        return hQ - pickUp
}


function distanceFromHqInFeet(pickUp) {
     return distanceFromHqInBlocks(pickUp) * feet
}

function distanceTravelledInFeet(start, destination) {
    if (start>destination) {
      return (start-destination) *264
    }else {
        return(destination - start) * 264
    }
}

function calculatesFarePrice(start, destination) {

const myMoney = distanceTravelledInFeet(start,destination)

if (myMoney < 400) {
    return 0
} else if (myMoney > 400 && myMoney<=2000) {
    return  .02 * (myMoney - 400)
} else if (myMoney>=2001 && myMoney <=2500) {
    return 25
} else
    return "cannot travel that far"

}







    
