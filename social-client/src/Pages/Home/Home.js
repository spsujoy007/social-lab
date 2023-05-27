import React from 'react';
import InformationSide from './InformationSide';
import Container from '../../Components/Container';

const Home = () => {
    return (
        <div className='grid grid-cols-4 gap-3 pt-2'>
            <Container>
                <InformationSide></InformationSide>
            </Container>
        </div>
    );
};

export default Home;