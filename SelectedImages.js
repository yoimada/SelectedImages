(function (){
var aArray = [];
var e = document.createElement('div');
e.setAttribute("style","position:absolute; top:50px; left:50px; text-align:left; z-index:1000; padding:10px; background-color:white; border:dashed 5px #000;");
e.appendChild( window.getSelection().getRangeAt(0).cloneContents() );
    
/*a tag*/
var alist = e.getElementsByTagName("a");
for( var j = 0; j < alist.length; j++ )
{
    var w = alist[j].getAttribute("href");
    if (!w) continue;
    if ( typeof(document.baseURI) != "undefined")
        if ( w.indexOf("http") != 0 ) w = document.baseURI+w;
    var r = w.toLowerCase();
    if ( 
        r.lastIndexOf(".jpg") == r.length-".jpg".length ||
        r.lastIndexOf(".jpeg") == r.length-".jpeg".length ||
        r.lastIndexOf(".gif") == r.length-".gif".length ||
        r.lastIndexOf(".png") == r.length-".png".length
        )
        AddArray( w, aArray);
}
/*img tag*/
var imglist = e.getElementsByTagName("img");
for( var j = 0; j < imglist.length; j++ )
{
    var q = imglist[j].getAttribute("src");
    if(!q) continue;
    if ( typeof(document.baseURI) != "undefined" )
        if ( q.indexOf("http") != 0 ) q = document.baseURI+q;
    var y = q.toLowerCase();
    if (
        (
          y.lastIndexOf(".jpg") == y.length-".jpg".length ||
          y.lastIndexOf(".jpeg") == y.length-".jpeg".length ||
          y.lastIndexOf(".gif") == y.length-".gif".length ||
          y.lastIndexOf(".png") == y.length-".png".length ||
          /*for twitter*/
          y.lastIndexOf(":orig") == y.length-":orig".length ||
          y.lastIndexOf(":large") == y.length-":large".length
        ) 
        && /*exclude*/
        y.lastIndexOf("s.jpg") != y.length-"s.jpg".length &&
        y.lastIndexOf("s.jpeg") != y.length-"s.jpeg".length &&
        y.lastIndexOf("s.gif") != y.length-"s.gif".length &&
        y.lastIndexOf("s.png") != y.length-"s.png".length
       )
       AddArray( q, aArray);
}

e.innerHTML="<button onclick='this.parentNode.style.display=\"none\";'>close</button><BR>"+aArray.join("<BR>");   
document.body.appendChild(e);
window.scrollTo( 0 , 0 ) ;

})();

function AddArray(needle,array)
{
	for( i in array)
		if ( array[i] == needle )
			return;
	array.push(needle);
	return;
}



//javascript:(function (){var aArray = [];var e = document.createElement('div');e.setAttribute("style","position:absolute; top:50px; left:50px; text-align:left; z-index:1000; padding:10px; background-color:white; border:dashed 5px #000;");e.appendChild( window.getSelection().getRangeAt(0).cloneContents() );var alist = e.getElementsByTagName("a");for( var j = 0; j < alist.length; j++ ){var w = alist[j].getAttribute("href");if (!w) continue;if ( typeof(alist[j].baseURI)!="undefined" )if ( w.indexOf("http") != 0 ) w = document.baseURI+w;var r = w.toLowerCase();if (r.lastIndexOf(".jpg") == r.length-".jpg".length ||r.lastIndexOf(".jpeg") == r.length-".jpeg".length ||r.lastIndexOf(".gif") == r.length-".gif".length ||r.lastIndexOf(".png") == r.length-".png".length)AddArray( w, aArray);}var imglist = e.getElementsByTagName("img");for( var j = 0; j < imglist.length; j++ ){var q = imglist[j].getAttribute("src");if(!q) continue;if ( typeof(imglist[j].baseURI)!="undefined" )if ( q.indexOf("http") != 0 ) q = document.baseURI+q;var y = q.toLowerCase();if ((y.lastIndexOf(".jpg") == y.length-".jpg".length ||y.lastIndexOf(".jpeg") == y.length-".jpeg".length ||y.lastIndexOf(".gif") == y.length-".gif".length ||y.lastIndexOf(".png") == y.length-".png".length ||y.lastIndexOf(":orig") == y.length-":orig".length ||y.lastIndexOf(":large") == y.length-":large".length) && y.lastIndexOf("s.jpg") != y.length-"s.jpg".length &&y.lastIndexOf("s.jpeg") != y.length-"s.jpeg".length &&y.lastIndexOf("s.gif") != y.length-"s.gif".length &&y.lastIndexOf("s.png") != y.length-"s.png".length)AddArray( q, aArray);}e.innerHTML="<button onclick='this.parentNode.style.display=\"none\";'>close</button><BR>"+aArray.join("<BR>");document.body.appendChild(e);window.scrollTo( 0 , 0 );})();function AddArray(needle,array){for( i in array)if ( array[i] == needle )return;array.push(needle);return;}