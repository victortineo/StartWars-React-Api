import React from 'react';
import Header from './Header'
import '../static/page-layout.scss'

const PageLayout = ({title, info, subtitle, hasHeader, classNames, children}) => {
    return (
      <div className={`page-layout ${classNames}`}>
        {hasHeader && <Header />}
        <header className="page-layout__header">
          <h1 className="page-layout__title">{title}</h1>
          {subtitle && <p className="page-layout__subtitle">{subtitle}</p>}
          {info && info.map(i => 
            <p className="page-layout__text" key={i}>{i}</p>
          )}
        </header>
        {children}
      </div>
    );
}

export default PageLayout;
