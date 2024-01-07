import React, { useState } from "react";
import {
  Box,
  CardActions,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { func, string } from "prop-types";

import { useUser } from "users/providers/UserProvider";



export default function CardActionBar({
  handleDelete,
  handleLike,
  id,
  user_id,
  likes,
  handleEdit,
}) {
  const { user } = useUser();
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [isLiked, setIsLiked] =   useState(() => user && likes.includes(user_id));//useState(false)//useState(() => likes.includes(user._id));

  const openDeleteDialog = () => {
    setDeleteDialogOpen(true);
  };

  const closeDeleteDialog = () => {
    setDeleteDialogOpen(false);
  };

  const confirmDelete = () => {
    closeDeleteDialog();
    handleDelete(id);
  };

  const handleLikeCard = async () => {
    await handleLike(id);
    setIsLiked((prev) => !prev);
  };

  return (
    <CardActions sx={{ justifyContent: "space-between" }}>
      <Box>
        {user && (user.isAdmin || user.id === user_id) ? (
          <>
            <IconButton aria-label="Delete Card" onClick={openDeleteDialog}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit Card" onClick={() => handleEdit(id)}>
              <ModeEditIcon />
            </IconButton>
          </>
        ) : (
          <>
            {[1, 2].map((space) => (
              <IconButton
                key={space}
                aria-label={`Empty Space ${space}`}
                style={{ visibility: "hidden" }}
              >
              </IconButton>
            ))}
          </>
        )}
      </Box>

      <Box>
        <IconButton aria-label="Call">
          <CallIcon />
        </IconButton>
        {user && (
          <IconButton aria-label="Add to favorite" onClick={handleLikeCard}>
            <FavoriteIcon color={isLiked ? "error" : "inherit"} />
          </IconButton>
        )}
      </Box>

      <Dialog open={isDeleteDialogOpen} onClose={closeDeleteDialog}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this card?
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDeleteDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </CardActions>
  );
}

CardActionBar.propTypes = {
  handleDelete: func.isRequired,
  handleEdit: func.isRequired,
  handleLike: func.isRequired,
  id: string.isRequired,
};
