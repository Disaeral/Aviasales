import React from "react";
import Segment from "./Segment.js";

function Ticket({ ticket, segments }) {
  let srcString = `http://pics.avs.io/99/36/${ticket.carrier}.png`;

  function forTransfers(segment) {
    if (segment.stops.length === 1) {
      return "пересадка";
    }
    if (segment.stops.length >= 2 && segment.stops.length <= 4) {
      return "пересадки";
    }
    if (segment.stops.length > 4) {
      return "пересадок";
    }
    if (segment.stops.length === 0) {
      return "Без пересадок";
    }
  }
  return (
    <div className="Ticket">
      <div className="Ticket-header">
        <div className="Cost">{ticket.price} P</div>
        <div className="Logo">
          <img alt="No Internet" src={srcString} height="36px" />
        </div>
      </div>

      {segments.map((segment, i) => {
        return (
          <Segment
            key={i}
            segment={segment}
            forTransfers={forTransfers(segment)}
          />
        );
      })}
    </div>
  );
}

export default Ticket;
