"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [room, setRoom] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleJoinRoom = () => {
    router.push(`/room?roomId=${room}&username=${username}`);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <input
        className="p-4 bg-inherit border w-96"
        type="text"
        placeholder="Enter room id"
        onChange={(e) => {
          setRoom(e.target.value);
        }}
      />
      <input
        className="p-4 bg-inherit border w-96"
        type="text"
        placeholder="Enter username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <button onClick={handleJoinRoom} className="border p-4 w-1/2">
        Join room
      </button>
    </div>
  );
}
