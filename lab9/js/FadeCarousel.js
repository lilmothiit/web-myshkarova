var Carousel = require('Carousel.js')
var React = require('react');

var n = 8;
var images = [
        "resources/seamless1.png",
		"resources/seamless3.png",
		"resources/seamless5.png",
		"resources/seamless6.png",
		"resources/seamless7.png",
		"resources/seamless9.png",
		"resources/seamless10.png",
		"resources/seamless11.png",
    ];


var mycarousel = document.getElementById('mycarousel'),
    itemRenderer = function (index, progress) {
        var opacity = progress < 0.5 ? progress * 2 : (1 - progress) * 2;

        return (
		<div className="item">
			<div className="itemImageWrapper" style={{opacity: opacity}}>
				<img src={images[index % n].url} width='100%' height='100%'/>
			</div>
			<div className="textWrapper" style={{opacity: opacity}} >{images[index % n].text}</div>
		</div>
		);
    },


React.render(<Carousel
    initialItemIndex={3}
    itemRenderer={itemRenderer}
    itemsCount={n}
/>, content);
