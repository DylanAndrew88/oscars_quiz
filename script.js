
  let score = 0;

  function check(){
    document.getElementById('quest1').style.visibility = "visible";
    document.getElementById('startButton').style.visibility = "hidden";
    document.getElementById('startHeader').style.marginBottom = "0px";
    document.getElementById('quizBody').style.marginTop = "0px";
  };

  function check1(){
    let answer1 = document.getElementById('question1').value.toLowerCase();
    if ((answer1 == "meryl streep") || (answer1 == "jack nicholson") || (answer1 == "daniel day-lewis")||
    (answer1 == "daniel day lewis") || (answer1 == "walter brennan") || (answer1 == "katherine hepburn"))
    {
      score++
      document.getElementById('quest1').style.backgroundColor = "#2A7504";
      document.getElementsByClassName('questionTitle')[0].innerHTML = "Correct!";
      document.getElementsByClassName('prompt')[0].innerHTML = "Meryl Streep, Jack Nicholson, Daniel Day-Lewis and Walter Brennan have all won 3 Oscars, while Katherine Hepburn has won 4.";
      document.getElementById('question1').style.visibility = "hidden";
      document.getElementsByClassName('score')[0].innerHTML = "Current Score: "+ score +"/10";
      document.getElementsByClassName('score')[0].style.visibility = "visible";
      document.getElementsByClassName('score')[0].style.marginBottom = "-30px";
      document.getElementById('submit-1').innerHTML = "NEXT>>>";
      document.getElementById('submit-1').setAttribute("onclick", "reveal1()");
    } else {
      document.getElementById('quest1').style.backgroundColor = "#A80A0A";
      document.getElementsByClassName('questionTitle')[0].innerHTML = "Sorry, Wrong!";
      document.getElementsByClassName('prompt')[0].innerHTML = "Meryl Streep, Jack Nicholson, Daniel Day-Lewis and Walter Brennan have all won 3 Oscars, while Katherine Hepburn has won 4.";
      document.getElementById('question1').style.visibility = "hidden";
      document.getElementsByClassName('score')[0].innerHTML = "Current Score: "+ score +"/10";
      document.getElementsByClassName('score')[0].style.visibility = "visible";
      document.getElementsByClassName('score')[0].style.marginBottom = "-30px";
      document.getElementById('submit-1').innerHTML = "NEXT>>>";
      document.getElementById('submit-1').setAttribute("onclick", "reveal1()");
    }
  };

  function reveal1(){
    document.getElementById('quest1').style.visibility = "hidden";
    document.getElementById('quest2').style.visibility = "visible";
  };

  function check2(){
    let answer2 = document.getElementById('question2c').checked;
    if (answer2 == true)
    {
      score++
      document.getElementById('quest2').style.backgroundColor = "#2A7504";
      document.getElementsByClassName('questionTitle')[1].innerHTML = "Correct!";
      document.getElementsByClassName('prompt')[1].innerHTML = "While the David Lean adaptation of the Charles Dickens classic was nominated for Best Picture, it did not win.";
      document.getElementsByClassName('radioChoices')[0].style.visibility = "hidden";
      document.getElementsByClassName('radioChoices')[0].style.marginTop = "0px";
      document.getElementsByClassName('radioChoices')[0].style.marginBottom = "-30px";
      document.getElementsByClassName('score')[1].innerHTML = "Current Score: "+ score +"/10";
      document.getElementsByClassName('score')[1].style.visibility = "visible";
      document.getElementById('submit-2').innerHTML = "NEXT>>>";
      document.getElementById('submit-2').setAttribute("onclick", "reveal2()");
    } else {
      document.getElementById('quest2').style.backgroundColor = "#A80A0A";
      document.getElementsByClassName('questionTitle')[1].innerHTML = "Sorry, Wrong!";
      document.getElementsByClassName('prompt')[1].innerHTML = "While the David Lean adaptation of the Charles Dickens classic was nominated for Best Picture, it did not win.";
      document.getElementsByClassName('radioChoices')[0].style.visibility = "hidden";
      document.getElementsByClassName('radioChoices')[0].style.marginTop = "0px";
      document.getElementsByClassName('radioChoices')[0].style.marginBottom = "-30px";
      document.getElementsByClassName('score')[1].innerHTML = "Current Score: "+ score +"/10";
      document.getElementsByClassName('score')[1].style.visibility = "visible";
      document.getElementById('submit-2').innerHTML = "NEXT>>>";
      document.getElementById('submit-2').setAttribute("onclick", "reveal2()");
    }
  };

  function reveal2(){
    document.getElementById('quest2').style.visibility = "hidden";
    document.getElementById('quest3').style.visibility = "visible";
  };

  function check3(){
    let answer3 = document.getElementById('question3b').checked;
    if (answer3 == true)
    {
      score++
      document.getElementById('quest3').style.backgroundColor = "#2A7504";
      document.getElementsByClassName('questionTitle')[2].innerHTML = "Correct!";
      document.getElementsByClassName('prompt')[2].innerHTML = "Unlike Kubrick, Hitchcock and Welles, Spielberg has won not only 1, but 2 Best Director Oscars.";
      document.getElementsByClassName('radioChoices')[1].style.visibility = "hidden";
      document.getElementsByClassName('radioChoices')[1].style.marginTop = "0px";
      document.getElementsByClassName('radioChoices')[1].style.marginBottom = "-30px";
      document.getElementsByClassName('score')[2].innerHTML = "Current Score: "+ score +"/10";
      document.getElementsByClassName('score')[2].style.visibility = "visible";
      document.getElementById('submit-3').innerHTML = "NEXT>>>";
      document.getElementById('submit-3').setAttribute("onclick", "reveal3()");
    } else {
      document.getElementById('quest3').style.backgroundColor = "#A80A0A";
      document.getElementsByClassName('questionTitle')[2].innerHTML = "Sorry, Wrong!";
      document.getElementsByClassName('prompt')[2].innerHTML = "Unlike Kubrick, Hitchcock and Welles, Spielberg has won not only 1, but 2 Best Director Oscars.";
      document.getElementsByClassName('radioChoices')[1].style.visibility = "hidden";
      document.getElementsByClassName('radioChoices')[1].style.marginTop = "0px";
      document.getElementsByClassName('radioChoices')[1].style.marginBottom = "-30px";
      document.getElementsByClassName('score')[2].innerHTML = "Current Score: "+ score +"/10";
      document.getElementsByClassName('score')[2].style.visibility = "visible";
      document.getElementById('submit-3').innerHTML = "NEXT>>>";
      document.getElementById('submit-3').setAttribute("onclick", "reveal3()");
    }
  };

  function reveal3(){
    document.getElementById('quest3').style.visibility = "hidden";
    document.getElementById('quest4').style.visibility = "visible";
  };

  function check4(){
    let answer4 = document.getElementById('question4').value.toLowerCase();
    if ((answer4 == "the godfather: part ii") || (answer4 == "the godfather: part 2") ||
    (answer4 == "the godfather part 2") || (answer4 == "the godfather part ii") || (answer4 == "return of the king")
    || (answer4 == "the return of the king") || (answer4 == "the lord of the rings: the return of the king")
    || (answer4 == "lord of the rings: the return of the king") || (answer4 == "lord of the rings return of the king")
    || (answer4 == "the lord of the rings: return of the king"))
    {
      score++
      document.getElementById('quest4').style.backgroundColor = "#2A7504";
      document.getElementsByClassName('questionTitle')[3].innerHTML = "Correct!";
      document.getElementsByClassName('prompt')[3].innerHTML = 'The only two sequels to win Best Picture to date are "The Godfather: Part II" and "Lord of the Rings: the Return of the King".';
      document.getElementById('question4').style.visibility = "hidden";
      document.getElementsByClassName('score')[3].innerHTML = "Current Score: "+ score +"/10";
      document.getElementsByClassName('score')[3].style.visibility = "visible";
      document.getElementsByClassName('score')[3].style.marginBottom = "-30px";
      document.getElementById('submit-4').innerHTML = "NEXT>>>";
      document.getElementById('submit-4').setAttribute("onclick", "reveal4()");
    } else {
      document.getElementById('quest4').style.backgroundColor = "#A80A0A";
      document.getElementsByClassName('questionTitle')[3].innerHTML = "Sorry, Wrong!";
      document.getElementsByClassName('prompt')[3].innerHTML = 'The only two sequels to win Best Picture to date are "The Godfather: Part II" and "Lord of the Rings: the Return of the King".';
      document.getElementById('question4').style.visibility = "hidden";
      document.getElementsByClassName('score')[3].innerHTML = "Current Score: "+ score +"/10";
      document.getElementsByClassName('score')[3].style.visibility = "visible";
      document.getElementsByClassName('score')[3].style.marginBottom = "-30px";
      document.getElementById('submit-4').innerHTML = "NEXT>>>";
      document.getElementById('submit-4').setAttribute("onclick", "reveal4()");
    }
  };

  function reveal4(){
    document.getElementById('quest4').style.visibility = "hidden";
    document.getElementById('quest5').style.visibility = "visible";
  };

  function check5(){
    let answer5 = document.getElementById('question5a').checked;
    if (answer5 == true)
    {
      score++
      document.getElementById('quest5').style.backgroundColor = "#2A7504";
      document.getElementsByClassName('questionTitle')[4].innerHTML = "Correct!";
      document.getElementsByClassName('prompt')[4].innerHTML = 'While Morgan Freeman recieved a Best Actor nomination for playing Mandela in "Invictus", he did not win.';
      document.getElementsByClassName('radioChoices')[2].style.visibility = "hidden";
      document.getElementsByClassName('radioChoices')[2].style.marginTop = "0px";
      document.getElementsByClassName('radioChoices')[2].style.marginBottom = "-30px";
      document.getElementsByClassName('score')[4].innerHTML = "Current Score: "+ score +"/10";
      document.getElementsByClassName('score')[4].style.visibility = "visible";
      document.getElementById('submit-5').innerHTML = "NEXT>>>";
      document.getElementById('submit-5').setAttribute("onclick", "reveal5()");
    } else {
      document.getElementById('quest5').style.backgroundColor = "#A80A0A";
      document.getElementsByClassName('questionTitle')[4].innerHTML = "Sorry, Wrong!";
      document.getElementsByClassName('prompt')[4].innerHTML = 'While Morgan Freeman recieved a Best Actor nomination for playing Mandela in "Invictus", he did not win.';
      document.getElementsByClassName('radioChoices')[2].style.visibility = "hidden";
      document.getElementsByClassName('radioChoices')[2].style.marginTop = "0px";
      document.getElementsByClassName('radioChoices')[2].style.marginBottom = "-30px";
      document.getElementsByClassName('score')[4].innerHTML = "Current Score: "+ score +"/10";
      document.getElementsByClassName('score')[4].style.visibility = "visible";
      document.getElementById('submit-5').innerHTML = "NEXT>>>";
      document.getElementById('submit-5').setAttribute("onclick", "reveal5()");
    }
  };

  function reveal5(){
    document.getElementById('quest5').style.visibility = "hidden";
    document.getElementById('quest6').style.visibility = "visible";
  };

  function check6(){
    let answer6 = document.getElementById('question6b').checked;
    if (answer6 == true)
    {
      score++
      document.getElementById('quest6').style.backgroundColor = "#2A7504";
      document.getElementsByClassName('questionTitle')[5].innerHTML = "Correct!";
      document.getElementsByClassName('prompt')[5].innerHTML = 'Jessica Lange has won 2 Oscars, but her first win was as a supporting actress in "Tootsie".';
      document.getElementsByClassName('radioChoices')[3].style.visibility = "hidden";
      document.getElementsByClassName('radioChoices')[3].style.marginTop = "0px";
      document.getElementsByClassName('radioChoices')[3].style.marginBottom = "-30px";
      document.getElementsByClassName('score')[5].innerHTML = "Current Score: "+ score +"/10";
      document.getElementsByClassName('score')[5].style.visibility = "visible";
      document.getElementById('submit-6').innerHTML = "NEXT>>>";
      document.getElementById('submit-6').setAttribute("onclick", "reveal6()");
    } else {
      document.getElementById('quest6').style.backgroundColor = "#A80A0A";
      document.getElementsByClassName('questionTitle')[5].innerHTML = "Sorry, Wrong!";
      document.getElementsByClassName('prompt')[5].innerHTML = 'Jessica Lange has won 2 Oscars, but her first win was as a supporting actress in "Tootsie".';
      document.getElementsByClassName('radioChoices')[3].style.visibility = "hidden";
      document.getElementsByClassName('radioChoices')[3].style.marginTop = "0px";
      document.getElementsByClassName('radioChoices')[3].style.marginBottom = "-30px";
      document.getElementsByClassName('score')[5].innerHTML = "Current Score: "+ score +"/10";
      document.getElementsByClassName('score')[5].style.visibility = "visible";
      document.getElementById('submit-6').innerHTML = "NEXT>>>";
      document.getElementById('submit-6').setAttribute("onclick", "reveal6()");
    }
  };

  function reveal6(){
    document.getElementById('quest6').style.visibility = "hidden";
    document.getElementById('quest7').style.visibility = "visible";
  };

  function check7(){
    let answer7 = document.getElementById('question7').value.toLowerCase();
    if (answer7 == "halle berry")
    {
      score++
      document.getElementById('quest7').style.backgroundColor = "#2A7504";
      document.getElementsByClassName('questionTitle')[6].innerHTML = "Correct!";
      document.getElementsByClassName('prompt')[6].innerHTML = 'Halle Berry became the first African-American woman to win Best Actress for her performance in "Monsters Ball".';
      document.getElementById('question7').style.visibility = "hidden";
      document.getElementsByClassName('score')[6].innerHTML = "Current Score: "+ score +"/10";
      document.getElementsByClassName('score')[6].style.visibility = "visible";
      document.getElementsByClassName('score')[6].style.marginBottom = "-30px";
      document.getElementById('submit-7').innerHTML = "NEXT>>>";
      document.getElementById('submit-7').setAttribute("onclick", "reveal7()");
    } else {
      document.getElementById('quest7').style.backgroundColor = "#A80A0A";
      document.getElementsByClassName('questionTitle')[6].innerHTML = "Sorry, Wrong!";
      document.getElementsByClassName('prompt')[6].innerHTML = 'Halle Berry became the first African-American woman to win Best Actress for her performance in "Monsters Ball".';
      document.getElementById('question7').style.visibility = "hidden";
      document.getElementsByClassName('score')[6].innerHTML = "Current Score: "+ score +"/10";
      document.getElementsByClassName('score')[6].style.visibility = "visible";
      document.getElementsByClassName('score')[6].style.marginBottom = "-30px";
      document.getElementById('submit-7').innerHTML = "NEXT>>>";
      document.getElementById('submit-7').setAttribute("onclick", "reveal7()");
    }
  };

  function reveal7(){
    document.getElementById('quest7').style.visibility = "hidden";
    document.getElementById('quest8').style.visibility = "visible";
  };

  function check8(){
    let answer8 = document.getElementById('question8c').checked;
    if (answer8 == true)
    {
      score++
      document.getElementById('quest8').style.backgroundColor = "#2A7504";
      document.getElementsByClassName('questionTitle')[7].innerHTML = "Correct!";
      document.getElementsByClassName('prompt')[7].innerHTML = 'While Tarantino won Oscars for both his "Pulp Fiction" and "Django Unchained" scripts, he has yet to win Best Director.';
      document.getElementsByClassName('radioChoices')[4].style.visibility = "hidden";
      document.getElementsByClassName('radioChoices')[4].style.marginTop = "0px";
      document.getElementsByClassName('radioChoices')[4].style.marginBottom = "-30px";
      document.getElementsByClassName('score')[7].innerHTML = "Current Score: "+ score +"/10";
      document.getElementsByClassName('score')[7].style.visibility = "visible";
      document.getElementById('submit-8').innerHTML = "NEXT>>>";
      document.getElementById('submit-8').setAttribute("onclick", "reveal8()");
    } else {
      document.getElementById('quest8').style.backgroundColor = "#A80A0A";
      document.getElementsByClassName('questionTitle')[7].innerHTML = "Sorry, Wrong!";
      document.getElementsByClassName('prompt')[7].innerHTML = 'While Tarantino won Oscars for both his "Pulp Fiction" and "Django Unchained" scripts, he has yet to win Best Director.';
      document.getElementsByClassName('radioChoices')[4].style.visibility = "hidden";
      document.getElementsByClassName('radioChoices')[4].style.marginTop = "0px";
      document.getElementsByClassName('radioChoices')[4].style.marginBottom = "-30px";
      document.getElementsByClassName('score')[7].innerHTML = "Current Score: "+ score +"/10";
      document.getElementsByClassName('score')[7].style.visibility = "visible";
      document.getElementById('submit-8').innerHTML = "NEXT>>>";
      document.getElementById('submit-8').setAttribute("onclick", "reveal8()");
    }
  };

  function reveal8(){
    document.getElementById('quest8').style.visibility = "hidden";
    document.getElementById('quest9').style.visibility = "visible";
  };

  function check9(){
    let answer9 = document.getElementById('question9b').checked;
    if (answer9 == true)
    {
      score++
      document.getElementById('quest9').style.backgroundColor = "#2A7504";
      document.getElementsByClassName('questionTitle')[8].innerHTML = "Correct!";
      document.getElementsByClassName('prompt')[8].innerHTML = 'Helen Mirren, in spite of her large body of work up to that point, did not win an Oscar until "The Queen" in 2006.';
      document.getElementsByClassName('radioChoices')[5].style.visibility = "hidden";
      document.getElementsByClassName('radioChoices')[5].style.marginTop = "0px";
      document.getElementsByClassName('radioChoices')[5].style.marginBottom = "-30px";
      document.getElementsByClassName('score')[8].innerHTML = "Current Score: "+ score +"/10";
      document.getElementsByClassName('score')[8].style.visibility = "visible";
      document.getElementById('submit-9').innerHTML = "NEXT>>>";
      document.getElementById('submit-9').setAttribute("onclick", "reveal9()");
    } else {
      document.getElementById('quest9').style.backgroundColor = "#A80A0A";
      document.getElementsByClassName('questionTitle')[8].innerHTML = "Sorry, Wrong!";
      document.getElementsByClassName('prompt')[8].innerHTML = 'Helen Mirren, in spite of her large body of work up to that point, did not win an Oscar until "The Queen" in 2006.';
      document.getElementsByClassName('radioChoices')[5].style.visibility = "hidden";
      document.getElementsByClassName('radioChoices')[5].style.marginTop = "0px";
      document.getElementsByClassName('radioChoices')[5].style.marginBottom = "-30px";
      document.getElementsByClassName('score')[8].innerHTML = "Current Score: "+ score +"/10";
      document.getElementsByClassName('score')[8].style.visibility = "visible";
      document.getElementById('submit-9').innerHTML = "NEXT>>>";
      document.getElementById('submit-9').setAttribute("onclick", "reveal9()");
    }
  };

  function reveal9(){
    document.getElementById('quest9').style.visibility = "hidden";
    document.getElementById('quest10').style.visibility = "visible";
  };

  function check10(){
    let answer10 = document.getElementById('question10').value.toLowerCase();
    if ((answer10 == "unforgiven") || (answer10 == "the french connection") || (answer10 == "french connection")
    || (answer10 == "i never sang for my father") || (answer10 == "mississippi burning") || (answer10 == "bonnie and clyde")
    || (answer10 == "bonnie & clyde"))
    {
      score++
      document.getElementById('quest10').style.backgroundColor = "#2A7504";
      document.getElementsByClassName('questionTitle')[9].innerHTML = "Correct!";
      document.getElementsByClassName('prompt')[9].innerHTML = 'Gene Hackman won for his performances in both "The French Connection" and "Unforgiven", as well as nominations for "Bonnie and Clyde", "Mississippi Burning" and "I Never Sang for My Father".';
      document.getElementById('question10').style.visibility = "hidden";
      document.getElementsByClassName('score')[9].innerHTML = "Current Score: "+ score +"/10";
      document.getElementsByClassName('score')[9].style.visibility = "visible";
      document.getElementsByClassName('score')[9].style.marginBottom = "-30px";
      document.getElementById('submit-10').innerHTML = "SUBMIT";
      document.getElementById('submit-10').setAttribute("onclick", "reveal10()");
    } else {
      document.getElementById('quest10').style.backgroundColor = "#A80A0A";
      document.getElementsByClassName('questionTitle')[9].innerHTML = "Sorry, Wrong!";
      document.getElementsByClassName('prompt')[9].innerHTML = 'Gene Hackman won for his performances in both "The French Connection" and "Unforgiven", as well as nominations for "Bonnie and Clyde", "Mississippi Burning" and "I Never Sang for My Father".';
      document.getElementById('question10').style.visibility = "hidden";
      document.getElementsByClassName('score')[9].innerHTML = "Current Score: "+ score +"/10";
      document.getElementsByClassName('score')[9].style.visibility = "visible";
      document.getElementsByClassName('score')[9].style.marginBottom = "-30px";
      document.getElementById('submit-10').innerHTML = "SUBMIT";
      document.getElementById('submit-10').setAttribute("onclick", "reveal10()");
    }
  };

  function reveal10(){
    document.getElementById('quest10').style.visibility = "hidden";
    if (score >= 6){
      document.getElementById('winloss').style.visibility = "visible";
      document.getElementById('winloss').style.backgroundColor = "#2A7504";
      document.getElementsByClassName('score').style.visibility = "hidden";
      document.getElementsByClassName('mainHeader')[0].innerHTML = "Congratulations!";
      document.getElementsByClassName('subHeader')[0].innerHTML = "You Won!";
      document.getElementsByClassName('finalScore')[0].innerHTML = "Your final score was:";
      document.getElementsByClassName('scoreNumber')[0].innerHTML = score+"0%";
    } else if (score == 0){
      document.getElementById('winloss').style.visibility = "visible";
      document.getElementById('winloss').style.backgroundColor = "#A80A0A";
      document.getElementsByClassName('score')[9].style.visibility = "hidden";
      document.getElementsByClassName('mainHeader')[0].innerHTML = "Sorry!";
      document.getElementsByClassName('subHeader')[0].innerHTML = "You Lost!";
      document.getElementsByClassName('finalScore')[0].innerHTML = "Your final score was:";
      document.getElementsByClassName('scoreNumber')[0].innerHTML = "0%";
    } else {
      document.getElementById('winloss').style.visibility = "visible";
      document.getElementById('winloss').style.backgroundColor = "#A80A0A";
      document.getElementsByClassName('score').style.visibility = "hidden";
      document.getElementsByClassName('mainHeader')[0].innerHTML = "Sorry!";
      document.getElementsByClassName('subHeader')[0].innerHTML = "You Lost!";
      document.getElementsByClassName('finalScore')[0].innerHTML = "Your final score was:";
      document.getElementsByClassName('scoreNumber')[0].innerHTML = score+"0%";
    }
  };
