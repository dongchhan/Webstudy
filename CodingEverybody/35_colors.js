// JQuery를 사용
var Links = {
    setColor: function (color){
        // var alist = document.querySelectorAll('a'); 
        // var i = 0;
        // while (i < alist.length) {
        //     alist[i].style.color = color;
        //     i = i + 1;
        // }
        $('a').css('color', color);  // jquery
    }
}
var Body = {
    setColor: function (color){
        // document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackgroundColor (color){
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color)
    }
}
function nightDayHandler (self) {  
    var target = document.querySelector('body');
    if(self.value === 'night'){
        // bodySetBackgroundColor('black')
        Body.setBackgroundColor('black')
        // bodySetColor('white');
        Body.setColor('white');

        self.value = 'day';  
        
        // linkSetColor('powderblue');
        Links.setColor('yellow');
    } else {
        // bodySetBackgroundColor('white')
        Body.setBackgroundColor('white')
        // bodySetColor('black');
        Body.setColor('black');

        self.value = 'night';
        
        // linkSetColor('blue');
        Links.setColor('blue');
    }
}