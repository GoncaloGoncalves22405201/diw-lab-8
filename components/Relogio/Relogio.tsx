"use client";
import { useEffect, useState } from "react";

export default function Relogio() {
  const [time, setTime] = useState("");

  useEffect(() => {
    function update() {
      const d = new Date();
      const h = String(d.getHours()).padStart(2, "0");
      const m = String(d.getMinutes()).padStart(2, "0");
      const s = String(d.getSeconds()).padStart(2, "0");
      setTime(`${h}:${m}:${s}`);
    }
    update();
    const i = setInterval(update, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="text-4xl font-bold">
      {time}
    </div>
  );
}
