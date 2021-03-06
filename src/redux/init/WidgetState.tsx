const pad1: PadProps = {
  type: "pad",
  up: "up",
  down: "down",
  left: "left",
  right: "right",
  size: {
    width: 4,
    height: 4,
  },
  position: {
    left: 1,
    top: 0,
  },
};

const StartButton: CommonButtonProps = {
  type: "common",
  text: "start",
  color: "#2ecc71",
  textColor: "white",
  position: {
    left: 1,
    top: 5,
  },
  size: {
    width: 4,
    height: 1,
  },
};

const StopButton: CommonButtonProps = {
  type: "common",
  text: "stop",
  color: "#e74c3c",
  textColor: "white",
  position: {
    left: 1,
    top: 6,
  },
  size: {
    width: 4,
    height: 1,
  },
};

const led: StatusProps = {
  type: "status",
  text: "led",
  position: {
    left: 2,
    top: 7,
  },
  size: {
    width: 2,
    height: 2,
  },
  color: "#e65100",
};

// const toggle1: ToggleProps = {
//   type: "toggle",
//   text: "toggle1",
//   position: {
//     left: 0,
//     top: 0,
//   },
//   size: {
//     width: 2,
//     height: 1,
//   },
//   color: "#e67e22",
// };

const widgets = [pad1, StartButton, StopButton, led];

export const InitialWidgets = [pad1, StartButton, StopButton, led];

export const initialState: WidgetsStateProps = {
  widgets,
  gridSize: {
    width: 0,
    height: 0,
  },
};
