import React from 'react';
import { NavLink } from 'react-router-dom';

const nav = () => (
  <div>
    <h2>
      Golden Acorn is life!
      <span role="img" aria-label="Acorn">🌰</span>
    </h2>
    <nav>
      <NavLink to="/">
        <span>Home</span>
      </NavLink>
      <br />
      <NavLink to="/simple/states">
        <span>with states</span>
      </NavLink>
      <br />
      <NavLink to="/simple/redux">
        <span>with redux</span>
      </NavLink>
    </nav>
  </div>
);

export default nav;
