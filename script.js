function makeBubble(){
    var clutter = ''

    for(var i = 0 ; i<185; i++){
        rn = Math.floor(Math.random()*10)
        clutter  += `<div class="bubble">${rn}</div>`;
    }
    
    
    
    var bbl = document.querySelector(".pbotm");
    bbl.innerHTML = clutter
}
makeBubble();

var timer = 60;
var hitrn = 0

function runTimer(){
    
        var timer1 = setInterval(function(){
            if(timer>0){
                timer--;
                document.querySelector("#timerval").textContent = timer;
            }
            else{
                clearInterval(timer1);
                document.querySelector('.pbotm').innerHTML = '<h1>Game Over</h1>'
            }
            
        },1000)
    
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector('#hitval').textContent = hitrn
    
}
var score = 0
function increaseScore(){
    score += 10;
    document.querySelector('#scoreval').textContent = score
}
document.querySelector('.pbotm').addEventListener('click', function(dets){
    var clickedNum = Number(dets.target.textContent)
    if(hitrn == clickedNum){
        getNewHit();
        makeBubble();
        increaseScore()
    }
})
runTimer()
getNewHit()
