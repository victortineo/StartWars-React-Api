import React from 'react';
import PeopleList from '../components/PeopleList';
import Orderer from '../components/Orderer';

const PeoplePage = () => {
    return (
      <div className="page-layout">
        <h1 className="page-layout__title">StarWars Characters</h1>
        <Orderer />
        <PeopleList />
      </div>
    );
}

export default PeoplePage;
