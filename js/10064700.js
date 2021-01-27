



















if(typeof doyoo=='undefined' || !doyoo){
var d_genId=function(){
    var id ='',ids='0123456789abcdef';
    for(var i=0;i<34;i++){ id+=ids.charAt(Math.floor(Math.random()*16));  }  return id;
};
var doyoo={
env:{
secure:false,
mon:'http://m2425.looyu.com/monitor',
chat:'http://looyuoms2431.looyu.com/chat',
file:'http://static.soperson.com/131221',
compId:20001920,
confId:10064700,
vId:d_genId(),
lang:'',
fixFlash:0,
subComp:13908,
_mark:'1551f4dec0ca5c52c5b49e50b4a063ec947644f465fa9fc7d66ef317f7a97c19f1fa9d581c4d541b'
}

, monParam:{
index:7,
preferConfig:0,

title:'\u3010\u9752\u82b1\u56ed\u827a\u672f\u3011\u5728\u7ebf\u5ba2\u670d',
text:'\u5c71\u59c6\u5927\u53d4\u6559\u80b2\u96c6\u56e2\u662f\u5168\u7403\u9886\u5148\u7efc\u5408\u6027\u6559\u80b2\u57f9\u8bad\u52a0\u76df\u96c6\u56e2\u3002<span style="color:#ff00;">\u76ee\u524d\u65d7\u4e0b\u62e5\u6709\u56db\u5927\u6559\u80b2\u54c1\u724c\uff1a<strong><span style="color:#0990;">K13\u8bfe\u5916\u8f85\u5bfc</span></strong>\u3001</span><strong><span style="color:#3333ff;">\u5c71\u59c6\u5927\u53d4\u82f1\u8bed</span></strong>\u3001<strong><span style="color:#ff00;">\u5c71\u59c6\u5927\u53d4\u5e7c\u513f\u56ed</span></strong>\u3001<strong><span style="color:#ff660;">\u9752\u82b1\u56ed\u827a\u672f</span></strong>\u3002<span style="color:#6600;"><strong>\u54c1\u724c\u5b9e\u529b\u96c4\u539a\uff0c\u8bda\u9080\u60a8\u7684\u52a0\u76df\uff01</strong></span> ',
auto:3,
group:'10064652',
start:'00:00',
end:'24:00',
mask:false,
status:true,
fx:0,
mini:1,
pos:0,
offShow:1,
loop:40,
autoHide:8,
hidePanel:0,
miniStyle:'#0680b2',
miniWidth:'340',
miniHeight:'490',
showPhone:1,
monHideStatus:[3,30,5],
monShowOnly:'',
autoDirectChat:-1,
allowMobileDirect:0
}


, panelParam:{
category:'icon',
preferConfig:1,
position:1,
vertical:150,
horizon:5


,mode:0,
target:'unclesam003',
online:'http://static.soperson.com/default/images/floaticon/on_line_101.gif?131127110427',
offline:'http://static.soperson.com/default/images/floaticon/off_line_101.gif?131127110427',
width:89,
height:139,
status:1,
closable:1,
regions:[],
collapse:0



}



};

if(typeof talk99Init == 'function'){
    talk99Init(doyoo);
}
if(!document.getElementById('doyoo_panel')){


document.write('<div id="doyoo_panel"></div>');


document.write('<div id="doyoo_monitor"></div>');


document.write('<div id="doyoo_share" style="display:none;"></div>');
document.write('<lin'+'k rel="stylesheet" type="text/css" href="http://static.soperson.com/131221/talk99.css?150728"></li'+'nk>');
document.write('<scr'+'ipt type="text/javascript" src="http://static.soperson.com/131221/talk99.js?160907" charset="utf-8"></scr'+'ipt>');

}
}
