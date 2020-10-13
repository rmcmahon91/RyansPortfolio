import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Ryan McMahon</h2>
            <img
              src="https://cdn4.vectorstock.com/i/thumb-large/26/38/professional-programmer-charatcter-smiling-man-vector-21172638.jpg"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
            Web developer with skills using Javascript, ReactJs, MongoDB, MySQL. Seeking new opportunities in the tech industry.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                <i className="fa fa-phone-square" aria-hidden="true"/>
                (631) 512-3587</ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                <i className="fa fa-envelope" aria-hidden="true"/>
                ryan.mcmahon4@gmail.com</ListItemContent>
              </ListItem>
            </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
