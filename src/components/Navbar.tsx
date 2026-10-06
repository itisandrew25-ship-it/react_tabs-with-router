import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

export const Navbar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <nav
      className="navbar is-light"
      data-cy="Nav"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link
          to="/"
          className={classNames('navbar-item', {
            'is-active': pathname === '/',
          })}
        >
          Home
        </Link>
        <Link
          to="/tabs"
          className={classNames('navbar-item', {
            'is-active': pathname.startsWith('/tabs'),
          })}
        >
          Tabs
        </Link>
      </div>
    </nav>
  );
};
