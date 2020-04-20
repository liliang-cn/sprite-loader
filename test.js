const Spritesmith = require("spritesmith");
const fs = require("fs");
const path = require("path");

const sprites = ["./loaders/a.png", "./loaders/b.png"];

Spritesmith.run({ src: sprites }, function handleResult(err, result) {
  console.log(result);
  result.image; // Buffer representation of image
  result.coordinates; // Object mapping filename to {x, y, width, height} of image
  result.properties; // Object with metadata about spritesheet {width, height}
  fs.writeFileSync(path.join(__dirname, "dist/sprite.png"), result.image);
});
