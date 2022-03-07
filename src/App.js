import React, { useState } from 'react';
import NewQuranTest from './components/NewQuranTest/NewQuranTest';
import Tests from './components/QuranTests/QuranTests';


const Initial_Test_Result = [
  {
    id: '1',
    childName: 'Abdullah Mensur',
    surah: 'Al-Beqerah',
    date: new Date(2021, 7, 25),
    startAyah: '45',
    endAyah: '55',
    status: 'Fail'
  },
  {
    id: '2',
    childName: 'Abdurehman Mensur',
    surah: 'Al-Imran',
    date: new Date(2020, 2, 12),
    startAyah: '120',
    endAyah: '245',
    status: 'Pass'
  },
  {
    id: '3',
    childName: 'Hebatullah Mensur',
    surah: 'An-Nissa',
    date: new Date(2022, 2, 6),
    startAyah: '100',
    endAyah: '109',
    status: 'Pass'
  }
];

const App = () => {

  const [tests, setTests] = useState(Initial_Test_Result);

  const addQuranTestHandler = (quranTest) => {
    setTests((prevTests) => {
      return [quranTest, ...prevTests];
    });
  }
  return (
    <div className="App">
      <NewQuranTest onAddQuranTest={addQuranTestHandler} />
      <Tests result={tests} />
    </div >
  );
}

export default App;
