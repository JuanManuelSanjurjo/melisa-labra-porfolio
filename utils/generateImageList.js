const fs = require('fs');
const path = require('path');

// Define la ubicación de tu directorio de imágenes
const imageDirectory = path.join(process.cwd(), 'public', 'Images', "covers");
const eroticDirectory = path.join(process.cwd(), 'public', 'Images', "erotico");
const coloringBooksDirectory = path.join(process.cwd(), 'public', 'Images', "coloring-books");

// Lee los nombres de los archivos en el coverDirectory de imágenes
const coverImages = fs.readdirSync(imageDirectory);
const eroticImages = fs.readdirSync(eroticDirectory);
const coloringBooksImages = fs.readdirSync(coloringBooksDirectory);

// Genera un objeto con la información de las imágenes
const images = {
    "covers": [],
    "erotic": [],
    "coloring-books": []
}


images.covers = coverImages.map((filename) => ({
 src: `/Images/${filename}`,
 alt: `${filename}`,
}));
images.erotic = eroticImages.map((filename) => ({
 src: `/Images/${filename}`,
 alt: `${filename}`,
}));
images["coloring-books"] = coloringBooksImages.map((filename) => ({
 src: `/Images/${filename}`,
 alt: `${filename}`,
}));


// Escribe la lista de imágenes en un archivo JSON
fs.writeFileSync(path.join(process.cwd(), 'public', 'imagesList.json'), JSON.stringify(images));

console.log(JSON.stringify(images))