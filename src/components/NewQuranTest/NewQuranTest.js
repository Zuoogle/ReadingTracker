import React from "react";

import QuranTestForm from "./QuranTestForm";
import './NewQuranTest.css';

const NewQuranTest = (props)=>{
    const saveQuranTestDataHandler=(enteredQuranTestData)=>{
        const quranTestData ={
            ...enteredQuranTestData,
            id:Math.random().toString()
        };
        props.onAddQuranTest(quranTestData);
    }
    return(
        <div className="new-quran-test">
            <QuranTestForm onSaveQuranTestData ={saveQuranTestDataHandler}/>
        </div>
    );
};

export default NewQuranTest;