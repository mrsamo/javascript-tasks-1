var hours = process.argv[2];
var minutes = process.argv[3];

// Немного замечательного кода и магии
var result = '';	
var isNumbers = (isFinite(hours) && isFinite(minutes));
var isCorrect = (hours>=0 && hours<=23 && minutes>=0 && minutes<=59);
if (isNumbers && isCorrect) 
{		
	result += getRoman(hours);
	result += ':';
	result += getRoman(minutes);
	console.log(result);
	getArt(result);
}
else
	console.log('Время введено не верно');
	
function getRoman(n)
{
	var res = '';
	var dec = (n-n%10)/10;
	if (dec!=0)
		res+=getDecades(dec);
	var units = n - dec*10;
	res+=getUnits(units);
	return res;
}
	
function getDecades(numb)
{
	var resD = '';
	switch(numb) 
	{
		case 5:
			resD = resD + 'L';
			break;
		case 4:
			resD = resD + 'XL';
			break;
		
		default:
			for (i=0; i<numb;i++)
				resD = resD + "X";
	}
	return resD;
}

function getUnits(numb)
{
	var resU = '';
	switch(numb) 
	{
		case 9:
			resU = resU + 'IX';
			break;
		case 8:
			resU = resU + 'VIII';
			break;
		case 7:
			resU = resU + 'VII';
			break;
		case 6:
			resU = resU + 'VI';
			break;
		case 5:
			resU = resU + 'V';
			break;
		case 0:
			resU = resU + '0';
			break;
		case 4:
			resU = resU + 'IV';
			break;
		default:
			for (i=0; i<numb;i++)
				resU = resU + "I";
	}
	return  resU;
}

function getArt(res)
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
