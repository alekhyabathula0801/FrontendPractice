$(document).ready(function () {
  $(".flame__change__color__on__hover").hover(
    function () {
      $(this).css("background-color", "red");
      $(this).css("color", "white");
    },
    function () {
      $(this).css("background-color", "white");
      $(this).css("color", "black");
    }
  );

  $(".flame--services > div > div:nth-child(1) div").hover(
    function () {
      $(".flame--services > div > div:nth-child(1) div span").css(
        "background-color",
        "white"
      );
    },
    function () {
      $(".flame--services > div > div:nth-child(1) div span").css(
        "background-color",
        "black"
      );
    }
  );

  $(".flame--projects > main > div:nth-child(1) button ").hover(
    function () {
      $(this).css("border", "1px solid red");
    },
    function () {
      $(this).css("border", "1px solid black");
    }
  );
});
