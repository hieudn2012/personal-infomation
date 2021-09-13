import React from "react";
import { EXPERIENCES } from "../../configs/data";
import { TimeLineCustom } from "../Education";

export default function WorkExperience() {
  return (
    <TimeLineCustom
      data={EXPERIENCES}
      title="Work Experience"
      icon="CardTravelOutlined"
    />
  );
}
