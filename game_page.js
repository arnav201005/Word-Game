
var P1 =localStorage.getItem("player1_name");
var P2 =localStorage.getItem("player2_name");

p1_s=0;
P2_s=0;

document.getElementById("player1_name").innerHTML=P1;
document.getElementById("player2_name").innerHTML=P2;

document.getElementById("player1_score").innerHTML=p1_s;
document.getElementById("player2_score").innerHTML=P2_s; 

document.getElementById("Qus").innerHTML="Question Turn- " + P1;
document.getElementById("Ans").innerHTML="Answer  Turn- " + P2;

function  send()  
{
    g_w=document.getElementById("word").value;
    word = g_w.toLowerCase();

    c1 = word.charAt(1);
     console.log(c1);

     l = Math.floor(word.length/2);
    c2 = word.charAt(l);
    console.log(c2);
    
    l1= word.length-1;
    c3 = word.charAt(l1);
    console.log(c3);

    w1 = word.replace(c1,"_");
    w2 = w1.replace(c2, " _ ");
    w3 = w2.replace(c3,"_");
    console.log(w3);

    Q = "<h4> Q. "+w3 + "</h4>";
    i = "<br>Answer : <input type='text' id='ans'>";
    b="<br><br><button  onclick='check()'>check</button>";

    t = Q+i+b;
    document.getElementById("output").innerHTML=t;
    document.getElementById("word").value="";
}

var Qus_t="p1";
var Ans_t="p2";

function check()
{
    Answer =document.getElementById("ans").value;
    answer= Answer.toLowerCase();

    if(answer == word){
      if(Ans_t == "p1"){
          p1_s = p1_s+1;
          document.getElementById("player1_score").innerHTML =p1_s;
      }
      else{
        P2_s = P2_s+1;
        document.getElementById("player2_score").innerHTML =P2_s;

      }

    }
      if(Qus_t == "p1") {
          Qus_t = "p2";
          Ans_t = "p1";
          document.getElementById("Qus").innerHTML="Question Turn- " + P2;
          document.getElementById("Ans").innerHTML="Answer  Turn- " + P1;

      } 
      else{
        Qus_t = "p1";
        Ans_t = "p2";
        document.getElementById("Qus").innerHTML="Question Turn- " + P1;
        document.getElementById("Ans").innerHTML="Answer  Turn- " + P2;

          
      }
      document.getElementById("output").innerHTML = "";
}