import { FC, useState } from "react";
import { connect } from "react-redux";
import { publish, PublishType } from "src/redux/actions/MqttActions";

import { ToggleOn, ToggleOff } from "@material-ui/icons";
import { Button } from "@material-ui/core";

interface ToggleProps {
  widget: CommonButtonProps;
  disable: boolean;
  publish: PublishType;
  gridSize: GridSize;
}

const ToggleButton: FC<ToggleProps> = ({
  widget,
  disable,
  gridSize,
  publish,
}) => {
  const { text, color = "", size } = widget;
  const [on, setOn] = useState<boolean>(false);

  const handleToggle = () => {
    setOn(!on);
    publish(text + "/" + on ? "on" : "off");
  };

  return (
    <Button
      style={{
        width: `${size.width * gridSize.width}px`,
        height: `${size.height * gridSize.height}px`,
        backgroundColor: `${disable ? "#3f3f3f50" : ""}`,
        fontSize: `${
          Math.min(size.width * gridSize.width, size.height * gridSize.height) +
          30
        }px`,
        display: "flex",
        justifyContent: "center",
      }}
      onClick={() => handleToggle()}
      disabled={disable}
    >
      {on ? (
        <ToggleOn
          fontSize="inherit"
          style={{
            color: color,
          }}
        />
      ) : (
        <ToggleOff
          fontSize="inherit"
          style={{
            color: "darkgrey",
          }}
        />
      )}
    </Button>
  );
};

const mapDispatchToProps = {
  publish,
};

export default connect(null, mapDispatchToProps)(ToggleButton);
