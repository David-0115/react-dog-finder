import React from "react";
import './Dog.css'
import { useParams } from "react-router-dom";

const Dog = ({ name = null, src = null, dogs = null }) => {
    const params = useParams();
    const dogName = name || params.dog
    const dog = dogs ? dogs.find(d => d.name === dogName) : null
    const finalName = dog ? dog.name : name
    const finalSrc = dog ? `/${dog.src}` : src


    return (
        <div>
            <img className="Dog" src={finalSrc} />
            <h3 className="Dog-name">{finalName}</h3>
        </div>
    )
}

export default Dog;