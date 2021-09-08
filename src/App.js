// import fuji1 from './images/Fuji_1.jpg';
import './App.css';



function App() {

  const images = [
    "./images/Fuji_1.jpg",
    "./images/Fuji_2.jpg",
    "./images/Fuji_3.jpg",
    "./images/Fuji_4.jpg",
    "./images/Fuji_5.jpg",
    "./images/Fuji_6.jpg",
    "./images/Fuji_7.jpg",
    "./images/Fuji_8.jpg",
    "./images/Fuji_9.jpg",
    "./images/Fuji_10.jpg",
    "./images/Fuji_11.jpg",
    "./images/Fuji_12.jpg",
    "./images/Fuji_13.jpg",
    "./images/Fuji_14.jpg",
    "./images/Fuji_15.jpg",
    "./images/Fuji_16.jpg",
    "./images/Fuji_17.jpg",
    "./images/Fuji_18.jpg",
    "./images/Fuji_19.jpg",
    "./images/Fuji_20.jpg",
    "./images/Fuji_21.jpg",
    "./images/Fuji_22.jpg",
    "./images/Fuji_23.jpg",
    "./images/Fuji_24.jpg",
    "./images/Fuji_25.jpg",
    "./images/Fuji_26.jpg",
    "./images/Fuji_27.jpg",
    "./images/Fuji_28.jpg",
    "./images/Fuji_29.jpg",
    "./images/Fuji_30.jpg",
    "./images/Fuji_31.jpg",
    "./images/Fuji_32.jpg",
    "./images/Fuji_33.jpg",
    "./images/Fuji_34.jpg",
    "./images/Fuji_35.jpg",
    "./images/Fuji_36.jpg",
  ]

  const randomImage = images => {
    let num = Math.floor(Math.random() * 36)
    console.log(num)
    return num
  }

  let curImageOrder = randomImage()
  let curImageUrl = images[curImageOrder]

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Мало')
  }

  return (
    <div className="App">
      <h1 className="do_it">Оцените стоимость картины:</h1>

      <form className="main" onSubmit={handleSubmit}>
        <input type="number" className="number" />
      </form>

      {/* <img src={fuji1} alt="fuji1" /> */}
      <img src={curImageUrl} alt="fuji1" width="600"/>

    </div>
  );
}

export default App;
