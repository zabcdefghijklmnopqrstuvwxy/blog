
var changeflag=0;

function disp()
{
	for(var i = 0; i<2; i++){
		document.getElementsByClassName('list')[i].style.display='block';
	}
}
	
function out(){
	for(var i = 0; i<2; i++){
		document.getElementsByClassName('list')[i].style.display='none';
	}
}

function scene(){
	changeflag = !changeflag;
	if(changeflag)
	{
		document.getElementsByClassName('change')[0].style.background='url(./Resource/Img/night.jpg) no-repeat';
		document.body.style.backgroundImage = "url(./Resource/Img/background.jpg)"; 
	}
	else
	{
		document.getElementsByClassName('change')[0].style.background='url(./Resource/Img/day.jpg) no-repeat';
		document.body.style.backgroundImage = "url(./Resource/Img/br.jpg)"; 
	}

}




