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

window.onload = function()
{
	imgLocation("cartain","box");
}

function imgLocation(parent, content)
{
	var cparent = document.getElementById(parent);
	var ccontent = getChildElement(cparent,content);
	//console.log(ccontent);
	
	var imgWidth = ccontent[0].offsetWidth;
	var clos = Math.floor(document.documentElement.clientWidth/imgWidth);
	
	cparent.style.cssText = "width:" + imgWidth*clos + "px;margin:0px auto;";
	
	var BoxHeightArr = [];
	
	for(var i = 0; i < ccontent.length; i++)
	{
		if(i < clos)
		{
			BoxHeightArr[i] = ccontent[i].offsetHeight;
		}
		else
		{
			var minheight = Math.min.apply(null,BoxHeightArr);
			var minIndex = getminheightLocation(BoxHeightArr,minheight);
			
			ccontent[i].style.position="absolute";
			ccontent[i].style.top=minheight + "px";
			ccontent[i].style.left=ccontent[minIndex].offsetLeft + "px";
			BoxHeightArr[minIndex] = BoxHeightArr[minIndex] + ccontent[i].offsetHeight;
		}
	}
}


function getminheightLocation(BoxheightArr,minHeight)
{
	for(var i in BoxheightArr)
	{
		if(BoxheightArr[i] == minHeight)
		{
			return i;
		}
	}
}

function getChildElement(parent,content)
{
	var contentArr = [];
	var allcontent = parent.getElementsByTagName("*");
	for(var i = 0; i < allcontent.length; i++)
	{
		if(allcontent[i].className == content)
		{
			contentArr.push(allcontent[i]);
		}
	}
	
	return contentArr;
}