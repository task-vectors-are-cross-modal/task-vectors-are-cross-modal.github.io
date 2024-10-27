function playVideo(id) {
  const video = document.getElementById(id);
  video.play();
}

function changeVideo(id) {
  const selectParent = document.getElementById('select-' + id);
  if (selectParent === null) {
      return ;
  }
  let path0 = selectParent.getElementsByTagName('select')[0].selectedOptions[0];
  let path1 = selectParent.getElementsByTagName('select')[1].selectedOptions[0];
  path0 = path0.textContent.trim().toLowerCase();
  path0 = path0.split(/[\s-]+/)[0] || '';
  path1 = path1.textContent.trim().toLowerCase();

  const video = document.getElementById(id);
  const videoSrc = video.querySelector('source').src;
  const videoPath = videoSrc.split("/");
  const videoBase = videoPath[videoPath.length-1].replace(".m4v", "").split("_");
  let newVideoPath = videoPath.slice(0, -1).join("/") + "/";

  newVideoPath += path0 + "_" + path1 + ".m4v";
  video.src = newVideoPath;
  video.load();
}

function showTaskRow(id) {
  var selectParent = document.getElementById('select-' + id);
  if (selectParent === null) {
    return ;
  }
  let task = selectParent.getElementsByTagName('select')[0].selectedOptions[0];
  task = task.textContent.trim().toLowerCase();
  var rows = document.getElementsByTagName('tr');
  for (var i = 0; i < rows.length; i++) {
    if (rows[i].id !== "header") {
      rows[i].style.display = "none";
    }
  }
  document.getElementById(task).style.display = "table-row";
}