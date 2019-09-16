import React from 'react';
import PeopleList from '../components/PeopleList';
import PageLayout from '../components/PageLayout';

const PeoplePage = () => {
    return (
      <PageLayout title={'Star Wars Characters'}>
        <PeopleList />
      </PageLayout>
    );
}

export default PeoplePage;
