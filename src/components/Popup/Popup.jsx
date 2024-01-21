import React from 'react';
import "./Popup.css"

class YourComponent extends React.Component {
  openForm = () => {
    document.getElementById("myForm").style.display = "block";
  }

  closeForm = () => {
    document.getElementById("myForm").style.display = "none";
  }

  render() {
    return (
      <div>
        <button className="open-button" onClick={this.openForm}><b>Enter Link</b></button>

        <div className="form-popup" id="myForm">
          <form action="/action_page.php" className="form-container">
            {/* <h1>Login</h1> */}

            {/* <label htmlFor="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required /> */}

            <label htmlFor="psw"><b>Paste Link here</b></label>
            <input type="text" placeholder="Paste Your social media video link" name="psw" required />

            <button type="submit" className="btn">Submit</button>
            <button type="button" className="btn cancel" onClick={this.closeForm}>Close</button>
          </form>
        </div>
      </div>
    );
  }
}

export default YourComponent;
