// 같은 JS코드를 여러 html파일에 사용해야될 때, JS파일 따로 만들어두기
var Links = {
    setColor: function (color){
        var alist = document.querySelectorAll('a'); 
        var i = 0;
        while (i < alist.length) {
            alist[i].style.color = color;
            i = i + 1;
        }
    }
}
var Body = {
    setColor: function (color){
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor (color){
        document.querySelector('body').style.backgroundColor = color;
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
        Links.setColor('powderblue');
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