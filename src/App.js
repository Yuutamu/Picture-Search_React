
import { useRef, useState } from 'react';
import './App.css';
import ImageGallery from './ImageGallery';

function App() {
  const [fetchData, setFetchData] = useState([]); // MEMO:setFetchDataの値が変わるたびに（＝APIを叩くたびに）状態を更新し”再レンダンリングをする”
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);

    // API URL
    const endpointURL = `https://pixabay.com/api/?key=44611455-7fdfcdcddf597c0412c24659e&q=${ref.current.value}&image_type=photo&pretty=true`;
    // APIを叩く（データフェッチング）非同期処理で行う
    fetch(endpointURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.hits);
        setFetchData(data.hits);
      });
  };

  return  <div className="container">
    <h2>My Picture</h2>
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" placeholder="画像を探す" ref={ref} />
    </form>
    <ImageGallery fetchData={fetchData} />
  </div>;
}

export default App;
