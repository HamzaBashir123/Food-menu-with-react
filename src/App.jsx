
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

import './App.css';

function App() {
  const [menus, setMenu] = useState([]);
  const [text, setTextCou] = useState("")
  console.log(text)
  
  


  async function getMenu(a){
    const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${text}`);
    const data = await res.json();
    console.log(data.data.recipes)
    setMenu(data.data.recipes)
  }
  useEffect(function(){
    getMenu()
  },[text])
  



  return (
    <div className="App">
     <Header />
     <InputArea setTextCou={setTextCou} getMenu={getMenu}/>
     <Menu menus={menus} />
     <Footer />
    </div>
  );
}

function Header(){
  return(
    <>
    <h1 className='mainHeading'>-- Fast React Pizza Co . --</h1>

    =================<br/>
    <span style={{
      fontSize :'30px',
      fontWeight: '700',

    }}>Our Menu</span><br/>
      =================
    <p style={{
      fontSize :'20px',
      fontWeight: '400',

    }}>Authentic Italian cuisine. 6 creative dishes to choose from. All from <br/> our stone oven, all organic, all delicious.</p>
    </>
  )

}

function InputArea({setTextCou , getMenu}){
  return(
    <>
      <input placeholder="Name of cuisine" style={{
      fontSize :'20px',
      fontWeight: '700',
      borderRadius:'20px',
      padding: '10px 20px',


    }} onChange={(e) => {
        setTextCou(e.target.value)
      }}/>
    </>
  )

}

function Menu({ menus }) {
  return (
    <div style={{ width: "100vw", display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", marginRight: "0px" }}>
      {
        menus.map((menu) => (
          <CardContainer image={menu.image_url} title={menu.title} />
        ))
      }
    </div>
  )
}

function Footer() {
  return (
    <p style={{ fontFamily: "'Raleway', sans-serif" }}>We are open 24 / 7</p>
  )
}

function CardContainer({image, title}) {
  return (
    <Card style={{ width: '18rem', margin: "15px" }}>
      <Card.Img variant="top" src={image} style={{width: "200px", height: "200px", objectFit: "cover", borderRadius: "25px"}}/>
      <Card.Body>
        <Card.Title style={{ fontSize: "1.2rem", fontWeight: "bold", fontFamily: "'Raleway', sans-serif"}}>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}


export default App;
