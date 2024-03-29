import React from "react";
import { Col, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectSong, likedSongAction } from "../redux/actions";

const AlbumCard = ({ songInfo }) => {
  const dispatch = useDispatch();
  const likedSongs = useSelector((state) => state.liked.likedSongs);

  const handleClick = () => {
    dispatch(selectSong(songInfo));
  };

  const handleLikeClick = (e) => {
    e.stopPropagation();
    dispatch(likedSongAction(songInfo.id));
  };
  const isLiked = likedSongs.includes(songInfo.id);

  return (
    <>
      <Col className="text-center" id={songInfo.id}>
        <Image fluid src={songInfo.album.cover_medium} className="album-image" alt="track" onClick={handleClick} />
        <p>
          Track: "{songInfo.title.length < 16 ? songInfo.title : `${songInfo.title.substring(0, 16)}...`}"<br />
          Artist: {songInfo.artist.name}
        </p>
        <span onClick={handleLikeClick}>{isLiked ? <img src="added.png" className="album-image" alt="Added" /> : <img src="add.png" className="album-image" alt="Add" />}</span>
      </Col>
    </>
  );
};

export default AlbumCard;
