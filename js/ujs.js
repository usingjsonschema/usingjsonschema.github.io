// Entry point
$(function () {
    $('button').button ();
});

// Show about window
function showAboutWindow () {
    $("#about").dialog ( { width:600, height:400,
        position: { my:"center top", at:"center bottom+20", of:$("#sectionHeader") },
        open: function () { $(this).scrollTop (0); }
        });
}

// Close window
function closeWindow (id) {
    $(id).dialog ('close');
}
