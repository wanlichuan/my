(function(){
    var _qha_data = {};
    _qha_data['domain']=46552;
    _qha_data['e360']='';
    _qha_data['pageClk']=null;
    _qha_data['urlClk']=0;
    _qha_data['idClk']=null;
    _qha_data['mvid']='';
    _qha_data['host']='s.union.360.cn';
    window._qha_data = _qha_data;
    var element=document.createElement('script');
    element.type='text/javascript';
    element.async=true;
    var src="http://s5.qhimg.com/static/a019229bef76e290.js";
    if(document.location.protocol === 'https:'){
        src = src.replace(/http:\/\/([s|p])[0-9].qhimg.com/, 'https://$10.ssl.qhimg.com');
    }
    element.src = src;
    var node=document.getElementsByTagName('script')[0];
    node.parentNode.insertBefore(element, node);
})();

