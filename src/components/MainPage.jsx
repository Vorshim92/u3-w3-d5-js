import { Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AlbumCard from "./AlbumCard";
import { useEffect } from "react";
import { fetchResult, fetchSongsWrapper, FETCH_ROCK, FETCH_POP, FETCH_HIP, FETCH_SECTION } from "../redux/actions";
import Section from "./SectionComponent";

const MainPage = () => {
  const search = useSelector((state) => state.results.search);
  const sections = useSelector((state) => state.results.sections);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSongsWrapper("rock"));
    dispatch(fetchSongsWrapper("pop"));
    dispatch(fetchSongsWrapper("hip"));
    dispatch(fetchSongsWrapper("punk"));
    dispatch(fetchSongsWrapper("classic"));
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
      {Object.keys(sections).map((label, i) => (
        <Section label={label} key={i}></Section>
      ))}
    </>
  );
};

export default MainPage;
