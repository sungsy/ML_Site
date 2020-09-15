const getColorName = new GetColorName();
const vm = new Vue({
  el: "#app",
  data() {
    return {
      palette: [],
      imageSrc: '',
      isLoading: false };

  },
  created() {
    this.randomImage();
  },
  methods: {
    getPalette(imageSrc) {
      this.imageSrc = imageSrc;
      Vibrant.from(imageSrc).maxColorCount(200).getPalette().then(palette => {
        const colors = [];
        number = 0;
        for (let color in palette) {
          number = number + 1;
          const type = color;
          const typeTextColor = palette[color].getTitleTextColor();
          const hex = palette[color].getHex();
          const hexTextColor = palette[color].getBodyTextColor();
          const name = getColorName(hex);
          const nameTextColor = palette[color].getBodyTextColor();
          colors.push({ number, type, typeTextColor, hex, hexTextColor, name, nameTextColor });
        }
        this.palette = colors;
      });
    },
    randomImage() {
      this.isLoading = true;
      fetch(`https://source.unsplash.com/1920x1080/?horizon`).
      then(response => {
        this.getPalette(response.url);
        this.isLoading = false;
      });
    },
    uploadFile(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        this.getPalette(reader.result);
      }, false);
      if (file) {
        reader.readAsDataURL(file);
      }
    } } });



function GetColorName() {
  const colors = colorNameList.reduce((o, { name, hex }) => Object.assign(o, { [name]: hex }), {});
  const nearest = nearestColor.from(colors);
  return hexColor => nearest(hexColor).name;
}