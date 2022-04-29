
import { useState, useEffect } from 'react';
function Home() {
    
  return (
   <> 
   <div className="cotainer bg-nav" style={{paddingLeft: "10%",paddingRight: "10%"}}>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <a className="navbar-brand" href="#"><img className="logo_s" src="assets/images/logo.png"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#pakaloloimg">Trilogy</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about_pakalolo">Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#pakalolo_faq">FAQs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#pakalolo_faq">Alphapaper</a>
                        </li>
                        
                    </ul>
                    
                </div>
            </nav>
        </div>
        <section id="pakaloloimg" className="background_sec">
	<div className="container">
		<div className="row mt-5 mb-5">
			<div className="col-12 text-center">
				</div>
				</div>
				</div>
                </section>

	<section id="about_pakalolo" className="first_section">
	<div className="container">
		<div className="row custom_row p-5">
        <div className="col-sm-6 text-center">
        <img className="img_set" src="assets/images/images1.gif"/>
        </div>
        <div className="col-sm-6">
        <h1 className="heading_h1">Pakalolo Buzz are what?</h1>
        <p className="para_p">Pakalolo Buzz is a community driven <br/>
collection of 10k randomly generated 
NFTs on the Ethereum blockchain
Each Pakalolo is totally unique and 
comes with different traits and 
varying in rarity. An will be as your 
ticket into the first Web3 Membership 
platform for profit sharing and 
supporting other creative minds.</p>
        </div>
		
                </div>
                <div className="row custom_rows p-5 mb-5">
        <div className="col-sm-6 ">
        <h1 className="heading_h1">HOW DOES THIS WORK?</h1>
        <p className="para_p">Pakalolo Buzz holders can participate 
in exclusive events, such as: NFT 
claims, raffles, giveaways and much, 
much more. <br/><br/>
Don't forget, all Pakalolo are special -- 
but some are exceptionally special.<br/>
... and the best is yet to come, check 
out our roadmap below.</p>
        </div>
        <div className="col-sm-6 text-center">

<img className="img_set" src="assets/images/images1.gif"/>

        </div>
			
				</div>	
				</div>
				</section>


	</>
  );
}

export default Home;
