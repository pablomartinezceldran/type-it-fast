import "./game.css";
// import { Queue } from "../game.js";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
  }
  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }
  peek() {
    return this.elements[this.head];
  }
  get length() {
    return this.tail - this.head;
  }
}

var images = {
  q: "🧀​",
  w: "🧇​",
  e: "​🥗",
  r: "​🍜​",
  t: "​🌮​",
  y: "Y",
  u: "🍇",
  i: "I",
  o: "🦪",
  p: "​🍕​",
  a: "​🥑​",
  s: "​🥣​",
  d: "​🍩​",
  f: "🍓",
  g: "🍪",
  h: "​🍔",
  j: "J",
  k: "🥝",
  l: "🦞",
  z: "🥕",
  x: "X",
  c: "🎃",
  v: "🍷",
  b: "🍆",
  n: "🍊",
  m: "🍏",
};

function Game() {
  let queue = new Queue();
  let mistakes = 0;
  let lastImage = "";
  const [score, setScore] = useState(0);

  function handleInput(key) {
    console.log(key);
    if (queue.peek().value === key) {
      queue.dequeue().remove();
      setScore(score + 1);
    } else mistakes++;
    console.log(queue);
    console.log("mistakes: " + mistakes);
  }

  function startGame() {
    var board = document.getElementById("board");
    var newImage = createRandomImage();
    if (lastImage !== "") {
      while (newImage === lastImage) {
        newImage = createRandomImage();
      }
    } else lastImage = newImage;
    board.appendChild(newImage);
  }

  function createRandomImage() {
    const keys = Object.keys(images);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    let div = document.createElement("div");
    div.textContent = images[randomKey];
    div.className = "image";
    div.value = randomKey;
    queue.enqueue(div);
    return div;
  }

  useEffect(() => {
    startGame();
  });

  document.addEventListener("keydown", function (e) {
    handleInput(e.key);
  });

  return (
    <div className='background'>
      <div className='cont'>
        <div className='header'>
          <Link to='/' style={{ textDecoration: "none" }}>
            <div className='txt'>Home</div>
          </Link>

          <h1 className='txt'>Score: {score}</h1>
        </div>
        <div className='game'>
          <div id='board' className='game-area'></div>
        </div>
        <div className='gradient'></div>
        <div className='keyboard'>
          <div className='keyboard-row'>
            <div className='key noselect' id='q' onClick={() => handleInput("q")}>
              Q
            </div>
            <div className='key noselect' id='w' onClick={() => handleInput("w")}>
              W
            </div>
            <div className='key noselect' id='e' onClick={() => handleInput("e")}>
              E
            </div>
            <div className='key noselect' id='r' onClick={() => handleInput("r")}>
              R
            </div>
            <div className='key noselect' id='t' onClick={() => handleInput("t")}>
              T
            </div>
            <div className='key noselect' id='y' onClick={() => handleInput("y")}>
              Y
            </div>
            <div className='key noselect' id='u' onClick={() => handleInput("u")}>
              U
            </div>
            <div className='key noselect' id='i' onClick={() => handleInput("i")}>
              I
            </div>
            <div className='key noselect' id='o' onClick={() => handleInput("o")}>
              O
            </div>
            <div className='key noselect' id='p' onClick={() => handleInput("p")}>
              P
            </div>
          </div>
          <div className='keyboard-row'>
            <div className='key noselect' id='a' onClick={() => handleInput("a")}>
              A
            </div>
            <div className='key noselect' id='s' onClick={() => handleInput("s")}>
              S
            </div>
            <div className='key noselect' id='d' onClick={() => handleInput("d")}>
              D
            </div>
            <div className='key noselect' id='f' onClick={() => handleInput("f")}>
              F
            </div>
            <div className='key noselect' id='g' onClick={() => handleInput("g")}>
              G
            </div>
            <div className='key noselect' id='h' onClick={() => handleInput("h")}>
              H
            </div>
            <div className='key noselect' id='j' onClick={() => handleInput("j")}>
              J
            </div>
            <div className='key noselect' id='k' onClick={() => handleInput("k")}>
              K
            </div>
            <div className='key noselect' id='l' onClick={() => handleInput("l")}>
              L
            </div>
          </div>
          <div className='keyboard-row'>
            <div className='key noselect' id='z' onClick={() => handleInput("z")}>
              Z
            </div>
            <div className='key noselect' id='x' onClick={() => handleInput("x")}>
              X
            </div>
            <div className='key noselect' id='c' onClick={() => handleInput("c")}>
              C
            </div>
            <div className='key noselect' id='v' onClick={() => handleInput("v")}>
              V
            </div>
            <div className='key noselect' id='b' onClick={() => handleInput("b")}>
              B
            </div>
            <div className='key noselect' id='n' onClick={() => handleInput("n")}>
              N
            </div>
            <div className='key noselect' id='m' onClick={() => handleInput("m")}>
              M
            </div>
          </div>
        </div>
        <div className='footer'></div>
      </div>
    </div>
  );
}

export default Game;
