import { Row, Col, Image } from "react-bootstrap";
import { useSelector } from "react-redux";

const Player = () => {
  const selectedSong = useSelector((state) => state.selected.selectedSong);

  return (
    <Row className="h-100">
      <Col lg={{ span: 10, offset: 2 }}>
        <div className="row h-100 flex justify-content-center align-items-center">
          {!selectedSong ? (
            <></>
          ) : (
            <>
              <audio id="audio-player" src={selectedSong.preview}></audio>
              <Col className="col-3 d-flex gap-3">
                <img style={{ borderRadius: "5" }} src={selectedSong.album.cover_small} alt="cover" />
                <div className="d-flex flex-column" style={{ color: "white" }}>
                  <span>{selectedSong.title}</span>
                  <span>{selectedSong.artist.name}</span>
                </div>
              </Col>
            </>
          )}
          <div className="col-4 playerControls">
            <div className="d-flex">
              <a href="#">
                <img src="assets/playerbuttons/shuffle.png" alt="shuffle" />
              </a>
              <a href="#">
                <img src="assets/playerbuttons/prev.png" alt="prev" />
              </a>
              <a href="#">
                <img src="assets/playerbuttons/play.png" alt="play" />
              </a>
              <a href="#">
                <img src="assets/playerbuttons/next.png" alt="next" />
              </a>
              <a href="#">
                <img src="assets/playerbuttons/repeat.png" alt="repeat" />
              </a>
            </div>
            <div className="progress mt-3">
              <div role="progressbar"></div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Player;
