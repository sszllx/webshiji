

/*
  $(function() {
  document.onmouseup = function(e) {
  content = window.getSelection().toString();

        if (content != '') {
        var len = content.length;
        var target = e.target;
        var position = target.innerHTML.indexOf(content);
        var position2 = position + len;
        var tempstr1 = target.innerHTML.substring(0, position);
        var tempstr2 = target.innerHTML.substring(position2);
        content = "<span style='color:red;'>" + content + "</span>";
        target.innerHTML = tempstr1 + content + tempstr2;
        }
        }
});
*/
