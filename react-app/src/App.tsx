import React from 'react';
import logo from './logo.svg';
import './App.css';

function Header(props: any){
  return <header className="App-header">
    <h1><a href="/">{props.title}</a></h1>
  </header>
}

function  Nav(props:any) {
  const lis = [];

  for(let i = 0; i < props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>);
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
      <Header title="ReactTest" />
      <Nav topics={topics}></Nav>
      <Article title="WelcomeTest" body="Hello, Body"></Article>
    </div>
  );
}

export default App;
