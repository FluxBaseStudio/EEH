import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#041426",
          color: "white",
          padding: "80px",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 80,
            top: 80,
            fontSize: 160,
            fontWeight: 900,
            opacity: 0.08,
          }}
        >
          EEH
        </div>

        <div
          style={{
            fontSize: 24,
            color: "#9bd4ff",
            letterSpacing: 6,
            marginBottom: 24,
          }}
        >
          EUROPEAN ENTRY HUB
        </div>

        <div
          style={{
            fontSize: 78,
            lineHeight: 1,
            fontWeight: 900,
            maxWidth: 900,
          }}
        >
          Warehouse In Europe.
          <br />
          Delivery Across Europe.
        </div>

        <div
          style={{
            marginTop: 30,
            fontSize: 28,
            color: "#d8e7f5",
            maxWidth: 850,
          }}
        >
          Warehousing, fulfillment and operational logistics for manufacturers selling across the European Union.
        </div>
      </div>
    ),
    size
  );
}