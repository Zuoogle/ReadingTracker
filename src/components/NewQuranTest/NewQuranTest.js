import React from "react";

import QuranTestForm from "./QuranTestForm";
import './NewQuranTest.css';

const NewQuranTest = (props) => {
    const saveQuranTestDataHandler = (enteredQuranTestData) => {
        // var id = Math.random().toString().substring(2);

        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();
        var ticks = date.getTime();

        const idToSet = year.toString().concat(month.toString()).concat(day.toString()).concat(ticks.toString());
        console.log(idToSet);

        const quranTestData = {
            ...enteredQuranTestData,
            id: idToSet
        };
        props.onAddQuranTest(quranTestData);
    }
    return (
        <div className="new-quran-test">
            <QuranTestForm onSaveQuranTestData={saveQuranTestDataHandler} />
        </div>
    );
};

export default NewQuranTest;