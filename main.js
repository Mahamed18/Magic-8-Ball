// Magic 8 Ball

document.getElementById("btn").addEventListener("click", btnclicked);

function btnclicked() {
  let question = document.getElementById("question-in").value.toLowerCase();
  let answer = document.getElementById("answer-out");
  let randNum = Math.random();

  // Process

  if (question.length == 0) {
    answer.innerHTML = "Please ask a question...";
  } else if (question === "is javascript awesome?") {
    answer.innerHTML = "Of course!";
  } else if (question === "does a magic 8 ball actually work?") {
    answer.innerHTML = "How dare you doubt me!";
  } else if (question === "is suits the best show?") {
    answer.innerHTML = "Most Definetely";
  } else if (randNum <= 0.2) {
    answer.innerHTML = "Without a doubt";
  } else if (randNum <= 0.4) {
    answer.innerHTML = "As I see it, yes";
  } else if (randNum <= 0.6) {
    answer.innerHTML = "Concentrate and ask again";
  } else if (randNum <= 0.8) {
    answer.innerHTML = "Don't count on it";
  } else {
    answer.innerHTML = "Outlook: Not so good";
  }
}
