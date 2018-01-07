import React from 'react';

const Carousel = () => (
	<div className="container">
		<div className="main">
			<div id="carousel" className="carousel">
				<ul>
					<li><a href="#"><img src="/src/img/1.jpg" alt="img01" /><h4>Title</h4></a></li>
					<li><a href="#"><img src="/src/img/2.jpg" alt="img02" /><h4>Title</h4></a></li>
					<li><a href="#"><img src="/src/img/3.jpg" alt="img03" /><h4>Title</h4></a></li>
					<li><a href="#"><img src="/src/img/4.jpg" alt="img04" /><h4>Title</h4></a></li>
				</ul>
				<ul>
					<li><a href="#"><img src="/src/img/5.jpg" alt="img05" /><h4>Title</h4></a></li>
					<li><a href="#"><img src="/src/img/6.jpg" alt="img06" /><h4>Title &amp; Caps</h4></a></li>
					<li><a href="#"><img src="/src/img/7.jpg" alt="img07" /><h4>Title</h4></a></li>
					<li><a href="#"><img src="/src/img/8.jpg" alt="img08" /><h4>Title</h4></a></li>
				</ul>
				<ul>
					<li><a href="#"><img src="/src/img/9.jpg" alt="img09" /><h4>Title</h4></a></li>
					<li><a href="#"><img src="/src/img/10.jpg" alt="img10" /><h4>Title</h4></a></li>
					<li><a href="#"><img src="/src/img/11.jpg" alt="img11" /><h4>Title</h4></a></li>
				</ul>
				<ul>
					<li><a href="#"><img src="/src/img/12.jpg" alt="img12" /><h4>Title</h4></a></li>
					<li><a href="#"><img src="/src/img/13.jpg" alt="img13" /><h4>Title</h4></a></li>
					<li><a href="#"><img src="/src/img/14.jpg" alt="img14" /><h4>Title</h4></a></li>
					<li><a href="#"><img src="/src/img/15.jpg" alt="img15" /><h4>Title</h4></a></li>
				</ul>
				<nav>
					<a href="#">Category</a>
					<a href="#">Category</a>
					<a href="#">Category</a>
					<a href="#">Category</a>
				</nav>
			</div>
		</div>
	</div>
);

export default Carousel;
