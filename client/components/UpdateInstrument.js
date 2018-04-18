import React from 'react';

export default function InstrumentForm(props){
    const instrument = props.selectedInstrument;
    return (
        <div>
            <h2>Edit {instrument.name}</h2>
            <form onSubmit={props.handleSubmit}>
                <h2>
                    <label>Instrument Name: </label>
                    <input type="text" name="name" defaultValue={instrument.name} />
                </h2>
                <img src={instrument.imageUrl} />
                <h3>
                    <label>Image url: </label>
                    <input type="text" name="imageUrl" defaultValue={instrument.imageUrl} />
                </h3>
                <h3>
                    <label>Price: </label>
                    <input type="number" name="cost" defaultValue={instrument.cost} />
                </h3>
                <h4>
                    <label>Category: </label>
                    <input type="text" name="categoryId" defaultValue={instrument.categoryId} />
                </h4>
                <h4>
                    <label>Description: </label>
                </h4>
                <p>
                    <textarea type="text" name="description" defaultValue={instrument.description} />
                </p>
                <button type="submit">Update</button>
            </form>
        </div>
    )

}
