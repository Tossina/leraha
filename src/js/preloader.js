$.fn.bttPreLoader = function(options) {
        //Defaults
        var settings = $.extend({
            showTime:1000, // Default Time to hide the preloader
            pos:'fixed',// Default Position
            top:'0px',  // Default Top value
            left:'0px', // Default Left value
            width:'100%', // Default width 
            height:'100%', // Default Height
            zIndex: '999',  // Default zIndex 
            bgColor: '#2ecc71', // Default background color
            preLoader:'preloader3', // Default Spinner
            imagePath:'' // Default Path custom image
        }, options);

        //Customized Spinners
        var loader01 = '<div class="btt-cube-grid"> <div class="btt-cube btt-cube1 bg-white"></div> <div class="btt-cube btt-cube2 bg-white"></div> <div class="btt-cube btt-cube3 bg-white"></div> <div class="btt-cube btt-cube4 bg-white"></div> <div class="btt-cube btt-cube5 bg-white"></div> <div class="btt-cube btt-cube6 bg-white"></div> <div class="btt-cube btt-cube7 bg-white"></div> <div class="btt-cube btt-cube8 bg-white"></div> <div class="btt-cube btt-cube9 bg-white"></div> </div>';
        var loader02 = '<div class="btt-spinner btt-spinner-pulse bg-white"></div>';
        var loader03 = '<div class="btt-wave"> <div class="btt-rect btt-rect1 bg-white h-6"></div> <div class="btt-rect btt-rect2 bg-white h-6"></div> <div class="btt-rect btt-rect3 bg-white h-6"></div> <div class="btt-rect btt-rect4 bg-white h-6"></div> <div class="btt-rect btt-rect5 bg-white h-6"></div> </div>';
        var loader04 = '<div class="btt-rotating-plane bg-white"></div>'; 
        var loader05 = '<div class="btt-double-bounce"> <div class="btt-child btt-double-bounce1 bg-white"></div> <div class="btt-child btt-double-bounce2 bg-white"></div> </div>'; 
        var loader06 = '<div class="c-loader"> <svg height="200" class="loader" viewBox="0 0 340 340"> <circle cx="170" cy="170" r="160" stroke="#343a40"/> <circle cx="170" cy="170" r="135" stroke="#f8f9fa"/> <circle cx="170" cy="170" r="110" stroke="#343a40"/> <circle cx="170" cy="170" r="85" stroke="#f8f9fa"/> </svg> </div>'; 

        //The target
        var el = $(this);

        //Init styles
        var initStyles = {
            'position':settings.pos,
            'width':settings.width,
            'height':settings.height,
            'top':settings.top,
            'left':settings.left
        };

        //Apply styles
        el.css(initStyles);

        //Each 
        el.each(function() {
            var a = settings.preLoader;
            //console.log(a)
                switch (a) {
                    case 'preloader1':
                            el.html(loader01);
                        break;
                    case 'preloader2':
                            el.html(loader02);
                        break;
                    case 'preloader3':
                            el.html(loader03);
                        break;
                    case 'preloader4':
                            el.html(loader04);
                        break;
                    case 'preloader5':
                            el.html(loader05);
                        break;
                    case 'preloader6':
                            el.html(loader06);
                        break;
                    default:
                        el.html(loader01);
                    }

                //Add customized loader image

                if (settings.imagePath !='') {
                    el.html('<div class="fl"><img src="'+settings.imagePath+'"></div>');
                    centerLoader();
                }
        });

        //Time to hide fakeLoader
        setTimeout(function(){
            $(el).fadeOut();
        }, settings.showTime);

        //Return Styles 
        return this.css({
            'backgroundColor':settings.bgColor,
            'zIndex':settings.zIndex
        });

 
    }; // End Fake Loader