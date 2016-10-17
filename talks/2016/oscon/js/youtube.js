$(function() {
  $(".ytapiplayer").each(function(index, ytplayer) {
    ytplayer = $(ytplayer);
    var url = ytplayer.data('youtube-url');
    var id = ytplayer.attr('id');
    swfobject.embedSWF(url, id, "853", "505", "8", null, null);
  });
});
