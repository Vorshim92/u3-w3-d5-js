import React from "react";
import { Col, Image } from "react-bootstrap";

const AlbumCard = ({ songInfo }) => {
  return (
    <Col className="text-center" id={songInfo.id}>
      <Image fluid src={songInfo.album.cover_medium} alt="track" />
      <p>
        Track: "{songInfo.title.length < 16 ? songInfo.title : `${songInfo.title.substring(0, 16)}...`}"<br />
        Artist: {songInfo.artist.name}
      </p>
    </Col>
  );
};

export default AlbumCard;
