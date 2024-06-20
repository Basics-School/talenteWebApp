import React from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import WaitListDialogBg from "@/assets/svg/WaitListDialogBg.svg";

const CustomTextField = styled(TextField)(({}) => ({
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset, &.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
}));

interface WaitListDialogProps {
  open: boolean;
  onClose: () => void;
}

const WaitListDialog = ({ open, onClose }: WaitListDialogProps) => {
  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        sx={{
          "& .MuiDialog-paper": {
            width: "100%",
            maxWidth: "400px",
            maxHeight: 550,
            borderRadius: "8px",
            background: `url(${WaitListDialogBg.src})`,
            backgroundColor: "var(--dialog-bg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          },
        }}
      >
        <DialogContent>
          <DialogTitle className="flex justify-between Spartan-SemiBold !w-full !text-[--white-text] !p-0">
            <Box className="flex flex-col gap-1 !text-sm md:!text-[16px]">
              Join Our Waitlist
              <span className="Montserrat-Regular md:!text-xs !text-[11px]">
                Please Fill the Form to Join Our Talente Waitlist
              </span>
            </Box>
            <CloseIcon onClick={onClose} className="!cursor-pointer md:!w-7 md:!h-7 !w-6 !h-6" />
          </DialogTitle>
          <Box className="flex md:!flex-row !flex-col gap-10">
            <Box className="w-full">
              <DialogContentText className="flex flex-col gap-6">
                {/* Name* */}
                <Box className="!w-full !mt-6">
                  <InputLabel className="!text-[--white-text] Spartan-Thin !gap-1 !text-sm mb-2">
                    Name*
                  </InputLabel>
                  <CustomTextField
                    fullWidth
                    InputProps={{
                      style: {
                        color: "var(--white-text)",
                        fontFamily: "Monserrat-Regular",
                        padding: "5.5px 0",
                        borderRadius: "7px",
                        fontSize: "14px",
                        background: "var(--bg-input)",
                      },
                    }}
                    className="!w-full"
                    type="text"
                    size="small"
                    variant="outlined"
                  />
                </Box>
                {/* Email* */}
                <Box className="!w-full">
                  <InputLabel className="!text-[--white-text] Spartan-Thin !gap-1 !text-sm mb-2">
                    Email*
                  </InputLabel>
                  <CustomTextField
                    fullWidth
                    InputProps={{
                      style: {
                        color: "var(--white-text)",
                        fontFamily: "Monserrat-Regular",
                        padding: "5.5px 0",
                        borderRadius: "7px",
                        fontSize: "14px",
                        background: "var(--bg-input)",
                      },
                    }}
                    className="!w-full"
                    type="text"
                    size="small"
                    variant="outlined"
                  />
                </Box>
                {/* Phone(optional) */}
                <Box className="!w-full">
                  <InputLabel className="!text-[--white-text] Spartan-Thin !gap-1 !text-sm mb-2">
                    Phone (Optional)
                  </InputLabel>
                  <CustomTextField
                    fullWidth
                    InputProps={{
                      style: {
                        color: "var(--white-text)",
                        fontFamily: "Monserrat-Regular",
                        padding: "5.5px 0",
                        borderRadius: "7px",
                        fontSize: "14px",
                        background: "var(--bg-input)",
                      },
                    }}
                    className="!w-full"
                    type="text"
                    size="small"
                    variant="outlined"
                  />
                </Box>
              </DialogContentText>
            </Box>
          </Box>
        </DialogContent>

        <DialogActions className="!p-5 ">
          <Button
            className="Montserrat-SemiBold !text-[--black-color] !normal-case !rounded-lg !bg-[--button-border] !w-full !mb-5 shadowSubmit"
            color="primary"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default WaitListDialog;
