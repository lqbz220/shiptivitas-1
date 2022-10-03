import dragula from "dragula";
import React from "react";
import Card from "./Card";
import "./Swimlane.css";

export default class Swimlane extends React.Component {
  render() {
    //get the each cloumn name and put them into containers in dragula
    let columnName = this.props.name;
    const containers = [columnName];
    // only elements in drake.containers will be taken into account
    const drake = dragula(containers, {
      isContainer: function(el) {
        return true;
      },
    });
    //use drake.on to emmit events and change the color accordingly
    drake
      .on("drag", () => {
        //change className of the div in order the change card color
        //eg: if drag from 'backlog'column, the element's className change to an 'Card'
      })
      .on("drop", () => {
        //change className of the div in order the change card color
        //eg: if dropped in 'complete'column, the element's className change to 'Card,Card-green' by adding 'Card-green'
      });
    const cards = this.props.clients.map((client) => {
      return (
        <Card
          key={client.id}
          id={client.id}
          name={client.name}
          description={client.description}
          status={client.status}
        />
      );
    });

    return (
      <div className="Swimlane-column">
        <div className="Swimlane-title">{this.props.name}</div>
        <div className="Swimlane-dragColumn" ref={this.dragulaRef}>
          {cards}
        </div>
      </div>
    );
  }
}
