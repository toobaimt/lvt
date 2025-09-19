
var VIDEO_ASPECT_RATIO = 4.0 / 3.;

var textStrings = [
    "<em>LVT<sub>SH-rgba</sub></em>",
    "<em>LVT<sub>base</sub></em>",
    "<em>Long-LRM</em>",
    "<em>3DGS</em>",
    "<em>LVT<sub>SH-rgba</sub> (depth)</em>",
    "<em>LVT<sub>base</sub> (depth)</em>",
];

var textStrings_train = [
    "<em>LVT<sub>SH-rgba</sub></em>",
    "<em>LVT<sub>base</sub></em>",
    "<em>3DGS</em>",
    "<em>LVT<sub>SH-rgba</sub> (depth)</em>",
    "<em>LVT<sub>base</sub> (depth)</em>",
];

$("#train-video").on('loadedmetadata', function() {
    this.width = this.videoWidth;
    this.height = this.videoHeight;
    console.log(this.width, this.height);
  });

$(function() {
    current_train_idx = 0;
    current_greenhouse_idx = 0;
    current_building_idx = 0;
    current_temple_idx = 0;

    trainVideo = document.getElementById('train-video');
    greenhouseVideo = document.getElementById('greenhouse-video');
    buildingVideo = document.getElementById('building-video');
    templeVideo = document.getElementById('temple-video');

    trainText = document.getElementById('train-text');
    greenhouseText = document.getElementById('greenhouse-text');
    buildingText = document.getElementById('building-text');
    templeText = document.getElementById('temple-text');

    trainThumbnails = [
        document.getElementById('lvtSH-train'),
        document.getElementById('lvt-base-train'),
        document.getElementById('3dgs-train'),
        document.getElementById('lvtSH-train_depth'),
        document.getElementById('lvt-base-train_depth'),
      ];
      for (var i = 0; i < trainThumbnails.length; i++) {
        trainThumbnails[i].addEventListener('click', change_train_index.bind(this, i));
      }
      change_train_index(current_train_idx);

    greenhouseThumbnails = [
        document.getElementById('lvtSH-greenhouse'),
        document.getElementById('lvt-base-greenhouse'),
        document.getElementById('llrm-greenhouse'),
        document.getElementById('3dgs-greenhouse'),
        document.getElementById('lvtSH-greenhouse_depth'),
        document.getElementById('lvt-base-greenhouse_depth'),
      ];
      for (var i = 0; i < greenhouseThumbnails.length; i++) {
        greenhouseThumbnails[i].addEventListener('click', change_greenhouse_index.bind(this, i));
      }
      change_greenhouse_index(current_greenhouse_idx);

    buildingThumbnails = [
        document.getElementById('lvtSH-building'),
        document.getElementById('lvt-base-building'),
        document.getElementById('llrm-building'),
        document.getElementById('3dgs-building'),
        document.getElementById('lvtSH-building_depth'),
        document.getElementById('lvt-base-building_depth'),
      ];
      for (var i = 0; i < buildingThumbnails.length; i++) {
        buildingThumbnails[i].addEventListener('click', change_building_index.bind(this, i));
      }
      change_building_index(current_building_idx);


    templeThumbnails = [
        document.getElementById('lvtSH-temple'),
        document.getElementById('lvt-base-temple'),
        document.getElementById('llrm-temple'),
        document.getElementById('3dgs-temple'),
        document.getElementById('lvtSH-temple_depth'),
        document.getElementById('lvt-base-temple_depth'),
      ];
      for (var i = 0; i < templeThumbnails.length; i++) {
        templeThumbnails[i].addEventListener('click', change_temple_index.bind(this, i));
      }
      change_temple_index(current_temple_idx);

  });
  
function change_train_index (idx) {
    trainThumbnails[idx].classList.add("active-btn");
    if (current_train_idx != idx) {
        trainThumbnails[current_train_idx].classList.remove("active-btn");
    }
    current_train_idx = idx;
    trainText.innerHTML = textStrings_train[idx];
    trainVideo.src = "./lvt-files/results/video-results/" + trainThumbnails[idx].id + ".mp4";
    trainVideo.load();
}

function change_greenhouse_index (idx) {
    greenhouseThumbnails[idx].classList.add("active-btn");
    if (current_greenhouse_idx != idx) {
        greenhouseThumbnails[current_greenhouse_idx].classList.remove("active-btn");
    }
    current_greenhouse_idx = idx;
    greenhouseText.innerHTML = textStrings[idx];
    greenhouseVideo.src = "./lvt-files/results/video-results/" + greenhouseThumbnails[idx].id + ".mp4";
    greenhouseVideo.load();
}

function change_building_index (idx) {
    buildingThumbnails[idx].classList.add("active-btn");
    if (current_building_idx != idx) {
        buildingThumbnails[current_building_idx].classList.remove("active-btn");
    }
    current_building_idx = idx;
    buildingText.innerHTML = textStrings[idx];
    buildingVideo.src = "./lvt-files/results/video-results/" + buildingThumbnails[idx].id + ".mp4";
    buildingVideo.load();
}

function change_temple_index (idx) {
    templeThumbnails[idx].classList.add("active-btn");
    if (current_temple_idx != idx) {
        templeThumbnails[current_temple_idx].classList.remove("active-btn");
    }
    current_temple_idx = idx;
    templeText.innerHTML = textStrings[idx];
    templeVideo.src = "./lvt-files/results/video-results/" + templeThumbnails[idx].id + ".mp4";
    templeVideo.load();
}
