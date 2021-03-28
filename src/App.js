import {useState , useEffect} from 'react'
import './App.css';
import Header  from './Header'
import Cart  from './Cart'
import Home  from './Home'
import Login  from './Login'
import { BrowserRouter as Router , Switch , Route, Link  } from "react-router-dom";
import styled from 'styled-components'
import {db , auth} from './firebase'

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = () =>{
    db.collection('cartitem').onSnapshot((snapshot)=>{
      const tempItems = snapshot.docs.map((doc)=>({
        id: doc.id,
        product: doc.data()
      }))
      setCartItems(tempItems);
    })
  }
  useEffect(()=>{
    getCartItems();
  },[])

  const signOut = () =>{
    auth.signOut().then(()=>{
      localStorage.removeItem('user');
      setUser(null);
    })
  }

  
  return (
    <Router>
    {
      !user ? (
        <Login setUser={setUser} />
        ) : (
          <Container>
            <Header signOut={signOut} user={user} cartItems={cartItems} />
            
              <Switch>

                <Route path="/cart">
                  <Cart cartItems={cartItems} />
                </Route>

                <Route path="/">
                  <Home />
                </Route>

              </Switch>
         </Container>
        )
      }
    </Router>
  );
}

export default App;

const Container = styled.div`
    background-color : #EAEDED;
`