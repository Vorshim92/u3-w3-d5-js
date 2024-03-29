import { Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AlbumCard from "./AlbumCard";
import { useEffect } from "react";
import { fetchResult, FETCH_ROCK, FETCH_POP, FETCH_HIP } from "../redux/actions";

const MainPage = () => {
  const rock = useSelector((state) => state.results.rock);
  const pop = useSelector((state) => state.results.pop);
  const hip = useSelector((state) => state.results.hip);
  const search = useSelector((state) => state.results.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchResult("rock", FETCH_ROCK));
    dispatch(fetchResult("pop", FETCH_POP));
    dispatch(fetchResult("hip", FETCH_HIP));
  }, []);

  return (
    <>
      <Row>
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </Col>
      </Row>
      <Row>
        {search.length > 0 && (
          <Col xs={10}>
            <div id="searchResults">
              <h2>Search Results</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                {search.map((singleAlbum) => (
                  <AlbumCard key={singleAlbum.id} songInfo={singleAlbum} />
                ))}
              </div>
            </div>
          </Col>
        )}
      </Row>
      <Row>
        <Col xs={10}>
          <div id="rock">
            <h2>Rock Classics</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
              {rock.map((singleAlbum) => (
                <AlbumCard key={singleAlbum.id} songInfo={singleAlbum} />
              ))}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="pop">
            <h2>Pop Culture</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection">
              {" "}
              {pop.map((singleAlbum) => (
                <AlbumCard key={singleAlbum.id} songInfo={singleAlbum} />
              ))}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="hiphop">
            <h2>#HipHop</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="hipHopSection">
              {" "}
              {hip.map((singleAlbum) => (
                <AlbumCard key={singleAlbum.id} songInfo={singleAlbum} />
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default MainPage;
