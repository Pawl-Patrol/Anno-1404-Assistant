import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Button, MobileStepper } from "@mui/material";
import { useForm } from "./formContext";

export function ImageGallery(props: { images: string[] }) {
  const form = useForm();

  const index = form.imageIndex ?? 0;
  const setIndex = (imageIndex: number) => form.merge({ imageIndex });

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="0"
        flexGrow="1"
      >
        <img
          src={props.images[index]}
          alt="layout"
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
      <MobileStepper
        variant="dots"
        steps={props.images.length}
        sx={{
          position: "unset",
        }}
        nextButton={
          <Button
            onClick={() => setIndex(index + 1)}
            disabled={index === props.images.length - 1}
          >
            right
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button onClick={() => setIndex(index - 1)} disabled={index === 0}>
            <KeyboardArrowLeft />
            left
          </Button>
        }
        activeStep={index}
      />
    </>
  );
}
