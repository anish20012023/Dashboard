import React from "react";
import {  Card, CardHeader, Skeleton } from "@mui/material";
function SkeletonComp() {
  return (
    <Card sx={{my:10, mx:2}} elevation={0} >
      <CardHeader
        sx={{ paddingBottom: "4px", marginBottom: "-8px" }}
        avatar={<Skeleton animation={"wave"} variant="circular" width={50} height={50} />}
        title={<Skeleton animation={"wave"} />}
        subheader={<Skeleton width="30%" />}
      />
      <Skeleton height="80vh" animation={"wave"} sx={{ marginTop: "-80px", marginBottom: "-40px" }} />
    </Card>
  );
}

export default SkeletonComp;
