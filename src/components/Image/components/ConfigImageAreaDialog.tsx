import { Box, Button, Dialog, DialogActions, DialogContent, Grid, TextField, Typography } from "@mui/material";
import { FC, useContext, useEffect, useState } from "react";
import { Editor } from "slate";
import { useSlate } from "slate-react";
import { insertImageArea } from "../transforms/insertImageArea";
import { ToolbarStateContext, ToolbarStateContextType } from "../../../core/providers/ToolbarStateProvider";
import { ImageAreaContext, ImageAreaContextModel } from "../../../core/providers/ImageAreaStateProvider";

interface ConfigImageAreaDialogProps {
  open: boolean;
  handleClose: () => void;
  imageInfo?: ImageStateModel;
};

interface ImageStateModel {
  imageId: string;
  imageLink: string;
  imageLabel: string;
  imageWidth: string;
  imageHeight: string;
};

const ConfigImageAreaDialog: FC<ConfigImageAreaDialogProps> = ({
  open, 
  handleClose,
  imageInfo
}) => {
  const editor: Editor = useSlate();
  const { updateToolbarState } = useContext<ToolbarStateContextType>(ToolbarStateContext);
  const { updateIamgeAreaState } = useContext<ImageAreaContextModel>(ImageAreaContext);
  const [imageState, setImageState] = useState<ImageStateModel>({ imageId: "", imageLink: "", imageLabel: "", imageWidth: "", imageHeight: "" });
  
  const handleConfirm = () => {
    insertImageArea({ editor, imageId: imageState.imageId, imageLink: imageState.imageLink, imageLabel: imageState.imageLabel, imageWidth: imageState.imageWidth, imageHeight: imageState.imageHeight });
    updateToolbarState({ fontSize: false, color: false, highlight: false, elementList: false });
    updateIamgeAreaState({ imageId: imageState.imageId, imageLink: imageState.imageLink, imageLabel: imageState.imageLabel, imageWidth: imageState.imageWidth, imageHeight: imageState.imageHeight });
    handleClose();
  };

  useEffect(() => {
    if(imageInfo) {
      setImageState({ 
        imageId: imageInfo.imageId, 
        imageLink: imageInfo.imageLink, 
        imageLabel: imageInfo.imageLabel, 
        imageWidth: imageInfo.imageWidth, 
        imageHeight: imageInfo.imageHeight 
      });
    };
  }, [imageInfo]);
  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <Box
        sx={{
          textAlign: "center",
          padding: "10px"
        }}
      >
        <Typography variant="h5" gutterBottom>配置图像域</Typography>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                id="imgAreaId" 
                label="图像域ID" 
                variant="outlined"
                size="small"
                value={imageState.imageId}
                onChange={e => setImageState({ ...imageState, imageId: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="imgLink"
                label="图片链接"
                variant="outlined"
                size="small"
                value={imageState.imageLink}
                onChange={e => setImageState({ ...imageState, imageLink: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="imgLabel"
                label="图片名称"
                variant="outlined"
                size="small"
                value={imageState.imageLabel}
                onChange={e => setImageState({ ...imageState, imageLabel: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="imgWidth"
                label="图片宽度"
                variant="outlined"
                size="small"
                value={imageState.imageWidth}
                onChange={e => setImageState({ ...imageState, imageWidth: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="imgHeight"
                label="图片高度"
                variant="outlined"
                size="small"
                value={imageState.imageHeight}
                onChange={e => setImageState({ ...imageState, imageHeight: e.target.value })}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={handleConfirm}>确认</Button>
        </DialogActions>
      </Box>
    </Dialog>
  )
};
export default ConfigImageAreaDialog;