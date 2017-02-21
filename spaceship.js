// 1.Object Literal
var spaceship1 = {
    shipName: 'Glaxy Crusier',
    topSpeed: '2lyph',
    launch: function() {
        console.log(this.shipName + ' Launched to infinity and beyond at ' + this.topSpeed + '!')
    }
}
// Call the launch method
 spaceship1.launch();

// 2.Object New
var spaceship2 = new Object()
        spaceship2.shipName = 'Enterprice'
        spaceship2.topSpeed= '1.5lyph'
        spaceship2.launch = function() {
             console.log(this.shipName + ' Launched to infinity and beyond at ' + this.topSpeed + '!')
}
// Call the launch method 
spaceship2.launch();

//3. Constructor Function
var spaceship3 = function() {
    this.shipName = 'Columbia'
    this.topSpeed = '17500 mph'
    this.launch= function() {
        console.log(this.shipName + ' Launched to infinity and beyond at ' + this.topSpeed + '!')
    }
}
var spaceship = new spaceship3()
// Call the launch method
spaceship.launch()

// 4.Class
class spaceship4 {
    constructor() {
        this.shipName = 'Challenger'
        this.topSpeed = '84500mph'
    }
launch() {
        console.log(this.shipName + ' Launched to infinity and beyond at ' + this.topSpeed + '!')
    }
}

var space = new spaceship4()

// Call the launch method
space.launch()



