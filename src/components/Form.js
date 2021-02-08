import React from 'react';
import './Form.css';

function Form() {
    return (
        <div className='container'>
            <form action=''>
                <div className='row'>
                    <div className='col-25'>
                        <label>Kota Asal:</label>
                    </div>
                    <div className='col-75'>
                        <select required>
                            <option value="grapefruit">Grapefruit</option>
                        </select>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-25'>
                        <label>Kota Tujuan:</label>
                    </div>
                    <div className='col-75'>
                        <select required>
                            <option value="grapefruit">Grapefruit</option>
                        </select>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-25'>
                        <label>Berat Kiriman (Gram):</label>
                    </div>
                    <div className='col-75'>
                        <input type='number' required/>
                    </div>
                </div>

                <div className='row'>
                    <input type='submit' value="Submit"></input>
                </div>
            </form>
        </div>
    )
}

export default Form;