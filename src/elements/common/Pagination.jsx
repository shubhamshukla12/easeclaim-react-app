import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

export default function Pagination() {
  return (
    <div className="rn-pagination text-center">
      <ul className="page-list">
        <li className="active">
          <NavLink to="#" activeClassName="active-link">
            1
          </NavLink>
        </li>
        <li>
          <NavLink to="#">2</NavLink>
        </li>
        <li>
          <NavLink to="#">3</NavLink>
        </li>
        <li>
          <NavLink to="#">4</NavLink>
        </li>
        <li>
          <NavLink to="#">
            <FaAngleRight />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
