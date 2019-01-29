$(document).ready(function() {
  $searchBtn = $("#search-btn");
  $search = $("#search");
  $tip = $("#tip");
  $loadingBackground = $("#loading-background");
  $form = $("#search-form");
  var placeHolders = [
    "RESTful APIs",
    "Fun projects",
    "Todo apps",
    "React tutorials"
  ];

  function handleSearchBtnClick() {
    $search.css({
      width: "70%",
      "padding-left": "60px",
      cursor: "text"
    });
    $loadingBackground.remove();
    typeWriter(
      $search,
      placeHolders[Math.floor(Math.random() * placeHolders.length)]
    );
    $search.focus();

    $search.unbind("click");
    $searchBtn.unbind("click");
  }

  function typeWriter(obj, message) {
    for (var i = 0; i <= message.length; i++) {
      msg = typeWriterTimeout(obj, message, i);
    }
  }

  function typeWriterTimeout(obj, message, i) {
    var speed = 100;
    setTimeout(() => {
      obj.attr("placeholder", message.slice(0, i));
    }, i * speed);
  }

  function handleSearchPress(e) {
    e.preventDefault();
    var content = $search.val().replace(" ", "+");
    $search.blur();
    $tip.remove();
    window.location.href =
      "https://www.reddit.com/r/programming/search?q=" + content;
  }

  $searchBtn.click(handleSearchBtnClick);
  $search.click(handleSearchBtnClick);
  $search.on("keydown", function() {
    $tip.css("opacity", "100");
    $tip.css("visibility", "visible");
    $search.off();
  });
  $form.submit(handleSearchPress);
});
