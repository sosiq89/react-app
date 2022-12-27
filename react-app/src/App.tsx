import React from 'react';
import logo from './logo.svg';
import './App.css';



function  Nav(props:any) {
  const lis = [];

  for(let i = 0; i < props.topics.length; i++){
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a id={t.id} href={'/read/'+t.id} onClick={event =>{
          const target = event.target as Element;
          console.log(target.id);
          event.preventDefault();
          props.onChangeMode(target.id);
        }}>{t.title}</a>
      </li>
    );
  }

  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>

}

function Article(props:any){
  return     <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function Header(props: any){
  return <header className="App-header">
    <h1><a href="/" onClick={(event)=>{
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
}
function App() {
  let topics: object;
  topics = [
    {id:1, title:'html'},
    {id:2, title:'css'},
    {id:3, title:'1'},
    {id:4, title:'test'},
  ];

  return (
    <div className="App">
      <Header title="ReactTest" onChangeMode={()=>{
        alert('Header');
      }} />
      <Nav topics={topics} onChangeMode={(id:number) => {
        alert(id);
      }}></Nav>
      <Article title="WelcomeTest" body="Hello, Body"></Article>
    </div>
  );
}

export default App;
