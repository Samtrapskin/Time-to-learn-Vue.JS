new Vue({
  el: '#exercise',
  data: {
   effectClasses: {
     highlight: false,
     shrink: true
   }

  },
  methods: {
    startEffect: function() {
      setInterval(function () {
        var vm = this;
        vm.effectClasses.highlight
      }, 1000)
        
      }
    }
 
});
