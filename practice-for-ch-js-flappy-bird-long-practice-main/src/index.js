import FlappyBird from './game';
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('bird-game');
    // const ctx = canvas.getContext("2d");
    const game = new FlappyBird(canvas);
})
