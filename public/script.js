var socket = io();
socket.on("messages", () => {
  console.log("new event received");
  const div = document.createElement("div");
  div.innerText = "this is new event from server side";
  document.body.appendChild(div);
});
