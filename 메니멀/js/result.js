var fso = new ActiveXObject("Scripting.FileSystemObject");
var filename = "C:\\Bitnami\\wampstack-7.4.6-1\\apache2\\htdocs\\메니멀\\write.txt";

function createFile(mbti){
    if(!fso.FileExists(filename)){
        fso.CreateTextFile(filename,true);
    }
    var f = fso.OpenTextFile(filename,8,true,-1)
    f.Write(mbti);
    f.close();    
}



