import React from "react";
import { Col, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { selectSong } from "../redux/actions";

const AlbumCard = ({ songInfo }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(selectSong(songInfo));
  };

  return (
    <Col className="text-center" id={songInfo.id}>
      <Image fluid src={songInfo.album.cover_medium} className="album-image" alt="track" onClick={handleClick} />
      <p>
        Track: "{songInfo.title.length < 16 ? songInfo.title : `${songInfo.title.substring(0, 16)}...`}"<br />
        Artist: {songInfo.artist.name}
      </p>
    </Col>
  );
};

export default AlbumCard;
