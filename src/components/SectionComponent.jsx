import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import AlbumCard from "./AlbumCard";

const Section = ({ label }) => {
  const sections = useSelector((state) => state.results.sections);
  const songs = sections[label] || [];
  return (
    <Row>
      <Col xs={10}>
        <div id="rock">
          <h2>{label}</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
            {songs.map((singleAlbum) => (
              <AlbumCard key={singleAlbum.id} songInfo={singleAlbum} />
            ))}
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Section;
