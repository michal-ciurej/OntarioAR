function data(
    
data = fetch("https://ontario.udmi.io/api/sensor/1/readings")
.then((response) => response.json()) 

)





function setChart(data){


    const obj = JSON.parse(data)
    for (var i =0; i< obj.length ;i++) {
        console.log(obj[i].id);
     }
    }

console.log(chart1.readings)

AFRAME.registerComponent('markerhandler', {
    init: function () {
      this.el.sceneEl.addEventListener('markerFound', () => {
        console.log("Caught Marker external");
        document.getElementById("myChart").style.visibility = "visible";

    
       
              })
      this.el.sceneEl.addEventListener('markerLost', () => {
        console.log("Lost Marker external");
        document.getElementById("myChart").style.visibility = "hidden";

    
      })
    }
    });