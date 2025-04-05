document.addEventListener("DOMContentLoaded", () => {
  const svgObject = document.getElementById("svgObject");

  svgObject.addEventListener("load", () => {
    const svgDoc = svgObject.contentDocument;

    if (svgDoc) {
      const minneapolis = svgDoc.getElementById("minneapolis");

      if (minneapolis) {
        // Set up hover behavior
        minneapolis.addEventListener("mouseenter", () => {
          minneapolis.style.fill = "blue";
        });

        minneapolis.addEventListener("mouseleave", () => {
          minneapolis.style.fill = ""; // Resets to original color
        });
      } else {
        console.warn("Minneapolis element not found in SVG.");
      }
    }
  });
});
