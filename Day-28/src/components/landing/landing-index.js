import React, {Component} from 'react';

export default class Landing extends Component {
  render() {
    return (
      <div>
        <header className='Header'>
          <title>Game Sales App</title>
        </header>

        <main className='about'>
          <h1>
            About this App
          </h1>
          <p>
            This is a little project that I'm making up where you can input a video game and keep track of it's daily units sold while on the shelf. I just thought it would be a fun thing to keep track of.
          </p>
        </main>
      </div>
    );
  }
}