import NewQuranTest from './components/NewQuranTest/NewQuranTest';
import Tests from './components/QuranTests/QuranTests';

const App = () => {
  const testResult = [
    {
      id: '1',
      childName: 'Abdullah Mensur',
      surah: 'Al-Beqerah',
      date: new Date(2021, 7, 25),
      startAyah: '45',
      endAyah: '55',
      status: 'Pass'
    },
    {
      id: '2',
      childName: 'Abdurehman Mensur',
      surah: 'Al-Imran',
      date: new Date(2022, 2, 12),
      startAyah: '120',
      endAyah: '245',
      status: 'Pass'
    },
    {
      id: '3',
      childName: 'Hebatullah Mensur',
      surah: 'An-Nissa',
      date: new Date(2020, 4, 14),
      startAyah: '100',
      endAyah: '109',
      status: 'Fail'
    }
  ];
  const addQuranTestHandler= quranTest =>{
    console.log('In App.js');
    console.log(quranTest);
  }
  return (
    <div className="App">
      <NewQuranTest onAddQuranTest={addQuranTestHandler}/>
      
      <Tests result={testResult} />
    </div >
  );
}

export default App;
