/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable camelcase */
import compress_images from "compress-images";

const INPUT_path_to_your_images = "../public/images/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}";
const OUTPUT_path = "conv/img/";

compress_images(
  INPUT_path_to_your_images,
  OUTPUT_path,
  { compress_force: false, statistic: true, autoupdate: true },
  false,
  { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
  { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
  { svg: { engine: "svgo", command: "--multipass" } },
  { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
  (error, completed, statistic) => {
    console.log("-------------");
    console.log(error);
    console.log(completed);
    console.log(statistic);
    console.log("-------------");
  },
);
