import Card from "./components/card";
import data from "./data/nice_servant.json"
function App() {

  const cards = data.map(item => item.extraAssets.charaGraph.ascension[1] !== undefined ?
    <Card key={item.collectionNo} data={item}/> : 
    null
  )

  return (
    <div className="App">
      {cards}
    </div>
  );
}

export default App;
