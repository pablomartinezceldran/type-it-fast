import "./game.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

var images = {
  q: "🧀​",
  w: "🧇​",
  e: "​🥗",
  r: "​🍜​",
  t: "​🌮",
  // y: "Y",
  u: "🍇",
  // i: "I",
  o: "🦪",
  p: "​🍕​",
  a: "​🥑​",
  s: "​🥣​",
  d: "​🍩​",
  f: "🍓",
  g: "🍪",
  h: "​🍔",
  // j: "J",
  k: "🥝",
  l: "🦞",
  z: "🥕",
  // x: "X",
  c: "🎃",
  v: "🍷",
  b: "🍆",
  n: "🍊",
  m: "🍏",
};

function Game() {
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [currentImage, setCurrentImage] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [seconds, setSeconds] = useState(60);
  var speed = 10;

  useEffect(() => {
    if (seconds === 0) {
      setGameOver(true);
    }
  }, [seconds]);

  useEffect(() => {
    if (gameOver) {
      setTimeout(() => {
        window.location.href = "/gameOver";
        localStorage.setItem("score", Math.trunc(calculatePoints()));
      }, 1000);
    }
  }, [gameOver]);

  useEffect(() => {
    const id = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);
    return () => clearInterval(id);
  }, [seconds]);

  useEffect(() => {
    const id = setInterval(() => {
      generation();
    }, 3000);
    return () => clearInterval(id);
  });

  const calculatePoints = () => {
    return score * (count / 1 - mistakes * 0.7);
  };

  const calculateScore = () => {
    setScore(1 + speed * imagePosition());
  };

  const imagePosition = () => {
    var board = document.getElementById("board");
    return (
      1 -
      currentImage.getBoundingClientRect().x /
        (board.getBoundingClientRect().x + board.offsetWidth)
    );
  };

  const handleInput = (e) => {
    if (gameOver) return;
    if (currentImage !== null) {
      if (e.toLowerCase() === currentImage.value.toLowerCase()) {
        setCount(count + 1);
        calculateScore();
        console.log(calculatePoints());
        setCurrentImage(null);
        currentImage.classList.remove("image-animation");
        currentImage.remove();
        printImage(generateImage());
      } else {
        // no contemplar otras teclas - FALLA
        // if (keys.includes(e.toLowerCase()))
        setMistakes(mistakes + 1);
      }
    }
  };

  // var teclaPresionada = false;
  // document.addEventListener("keydown", function (e) {
  //   if (!teclaPresionada) {
  //     handleInput(e.key);
  //     teclaPresionada = true;
  //   }
  // });

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

  const moveImage = () => {
    //falta hacer que se mueva
  };

  const generation = () => {
    printImage(generateImage());
    moveImage();
  };

  useEffect(() => {
    setScore(0);
    setMistakes(0);
    clearBoard();
    generation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='background'>
      <div className='cont'>
        <div className='header'>
          <Link to='/' style={{ textDecoration: "none" }}>
            <div className='txt1'>Home</div>
          </Link>
          <div className='timer txt1'>{seconds}</div>
          <div className='stats'>
            <h1 className='txt'>Points: {count}</h1>
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
