function saveNote() {
  const noteInput = document.getElementById("noteInput");
  const noteList = document.getElementById("noteList");

  const noteText = noteInput.value.trim();
  if (noteText === "") {
    alert("Please write a note before saving.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = noteText;
  noteList.appendChild(li);

  noteInput.value = "";
}