const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
let empHrs=0;
function getWorkingHours(empCheck)
{
    switch(empCheck){
        case IS_PART_TIME:
        empHrs=PART_TIME_HOURS;
        return empHrs;
      
        case IS_FULL_TIME:
        empHrs=FULL_TIME_HOURS;
        return empHrs;
        default:
            empHrs=0;
            return empHrs;

    }
}
const MAX_HRS_IN_MONTH=100;
const NUM_OF_WORKING_DAYS=10;
let TotalEmpHrs=0;
let totalWorkingDays=0;
function calcDailyWage(empHrs)
{
    return empHrs=WAGE_PER_HOUR;
}
let empDailyWageArr=new Array();
while(TotalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    let empCheck2=Math.floor(Math.random()*10)%3;
    TotalEmpHrs+=getWorkingHours(empCheck2);
    empDailyWageArr.push(calcDailyWage(empHrs));
}
let empWage2=TotalEmpHrs*WAGE_PER_HOUR;
console.log("UC5 TotalWorkingdays:"+totalWorkingDays+ " EmpWage:"+empWage2+" TotalempHrs:"+TotalEmpHrs);

//UC7A
let totalEmpWage=0;
function sum(dailyWage){
    totalEmpWage+=dailyWage;
}
empDailyWageArr.forEach(sum);
console.assert("TotalDays:"+totalWorkingDays+"Total Hrs:"+TotalEmpHrs+"EmpWage:"+totalEmpWage);
function totalWages(totalWage,dailyWage){
    return totalWage+dailyWage;
}
console.log("EmpWagewith reduce:"+empDailyWageArr.reduce(totalWages,0));

//UC7B
let dailyCntr=0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr +" "+dailyWage;
}
let mapDayWithWageArr=empDailyWageArr.map(mapDayWithWage);
console.log("Daily Wage Map:"+mapDayWithWageArr);

//UC7C
function fulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr=mapDayWithWageArr.filter(fulltimeWage);
console.log("Daily Wage filter when fulltime wage earned:"+fullDayWageArr);

//UC7D
function findFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("First time fulltime wage was earned on day:"+mapDayWithWageArr.find(findFulltimeWage));

//UC7E
function isAllFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("check all full time wage:"+fullDayWageArr.every(isAllFulltimeWage));

//UC7F
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("check any part time wage:"+mapDayWithWageArr.some(isAnyPartTimeWage));

//UC7G
function totalDaysWorked(numOfDays,dailyWage){
    if(dailyWage>0) return numOfDays+1;
    return numOfDays;
}
console.log("number of Days emp worked:"+empDailyWageArr.reduce(totalDaysWorked, 0));