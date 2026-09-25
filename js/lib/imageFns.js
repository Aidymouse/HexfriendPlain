
/**
 * @param {ImageBitmap} img
 * @param {string} tint
 *
 * @returns {HTMLCanvasElement} 
 *
 * TODO: not entirely certain this works quite right. And is it slow?
 * Could we resize the texture and *then* tint it? Might save a few nanoseconds
 */
// Source - https://stackoverflow.com/a/4231508
// Posted by Nathan
// Retrieved 2026-09-25, License - CC BY-SA 2.5 // TODO: check license
export const tintImage = (img, tint) => {
    // Create a buffer element to draw based on the Image img
    const buffer = document.createElement('canvas');
    buffer.width = img.width;
    buffer.height = img.height;
    const btx = buffer.getContext('2d');

    // First draw your image to the buffer
    btx.drawImage(img, 0, 0);

    // Now we'll multiply a rectangle of your chosen color
    btx.fillStyle = tint;
    btx.globalCompositeOperation = 'multiply';
    btx.fillRect(0, 0, buffer.width, buffer.height);

    // Finally, fix masking issues you'll probably incur and optional globalAlpha
    //btx.globalAlpha = 0.5;
    btx.globalCompositeOperation = 'destination-in';
    btx.drawImage(img, 0, 0);

    return buffer
}

// TODO: Also to consider
// // Source - https://stackoverflow.com/a/54430947
// // Posted by Mark Miller, modified by community. See post 'Timeline' for change history
// // Retrieved 2026-09-25, License - CC BY-SA 4.0
//
// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');
// const image = document.getElementById('source');
//
// ctx.filter = 'hue-rotate(120deg) grayscale(10%) brightness(150%)';
// ctx.drawImage(image, 10, 10, 180, 120);


// TODO: also also to consider
// // Source - https://stackoverflow.com/a/45201094
// Posted by user1693593, modified by community. See post 'Timeline' for change history
// Retrieved 2026-09-25, License - CC BY-SA 3.0

// // step 1: draw in original image
// ctx.globalCompositeOperation = "source-over";
// ctx.drawImage(img, 0, 0);
//
// // step 2: adjust saturation (chroma, intensity)
// ctx.globalCompositeOperation = "saturation";
// ctx.fillStyle = "hsl(0," + sat + "%, 50%)";  // hue doesn't matter here
// ctx.fillRect(0, 0);
//
// // step 3: adjust hue, preserve luma and chroma
// ctx.globalCompositeOperation = "hue";
// ctx.fillStyle = "hsl(" + hue + ",1%, 50%)";  // sat must be > 0, otherwise won't matter
// ctx.fillRect(0, 0, c.width, c.height);
//
// // step 4: in our case, we need to clip as we filled the entire area
// ctx.globalCompositeOperation = "destination-in";
// ctx.drawImage(img, 0, 0);
//
// // step 5: reset comp mode to default
// ctx.globalCompositeOperation = "source-over";
//
//

