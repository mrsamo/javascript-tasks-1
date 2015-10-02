var hours = Number(process.argv[2]);
var minutes = Number(process.argv[3]);

if (!Number.isInteger(hours) || !Number.isInteger(minutes))
		console.log('Введённые значения не являются целыми числами');
else 
{
	var isCorrect = (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59);
	if (isCorrect) 
	{
		var res = getRoman(hours) + ':' + getRoman(minutes);
		console.log(res);
		getArt(res);
	}
	else 
		console.log('Значения выходят за границы диапазона');
}
	
function getRoman(numb)
{
	var res = '';
	var units = numb % 10;
	var dec = (numb - units)/10;
	/* не нравится, что при значениях 10 10 выведет по нулю в каждой части (XO:XO)
	пока что убрала это так. должен же быть способ получше? */
	if (units==0 && numb!==0)
		res = getDecades(dec);
	else 
		res = getDecades(dec) + getUnits(units);
	return res;
}
	
function getDecades(numb)
{	
	switch(numb) 
	{
		case 5:
			return 'L';
		case 4:
			return 'XL';		
		default:
			return repeatSymb('X', numb);
	}
}

function getUnits(numb)
{	
	switch(numb) 
	{
		case 9:
			return 'IX';
		case 8:
			return 'VIII';
		case 7:
			return 'VII';
		case 6:
			return 'VI';
		case 5:
			return 'V';
		case 0:
			return '0';
		case 4:
			return 'IV';
		default:
			return repeatSymb('I', numb);
	}
}

function repeatSymb(romanSymb, numb)
{
	var res = '';
	for (i = 0; i < numb; i++)
		res = res + romanSymb;
	return res;
}

function getArt(res)
{
	var artArray = ['','','',''];
	for (i = 0; i < res.length; i++)
	{
		var ar = getSymb(res[i]);
		for (j = 0; j < ar.length; j++)
		{
			artArray[j] = artArray[j] + ar[j];
			if (i != 0)
				artArray[j] += ' ';
		}
	}
	for (a = 0; a < artArray.length; a++)
		console.log(artArray[a]);
}

function getSymb(s)
{	
	var ar = [];
	switch (s)
	{
		case ':':
			ar[0] = '  v  ';
			ar[1] = '  ^  ';
			ar[2] = '  v  ';
			ar[3] = '  ^  ';
			return ar;
		case '0':
			ar[0] = ' --- ';
			ar[1] = '|   |';
			ar[2] = '|   |';
			ar[3] = ' --- ';
			return ar;
		case 'I':
			ar[0] = ' - - ';
			ar[1] = '  |  ';
			ar[2] = '  |  ';
			ar[3] = ' - - ';
			return ar;
		case 'X':
			ar[0] = '-  - ';
			ar[1] = ' \\/  ';
			ar[2] = ' /\\  ';
			ar[3] = '-  - ';
			return ar;
		case 'V':
			ar[0] = '-   -';
			ar[1] = ' \\ / ';
			ar[2] = '  v  ';
			ar[3] = '  -  ';
			return ar;	
		case 'L':
			ar[0] = '--   ';
			ar[1] = '|    ';
			ar[2] = '|    ';
			ar[3] = '---- ';
			return ar;
	}
}
