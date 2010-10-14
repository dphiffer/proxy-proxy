window.addEvent("domready", init);

function init()
{
  window.addEventListener("message", function(event) {
    if(event.origin !== "http://localhost")
    {
      console.log("Message from unexpected origin", event.origin);
    }
    else
    {
      $("message").value = JSON.parse(event.data).message;
    }
  }, false);

  $("unsafe-button").addEvent("click", function(evt) {
    var data = {
      message: $("message").value
    };
    top.postMessage(JSON.stringify(data), "http://localhost");
  });
}