// code your solution here
function saturdayFun(activity = "roller-skate") {
   return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(act = "go to the office") {
   return `This Monday, I will ${act}.`
}

function wrapAdjective(str = "*") {
  return function(val = "special") {
      return `You are ${str}${val}${str}!`;
  }
}
