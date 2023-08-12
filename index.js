/* Your Code Here */

function createEmployeeRecord(array){
    const [firstName, familyName, title, payPerHour] = array
    let obj = {}
        obj = {
        firstName: firstName,
        familyName :familyName,
        title :title,
        payPerHour :payPerHour,
        timeInEvents: [],
        timeOutEvents: []
        };
        return obj
    }

function createEmployeeRecords (arrays){
   const array = arrays.map(arr=> arr)
   return  array. map(ar=>createEmployeeRecord(ar))

}
function createTimeInEvent(date){
    const [datee, hour] = date.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour,10),
        date: datee
  })
  return this 
}

function createTimeOutEvent(date){
    const [datee, hour] = date.split(' ')
   this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour,10),
    date: datee
  })
  return this
}


function hoursWorkedOnDate(date) {

    const out = this.timeOutEvents.find((d)=> d.date === date);
    const inT = this.timeInEvents.find((d)=>d.date === date);
    const res = (out.hour - inT.hour)/ 100
    return res 
 }

function wagesEarnedOnDate( date){
    return hoursWorkedOnDate.call( this, date ) * parseFloat(this.payPerHour)
  }


  

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(arr, firstName) {
    return arr.find(employee => employee.firstName === firstName);
}
function calculatePayroll(employeeRecords) {
    const totalPayroll = employeeRecords.reduce((total, employee) => {
      return total + allWagesFor.call(employee);
    }, 0);
  
    return totalPayroll;
  }
  
