window.addEvent("domready", init);

function init()
{
  console.log("init");
  window.addEventListener("message", function(event) {
    if(event.origin !== "http://localhost")
    {
      console.log("Message from unexpected origin", event.origin);
    }
    else
    {
      $("message").set("value", JSON.parse(event.data).message);
    }
  }, false);

  $("safe-button").addEvent("click", function(event) {
    console.log("sending");
    var data = {
      message: $("message").value
    };
    $("unsafe").contentWindow.postMessage(JSON.stringify(data), "http://localhost");
  });
}