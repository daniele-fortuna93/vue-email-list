var app = new Vue(
  {
    el: '#root',
    data:{
      email: []
    },
    mounted: function () {
      let self = this;
      for (var i = 0; i < 10; i++) {

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(function (response) {
        self.email.push(response.data.response);
        console.log(response.data.response);
        });
      }

    }
  }

);
