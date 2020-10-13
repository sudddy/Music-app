import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import FolderIcon from "@material-ui/icons/Folder";
import PropTypes from "prop-types";
import React from "react";
import "./list.scss";

const Lists = props => {
  return (
    <div className="root-list">
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <div
            className="demo"
            data-test="ListComponent"
            onClick={props.onClick}
          >
            <List>
              <ListItem>
                <ListItemAvatar data-test="ListImage" className="avatar">
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  data-test="ListText"
                  className="text"
                  primary={props.name}
                />
              </ListItem>
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

Lists.propType = {
  name: PropTypes.string
};

export default Lists;
