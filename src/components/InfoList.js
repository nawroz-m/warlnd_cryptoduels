import { useEffect, useState } from "react";

export default function InfoList(props) {
  const infoData = props.data;

  return (
    <>
      {infoData &&
        infoData.map((data, idx) => {
          return (
            <div
              className="infoItems"
              style={{
                display: "flex",

                alignItems: "center",
                paddingTop: "1rem",
              }}
            >
              <img
                src={`../images/${data.img}`}
                alt={`${data.name}`}
                style={{ paddingRight: "3rem", width: "70px", height: "70px" }}
              />
              <p>{data.paragraph}</p>
            </div>
          );
        })}
    </>
  );
}
