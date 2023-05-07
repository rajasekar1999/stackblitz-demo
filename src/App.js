import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <div className="jumbotron">
        <center>
          <h1 className="head">Animal Image Fetcher</h1>
          <h3>Enter the name of the Animal</h3>
          <img
            id="image"
            src="https://images.vexels.com/media/users/3/152594/isolated/preview/d00d116b2c073ccf7f9fec677fec78e3-purple-square-question-mark-icon.png"
            style={{ width: 300, height: 300 }}
          />
          <input type="text" className="form-control" id="name" />
          <button
            onClick={fetchImage}
            className="btn btn-lg primary"
            id="button"
          >
            Fetch Image
          </button>
        </center>
      </div>
    </div>
  );
}

function fetchImage() {
  var name = document.getElementById('name').value;
  var image = document.getElementById('image');
  if (name == 'cheetah') {
    image.src =
      'https://i.natgeofe.com/k/66d3a80c-f4c3-4410-845c-3543375eaa85/cheetah-watching_square.jpg';
  } else if (name == 'tiger') {
    image.src = 'https://thumbs.dreamstime.com/b/tiger-10446099.jpg';
  } else if (name == 'lion') {
    image.src =
      'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80';
  }
}
