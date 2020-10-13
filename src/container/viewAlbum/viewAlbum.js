import { CircularProgress } from "@material-ui/core";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Header, ImageCard, Modal } from "../../component/index";
import { getParticularAlbum } from "../../store/music";
import Button from "@material-ui/core/Button";
import { Image } from "react-bootstrap";
import "./viewAlbum.scss";

const ViewAlbum = props => {
  const [modal, setModalOpen] = useState(false);
  const [currentAlbum, setCurrentAlbum] = useState("");

  const handleClick = item => {
    setModalOpen(true);
    setCurrentAlbum(item);
  };
  const handleModalClick = item => {
    setModalOpen(false);
    setCurrentAlbum("");
  };

  if (!props.music.hasOwnProperty("particularAlbum")) {
    return <CircularProgress />;
  }

  return (
    <div className="view-album">
      <Header name="List of Songs" />
      <Container>
        <Row>
          {props.music.particularAlbum.map(albumDetails => (
            <Col lg={4} md={4} className="image-card">
              <ImageCard
                name={albumDetails.title}
                url={albumDetails.thumbnailUrl}
                onClick={() => {
                  handleClick(albumDetails.url);
                }}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Modal isOpen={modal}>
        <Image src={currentAlbum} />
        <Button label="close" onClick={handleModalClick}>
          {" "}
          Close{" "}
        </Button>
      </Modal>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return state;
};

export default connect(
  mapStateToProps,
  { getParticularAlbum }
)(ViewAlbum);
