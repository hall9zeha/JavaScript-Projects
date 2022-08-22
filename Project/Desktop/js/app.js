fetch ('http://localhost:4000/patients')
    .then(response => response.json())
    .then(data => showMeetings(data));

console.log('Hola ')
function showMeetings(meetings){
    const contentMeetings = document.querySelector('#meetings');

    let meetingsHtml = '';

    meetings.forEach(meeting =>{
        meetingsHtml +=`
        <div class="p-5 list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between mb-4">

            <h3 class="mb-3">${meeting.name}</h3>
            <small class="fecha-alta">
            ${meeting.date} - ${meeting.time}
            </small>

        </div>
        <p class="mb-0">
            ${meeting.signals}
        </p>
        <div class="contacto py-3">
            <p>Dueño: ${meeting.owner}</p>
            <p>Teléfono: ${meeting.phone}</p>
        </div>
       
    </div>
        `;
    });

    contentMeetings.innerHTML=meetingsHtml;
}