// Change text content
document.getElementById("change-text-btn").addEventListener("click", function () {
    document.getElementById("main-heading").textContent = "You changed the heading!";
  });
  
  // Modify CSS styles
  document.getElementById("change-style-btn").addEventListener("click", function () {
    document.body.style.backgroundColor = "#f0f8ff";
    document.getElementById("description").style.color = "blue";
  });
  
  // Add or remove an element
  const toggleBtn = document.getElementById("toggle-element-btn");
  let added = false;
  
  toggleBtn.addEventListener("click", function () {
    const section = document.querySelector("section");
  
    if (!added) {
      const newElement = document.createElement("p");
      newElement.id = "dynamic-element";
      newElement.textContent = "I am a dynamically added paragraph!";
      section.appendChild(newElement);
      added = true;
    } else {
      const existing = document.getElementById("dynamic-element");
      if (existing) {
        existing.remove();
      }
      added = false;
    }
  });
  