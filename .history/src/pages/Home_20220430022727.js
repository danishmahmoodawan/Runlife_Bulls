
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
	<div className="container-fluid baner_sec">
		<div className="row mt-5">
			<div className="col-sm-12 col-md-6 col-lg-4 text-center">
            <h1 className="h1_heading head-adjust">RUNLIFE BULLLS</h1>
            <p className="para_p p_ad">A Unique collection of 7,777 NFT trading cards on the <br />
            Ethereum blockchain. Every Card holds a different <br />
            rarity that grants you can access to the Runlife business <br />
            app & software among other exclusive perks, <br />
            giveaways, & events here at Runlife ranch.
            </p>
                            <a className="button_buy" href="https://twitter.com" target={{target:"_blank"}}>
                           BUY NOW
                            </a>
				</div>
                <div className="col-sm-12 col-md-6 col-lg-8 banner_div text-center">
                <img className="img_banner" src="assets/images/imagebg.png"/>
				</div>
				</div>
				</div>
                </section>






<section id="roadmap" className="roadmap">
  <div className="container-fluid">
  <div className="row team_row text-center">
        <div className="col-12">
        
        <h1 className="heading_h1 pb-5">ROADMAP</h1></div>
        </div> 
<div className="timeline">
		<div className="timeline-row">
			<div className="timeline-time">
				<h3 className="heading_h1 ">Phase 1</h3>
			</div>
			<div className="timeline-content">
                
				<p className="timeline_phase text-left"> 
                <li>Launch Twiter, Instagram, Discord Communitys</li>
                <li>Offer some FREE Pakalolo Buzz Merch to Members</li>
                <li>Launch Minting</li>
                <li>Collaborations and future surprise are already in pipeline</li>

                </p>
				<div className="thumbs">
                <img className="seicn cbw img-fluid" src="assets/images/twitter.svg"/>
                <img className="seicn cbw" src="assets/images/discord.svg"/>
                <img className="seicn " src="assets/images/icon/icons8-instagram.svg"/>
				</div>
			</div>
		</div>

		<div className="timeline-row">
			<div className="timeline-time">
            <h3 className="heading_h1 ">Phase 2</h3>
			</div>
			<div className="timeline-content">
				<p className="timeline_phase text-left"> 
                <li>Opening of the Pakalolo Buzz Shop</li>
                <li>Launch Membership platform for profit sharing and supporting 
other creative minds. “Yes we are going to make NFT projects 
for some of our member on our dime, and you will make part 
of the profits! More one this later, but we are looking to 
support someone else for FREE very soon!</li>
               
                </p>
				
					</div>
		</div>

		<div className="timeline-row">
			<div className="timeline-time">
            <h3 className="heading_h1 ">Phase 3</h3>
			</div>
			<div className="timeline-content">
                <p className="timeline_phase text-left"> 
                <li>Buy land in the Sandbox for future metaverse integration</li>
                <li>Begin building the 3D Pakalolo for metaverse integration</li>	
	
                </p>
			</div>
		</div>

		<div className="timeline-row">
			<div className="timeline-time">
            <h3 className="heading_h1 ">Phase 4</h3>
			</div>
			<div className="timeline-content">
                <p className="timeline_phase text-left"> 
                <li>Start the development of Roadmap 2.0 with the community</li>
                <li>Continue to support more Pakalolo holders NFT’s and continue 
to grow the Pakalolo Buzz community Income threw the join 
ventures.</li>	
	
                </p>
			
			</div>
		</div>

	</div>
</div>
    
        </section>






















	</>
  );
}

export default Home;
