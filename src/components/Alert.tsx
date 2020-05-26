import React, { FC } from "react";
import { Alert } from "antd";
type Iprops = {
  errroMessage: string;
};
const AlertBox: FC<Iprops> = ({ errroMessage }) => {
  return (
    <Alert
      message="Error Occured"
      description={errroMessage}
      type="error"
      style={{ margin: "30px" }}
    />
  );
};
export default AlertBox;
