class Regex{
    pinnum;
    constructor(...params){
        this.pinnum=params[0];
    }
    get pinnum(){return this._pinnum;}
    set pinnum(pinnum){
        let pinRegex=RegExp('^[1-9]{2}[: :][0-9]{10}$');
        let pinRegex1=RegExp('^[A-Z a-z]{1}[0-9]{5}');
        let pinRegex2=RegExp('^[A-Z a-z 0-9]{3}[.][A-Z a-z 0-9]{3}@[A-Z a-z 0-9]{9}[.][a-z]{2}[.][a-z]{1}$');
        let pinCheck=pinRegex.test(pinnum);
        let pinCheck1=pinRegex1.test(pinnum);
        let pinCheck2=pinRegex2.test(pinnum);
    }
    toString(){
        return this.pinnum;
    }
}
let regex=new Regex(480088);
console.log(regex.toString());
let regex1=new Regex("A80088");
console.log(regex1.toString());
if(regex.toString()==480088)
{
    console.log("Validate");
}
else{
    console.log("Not Validate");
}
if(regex1.toString()=="A80088")
{
    console.log("Validate");
}
else{
    console.log("Not Validate");
}
let regex2=new Regex("48008B");
console.log(regex2.toString());
if(regex2.toString()=="48008B")
{
    console.log("Validate");
}
else{
    console.log("Not Validate");
}
let regex3=new Regex('480 088');
console.log(regex3.toString());
if(regex3.toString()==480088)
{
    console.log("Validate");
}
else{
    console.log("Not Validate");
}
let regex4=new Regex('abc.xyz@bridgelabz.co.in');
console.log(regex4.toString());
if(regex4.toString()=="abc.xyz@bridgelabz.co.in")
{
    console.log("Validate");
}
else{
    console.log("Not Validate");
}