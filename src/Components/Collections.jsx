import React from "react";
import "../App.css";

function Collection() {
  return (
    <div className="body">
      <div id="preview">
        <h2>Our collection</h2>
        <p>
          Our collection is very broad — from seasonal to fitness wear. 
          If none of those seem to be getting your attention, you can send us your personal designs and we can help bring them to life.
        </p>
      </div>

      <div className="grid-container">
        <div className="item"><img src="/DX-3/collar polo.jpg" alt="T-shirts" /><p>T-shirts (collar)</p></div>
        <div className="item"><img src="/DX-3/coral shorts.jpg" alt="Petal pattern shorts" /><p>Petal pattern shorts</p></div>
        <div className="item"><img src="/DX-3/multicolor pants.jpg" alt="Corduroy pants" /><p>Corduroy pants</p></div>
        <div className="item"><img src="/DX-3/cozy hoodie.jpg" alt="Cozy hoodies" /><p>Cozy hoodies</p></div>
        <div className="item"><img src="/DX-3/face caps.jpg" alt="Trucker caps" /><p>Trucker caps</p></div>
        <div className="item"><img src="/DX-3/fashion jeans.jpg" alt="Custom print jeans" /><p>Custom print jeans</p></div>
        <div className="item"><img src="/DX-3/jacket.jpg" alt="Jackets" /><p>Jackets</p></div>
        <div className="item"><img src="/DX-3/joggers.jpg" alt="Joggers" /><p>Joggers</p></div>
        <div className="item"><img src="/DX-3/matching two piece.jpg" alt="Two piece" /><p>Two piece (shorts)</p></div>
        <div className="item"><img src="/DX-3/name imprinted shorts.jpg" alt="Custom print shorts" /><p>Custom print shorts</p></div>
      </div>
    </div>
  );
}

export default Collection;
