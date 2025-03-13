import React, { useState } from 'react';
import './App.css';

const NutLabel = () => {
    const [nuts, setNuts] = useState([]);
    const [headingInput, setHeadingInput] = useState('');
    const [infoInput, setInfoInput] = useState({});

    const handleAddNut = () => {
        if (headingInput.trim() !== '') {
            setNuts([...nuts, { heading: headingInput, info: [] }]);
        }
    };

    const handleAddInfo = (index) => {
        if (infoInput[index] && infoInput[index].trim() !== '') {
            const newNuts = [...nuts];
            newNuts[index].info.push(infoInput[index]);
            setNuts(newNuts);
            setInfoInput({ ...infoInput, [index]: '' });
        }
    };

    const handleInfoInputChange = (index, value) => {
        setInfoInput({ ...infoInput, [index]: value });
    };

    const handleDeleteNut = (index) => {
        const newNuts = [...nuts];
        newNuts.splice(index, 1);
        setNuts(newNuts);
    };

    return (
        <>
            <div className="nutMaker">
                <h1 className="title">Nutrition Label Creator</h1>
                <div className="input">
                    <input
                        type="text"
                        className="heading-input"
                        placeholder="Enter heading"
                        value={headingInput}
                        onChange={(e) => {
                            setHeadingInput(e.target.value);
                        }} // Add onChange event handler to update headingInput state
                    />
                    <button className="add-list-button" onClick={handleAddNut}>Add Heading</button>
                </div>
            </div>

            <div className="nut_main">
                {nuts.map((nut, index) => (
                    <div key={index} className="nut-card">
                        <div className="heading_nut">
                            <h3>{nut.heading}</h3> {/* Display the heading here */}
                            <button className="delete-button-heading" onClick={handleDeleteNut}>Delete Heading
                            </button>
                        </div>
                        <ul>
                            {nut.info.map((info, infoIndex) => (
                                <li key={infoIndex} className='nut_inside_info'>
                                    <p>{info}</p>
                                </li>
                            ))}
                        </ul>
                        <div className='add_info'>
                            <select onChange={handleInfoInputChange}>
                                <option value="amount-per">Amount Per Serving</option>
                                <option value="serving-size">Serving Size</option>
                                <option value="calories-per-serving">Calories Per Serving</option>
                                <option value="calories-total">Calories Total</option>
                                <option value="total-fat">Total Fat</option>
                                <option value="sat-fat">Saturated Fat</option>
                                <option value="trans-fat">Trans Fat</option>
                                <option value="cholesterol">Cholesterol</option>
                                <option value="sodium">Sodium</option>
                                <option value="total-carbs">Total Carbohydrate</option>
                                <option value="diet-fiber">Dietary Fiber</option>
                                <option value="total-sugars">Total Sugars</option>
                                <option value="added-sugar">Included Sugar</option>
                                <option value="protein">Protein</option>
                                <option value="vit-d">Vitamin D</option>
                                <option value="calcium">Calcium</option>
                                <option value="iron">Iron</option>
                                <option value="potassium">Potassium</option>
                            </select>
                            <input
                                type="text"
                                className="info-input"
                                placeholder="Add Value"
                                value={infoInput[index] || ''}
                                onChange={(e) => handleInfoInputChange(index, e.target.value)}/>
                            <button className="add-info-button" onClick={() => handleAddInfo(index)}>Add List</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default NutLabel;
