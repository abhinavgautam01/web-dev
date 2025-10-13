import { useState } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState([])
  function addPost(){
    setPosts([...posts, {
      name: "Golu",
      subtitle: "Enemy Count",
      number: 10,
      imageURL: "https://pbs.twimg.com/profile_images/1859275532371886087/enDuR7hH_x96.jpg"
    }])
  }
  return (
    <>
      <div>
        <button onClick={addPost} style={{marginBottom: 4}}>Add Post</button>
        {posts.map((post)=>
          <div style={{marginBottom: 5}}>
            <PostComponent
              name = {post.name}
              subtitle = {post.subtitle}
              number = {post.number}
              imageURL = {post.imageURL}
              />
            </div>
            )}
            <div>
            <Card>
                <h2>Card Title</h2>
                <p>This is some content inside the card.</p>
            </Card>
            <Card>
                <h2>Another Card</h2>
                <p>This card has different content!</p>
            </Card>
        </div>
      </div>
    </>
  )
}

function PostComponent(props) {

  return (
  <div style={{backgroundColor: "#34495e", padding: 10, paddingLeft: 20, paddingRight: 20, borderRadius: 10}}>
    <div style={{display: 'flex', alignItems: "center"}}>
      <div>
        <img src={props.imageURL} style={{width: 40, height: 40, borderRadius: 30}}></img>
      </div>
    <div style={{marginLeft: 10, fontSize: 10}}>
        <div>{props.name}</div>
        <div>{props.subtitle}</div>
        <div>{props.number} Enemies</div>
    </div>
    </div>
  </div>)
}
const Card = ({ children }) => {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '20px',
            margin: '10px',
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
        }}>
            {children}
        </div>
    );
};


export default App;
