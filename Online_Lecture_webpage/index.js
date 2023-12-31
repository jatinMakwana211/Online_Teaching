/*var BreakTime=[]
var Round=1

function addBreakTime(){
    if (Round%4==0){
        BreakTime.push(15)
    }
    else{
        BreakTime.push(5)
    }
    Round++;
    console.log(BreakTime)
}

var counter=1
while(counter<=16){
    addBreakTime()
    counter++;
}
console.log(counter)

for (var i=1; i<=10; i++){
    console.log(i)
    
}*/

var Mylist=[13,23,12,45,22,48,66,100];

function printeven(list){
    for(var i=0;i<list.length;i++){
        if(list[i]%2==0){
            console.log(list[i])
        }
    }
}














function printeven(list){
    for(var i=0;i<list.length;i++){
        if(list[i]%2 == 0){
            console.log(list[i]);
        }
    }
}
printeven(Mylist)