import Tests from "./components/Tests";

function App() {
  const testResult = [
    {
      id: '1',
      childName: 'Abdullah Mensur',
      surah: 'Al-Beqerah',
      date: new Date(2022, 1, 25),
      startAyah: '45',
      endAyah: '55',
      status: 'Pass'
    },
    {
      id: '2',
      childName: 'Abdurehman Mensur',
      surah: 'Al-Imran',
      date: new Date(2022, 1, 12),
      startAyah: '120',
      endAyah: '245',
      status: 'Pass'
    },
    {
      id: '3',
      childName: 'Hebatullah Mensur',
      surah: 'An-Nissa',
      date: new Date(2022, 2, 14),
      startAyah: '100',
      endAyah: '109',
      status: 'Fail'
    }
  ];
  return (
    <div className="App">
      <h2>Quran Progress Tracker</h2>
      <Tests result={testResult} />
    </div >
  );
}

export default App;
