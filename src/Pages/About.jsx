import React from "react";
import "../App.css";

function About() {
  const aboutImages = [
    { img: "/DX-3/collar polo.jpg", name: "T-shirts (collar)" },
    { img: "/DX-3/cozy hoodie.jpg", name: "Cozy hoodies" },
    { img: "/DX-3/joggers.jpg", name: "Joggers" },
    { img: "/DX-3/jacket.jpg", name: "Jackets" }
  ];

  return (
    <div className="about-page">
      <div className="about-logo">
        <img src="/DX-3/logo.jpg" alt="DX-3 Logo" className="big-logo" />
      </div>

      <div className="body">
        <div id="preview">
          <h2>About <span>DX-3</span></h2>
          <p>
            DX-3 is more than just a clothing brand; it's a lifestyle.
            We specialize in designer and custom-made clothing that 
            allows you to express your unique personality. Whether you 
            love seasonal fits, fitness wear, or want to bring your 
            personal designs to life, DX-3 has you covered.
          </p>
          <p>
            Every piece we create is crafted with attention to detail, 
            comfort, and modern trends. Our mission is to make sure your 
            wardrobe not only looks good but also tells your story.
          </p>

          <h3>Our Story</h3>
          <p>
            Okoro Esther Adaeze’s journey is stitched with passion, resilience, and vision. 
            A graduate of Accounting from the University of Ilorin, she chose to follow her 
            creative heartbeat, refining her craft at Qubras Fashion School. From there, DX-3 
            was born — a brand where innovation meets style, and every design reflects her 
            fearless pursuit of self-expression.
          </p>
        </div>

        <div className="grid-container">
          {aboutImages.map((item, index) => (
            <div className="item" key={index}>
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
