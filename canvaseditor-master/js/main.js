class Filters {
    constructor(id) {
        this.canvas = document.getElementById(id);
        this.context = this.canvas.getContext('2d');

        this.luminosity = (gain, altContext = null) => {

            if (altContext != null) {
                var altCnv = document.getElementById(altContext);
                var altCtx = altCnv.getContext('2d');
                
            } else
                var altCtx = this.context;

            gain = parseInt(gain);
            var imdata = altCtx.getImageData(0, 0, this.canvas.width, this.canvas.height);

            for (var i = 0; i < imdata.data.length; i += 4) {
                imdata.data[i] += gain;
                imdata.data[i + 1] += gain;
                imdata.data[i + 2] += gain;
                imdata.data[i + 3] = 255;
            }

            
            altCtx.putImageData(imdata, 0, 0);
        };

        this.contrast = (gain, altContext = null) => {

            if (altContext != null) {
                var altCnv = document.getElementById(altContext);
                var altCtx = altCnv.getContext('2d');
                
            } else
                var altCtx = this.context;

            gain = parseInt(gain);
            var imdata = altCtx.getImageData(0, 0, this.canvas.width, this.canvas.height);

            for (var i = 0; i < imdata.data.length; i += 4) {
                if(gain>0){
                    if((imdata.data[i]+imdata.data[i]+imdata.data[i])/3 > 124)
                    {   
                        imdata.data[i] += gain;
                        imdata.data[i + 1] += gain;
                        imdata.data[i + 2] += gain;
                        imdata.data[i + 3] = 255;
                    }
                    else
                    {   
                        imdata.data[i] -= gain;
                        imdata.data[i + 1] -= gain;
                        imdata.data[i + 2] -= gain;
                        imdata.data[i + 3] = 255;
                    }
                }
                else
                {
                    if(imdata.data[i] > 124){   
                        imdata.data[i] -= Math.abs( gain);

                        if(imdata.data[i] < 124) imdata.data[i] = 124;
                       }
                    else   {
                        imdata.data[i] += Math.abs( gain);

                        if(imdata.data[i] > 124) imdata.data[i] = 124;
                    }
                        
                    

                    if(imdata.data[i+1] > 124) {
                        imdata.data[i + 1] -= Math.abs( gain);
                        if(imdata.data[i + 1] < 124) imdata.data[i] = 124;
                    }
                    else{
                        imdata.data[i + 1] += Math.abs( gain);
                        if(imdata.data[i + 1] > 124) imdata.data[i] = 124;
                    }

                    if(imdata.data[i+2] > 124)  
                    {    imdata.data[i + 2] -= Math.abs( gain);
                        if(imdata.data[i+2] < 124) imdata.data[i] = 124;
                    }
                    else
                    {    imdata.data[i + 2] += Math.abs( gain);
                        if(imdata.data[i+2] > 124) imdata.data[i] = 124;
                    }

                    imdata.data[i + 3] = 255;
                }
            }

            
            altCtx.putImageData(imdata, 0, 0);
        };

        this.pixelate = (blocksize, altContext = null) => {

            if (altContext != null) {
                var altCnv = document.getElementById(altContext);
                var altCtx = altCnv.getContext('2d');
                
            } else
                var altCtx = this.context;
            
                blocksize = parseInt(blocksize);

            var imgData = altCtx.getImageData(0, 0, this.canvas.width, this.canvas.height);
            var buffData = imgData;
            for (var x = 1; x < imgData.width; x += blocksize) {
                for (var y = 1; y < imgData.height; y += blocksize) {
                    var index = (y * (imgData.width) + x) * 4;
                    altCtx.fillStyle = "rgb(" + buffData.data[index] + "," + buffData.data[index + 1] + "," + buffData.data[index + 2] + ")";
                    altCtx.fillRect(x, y, x + blocksize - 1, y + blocksize - 1);
                }
            }
        };

        this.threshold = (lim, altContext = null) => {
            lim = parseInt(lim);

            if (altContext != null) {
                var altCnv = document.getElementById(altContext);
                var altCtx = altCnv.getContext('2d');
            } else
                var altCtx = this.context;

            var imgData = altCtx.getImageData(0, 0, this.canvas.width, this.canvas.height);
            for (var i = 0; i < imgData.data.length; i += 4) {
                var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3;
                var color;
                if (avg <= lim) {
                    color = 0;
                } else {
                    color = 255;
                }
                imgData.data[i] = color;
                imgData.data[i + 1] = color;
                imgData.data[i + 2] = color;
                imgData.data[i + 3] = 255;
            }
            

             altCtx.putImageData(imgData, 0, 0);
        };

        this.invert = () => {
            var imgData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
            for (var i = 0; i < imgData.data.length; i += 4) {
                imgData.data[i] = 255 - imgData.data[i];
                imgData.data[i + 1] = 255 - imgData.data[i + 1];
                imgData.data[i + 2] = 255 - imgData.data[i + 2];
                imgData.data[i + 3] = 255;
            }
            this.context.putImageData(imgData, 0, 0);
        };

        this.sepia = () => {
            var imgData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
            for (var i = 0; i < imgData.data.length; i += 4) {
                var r = imgData.data[i];
                var g = imgData.data[i + 1];
                var b = imgData.data[i + 2];
                imgData.data[i] = (r * 0.393) + (g * 0.769) + (b * 0.189);
                imgData.data[i + 1] = (r * 0.349) + (g * 0.686) + (b * 0.168);
                imgData.data[i + 2] = (r * 0.272) + (g * 0.534) + (b * 0.131);
                imgData.data[i + 3] = 255;
            }
            this.context.putImageData(imgData, 0, 0);
        };

        this.grayScale = () => {
            var imgData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
            for (var i = 0; i < imgData.data.length; i += 4) {
                var avg = 0.3 * imgData.data[i] + 0.59 * imgData.data[i + 1] + 0.11 * imgData.data[i + 2]; //(imgData.data[i]+imgData.data[i+1]+imgData.data[i+2])/3;
                imgData.data[i] = avg;
                imgData.data[i + 1] = avg;
                imgData.data[i + 2] = avg;
                imgData.data[i + 3] = 255;
            }
            this.context.putImageData(imgData, 0, 0);
        };

        this.convolution = (matrix) => {
            var pixels = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
            var side = Math.round(Math.sqrt(matrix.length));
            var halfSide = Math.floor(side / 2);
            var src = pixels.data;
            var sw = pixels.width;
            var sh = pixels.height;
            var w = sw;
            var h = sh;
            var output = this.context.createImageData(w, h);
            var dst = output.data;
            var alphaFac = 1;
            for (var y = 0; y < h; y++) {
                for (var x = 0; x < w; x++) {
                    var sy = y;
                    var sx = x;
                    var dstOff = (y * w + x) * 4;
                    var r = 0,
                        g = 0,
                        b = 0,
                        a = 0;
                    for (var cy = 0; cy < side; cy++) {
                        for (var cx = 0; cx < side; cx++) {
                            var scy = sy + cy - halfSide;
                            var scx = sx + cx - halfSide;
                            if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
                                var srcOff = (scy * sw + scx) * 4;
                                var wt = matrix[cy * side + cx];
                                r += src[srcOff] * wt;
                                g += src[srcOff + 1] * wt;
                                b += src[srcOff + 2] * wt;
                                a += src[srcOff + 3] * wt;
                            }
                        }
                    }
                    dst[dstOff] = r;
                    dst[dstOff + 1] = g;
                    dst[dstOff + 2] = b;
                    dst[dstOff + 3] = a + alphaFac * (255 - a);
                }
            }
            this.context.putImageData(output, 0, 0);
        };

        

        this.scaleDown = (blocksize, altContext = null) => {
            var imgData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
            var buffData = imgData;

            if (altContext != null) {
                var altCnv = document.getElementById(altContext);
                var Ctx = altCnv.getContext('2d');
            } else
                var Ctx = this.context;

            let ix =0;
            let iy =0;

            for (var x = 1; x < imgData.width; x += blocksize) {
                ix++;
                iy =0;
                for (var y = 1; y < imgData.height; y += blocksize) {
                    iy++;
                    var index = (y * (imgData.width) + x) * 4;
                    Ctx.fillStyle = "rgb(" + buffData.data[index] + "," + buffData.data[index + 1] + "," + buffData.data[index + 2] + ")";
                    Ctx.fillRect(ix, iy, 1, -1);
                }
            }

        };

        this.color = (filter) => {
            var imgData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
            let r = 0;
            let g = 0;
            let b = 0;
            for (var i = 0; i < filter.length; i++) {
                switch (filter[i]) {
                    case 'r':
                        r = 1;
                        break;
                    case 'g':
                        g = 1;
                        break;
                    case 'b':
                        b = 1;
                        break;
                }
            }
            for (var i = 0; i < imgData.data.length; i += 4) {
                imgData.data[i] = r * imgData.data[i];
                imgData.data[i + 1] = g * imgData.data[i + 1];
                imgData.data[i + 2] = b * imgData.data[i + 2];
                imgData.data[i + 3] = 255;
            }
            this.context.putImageData(imgData, 0, 0);
        };

        this.sobel = function sobel() {
            this.convolution([-1, 0, 1, -2, 0, 2, -1, 0, 1]);

            this.convolution([-1, -2, -1,
                0, 0, 0,
                1, 2, 1
            ]);
        };

        this.edgeDetection = () => {
            this.convolution([1, 0, -1,
                0, 0, 0,
                1, 0, 1
            ]);
            this.convolution([0, 1, 0,
                1, 4, 1,
                0, 1, 0
            ]);
            this.convolution([-1, -1, -1, -1, 8, -1, -1, -1, -1]);
        };

        this.sharpen = () => {
            this.convolution([0, -1, 0, -1, 5, -1,
                0, -1, 0
            ]);
        };

        this.gaussianBlur = () => {

            this.convolution([1 / 16, 1 / 8, 1 / 16,
                1 / 8, 1 / 4, 1 / 8,
                1 / 16, 1 / 8, 1 / 16
            ]);
        };

        this.preview = (canvasdest, func, param) => {

            document.getElementById('preview').style.display = 'block';
            
            let scale = this.canvas.width/100;
            resizeCanvas(100,parseInt(this.canvas.height/scale),canvasdest);
            this.scaleDown(parseInt(scale), canvasdest);
            func(param, canvasdest);

        }

        this.applyChange = () => {
            document.getElementById('preview').style.display = 'none';//
        }
    }
}
