function gallerydisplay(time, img1, img2, img3, img4, img5, width, height)
{
this.time=time;
this.img1=img1;
this.img2=img2;
this.img3=img3;
this.img4=img4;
this.img5=img5;
this.width=width;
this.height=height;
this.init = initGalleryDisplay;
}

function init()
{
$(document).ready(function()
	{
		var theImages=new Array();
		theImages[0]=this.img1;
		theImages[1]=this.img2;
		theImages[2]=this.img3;
		theImages[3]=this.img4;
		theImages[4]=this.img5;

		$("#galleryDisplay5").height("this.height + 'px'");
		$("#galleryDisplay5").width("this.width + 'px'");
		
		x = document.createElement('img');
		y= document.getElementById("galleryDisplay5");

		for (i=0; i=4; i++)
			{
				setTimeout("imageLoop()", this.time);
			}
	})
}

function imageLoop()
{
img = document.getElementById("galleryDisplay5").firstchild;
img.setAttribute("src", theImages[i]);
}// JavaScript Document