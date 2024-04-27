import React from 'react';
import { Link } from 'react-router-dom';
import './Dogs.css';
import Dog from './Dog';

const Dogs = ({ dogs }) => {
    return (
        <div className="Dogs">
            {dogs.map((dog) => (
                <Link key={dog.name} to={`/dogs/${dog.name}`}>
                    <div className="Dogs-Dog">
                        <Dog name={dog.name} src={dog.src} />
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Dogs;
