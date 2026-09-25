
/**
 * @param {ImageBitmap} img
 * @param {string} tint
 *
 * @returns {HTMLCanvasElement} 
 *
 * TODO: not entirely certain this works quite right. And is it slow?
 * Could we resize the texture and *then* tint it? Might save a few nanoseconds
 */
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

