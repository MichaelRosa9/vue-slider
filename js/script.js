


var app = new Vue({
  el: '#app',
  data: {
    counterPhoto: 0,
    arrayPhotos:['img/city-1.jpg','img/city-2.jpg','img/city-3.jpg','img/city-4.jpg','img/city-5.jpg',]
  },
  methods: {
    nextPhoto: function(){
      this.counterPhoto++;
      if (this.counterPhoto === this.arrayPhotos.length){
        this.counterPhoto = 0;
      }
    },
    previousPhoto: function(){
      this.counterPhoto--;
      if (this.counterPhoto < 0){
        this.counterPhoto = this.arrayPhotos.length -1;
      }
    }
    
  }
});
