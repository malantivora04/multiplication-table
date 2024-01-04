function table(){
    var inp = document.getElementById("t1").value ;
    let table = "";
    var num = 0
    
    do {
        num++;
        var res = inp * num;
        table += inp + "x" + num + "=" + res  + "<br>";
    }
    while(num < 10);

    document.getElementById('p1').innerHTML=table;
}