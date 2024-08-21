import { v4 as uuidv4 } from "uuid";

export default function chillHop() {
  return [
    {
      id: uuidv4(),
      name: "Cabin in the Woods",
      artist: "Philanthrope",
      cover:
        "https://cms.chillhop.com/media/10266/squarel2899f7cc22ab12e17d0119819aac3ca9dbab46e6.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10243",
      colors: ["#B86C58", "#893838"],
      active: true,
    },
    {
      id: uuidv4(),
      name: "Tales of A Flowing Forest",
      artist: "Leavv",
      cover: "https://f4.bcbits.com/img/a1335782516_16.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9913",
      colors: ["#CF8E63", "#8B735E"],
      active: false,
    },
    {
      id: uuidv4(),
      name: "Going Back",
      artist: "Sworn",
      cover: "https://i1.sndcdn.com/artworks-Dzu9LVK7dIez4gpL-WCV1xg-t500x500.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10310",
      colors: ["#F9F9F9", "#28454E"],
      active: false,
    },
    {
      id: uuidv4(),
      name: "Les Mouvements d'Hiver",
      artist: "L'Indécis, sadtoi",
      cover: "https://f4.bcbits.com/img/a2903168500_16.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10351",
      colors: ["#B7A9CC", "#C1B7DA"],
      active: false,
    },
    {
      id: uuidv4(),
      name: "Hologramophone",
      artist: "Aviino",
      cover: "https://cms.chillhop.com/media/11066/squarel23fdd99adc3e16abcb67b004ea3e748ebf433a49.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10448",
      colors: ["#C776BB", "#714C87"],
      active: false,
    },
    {
      id: uuidv4(),
      name: "Yesterday",
      artist: "Mo Anando",
      cover: "https://f4.bcbits.com/img/a3666752478_16.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9281",
      colors: ["#FCCCA4", "#E487AB"],
      active: false,
    },
    {
      id: uuidv4(),
      name: "Canary Forest",
      artist: "Middle School, Aso, Aviino",
      cover: "https://f4.bcbits.com/img/a2013294891_10.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      colors: ["#34BFB4", "#093E36"],
      active: false,
    },

    {
      id: uuidv4(),
      name: "Friends Circle",
      artist: "Sitting Duck",
      cover: "https://cms.chillhop.com/media/9880/squarel63d2d2cdabbc5df023603b5f47b2fb97963cb537.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9652",
      colors: ["#B2B875", "#4D5B41"],
      active: false,
    },
    {
      id: uuidv4(),
      name: "Reflection",
      artist: "Sworn",
      cover: "https://cms.chillhop.com/media/6816/squarelff35dede32321a8aa0953809812941bcf8a6bd35.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9224",
      colors: ["#D68395", "#5E1F56"],
      active: false,
    },
  ];
}
