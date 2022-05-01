
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
        <section id="pakaloloimg" className="baner_sec">
	<div className="container-fluid">
		<div className="row">
			<div className="col-sm-12 col-md-12 col-lg-4 col_text text-center">
            <h1 className="h1_heading pos_a">RUNLIFE BULLLS</h1>
            <p className="para_p p_ad pos_a">A Unique collection of 7,777 NFT trading cards on the <br />
            Ethereum blockchain. Every Card holds a different <br />
            rarity that grants you can access to the Runlife business <br />
            app & software among other exclusive perks, <br />
            giveaways, & events here at Runlife ranch.
            </p>
                            <a className="button_buy pos_a" href="https://twitter.com" target={{target:"_blank"}}>
                           BUY NOW 
                            </a>
				</div>
                <div className="col-sm-12 col-md-12 col-lg-8 banner_div text-center">
                <img className="img_banner" src="assets/images/imagebg.png"/>
				</div>
				</div>
				</div>
                </section>
	</>
  );
}

export default Home;
