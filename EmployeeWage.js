//UC1
const IS_ABSENT=0
let empCheck=Math.floor(Math.random()*10)%6;
if(empCheck==IS_ABSENT)
{
    console.log("Employee is Absent");
}
else
{
    console.log("Employee is Present");
}


//UC2
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;

let empHrs=0;
switch(empCheck){
    case IS_PART_TIME:
        empHrs=PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs=FULL_TIME_HOURS;
        break;
    default:
        empHrs=0;        
}
let empWage=empHrs*WAGE_PER_HOUR;
//console.log("Emp Wage:"+empWage);

//UC3
function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;        
    }

}
empHrs=getWorkingHours(empCheck);
console.log("Emp Wage:"+empWage);

//UC4
const NUM_0F_WORKING_DAYS=2;
for(let day=0;day<=NUM_0F_WORKING_DAYS;day++)
{
    empHrs+=getWorkingHours(empCheck)
}
console.log("Total Hrs:"+empHrs+"Emp Wage:"+empWage);

//UC5
const MAX_HOURS_IN_MONTH=100;
const NUMB_OF_WORKING_DAYS=10;
let totalEmpHrs=0;
let totalWorkingDays=0;
//while(totalEmpHrs<=MAX_HOURS_IN_MONTH && totalWorkingDays<NUMB_OF_WORKING_DAYS)
//{
  //  totalWorkingDays++;
   // totalEmpHrs+=getWorkingHours(empCheck)
//}
console.log("UC5-Total Days:"+totalWorkingDays+"empWage:"+empWage);

//UC6
function calcDailyWage(empHrs){
    return empHrs*WAGE_PER_HOUR;
}
const MAXIMUM_HOURA_IN_MONTH=160;
const NUMBER_OF_WORKING_DAYS=20;
let empDailyWageArr=new Array();
//while(totalEmpHrs<=MAX_HOURS_IN_MONTH && totalWorkingDays<NUMB_OF_WORKING_DAYS)
//{
   // totalWorkingDays++;
   // totalEmpHrs +=empHrs;
  //  empDailyWageArr.push(calcDailyWage(empHrs));
//}
let empWage1=calcDailyWage(totalEmpHrs);
console.log("UC6-Total Days:"+totalWorkingDays +"Total Hrs:"+totalEmpHrs +"EmpWage:"+empWage);

//UC 7A
let totalEmpWage=0;
function sum(dailyWage){
    totalEmpWage +=dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC6-Total Days:"+totalWorkingDays +"Total Hrs:"+totalEmpHrs +"EmpWage:"+empWage);

function totalWages(totalWage,dailyWage){
    return totalWage+dailyWage;
}
console.log("UC7A-empWage with reduce:"+empDailyWageArr.reduce(totalWages,0));

// UC-7B
let dailyCntr=0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr + " .."+dailyWage;
}
let mapDayWithWageArr=empDailyWageArr.map(mapDayWithWage);
console.log("UC7B-Daily Wag Map");
console.log(mapDayWithWageArr);

//UC-7C
function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr=mapDayWithWageArr.filter(fullTimeWage);
console.log("UC-7C Daily Wage filter when FullTime Wage Earned");
console.log(fullDayWageArr);

//UC-7D
function findFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC-7D First Time Full Time Wage was Earned on Day:"+mapDayWithWageArr.find(findFullTimeWage));

//UC-7E
function isAllFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC-7E Check All elements has full time wages:"+fullDayWageArr.every(isAllFullTimeWage));

//UC-7F
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("UC-7F check if any partTimeWage:"+mapDayWithWageArr.some(isAnyPartTimeWage));

//UC-7G
function totalDaysWorked(numOfDays,dailyWage){
    if(dailyWage>0)
    {
        return numOfDays+1;
    }
    return numOfDays;
}
console.log("UC-7G number of Days emp Worked:"+empDailyWageArr.reduce(totalDaysWorked,0));

//UC-8
let empDailyWageMap=new Map();
while(totalEmpHrs<=MAXIMUM_HOURA_IN_MONTH&& totalWorkingDays<NUMBER_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    totalEmpHrs +=empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays,calcDailyWage(empHrs));
}
console.log(empDailyWageMap);
function totalWages(totalWage,dailyWage){
    return totalWage+dailyWage;
}
console.log("UC-8 Emp Wage Map totalHrs:"+Array.from(empDailyWageMap.values()).reduce(totalWages,0));

//UC-9
const findTotal=(totalVal,dailyVal)=>{
    return totalVal+dailyVal;
}
let empDailyHoursMap=new Map();
//let empDailyWageArr=new Array();
let count=0;
let totalHours=Array.from(empDailyHoursMap.values()).reduce(findTotal,0);
let totalSalary=empDailyWageArr.filter(dailyWage => dailyWage>0).reduce(findTotal,0);
console.log("UC9-Emp Wage With Arrow:"+ "Total Hours:"+totalHours  + "Total Salary:"+totalSalary);

let nonWorkingDays=new Array();
let fullWorkingDays=new Array();
let partWorkingDays=new Array();
empDailyHoursMap.forEach((value,key,map) => {
    if(value==8)
    {
        fullWorkingDays.push(key);
    } 
    else if(value==4)
    {
        partWorkingDays.push(key);
    }
    else
    {
        nonWorkingDays.push(key);
    }
});
console.log("Full Working Days:"+fullWorkingDays);
console.log("part Working Days:"+partWorkingDays);
console.log("non Working Days:"+nonWorkingDays);

//UC10
let empDailyHrsAndWageArr=new Array();
while(totalEmpHrs<=MAXIMUM_HOURA_IN_MONTH && totalWorkingDays<NUMBER_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    let empCheck1=Math.floor(Math.random()*10)%3;
    let empHrs=getWorkingHours(empCheck);
    totalEmpHrs+=empHrs;
    empDailyHrsAndWageArr.push(
        {
            dayNum:totalWorkingDays,
            dailyHours:empHrs,
            dailyWage:calcDailyWage(empHrs),
            toString(){
                return '\nDay'+this.dayNum  +'=> Working Hours is '+ this.dailyHours +'And Wage Earned='+ this.dailyWage
            },
        });
}
console.log("showing daily hours Worked and Wage Earned:"+empDailyHrsAndWageArr);

//UC-11A to 11D
let totalWages=empDailyHrsAndWageArr
                .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage>0)
                .reduce((totalWage,dailyHrsAndWage) =>totalWage+=dailyHrsAndWage.dailyWage,0);
let totalHours=empDailyHrsAndWageArr
                .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage>0)
                .reduce(((totalHours,dailyHrsAndWage) => totalHours+=dailyHrsAndWage.dailyWage,0));
console.log("Total Hours:"+totalHours + "Total Wages: "+totalWages);
process.stdout.write("Logging the full Work Days")
empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours==8)
                    .forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));
let partWorkingDayStrArr=empDailyHrsAndWageArr
                    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours==4)
                    .map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("Part Working Days Strings:"+partWorkingDayStrArr);
let nonWorkingDayNums=empDailyHrsAndWageArr
                    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours==0)
                    .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log("non Working Days:"+nonWorkingDayNums);