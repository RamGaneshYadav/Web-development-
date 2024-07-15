let player = 1;
        let gameStarted = false;
        let gameMode = 'friend';

        function makeMove(element) {
            if (!gameStarted || element.innerHTML !== "") {
                return;
            }

            element.innerHTML = player % 2 !== 0 ? "O" : "X";

            if (checkWin()) {
                setTimeout(() => {
                    alert(`${checkWin()} player has won this match`);
                    resetGame();
                }, 100);
            } else if (checkDraw()) {
                setTimeout(() => {
                    alert("This match is a draw!");
                    resetGame();
                }, 100);
            } else {
                player++;
                if (gameMode === 'ai' && player % 2 === 0) {
                    aiMove();
                }
            }
        }

        function startGame(mode) {
            gameMode = mode;
            gameStarted = true;
            document.getElementById('gmconst').style.visibility = 'visible';
        }

        function resetGame() {
            gameStarted = false;
            player = 1;
            document.querySelectorAll('.container > div').forEach(box => box.innerHTML = "");
        }

        function checkWin() {
            const box1 = document.getElementById('div1').innerHTML;
            const box2 = document.getElementById('div2').innerHTML;
            const box3 = document.getElementById('div3').innerHTML;
            const box4 = document.getElementById('div4').innerHTML;
            const box5 = document.getElementById('div5').innerHTML;
            const box6 = document.getElementById('div6').innerHTML;
            const box7 = document.getElementById('div7').innerHTML;
            const box8 = document.getElementById('div8').innerHTML;
            const box9 = document.getElementById('div9').innerHTML;

            if (box1 && box1 === box2 && box1 === box3) return box1;
            if (box4 && box4 === box5 && box4 === box6) return box4;
            if (box7 && box7 === box8 && box7 === box9) return box7;
            if (box1 && box1 === box4 && box1 === box7) return box1;
            if (box2 && box2 === box5 && box2 === box8) return box2;
            if (box3 && box3 === box6 && box3 === box9) return box3;
            if (box1 && box1 === box5 && box1 === box9) return box1;
            if (box3 && box3 === box5 && box3 === box7) return box3;

            return null;
        }

        function checkDraw() {
            return [...document.querySelectorAll('.container > div')].every(box => box.innerHTML !== "");
        }

        function aiMove() {
            const emptyBoxes = [...document.querySelectorAll('.container > div')].filter(box => box.innerHTML === "");
            if (emptyBoxes.length > 0) {
                const randomBox = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
                randomBox.innerHTML = "X";

                if (checkWin()) {
                    setTimeout(() => {
                        alert(`${checkWin()} player has won this match`);
                        resetGame();
                    }, 100);
                } else if (checkDraw()) {
                    setTimeout(() => {
                        alert("This match is a draw!");
                        resetGame();
                    }, 100);
                }

                player++;
            }
        }