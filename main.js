score=0;
function update_score(){
 score = score + 1;
 document.getElementById("current_score").innerHTML = score;
}

function save_score(){
localStorage.setItem("Score" , score);
}

function next_page(){
 window.location = "index.html2";
 }