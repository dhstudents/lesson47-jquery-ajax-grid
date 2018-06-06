  var httpRequest;
  document.getElementById("ajaxButton").addEventListener('click', makeRequest);

  function makeRequest() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }

    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', 'data.txt');
    httpRequest.send();
  }

  function alertContents() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        //alert(httpRequest.responseText);
        document.getElementById("ajaxButton").innerHTML = "<span style='color:tomato'>" + httpRequest.responseText + "</span>"; 
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
