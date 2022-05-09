function next(){

    window.location="activity_2.html";}
score=0;
function update(){
    score=score+1;
    document.getElementById("meow").innerHTML="score="+ score;
}
function save(){
localStorage.setItem("score",score);

}