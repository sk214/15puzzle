'use strict'


let i=1,j=1,m,n;
let moves=0;

let arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,0]]

let valid = function(i, j){
    return (i>=0) && (i<4) && (j>=0) && (j<4);
}

let found = function(i, j){
    return arr[i][j]== 0
}

let CorrectPlace = function(){
    for(i=0;i<4;i++){
        for(j=0;j<4;j++){
            if(document.querySelector(`.b${i}${j}`).textContent==`${4*i+j+1}`)
                document.querySelector(`.b${i}${j}`).style.color = 'white';
            else
                document.querySelector(`.b${i}${j}`).style.color = 'black';
        }
    }
}


let SlideFunction = function(i,j){
    for(let x of [[i-1,j],[i,j-1],[i+1,j],[i,j+1]]){
        m=x[0];
        n=x[1];
        if(valid(m,n) && found(m,n)){
            let temp = arr[i][j]
            arr[i][j] = arr[m][n]
            arr[m][n] = temp;
            document.querySelector(`.b${i}${j}`).textContent = '';
            document.querySelector(`.b${m}${n}`).textContent = arr[m][n];
            console.log(arr[m][n]);
            moves+=1;
            document.querySelector('.score span').textContent = moves;
            CorrectPlace();
            break;
        }
    }
}
let NewGame = function(){
    moves = 0;
    document.querySelector('.score span').textContent = moves;
    arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,0]]
    for(let i=0;i<8;){
        let x1 = Math.trunc(Math.random()*4);
        let y1 = Math.trunc(Math.random()*4);
        let x2 = Math.trunc(Math.random()*4);
        let y2 = Math.trunc(Math.random()*4);
        if(x1==3 && y1==3 || x2==3 && y2==3 || x1==x2&& y1==y1) continue;
        let temp = arr[x1][y1];
        arr[x1][y1] = arr[x2][y2];
        arr[x2][y2] = temp;
        i++;
    }
    console.log(arr);
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            document.querySelector(`.b${i}${j}`).textContent = arr[i][j];
        }
    }
    document.querySelector(`.b${3}${3}`).textContent = '';
    CorrectPlace();
}

NewGame();
CorrectPlace();



for(let x = 0;x<=3;x++){
    for(let y = 0;y<=3;y++){
        document.querySelector(`.b${x}${y}`).addEventListener('click', function(){
            SlideFunction(x,y);
        });

    }
}


document.querySelector('.newGame').addEventListener('click',NewGame);







































// document.querySelector(`.b${0}${0}`).addEventListener('click', function(){
//     fun(0,0);
// });
// document.querySelector(`.b${0}${1}`).addEventListener('click', function(){
//     fun(0,1);
// });
// document.querySelector(`.b${0}${2}`).addEventListener('click', function(){
//     fun(0,2);
// });
// document.querySelector(`.b${0}${3}`).addEventListener('click', function(){
//     fun(0,3);
// });
// document.querySelector(`.b${1}${0}`).addEventListener('click', function(){
//     fun(1,0);
// });
// document.querySelector(`.b${1}${1}`).addEventListener('click', function(){
//     fun(1,1);
// });
// document.querySelector(`.b${1}${2}`).addEventListener('click', function(){
//     fun(1,2);
// });
// document.querySelector(`.b${1}${3}`).addEventListener('click', function(){
//     fun(1,3);
// });
// document.querySelector(`.b${2}${0}`).addEventListener('click', function(){
//     fun(2,0);
// });
// document.querySelector(`.b${2}${1}`).addEventListener('click', function(){
//     fun(2,1);
// });
// document.querySelector(`.b${2}${2}`).addEventListener('click', function(){
//     fun(2,2);
// });
// document.querySelector(`.b${2}${3}`).addEventListener('click', function(){
//     fun(2,3);
// });
// document.querySelector(`.b${3}${0}`).addEventListener('click', function(){
//     fun(3,0);
// });
// document.querySelector(`.b${3}${1}`).addEventListener('click', function(){
//     fun(3,1);
// });
// document.querySelector(`.b${3}${2}`).addEventListener('click', function(){
//     fun(3,2);
// });
// document.querySelector(`.b${3}${3}`).addEventListener('click', function(){
//     fun(3,3);
// });
