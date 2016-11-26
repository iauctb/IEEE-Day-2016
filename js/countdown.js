
/*
Count down until any date script-
By JavaScript Kit (www.javascriptkit.com)
Over 200+ free scripts here!
Modified by Robert M. Kuhnhenn, D.O.
on 5/30/2006 to count down to a specific date AND time,
on 10/20/2007 to a new format, and 1/10/2010 to include
time zone offset.
*/

/*  Change the items noted in light blue below to create your countdown target date and announcement once the target date and time are reached.  */

var year = 2016;      //-->Enter the count down target date YEAR
var month = 12;        //-->Enter the count down target date MONTH
var day = 4;         //-->Enter the count down target date DAY
var hour = 12;        //-->Enter the count down target date HOUR (24 hour clock)
var minute = 0;      //-->Enter the count down target date MINUTE
var tz = +3.5;          //-->Offset for your timezone in hours from UTC (see http://wwp.greenwichmeantime.com/index.htm to find the timezone offset for your location)

//-->    DO NOT CHANGE THE CODE BELOW!    <--
var montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");

persian={0:'۰',1:'۱',2:'۲',3:'۳',4:'۴',5:'۵',6:'۶',7:'۷',8:'۸',9:'۹'};
function traverse(el){
  if(el.nodeType==3){
	  var list=el.data.match(/[0-9]/g);
	  if(list!=null && list.length!=0){
		  for(var i=0;i<list.length;i++)
			  el.data=el.data.replace(list[i],persian[list[i]]);
	  }
  }
  for(var i=0;i<el.childNodes.length;i++){
	  traverse(el.childNodes[i]);
  }
}

function countdown(yr,m,d,hr,min){
	theyear=yr;themonth=m;theday=d;thehour=hr;theminute=min;
	var today=new Date();
	var todayy=today.getYear();
	if (todayy < 1000) {todayy+=1900;}
	var todaym=today.getMonth();
	var todayd=today.getDate();
	var todayh=today.getHours();
	var todaymin=today.getMinutes();
	var todaysec=today.getSeconds();
	var todaystring1=montharray[todaym]+" "+todayd+", "+todayy+" "+todayh+":"+todaymin+":"+todaysec;
	var todaystring=Date.parse(todaystring1)+(tz*1000*60*60);
	var futurestring1=(montharray[m-1]+" "+d+", "+yr+" "+hr+":"+min);
	var futurestring=Date.parse(futurestring1)-(today.getTimezoneOffset()*(1000*60));
	var dd=futurestring-todaystring;
	var dday=Math.floor(dd/(60*60*1000*24)*1);
	var dhour=Math.floor((dd%(60*60*1000*24))/(60*60*1000)*1);
	var dmin=Math.floor(((dd%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
	var dsec=Math.floor((((dd%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);
	if(dday<=0&&dhour<=0&&dmin<=0&&dsec<=0){

		document.getElementById('counterWrapper').innerHTML = 'همایش <span lang="en">IEEE Day 2016</span> در <strong>۱۴ آذر ۱۳۹۵</strong> با موفقیت برگزار شد!'
      buttonWrapper = document.getElementById('buttonWrapper');
      buttonWrapper.classList.add("soldout");

      buttonWrapper.insertAdjacentHTML('beforeend', '<small class="joqd red-darken-2-text">همایش به پایان رسیده است.</small>')

		return;
	}
	else {
		var string = '';

		if ( dday > 0 ) string += dday + ' روز و ';
		if ( dhour > 0 ) string += dhour + ' ساعت و ';
		if ( dmin > 0 ) string += dmin + ' دقیقه و ';
		if ( dsec > 0 ) string += dsec + ' ثانیه ';

		document.getElementById('counter').innerHTML = string;
		traverse(document.getElementById('counter'))

		setTimeout("countdown(theyear,themonth,theday,thehour,theminute)",1000);
	}
}
