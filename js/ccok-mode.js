const btn = document.getElementById("cookModeBtn");

btn.addEventListener("click", async () => {
  document.body.classList.toggle("cook-mode");

  // Try to keep screen awake (if supported)
  if ("wakeLock" in navigator) {
    try {
      if (document.body.classList.contains("cook-mode")) {
        window.wakeLock = await navigator.wakeLock.request("screen");
      } else {
        if (window.wakeLock) await window.wakeLock.release();
      }
    } catch (err) {
      console.log("Wake lock not available:", err);
    }
  }
});