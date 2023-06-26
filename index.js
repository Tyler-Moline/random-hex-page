randomize.addEventListener("click", randomHex);

let newP = "";

async function randomHex() {
  try {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = color;

    if (newP === "") {
      newP = document.createElement("p");
      newP.textContent = `This color is: ${color}`;
      newP.setAttribute("id", "hexCode");
      theMainBoi.appendChild(newP);
    } else {
      theMainBoi.removeChild(newP);
      newP = document.createElement("p");
      newP.textContent = `This color is: ${color}`;
      newP.setAttribute("id", "hexCode");
      theMainBoi.appendChild(newP);
    }
  } catch (error) {
    console.log("error:", error);
  }
}
