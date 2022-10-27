
const {createApp} = Vue

createApp({
    data: function(){
        return {
            slides : [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.',
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                }
            ],
            tabindex : 0,
            indexSlides : 0,
            // impostato a null dato che non corrispondea nussun numero inizialmenete
            interval : null
        };
    },
    methods:{
        slideForward: function(){
            if(this.tabindex < this.slides.length - 1){
                this.tabindex++
            }else{
                this.tabindex = 0
            }
        },
        slideBackward: function(){
            if(this.tabindex > 0){
                this.tabindex--
            }else{
                this.tabindex = this.slides.length - 1
            }
        },
        relativePicture: function(arrayIndex){
            this.tabindex = arrayIndex
        },
        autoPlay: function(){
            if(this.interval === null){
                
                this.interval = setInterval(() => {
                    this.slideForward();
                }, 2000);
            }
        },
        stopPlay:function(){
            clearInterval(this.interval);
            this.interval = null
        }
    },
    created (){
        this.autoPlay()
    }
}).mount('#app')