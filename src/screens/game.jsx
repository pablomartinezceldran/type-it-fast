import "./game.css";
// import { Queue } from "../game.js";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// class Queue {
//   constructor() {
//     this.elements = {};
//     this.head = 0;
//     this.tail = 0;
//   }
//   enqueue(element) {
//     this.elements[this.tail] = element;
//     this.tail++;
//   }
//   dequeue() {
//     const item = this.elements[this.head];
//     delete this.elements[this.head];
//     this.head++;
//     return item;
//   }
//   peek() {
//     return this.elements[this.head];
//   }
//   get length() {
//     return this.tail - this.head;
//   }
// }

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
  // // let queue = new Queue();
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [currentImage, setCurrentImage] = useState(null);
  // const [gameOver, setGameOver] = useState(false);
  // const [gameStarted, setGameStarted] = useState(false);

  const handleInput = (e) => {
    // if (gameOver) return;
    console.log("e: ", e);
    console.log("currentImage: ", currentImage);
    if (currentImage !== null) {
      if (e === currentImage.value) {
        setScore(score + 1);
        setCurrentImage(null);
        currentImage.remove();
        printImage(generateImage());
      } else {
        setMistakes(mistakes + 1);
      }
    }
  };

  document.addEventListener("keydown", function (e) {
    if (!e.repeat) handleInput(e.key);
    else console.log("repeated key");
  });

  const generateImage = () => {
    const keys = Object.keys(images);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    let div = document.createElement("div");
    div.textContent = images[randomKey];
    div.className = "image  noselect";
    div.value = randomKey;
    setCurrentImage(div);
    return div;
  };

  const printImage = (image) => {
    var board = document.getElementById("board");
    board.appendChild(image);
  };

  const clearBoard = () => {
    var board = document.getElementById("board");
    while (board.firstChild) {
      board.removeChild(board.firstChild);
    }
  };

  useEffect(() => {
    setScore(0);
    setMistakes(0);
    clearBoard();
    printImage(generateImage());
  }, []);

  return (
    <div className='background'>
      <div className='cont'>
        <div className='header'>
          <Link to='/' style={{ textDecoration: "none" }}>
            <div className='txt1'>Home</div>
          </Link>
          <div className='stats'>
            <h1 className='txt'>Score: {score}</h1>
            <h2 className='txt'>Mistakes: {mistakes}</h2>
          </div>
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
