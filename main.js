
new Vue({
    el: "#aminat",
    data: {
        welcome: "welcome to Vue.JS",
        inputData: 'Vue',
        newNumber: 0,
        total:0,
        type: "vue",
        link: "http://facebook.com/aminatshotade",
        text:'default text',
        alert:"alert alert-info",
        number:"0",
        check:" ",
        loop:0,
        country: ['Nigeria','America', 'Canada', 'Brazil', 'China'],
        // Data:[
        //     {name:'Afolabi', age: 35},
        //     {name:'Adenike', age: 26},
        //     {name:'Nnamdi', age:31},
        //     {name:'Boluwatife', age: 22},
        //     {name:'Azuka', age: 28},
        // ],
        // groups:[
        //     { Day: 'Monday',
        //       Time:['8am', '12pm', '3pm']  
        //     },
        //     { Day: 'Tuesday',
        //       Time:['12pm', '2pm', '5pm']  
        //     },
        //     { Day: 'Wednesday',
        //       Time:['8am', '2pm', '4pm']  
        //     },
        //     { Day: 'Thursday',
        //       Time:['8am', '12pm', '4pm']  
        //     },
        //     { Day: 'Friday',
        //       Time:['8am', '12pm', '3pm']  
        //     },
        // ],
        // values:[
        //     {names:'john', age:34},
        //     {names:'femi', age:29},
        //     {names:'tayo', age:27},
        //     {names:'bola', age:25},
        //     {names:'kareem', age:30}

        // ],

        form:{
            Name:" ", 
            Address:" ", 
            product:" ", 
            Multiple:[],
            Terms: false,
            Languages:[]
        },
        
            
        products: [
                {name: 'bag', price: 100},
                {name: 'shoe', price: 75},
                {name: 'dress', price: 200},
                {name: 'hair', price: 110},
                {name: 'make-up', price: 55}
        ],

         message: '',
         Message: 'welcome to Vue',
         newMessage: '',
        
    },

    methods:{
        // PS: You can set 2 or more parameters
        Reload: function(){
            this.Message = this.newMessage

        },
        clear: function(){
            this.Message = '';
            this.newMessage = '';
        },
        setMessage: function(text){
            this.message = text
        },

        sorting: function() {
            return this.values.slice().sort(function(a,b) {
                return a.names > b.names;
                
            })
        },

        add: function(){
            this.values.push({names:"Ade", age: "19"})
        },
        remove: function(){
            this.values.pop()
        } 
        // food: function() {
        //     return 'THIS IS A SAMPLE DATA'   
        // },

        // inputText: function(event){
        //     this.inputData = event.target.value;
        // },
        // increase: function (click) {
        //     this.number = this.number + 2;
            
        // },
        // decrease: function (click) {
        //     this.number = this.number - 2;
            
        // },

        // addBy: function (click) {
        //     this.newNumber = +this.newNumber + +this.total;
            
        // },
        // subtBy: function (click) {
        //     this.newNumber = +this.newNumber - +this.total;
            
        // },
        // digit: function (event) {
        //     this.total = event.target.value;
            
        // },

        // success: function (){
        //     this.alert = 'alert alert-success';
        // },
        // secondary: function (){
        //     this.alert = 'alert alert-secondary';
        // },
        // answer: function(){
        //      this.loop = parseFloat(this.number);
        // },

       





    }

});