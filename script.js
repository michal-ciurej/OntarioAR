AFRAME.registerComponent('markerhandler', {
    init: function () {
      this.el.sceneEl.addEventListener('markerFound', () => {
        console.log("Caught Marker external");

        document.getElementById("myChart").style.visibility = "visible";
        document.getElementById("text").style.visibility = "visible";


    
       
              })
      this.el.sceneEl.addEventListener('markerLost', () => {
        console.log("Lost Marker external");
        
     


    
      })
    }
    });

function data(
    
data = fetch("https://ontario.udmi.io/api/sensor/1/readings")
.then((response) => response.json()) 

){};




