import React from 'react';

export default class Address extends React.Component {
	render() {
		return (
			<section className="address-table">
				<h2>Online Library <span className="site-name">ForestLib</span></h2>
				<p>Founded in 2007</p>
				<div className="thead">
					<div className="address">Address</div>
					<div className="image" />
					<div className="email">E-mail</div>
					<div className="phone">Phone Number</div>
				</div>
				<div className="row ua">
					<div className="address">
						<p className="title">
							General office in UA forest
						</p>
						<p>
							Library of the Oaktree<br />
							35 Fox Street, Apt.1<br />
							City, 246802<br />
							Ukraine
						</p>
					</div>
					<div className="image" />
					<div className="email"><a href="mailto:forestlib@ukr.ua">forestlib@ukr.ua</a></div>
					<div className="phone"><a href="tel:+38(123)4567890">+38(123)4567890</a></div>
				</div>
				<div className="row ru">
					<div className="address">
						<p className="title">
							Office in RU forest
						</p>
						<p>
							Library of Wood and Leaf<br />
							98 Bush Street, Apt.21<br />
							City, 135791<br />
							Russia
						</p>
					</div>
					<div className="image" />
					<div className="email"><a href="mailto:forestlib@yandex.ru">forestlib@yandex.ru</a></div>
					<div className="phone"><a href="tel:+7(123)4567890">+7(123)4567890</a></div>
				</div>
				<div className="row us">
					<div className="address">
						<p className="title">
							Branch in US forest
						</p>
						<p>
							Library of the Waterfall<br />
							127 Green Street, Apt.310<br />
							City, 098765<br />
							USA
						</p>
					</div>
					<div className="image" />
					<div className="email"><a href="mailto:forestlib@mail.com">forestlib@mail.com</a></div>
					<div className="phone"><a href="tel:+12(345)6789012">+12(345)6789012</a></div>
				</div>
			</section>
		);
	}
}
