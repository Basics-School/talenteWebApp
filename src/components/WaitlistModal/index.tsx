"use client";
import React, { useState } from "react";
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
import { axiosInstance } from "@/lib/axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "@/validations/loginSchema";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { notifyError, notifySuccess } from "@/utils/Notistack/utils";

const CustomTextField = styled(TextField)(({}) => ({
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset, &.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
}));

const defaultValues = {
  name: "",
  email: "",
  phone: "",
};

interface FormValues {
  name: string;
  email: string;
  phone?: string | undefined;
}

interface WaitListDialogProps {
  open: boolean;
  onClose: () => void;
}

const WaitlistModal = ({ open, onClose }: WaitListDialogProps) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues, resolver: yupResolver(loginSchema), mode: "onChange" });
  // const { enqueueSnackbar } = useSnackbar();

  const onSubmitDetials: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    try {
      await axiosInstance
        .post("hubspot/contact", {
          properties: {
            email: data.email,
            firstname: data.name,
            phone: `(+91) ${data.phone}`,
          },
        })
        .then(() => {
          setLoading(false);
          onClose();
          reset();
          notifySuccess("Data submitted successfully");
        })
        .catch(() => {
          setLoading(false);
          notifyError("An error occurred");
        });
    } catch (error) {}
  };

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
        <form onSubmit={handleSubmit(onSubmitDetials)}>
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
                          fontFamily: "var(--league-spartan-medium)",
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
                      {...register("name")}
                      autoFocus
                    />
                    <Typography className="!mt-1 !ml-1 Spartan-Medium !text-sm !text-[--error-message]">
                      {errors.name?.message}
                    </Typography>
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
                          fontFamily: "var(--league-spartan-medium)",
                          padding: "5.5px 0",
                          borderRadius: "7px",
                          fontSize: "14px",
                          background: "var(--bg-input)",
                        },
                      }}
                      className="Spartan-Medium !w-full"
                      type="text"
                      size="small"
                      variant="outlined"
                      {...register("email")}
                    />
                    <Typography className="!mt-1 !ml-1 Spartan-Medium !text-sm !text-[--error-message]">
                      {errors.email?.message}
                    </Typography>
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
                          fontFamily: "var(--league-spartan-medium)",
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
                      {...register("phone")}
                    />
                  </Box>
                </DialogContentText>
              </Box>
            </Box>
          </DialogContent>

          <DialogActions className="!p-5">
            <Button
              className="Montserrat-SemiBold !text-[--black-color] !normal-case !rounded-lg !bg-[--button-border] !w-full !mb-5 shadowSubmit"
              type="submit"
              color="primary"
            >
              {loading ? <CircularProgress color="inherit" size={20} /> : "Submit"}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default WaitlistModal;