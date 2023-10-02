"use client";

export default function BackTopButton() {
  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return <button onClick={handleClick}>Top</button>;
}
