window.addEventListener("load", function() {
  var feed = new Feed()
  var feedView = new FeedView(feed)
  var controller = new NoteController(feed, feedView);

  var html = feedView.render()
  controller.render(html)
});
