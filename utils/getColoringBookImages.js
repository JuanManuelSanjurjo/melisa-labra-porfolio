const fs = require('fs');
const path = require('path');


function getColoringBookImages( subPath, name){
    try {
        // Define la ubicación de tu directorio de imágenes
        const imageDirectory = path.join(process.cwd(), 'public', 'images', subPath, name);
        // Lee los nombres de los archivos en el coverDirectory de imágenes
        const coverImages = fs.readdirSync(imageDirectory);
        
        const images = coverImages.map((filename) => ({
         src: `/images/${subPath}/${name}/${filename}`,
         alt: `${filename}`,
        }));
        
        // Escribe la lista de imágenes en un archivo JSON
        // fs.writeFileSync(path.join(process.cwd(), 'public', 'imagesList.json'), JSON.stringify(images));
        
        // console.log(images)
        return images
    } catch (error) {
        console.error('Error:', error);
    }
}

function getCovers(name){
 const imageDirectory = path.join(process.cwd(), 'public', 'images', "coloring-books", name);
 const coverImages = fs.readdirSync(imageDirectory);
 
 const images = coverImages.map((filename) => ({
    src: `/images/coloring-books/${name}/${filename}`,
    alt: `${filename}`,
 }));
 // Escribe la lista de imágenes en un archivo JSON
 // fs.writeFileSync(path.join(process.cwd(), 'public', 'imagesList.json'), JSON.stringify(images));
 
 return images
}


export {getColoringBookImages, getCovers }