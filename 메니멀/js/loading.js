var fso = new ActiveXObject("Scripting.FileSystemObject");
var filename = "C:\\Bitnami\\wampstack-7.4.6-1\\apache2\\htdocs\\메니멀\\write.txt";
window.onload = function (){
    var fs = fso.OpenTextFile(filename,1,true,-1);
    var arr = new Array();
    arr = fs.Readline().split(" ");

    var i=0,e=0,n=0,s=0,t=0,fnumber=0,p=0,j=0;
    var mb = "";
    for(var num = 0; num<20; num++){
        switch(arr[num]){
            case "i":
                i++;
                break;
            case "e":
                e++;
                break;
            case "n":
                n++;
                break;
            case "s":
                s++;
                break;
            case "t":
                t++;
                break;
            case "f":
                fnumber++;
                break;
            case "p":
                p++;
                break;
            case "j":
                j++;
                break;
        }
    }
    if(i>e){
        mb +="i";
    }else{
        mb +="e";
    }
    if(s>n){
        mb +="s";
    }else{
        mb +="n";
    }
    if(t>fnumber){
        mb +="t";
    }else{
        mb +="f";
    }
    if(p>j){
        mb +="p";
    }else{
        mb +="j";
    }
    switch(mb){
        case "enfj":
            location.replace("result1.html");
            break;
        case "entp":
            location.replace("result2.html");
            break;
        case "intp":
            location.replace("result3.html");
            break;
        case "esfj":
            location.replace("result4.html");
            break;
        case "isfj":
            location.replace("result5.html");
            break;
        case "estp":
            location.replace("result6.html");
            break;
        case "istp":
            location.replace("result7.html");
            break;
        case "infj":
            location.replace("result8.html");
            break; 
        case "isfp":
            location.replace("result9.html");
            break;
        case "entj":
            location.replace("result10.html");
            break;
        case "intj":
            location.replace("result11.html");
            break;
        case "enfp":
            location.replace("result12.html");
            break; 
        case "infp":
            location.replace("result13.html");
            break;
        case "esfp":
            location.replace("result14.html");
            break;
        case "estj":
            location.replace("result15.html");
            break;
        case "istj":
            location.replace("result16.html");
            break; 
    }
    
    fs.close();
    fso.DeleteFile(filename);
}