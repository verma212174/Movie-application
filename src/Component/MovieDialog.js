import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/movieSlice";
import VideoBackground from "./VideoBackground";

export default function MovieDialog() {
  const { open, id } = useSelector((store) => store.movie);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setOpen(false));
  };

  //   return (
  //     <Dialog
  //       open={open}
  //       onClose={handleClose}
  //       aria-labelledby="movie-dialog-title"
  //       aria-describedby="movie-dialog-description"
  //       sx={{
  //         '& .MuiDialog-paper': {
  //           width: '80%',
  //           maxWidth: '800px',
  //           height: '70vh',
  //           maxHeight: '90vh',
  //           overflow: 'hidden', // Remove scrollbars
  //         },
  //         '& .MuiDialogContent-root': {
  //           padding: 0, // Prevent extra padding causing overflow
  //         },
  //       }}
  //     >
  //       <DialogContent
  //         sx={{
  //           overflow: 'hidden', // Prevent overflow in the content
  //           display: 'flex',
  //           justifyContent: 'center', // Center content horizontally
  //           alignItems: 'center',
  //           margin: "0 auto",
  //           marginLeft: "70px",
  //           marginTop:"20px"
  //         }}
  //       >
  //         <DialogContentText id="movie-dialog-description" sx={{ width: '100%' }}>
  //           <VideoBackground movieId={id} bool={true} />
  //         </DialogContentText>
  //       </DialogContent>
  //       <DialogActions>
  //         <Button onClick={handleClose}>Cancel</Button>
  //       </DialogActions>
  //     </Dialog>
  //   );
  // }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="lg"
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: "#000", // Black background
          borderRadius: 4,
          overflow: "hidden", // Prevent content overflow causing scrollbar
          maxWidth: "685px", // Limit the width
        },
        "& .MuiDialogContent-root": {
          padding: 0, // Prevent extra padding causing overflow
          overflow: "hidden", // Ensure no content causes a scrollbar
        },
      }}
    >
      <DialogContent
        sx={{
          //   display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 0, // Remove padding around video
          width: "100%",
          height: "100%", // Ensure it adapts fully to the dialog
          overflow: "hidden", // Prevent scrollbar
        }}
      >
        {/* Video embedded inside */}
        <VideoBackground
          movieId={id}
          bool={true}
          style={{
            width: "100%",
            height: "calc(100vh - 150px)", // Adjust height to fill dialog minus header/footer
            maxHeight: "100%", // Ensure it doesn’t overflow
            objectFit: "contain", // Ensure the video scales correctly
          }}
        />
      </DialogContent>

      <DialogActions
        sx={{
          justifyContent: "center",
          padding: "8px 16px",
        }}
      >
        <Button
          onClick={handleClose}
          sx={{
            color: "#ffffff",
            backgroundColor: "#f50057",
            "&:hover": {
              backgroundColor: "#c51162",
            },
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
