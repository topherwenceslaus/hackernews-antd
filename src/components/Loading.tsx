import React from "react";
import { Spin, Alert } from "antd";

const Loading = () => {
  return (
    <Spin tip="Loading...">
      <Alert
        style={{ margin: "30px" }}
        message="Fetahing News..."
        description="Further details about the context of this alert."
        type="info"
      />
    </Spin>
  );
};

export default Loading;
