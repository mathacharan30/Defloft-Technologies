import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "GymOS — India's Best Gym Management Software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow blob */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            left: "-120px",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,255,136,0.18) 0%, transparent 65%)",
          }}
        />
        {/* Right glow */}
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            right: "-80px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 65%)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "28px",
            background: "rgba(0,255,136,0.08)",
            border: "1px solid rgba(0,255,136,0.25)",
            borderRadius: "100px",
            padding: "8px 20px",
          }}
        >
          <span
            style={{
              color: "#00ff88",
              fontSize: "15px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            GymOS by Devloft Technologies
          </span>
        </div>

        {/* Heading */}
        <div
          style={{
            fontSize: "62px",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: "22px",
            maxWidth: "820px",
          }}
        >
          India&apos;s Best{" "}
          <span style={{ color: "#00ff88" }}>Gym Management</span> Software
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "22px",
            color: "rgba(255,255,255,0.55)",
            marginBottom: "52px",
            maxWidth: "680px",
            lineHeight: 1.5,
          }}
        >
          Members · Billing · QR Attendance · WhatsApp Reminders · Analytics
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: "56px" }}>
          {[
            { value: "120+", label: "Gyms Across India" },
            { value: "₹799", label: "Per Month" },
            { value: "Free", label: "Demo Available" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <span
                style={{ color: "#00ff88", fontSize: "34px", fontWeight: 700 }}
              >
                {stat.value}
              </span>
              <span
                style={{ color: "rgba(255,255,255,0.45)", fontSize: "15px" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Domain bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: "52px",
            right: "80px",
            color: "rgba(255,255,255,0.25)",
            fontSize: "17px",
            letterSpacing: "0.05em",
          }}
        >
          gym.devlofttech.com
        </div>
      </div>
    ),
    { ...size }
  );
}
