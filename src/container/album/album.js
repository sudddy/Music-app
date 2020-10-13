import { CircularProgress } from "@material-ui/core";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAlbum, getParticularAlbum } from "../../store/music";
import { useHistory } from "react-router-dom";
import { Lists, Header } from "../../component/index";

const Albums = props => {
  const history = useHistory();

  useEffect(() => {
    props.getAlbum();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = item => {
    props.getParticularAlbum(item);
    history.push(`/viewAlbum/${item}`);
  };

  if (!props.music.hasOwnProperty("albums")) {
    return <CircularProgress />;
  }

  return (
    <div className="main">
      <Header name="List of Albums" /> <br />
      {props.music.albums.map(musicDetails => (
        <Lists
          name={musicDetails.title}
          onClick={() => {
            handleClick(musicDetails.id);
          }}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { getAlbum, getParticularAlbum }
)(Albums);
