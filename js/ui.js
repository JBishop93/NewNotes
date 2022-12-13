const notes = document.querySelector(".note");



const renderTask = (data, id) => {
    const html =`
    <div class="card blue-grey darken-1">
      <div class="card-content white-text">
        <span class="note-title">${data.title}</span>
        <p class="note">${data.note}</p>
      </div>
      <div class="card-action">
        <i class="material-icons" data-id="${id}>delete_outline</i>
      </div>
    </div>`;

    notes.innerHTML + html;
};