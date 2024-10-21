function organizeGroups() {
  const namesInput = document.getElementById("namesInput").value;
  const names = namesInput.split(",").map((name) => name.trim());

  const groups = [];
  const groupSize = 3;

  // Shuffle the names array
  for (let i = names.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [names[i], names[j]] = [names[j], names[i]];
  }

  // Organize names into groups
  for (let i = 0; i < names.length; i += groupSize) {
    groups.push(names.slice(i, i + groupSize));
  }

  // Display groups
  const groupsOutput = document.getElementById("groupsOutput");
  groupsOutput.innerHTML = "";
  groups.forEach((group, index) => {
    const groupDiv = document.createElement("div");
    groupDiv.innerHTML = `<strong>Gruppo ${index + 1}:</strong> ${group.join(
      ", "
    )}`;
    groupsOutput.appendChild(groupDiv);
  });
}
