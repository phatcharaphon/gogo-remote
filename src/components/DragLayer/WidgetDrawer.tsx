import { FC } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {
  RadioButtonUnchecked,
  OpenWith,
  EmojiObjects,
  ToggleOff,
  Input,
  TextFields,
} from "@material-ui/icons";
import { isMobile } from "react-device-detect";

import { Modal } from "..";

interface DrawerProps {
  visible: boolean;
  setVisible(open: boolean): void;
}

const WidgetDrawer: FC<DrawerProps> = ({ children, visible, setVisible }) => {
  const toggleDrawer = (open: boolean) => {
    setVisible(open);
  };

  const defaultProps = {
    common: {
      type: "common",
      position: { left: 0, top: 0 },
      text: "text",
      color: "#3f3f3f35",
      size: { width: 4, height: 1 },
    },
    pad: {
      type: "pad",
      position: { left: 0, top: 0 },
      size: { width: 4, height: 4 },
      up: "up",
      down: "down",
      left: "left",
      right: "right",
    },
    status: {
      type: "status",
      position: { left: 0, top: 0 },
      text: "text",
      color: "#3f3f3f35",
      size: { width: 2, height: 2 },
    },
    toggle: {
      type: "toggle",
      position: { left: 0, top: 0 },
      text: "text",
      color: "#3f3f3f35",
      size: { width: 2, height: 1 },
    },
    display: {
      type: "display",
      position: { left: 0, top: 0 },
      text: "text",
      color: "#3f3f3f35",
      size: { width: 2, height: 1 },
    },
    input: {
      type: "input",
      position: { left: 0, top: 0 },
      text: "text",
      color: "#3f3f3f35",
      size: { width: 4, height: 1 },
    },
  };

  const list = () => (
    <>
      <div>
        <List style={{ width: isMobile ? "45vw" : "35vw" }}>
          <Modal widget={defaultProps.common} style={{ width: "100%" }} adding>
            <ListItem button>
              <ListItemIcon>
                <RadioButtonUnchecked />
              </ListItemIcon>
              <ListItemText
                primary="Button"
                style={{ textTransform: "capitalize" }}
              />
            </ListItem>
          </Modal>

          <Modal widget={defaultProps.pad} style={{ width: "100%" }} adding>
            <ListItem button>
              <ListItemIcon>
                <OpenWith />
              </ListItemIcon>
              <ListItemText
                primary="directions"
                style={{ textTransform: "capitalize" }}
              />
            </ListItem>
          </Modal>

          <Modal widget={defaultProps.status} style={{ width: "100%" }} adding>
            <ListItem button>
              <ListItemIcon>
                <EmojiObjects />
              </ListItemIcon>
              <ListItemText
                primary="status"
                style={{ textTransform: "capitalize" }}
              />
            </ListItem>
          </Modal>

          <Modal widget={defaultProps.toggle} style={{ width: "100%" }} adding>
            <ListItem button>
              <ListItemIcon>
                <ToggleOff />
              </ListItemIcon>
              <ListItemText
                primary="toggle"
                style={{ textTransform: "capitalize" }}
              />
            </ListItem>
          </Modal>

          <Modal widget={defaultProps.display} style={{ width: "100%" }} adding>
            <ListItem button>
              <ListItemIcon>
                <Input />
              </ListItemIcon>
              <ListItemText
                primary="display"
                style={{ textTransform: "capitalize" }}
              />
            </ListItem>
          </Modal>

          <Modal widget={defaultProps.input} style={{ width: "100%" }} adding>
            <ListItem button>
              <ListItemIcon>
                <TextFields />
              </ListItemIcon>
              <ListItemText
                primary="Input"
                style={{ textTransform: "capitalize" }}
              />
            </ListItem>
          </Modal>
        </List>
      </div>
    </>
  );
  return (
    <>
      <button onClick={() => toggleDrawer(true)}>{children}</button>
      <Drawer anchor="right" open={visible} onClose={() => toggleDrawer(false)}>
        {list()}
      </Drawer>
    </>
  );
};

export default WidgetDrawer;
