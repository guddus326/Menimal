<!-- SNS 공유용 주소 연결 용 -->

var url_default_ks = "https://story.kakao.com/share?url=result1.html";
var url_default_fb = "https://www.facebook.com/sharer/sharer.php?u=result1.html";
var url_default_tw_txt = "https://twitter.com/intent/tweet?text=result1.html";
var url_default_tw_url = "&url=result1.html";
var url_default_band = "http://band.us/plugin/share?body=result1.html";
var url_route_band = "&route=result1.html";
var url_default_naver = "http://share.naver.com/web/shareView.nhn?url=result1.html";
var title_default_naver = "&title=result1.html";
var url_this_page = location.href;
var title_this_page = document.title;
var url_combine_ks = url_default_ks + url_this_page;
var url_combine_fb = url_default_fb + url_this_page;
var url_combine_tw = url_default_tw_txt + document.title +
url_default_tw_url + url_this_page;
var url_combine_band = url_default_band + encodeURI(url_this_page)+
'%0A' + encodeURI(title_this_page)+'%0A' + '&route=tistory.com';
var url_combine_naver = url_default_naver + encodeURI(url_this_page) +
title_default_naver + encodeURI(title_this_page);

