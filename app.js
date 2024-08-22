document.addEventListener("DOMContentLoaded", function () {
  const card = document.getElementById("card");
  const profilePic = document.querySelector(".profilepic");
  const boss = document.querySelector(".boss");

  const images = [
    {
      src: "./images/snoopy-snoopy-7395936-1024-768-1246183948.jpg",
      animation: "cardClickAnim 2.5s ease-in-out forwards",
      text: "Boss",
    },
    {
      src: "./images/aMUJ0iF-2118507011.jpg",
      animation: "cardClickAnim2 2.5s ease-in-out forwards",
      text: "Lærling",
    },
  ];

  let currentImageIndex = 0;

  card.onclick = function () {
    const currentImage = images[currentImageIndex];

    card.style.animation = currentImage.animation;

    setTimeout(() => {
      boss.textContent = currentImage.text;
      profilePic.src = currentImage.src;

      currentImageIndex = (currentImageIndex + 1) % images.length;
    }, 150);
  };
});
