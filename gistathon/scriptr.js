document.addEventListener('DOMContentLoaded', function () {
    // Get canvas element
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    
    // Set initial color
    let currentColor = '#000000';
    
    // Draw default image
    const defaultImage = new Image();
    defaultImage.onload = function () {
        context.drawImage(defaultImage, 0, 0, canvas.width, canvas.height);
    };
    defaultImage.src = 'example_image.jpg';
    
    // Create color wheel using spectrum.js library
    $('#color-wheel').spectrum({
        color: '#000',
        showPalette: true,
        showPaletteOnly: true,
        hideAfterPaletteSelect: true,
        palette: [
            ['#000', '#444', '#666', '#999', '#ccc', '#eee', '#f3f3f3', '#fff'],
            ['#f00', '#f90', '#ff0', '#0f0', '#0ff', '#00f', '#90f', '#f0f'],
            ['#f4cccc', '#fce5cd', '#fff2cc', '#d9ead3', '#d0e0e3', '#cfe2f3', '#d9d2e9', '#ead1dc'],
            ['#ea9999', '#f9cb9c', '#ffe599', '#b6d7a8', '#a2c4c9', '#9fc5e8', '#b4a7d6', '#d5a6bd'],
            ['#e06666', '#f6b26b', '#ffd966', '#93c47d', '#76a5af', '#6fa8dc', '#8e7cc3', '#c27ba0'],
            ['#cc0000', '#e69138', '#f1c232', '#6aa84f', '#45818e', '#3d85c6', '#674ea7', '#a64d79'],
            ['#990000', '#b45f06', '#bf9000', '#38761d', '#134f5c', '#0b5394', '#351c75', '#741b47'],
            ['#660000', '#783f04', '#7f6000', '#274e13', '#0c343d', '#073763', '#20124d', '#4c1130']
        ],
        change: function (color) {
            currentColor = color.toHexString();
        }
    });
    
    // Add event listener to the canvas for drawing
    canvas.addEventListener('mousedown', function (e) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Draw a small rectangle (pixel) at the clicked position with the selected color
        context.fillStyle = currentColor;
        context.fillRect(x, y, 2, 2);
    });
});
