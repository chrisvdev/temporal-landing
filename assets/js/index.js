const $fullName = document.querySelector("#name");
const $title = document.querySelector("#title");
const $e = document.querySelector("#e");

$fullName.textContent = "CHRISTIAN VILLEGAS";
$title.textContent = "Software Developer";

const names = [
  "CHRISTIAN VILLEGAS", "ChrisVDev"]

const titles = [
  "Software Developer",
  "FrontEnd Developer",
  "Backend Developer",
  "FullStack Developer",
  "Cloud Developer",
]

let nameIndex = 0;
let titleIndex = 0;

function changeName () {
  $fullName.textContent = names[nameIndex];
  nameIndex = (nameIndex + 1) % names.length;
  $title.textContent = nameIndex ? titles[0] : "Tech Streamer";
}

function titleAnimation (delay, cb = null) {
  titleIndex = 1;
  const interval = setInterval(() => {
    $title.textContent = titles[titleIndex];
    titleIndex = (titleIndex + 1) % titles.length;
    if (titleIndex === 1) {
      clearInterval(interval);
      cb && cb();
    }
  }, delay);
}

function changeTitle () {
  if (nameIndex === 1) {
    $title.removeEventListener("click", changeTitle);
    titleAnimation(
      800,
      () => {
        titleAnimation(
          300,
          () => {
            titleAnimation(
              100,
              () => {
                $title.addEventListener("click", changeTitle);
              }
            )
          }
        )
      }
    );
  }
}

$fullName.addEventListener("click", changeName);
$title.addEventListener("click", changeTitle);

console.log("Hola!")