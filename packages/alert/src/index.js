//@flow
type AlertProps = {
  message?: string
};

const React = require("react");

type AlertComponent = AlertProps => React.Element<"div">;
const Alert: AlertComponent = props => {
  return <div />;
};

module.exports = Alert;
