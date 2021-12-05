function setDate() {
    $('#dateContainer').html(new Date());
}

function formatDate() {
    $('#dateContainer').html(moment(new Date).format('MMMM D YYYY hh:mm:ss A'));
}
