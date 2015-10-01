var hours = process.argv[2];
var minutes = process.argv[3];

// Немного замечательного кода и магии
var res = '';
var isNumbers = (isFinite(hours) && isFinite(minutes)) ? true:false;
var isCorrect = (hours>=0 && hours<=23 && minutes>=0 && minutes<=59) ? true:false;
if (isNumbers && isCorrect) 
{		
	getRoman(hours);
	res = res + ':';
	getRoman(minutes);
	console.log(res);
	getArt();
}
else
	console.log('Время введено не верно');
	
function getRoman(n)
{
	var dec = (n-n%10)/10;
	if (dec!=0)
		getDecades(dec);
	var units = n - dec*10;
	getUnits(units);
}
	
function getDecades(numb)
{	
	switch(numb) 
	{
		case 5:
			res = res + 'L';
			break;
		case 4:
			res = res + 'XL';
			break;
		
		default:
			for (i=0; i<numb;i++)
				res = res + "X";
	}
}

function getUnits(numb)
{	
	switch(numb) 
	{
		case 9:
			res = res + 'IX';
			break;
		case 8:
			res = res + 'VIII';
			break;
		case 7:
			res = res + 'VII';
			break;
		case 6:
			res = res + 'VI';
			break;
		case 5:
			res = res + 'V';
			break;
		case 0:
			res = res + '0';
			break;
		case 4:
			res = res + 'IV';
			break;
		default:
			for (i=0; i<numb;i++)
				res = res + "I";
	}
}

function getArt()
{
	var artArray = ['','','',''];
	for (i=0; i<res.length; i++)
	{
		var ar = getSymb(res.charAt(i));
		for (j=0; j<ar.length; j++)
		{
			artArray[j] = artArray[j] + ar[j];
			if (i!=0)
				artArray[j] += ' ';
		}
	}
	for (a=0; a<artArray.length; a++)
		console.log(artArray[a]);
}

function getSymb(s)
{	
	var ar = new Array();
	switch (s)
	{
		case ':':
			ar[0] = '  v  ';
			ar[1] = '  ^  ';
			ar[2] = '  v  ';
			ar[3] = '  ^  ';
			break;
		case '0':
			ar[0] = ' --- ';
			ar[1] = '|   |';
			ar[2] = '|   |';
			ar[3] = ' --- ';
			break;
		case 'I':
			ar[0] = ' - - ';
			ar[1] = '  |  ';
			ar[2] = '  |  ';
			ar[3] = ' - - ';
			break;
		case 'X':
			ar[0] = '-  - ';
			ar[1] = ' \\/  ';
			ar[2] = ' /\\  ';
			ar[3] = '-  - ';
			break;
		case 'V':
			ar[0] = '-   -';
			ar[1] = ' \\ / ';
			ar[2] = '  v  ';
			ar[3] = '  -  ';
			break;	
		case 'L':
			ar[0] = '--   ';
			ar[1] = '|    ';
			ar[2] = '|    ';
			ar[3] = '---- ';
			break;
	}
	return ar;
}
