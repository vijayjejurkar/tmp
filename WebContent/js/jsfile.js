function startTime()
{
var today=new Date();
var h=(today.getHours() >12) ? today.getHours()- 12 : today.getHours();
var hFormatted = ("0" + h).slice(-2);
var m=today.getMinutes();
var s=today.getSeconds();
var ampm = (today.getHours()>=12) ? "PM" : "AM";
// add a zero in front of numbers<10
h=checkTime(h);
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML= hFormatted+":"+m+":"+s+" "+ampm;
t=setTimeout(function(){startTime()},500);
}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}