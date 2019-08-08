drawCanvas = (image, id) => {

    var canvas = document.getElementById(id);
    var context = canvas.getContext('2d');

    if (image != null) {
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
    }
}

resizeCanvas = (width, height, thiscanvas) => {

    let cv = document.getElementById(thiscanvas);

    cv.width = width;
    cv.height = height;
}

handleFileSelect = (evt) => {
    var canvasWidth = 500;
    var canvasHeight = 500;
    var file = evt.target.files[0];



    var reader = new FileReader();
    reader.onload = (fileObject) => {
        var data = fileObject.target.result;

        // Create an image object
        var image = new Image();
        image.onload = function() {

            window.imageSrc = this;
            drawCanvas(window.imageSrc, "meucanvas");
        }

        // Set image data to background image.
        image.src = data;
        //console.log(fileObject.target.result);
    };
    reader.readAsDataURL(file)
}