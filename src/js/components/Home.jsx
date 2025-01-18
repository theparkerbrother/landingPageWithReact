import React from "react";
import Navbar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
import Card from "./Card";

import beardedGuy from "../../img/beardedGuy.avif";
import seriousGuy from "../../img/seriousGuy.avif";
import sweaterGuy from "../../img/sweaterGuy.avif";
import yellowshirtGuy from "../../img/yellowshirtGuy.avif";


//create your first component
const Home = () => {
	const cardContents = [
			{
				title: "Forrest",
				imgUrl: beardedGuy, 
				description: "Some text for the description",
				buttonUrl: "#",
				buttonText: "Go to bearded places"
			},
			{
				title: "John",
				imgUrl: seriousGuy, 
				description: "Some text for the description",
				buttonUrl: "#",
				buttonText: "Go to serious places"
			}, 
			{
				title: "George",
				imgUrl: sweaterGuy, 
				description: "Some text for the description",
				buttonUrl: "#",
				buttonText: "Go sweater places"
			},
			{
				title: "Jim",
				imgUrl: yellowshirtGuy, 
				description: "Some text for the description",
				buttonUrl: "#",
				buttonText: "Go to yellow places"
			}
		];
	

	
	return (
		<div>
          	<Navbar/>
			  <div className="container">
  				<div className="row g-3">
    				{cardContents.map((card, index) => (
      					<div key={index} className="col-4 col-sm-6 col-md-4 col-lg-3 mb-4">
        					<Card {...card} />
      					</div>
    				))}
 				 </div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;