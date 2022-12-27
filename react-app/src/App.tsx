import React, {useState} from 'react';
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
          event.preventDefault();
          props.onChangeMode(+target.id);
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
    {id:1, title:'html', body:'html body'},
    {id:2, title:'css', body:'css body'},
    {id:3, title:'1', body:'1 body'},
    {id:4, title:'test', body:'test body'},
  ];
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState<number>(0);

  let content:any = '';
  if(mode === 'WELCOME'){
    content = <Article title='WELCOME' body='Hello, WEB'></Article>
  }else if(mode === 'READ'){
    let title = '';
    let body = '';
    for(let i = 0; i < Object.keys(topics).length; i++){
      if(Object.values(topics)[i].id === id){
        title = Object.values(topics)[i].title;
        body = Object.values(topics)[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  }

  return (
    <div className="App">
      <Header title="ReactTest" onChangeMode={()=>{
        setMode('WELCOME');
      }} />
      <Nav topics={topics} onChangeMode={(_id:number) => {
        setMode('READ');
        setId(_id);
      }}></Nav>
      {content}
    </div>
  );
}

export default App;
