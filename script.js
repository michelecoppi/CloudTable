$(document).ready(function () {
    $('#tabella').DataTable({
        processing: true,
        serverSide: true,
        ajax: 'index.php',
    });
});
