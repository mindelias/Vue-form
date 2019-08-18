new Vue ({
    el: "#main",
    data:{
        started: false,
        startTime:'',
        seconds: 0,
        timeSpent:'',
        ended: false,
        health: 100,
        level: 1,
         

    }, 

    methods:{
        start: function () {
            self = this;
            this.startTime = Date.now();
            this.started = true;
            setInterval(function () {
                self.countTimer();
            }, 100);
            setInterval(function(){
                self.Recovery();
            },500)

        },
        countTimer: function(){
            if (this.started == true && this.ended == false){
                this.timeSpent = Date.now() - this.startTime;
                this.seconds = (this.timeSpent/1000).toFixed(2);
            }
        },
        punch: function(){
           if (this.started == true ){
            this.health -= 5
            if (this.health <= 0){
                this.ended =true;
            }
           } else{
               alert('game has not started')
           }
        },
        Recovery: function () {
            if (this.health <= 99 && this.ended == false){
                this.health += parseInt(this.level);
            }
            
        },
        Restart: function(){
            this.started= false;
            this.startTime ='';
            this.seconds = 0;
            this.timeSpent = '';
            this.ended = false;
            this.health = 100;
        }
    }
})

// new Vue ({
//     el: '#lifecycle',
//     data:{
//         message: 'hello Vue'
//     },

//     beforeCreate: function () {
//          console.log(this.message)
//     },
//     created: function(){
//         console.log(this.message)
//     },
//     beforeMount: function(){
//         console.log('This is before mount')
//     },
//     mounted: function(){
//         console.log('This is mount')
//     }
// });