// import React, { Component } from 'react'
// import SimpleReactFooter from "simple-react-footer";


// export class Footer extends Component {

// 	render() {
// 	const description = "According to wikipedia, the cat (Felis catus) is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family. A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids human contact.";
// 	const title = "Cats";
// 	const columns = [
// 		{
// 			title: "Resources",
// 			resources: [
// 				{
// 					name: "About",
// 					link: "/about"
// 				},
// 				{
// 					name: "Careers",
// 					link: "/careers"
// 				},
// 				{
// 					name: "Contact",
// 					link: "/contact"
// 				},
// 				{
// 					name: "Admin",
// 					link: "/admin"
// 				}
// 			]
// 		},
// 		{
// 			title: "Legal",
// 			resources: [
// 				{
// 					name: "Privacy",
// 					link: "/privacy"
// 				},
// 				{
// 					name: "Terms",
// 					link: "/terms"
// 				}
// 			]
// 		},
// 		{
// 			title: "Visit",
// 			resources: [
// 				{
// 					name: "Locations",
// 					link: "/locations"
// 				},
// 				{
// 					name: "Culture",
// 					link: "/culture"
// 				}
// 			]
// 		}
// 	];
// 	return <SimpleReactFooter 
// 		description={description} 
// 		title={title}
// 		columns={columns}
// 		linkedin="fluffy_cat_on_linkedin"
// 		facebook="fluffy_cat_on_fb"
// 		twitter="fluffy_cat_on_twitter"
// 		instagram="fluffy_cat_live"
// 		youtube="UCFt6TSF464J8K82xeA?"
// 		pinterest="fluffy_cats_collections"
// 		copyright="black"
// 		iconColor="black"
// 		backgroundColor="bisque"
// 		fontColor="black"
// 		copyrightColor="darkgrey"
// 	/>;
// 	};
// }

// export default Footer

import React from "react";

import { Row, Container } from "reactstrap";

function Footer () {
	return (
		<footer className="footer footer-black footer-white">
          <Container>
            <Row>
              <div className="credits ml-auto">
              <span className="copyright">
                © {new Date().getFullYear()}, made with{" "}
                <i className="fa fa-heart heart" /> by Creative Team09
              </span>
              </div>
            </Row>
          </Container>
        </footer>
	);
}

export default Footer