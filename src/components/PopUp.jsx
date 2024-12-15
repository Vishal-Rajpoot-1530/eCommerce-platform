 export default function Popup() {
    return (
      <div
        style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            zIndex: 200, 
        }}
      >
        <p>This is the popup content!</p>
      </div>
    );
  }