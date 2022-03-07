import React, { useState } from "react";

import './QuranTestForm.css';

const QuranTestForm = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredSurah, setEnteredSurah] = useState('');
    const [enteredStartAyah, setEnteredStartAyah] = useState('');
    const [enteredEndAyah, setEnteredEndAyah] = useState('');
    const [enteredTestDate, setEnteredTestDate] = useState('');

    // const[userInput, setUserInput]=useState({
    //     enteredName:'',
    //     enteredSurah:'',
    //     enteredStartAyah:''
    // });

    const studentNameChangeHandler = (event) => {
        setEnteredName(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredName:event.target.value
        // });
        // setUserInput((prevState)=>{
        //     return{...prevState,enteredName:event.target.value};
        // });
    }
    const surahChangeHandler = (event) => {
        setEnteredSurah(event.target.value);
    }
    const startAyahChangeHandler = (event) => {
        setEnteredStartAyah(event.target.value);
    }
    const entAyahChangeHandler = (event) => {
        setEnteredEndAyah(event.target.value);
    }
    const testDateChangeHandler = (event) => {
        setEnteredTestDate(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();

        const quranTestData = {
            childName: enteredName,
            surah: enteredSurah,
            startAyah: enteredStartAyah,
            endAyah: enteredEndAyah,
            testDate: new Date(enteredTestDate)
        };

        props.onSaveQuranTestData(quranTestData);
        setEnteredName(''); setEnteredSurah(''); setEnteredStartAyah('');
        setEnteredEndAyah(''); setEnteredTestDate('');
    }
    return <form onSubmit={submitHandler}>
        <div className="new-quran-test__controls">
            <div className="new-quran-test__control">
                <label>Student Name</label>
                <input
                    type='text'
                    value={enteredName}
                    onChange={studentNameChangeHandler}
                />
            </div>
            <div className="new-quran-test__control">
                <label>Surah Name</label>
                <input
                    type='text'
                    value={enteredSurah}
                    onChange={surahChangeHandler} />
            </div>
            <div className="new-quran-test__control">
                <label>Start Ayah</label>
                <input
                    type='number'
                    value={enteredStartAyah}
                    onChange={startAyahChangeHandler} />
            </div>
            <div className="new-quran-test__control">
                <label>End Ayah</label>
                <input
                    type='number'
                    value={enteredEndAyah}
                    onChange={entAyahChangeHandler} />
            </div>
            <div className="new-quran-test__control">
                <label>Test Date</label>
                <input
                    type='date' min="2021-01-01" max="2023-12-31"
                    value={enteredTestDate}
                    onChange={testDateChangeHandler} />
            </div>
            <div className="new-quran-test__actions">
                <button type="submit">Add Quran Progress</button>
            </div>
        </div>
    </form>
}

export default QuranTestForm;