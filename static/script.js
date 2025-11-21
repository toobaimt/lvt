
var VIDEO_ASPECT_RATIO = 4.0 / 3.;

var textStrings_bicycle_comp = [
    "<em>&larr;3DGS  &nbsp;&nbsp;&nbsp;&nbsp; LVT<sub>SH-rgba</sub> &rarr; </em>",
    "<em>&larr; LVT<sub>SH-rgba</sub> (depth)  &nbsp;&nbsp;&nbsp;&nbsp; LVT<sub>SH-rgba</sub> (zero-shot) &rarr;</em>",
];

var textStrings_train_comp = [
    "<em>&larr; LVT<sub>base</sub> &nbsp;&nbsp;&nbsp;&nbsp; LVT<sub>SH-rgba</sub> &rarr;</em>",
    "<em>&larr; 3DGS  &nbsp;&nbsp;&nbsp;&nbsp; LVT<sub>SH-rgba</sub> (zero-shot) &rarr; </em>",
    "<em>&larr; LVT<sub>base</sub> (depth)  &nbsp;&nbsp;&nbsp;&nbsp; LVT<sub>SH-rgba</sub> &rarr;</em>",
    "<em>&larr; LVT<sub>SH-rgba</sub> (depth)  &nbsp;&nbsp;&nbsp;&nbsp; LVT<sub>SH-rgba</sub> &rarr;</em>",
];

var textStrings_comp = [
    "<em>&larr; LVT<sub>base</sub> &nbsp;&nbsp;&nbsp;&nbsp; LVT<sub>SH-rgba</sub> &rarr;</em>",
    "<em>&larr; Long-LRM &nbsp;&nbsp;&nbsp;&nbsp; LVT<sub>SH-rgba</sub> &rarr;</em>",
    "<em>&larr; 3DGS  &nbsp;&nbsp;&nbsp;&nbsp; LVT<sub>SH-rgba</sub> &rarr; </em>",
    "<em>&larr; LVT<sub>base</sub> (depth)  &nbsp;&nbsp;&nbsp;&nbsp; LVT<sub>SH-rgba</sub> &rarr;</em>",
    "<em>&larr; LVT<sub>SH-rgba</sub> (depth)  &nbsp;&nbsp;&nbsp;&nbsp; LVT<sub>SH-rgba</sub> &rarr;</em>",
];

$("#train-video").on('loadedmetadata', function() {
    this.width = this.videoWidth;
    this.height = this.videoHeight;
    console.log(this.width, this.height);
  });

$(function() {
    current_train_idx = 0;
    current_glassbuilding_idx = 0;
    current_building_idx = 0;
    current_temple_idx = 0;
    current_bicycle_idx = 0;

    // Comp
    current_bicycle_comp_idx = 0;
    current_train_comp_idx = 0;
    current_glassbuilding_comp_idx = 0;
    current_building_comp_idx = 0;
    current_temple_comp_idx = 0;

    // trainVideo = document.getElementById('train-video');
    // glassbuildingVideo = document.getElementById('glassbuilding-video');
    // buildingVideo = document.getElementById('building-video');
    // templeVideo = document.getElementById('temple-video');
    // bicycleVideo = document.getElementById('bicycle-video');

    // Comp
    bicycleCompVideo = document.getElementById('bicycle-comp-video');
    trainCompVideo = document.getElementById('train-comp-video');
    glassbuildingCompVideo = document.getElementById('glassbuilding-comp-video');
    buildingCompVideo = document.getElementById('building-comp-video');
    templeCompVideo = document.getElementById('temple-comp-video');

    // trainText = document.getElementById('train-text');
    // glassbuildingText = document.getElementById('glassbuilding-text');
    // buildingText = document.getElementById('building-text');
    // templeText = document.getElementById('temple-text');
    // bicycleText = document.getElementById('bicycle-text');

    // Comp
    bicycleCompText = document.getElementById('bicycle-comp-text');
    trainCompText = document.getElementById('train-comp-text');
    glassbuildingCompText = document.getElementById('glassbuilding-comp-text');
    buildingCompText = document.getElementById('building-comp-text');
    templeCompText = document.getElementById('temple-comp-text');

    // trainThumbnails = [
    //     document.getElementById('lvtSH-train'),
    //     document.getElementById('lvt-base-train'),
    //     document.getElementById('3dgs-train'),
    //     document.getElementById('lvt-base-train_depth'),
    //     document.getElementById('lvtSH-train_depth'),
    //   ];
    //   for (var i = 0; i < trainThumbnails.length; i++) {
    //     trainThumbnails[i].addEventListener('click', change_train_index.bind(this, i));
    //   }
    //   change_train_index(current_train_idx);

    // buildingThumbnails = [
    //     document.getElementById('lvtSH-building'),
    //     document.getElementById('lvt-base-building'),
    //     document.getElementById('llrm-building'),
    //     document.getElementById('3dgs-building'),
    //     document.getElementById('lvt-base-building_depth'),
    //     document.getElementById('lvtSH-building_depth'),
    //   ];
    //   for (var i = 0; i < buildingThumbnails.length; i++) {
    //     buildingThumbnails[i].addEventListener('click', change_building_index.bind(this, i));
    //   }
    //   change_building_index(current_glassbuilding_idx);

    // glassbuildingThumbnails = [
    //     document.getElementById('lvtSH-glassbuilding'),
    //     document.getElementById('lvt-base-glassbuilding'),
    //     document.getElementById('llrm-glassbuilding'),
    //     document.getElementById('3dgs-glassbuilding'),
    //     document.getElementById('lvt-base-glassbuilding_depth'),
    //     document.getElementById('lvtSH-glassbuilding_depth'),
    //   ];
    //   for (var i = 0; i < glassbuildingThumbnails.length; i++) {
    //     glassbuildingThumbnails[i].addEventListener('click', change_glassbuilding_index.bind(this, i));
    //   }
    //   change_glassbuilding_index(current_glassbuilding_idx);


    // templeThumbnails = [
    //     document.getElementById('lvtSH-temple'),
    //     document.getElementById('lvt-base-temple'),
    //     document.getElementById('llrm-temple'),
    //     document.getElementById('3dgs-temple'),
    //     document.getElementById('lvt-base-temple_depth'),
    //     document.getElementById('lvtSH-temple_depth'),
    //   ];
    //   for (var i = 0; i < templeThumbnails.length; i++) {
    //     templeThumbnails[i].addEventListener('click', change_temple_index.bind(this, i));
    //   }
    //   change_temple_index(current_temple_idx);

    // bicycleThumbnails = [
    //     document.getElementById('lvtSH-bicycle'),
    //     document.getElementById('3dgs-bicycle'),
    //     document.getElementById('lvtSH-bicycle_depth'),
    //   ];
    //   for (var i = 0; i < bicycleThumbnails.length; i++) {
    //     bicycleThumbnails[i].addEventListener('click', change_bicycle_index.bind(this, i));
    //   }
    //   change_bicycle_index(current_bicycle_idx);

    // Comp
    bicycleCompThumbnails = [
        document.getElementById('3dgs-bicycle-comp'),
        document.getElementById('lvtSH-bicycle_depth-comp'),
      ];
      for (var i = 0; i < bicycleCompThumbnails.length; i++) {
        bicycleCompThumbnails[i].addEventListener('click', change_bicycle_comp_index.bind(this, i));
      }
      change_bicycle_comp_index(current_bicycle_comp_idx);
    
    trainCompThumbnails = [
        document.getElementById('lvt-base-train-comp'),
        document.getElementById('3dgs-train-comp'),
        document.getElementById('lvt-base-train_depth-comp'),
        document.getElementById('lvtSH-train_depth-comp'),
      ];
      for (var i = 0; i < trainCompThumbnails.length; i++) {
        trainCompThumbnails[i].addEventListener('click', change_train_comp_index.bind(this, i));
      }
      change_train_comp_index(current_train_comp_idx);

    glassbuildingCompThumbnails = [
        document.getElementById('lvt-base-glassbuilding-comp'),
        document.getElementById('llrm-glassbuilding-comp'),
        document.getElementById('3dgs-glassbuilding-comp'),
        document.getElementById('lvt-base-glassbuilding_depth-comp'),
        document.getElementById('lvtSH-glassbuilding_depth-comp'),
      ];
      for (var i = 0; i < glassbuildingCompThumbnails.length; i++) {
        glassbuildingCompThumbnails[i].addEventListener('click', change_glassbuilding_comp_index.bind(this, i));
      }
      change_glassbuilding_comp_index(current_glassbuilding_comp_idx);

    buildingCompThumbnails = [
        document.getElementById('lvt-base-building-comp'),
        document.getElementById('llrm-building-comp'),
        document.getElementById('3dgs-building-comp'),
        document.getElementById('lvt-base-building_depth-comp'),
        document.getElementById('lvtSH-building_depth-comp'),
      ];
      for (var i = 0; i < buildingCompThumbnails.length; i++) {
        buildingCompThumbnails[i].addEventListener('click', change_building_comp_index.bind(this, i));
      }
      change_building_comp_index(current_building_comp_idx);

    templeCompThumbnails = [
        document.getElementById('lvt-base-temple-comp'),
        document.getElementById('llrm-temple-comp'),
        document.getElementById('3dgs-temple-comp'),
        document.getElementById('lvt-base-temple_depth-comp'),
        document.getElementById('lvtSH-temple_depth-comp'),
      ];
      for (var i = 0; i < templeCompThumbnails.length; i++) {
        templeCompThumbnails[i].addEventListener('click', change_temple_comp_index.bind(this, i));
      }
      change_temple_comp_index(current_temple_comp_idx);
  });
  
// function change_train_index (idx) {
//     trainThumbnails[idx].classList.add("active-btn");
//     if (current_train_idx != idx) {
//         trainThumbnails[current_train_idx].classList.remove("active-btn");
//     }
//     current_train_idx = idx;
//     trainText.innerHTML = textStrings_train[idx];
//     trainVideo.src = "./lvt-files/results/video-results/" + trainThumbnails[idx].id + ".mp4";
//     trainVideo.load();
// }

// function change_glassbuilding_index (idx) {
//     glassbuildingThumbnails[idx].classList.add("active-btn");
//     if (current_glassbuilding_idx != idx) {
//         glassbuildingThumbnails[current_glassbuilding_idx].classList.remove("active-btn");
//     }
//     current_glassbuilding_idx = idx;
//     glassbuildingText.innerHTML = textStrings[idx];
//     glassbuildingVideo.src = "./lvt-files/results/video-results/" + glassbuildingThumbnails[idx].id + ".mp4";
//     glassbuildingVideo.load();
// }

// function change_building_index (idx) {
//     buildingThumbnails[idx].classList.add("active-btn");
//     if (current_building_idx != idx) {
//         buildingThumbnails[current_building_idx].classList.remove("active-btn");
//     }
//     current_building_idx = idx;
//     buildingText.innerHTML = textStrings[idx];
//     buildingVideo.src = "./lvt-files/results/video-results/" + buildingThumbnails[idx].id + ".mp4";
//     buildingVideo.load();
// }

// function change_temple_index (idx) {
//     templeThumbnails[idx].classList.add("active-btn");
//     if (current_temple_idx != idx) {
//         templeThumbnails[current_temple_idx].classList.remove("active-btn");
//     }
//     current_temple_idx = idx;
//     templeText.innerHTML = textStrings[idx];
//     templeVideo.src = "./lvt-files/results/video-results/" + templeThumbnails[idx].id + ".mp4";
//     templeVideo.load();
// }

// function change_bicycle_index (idx) {
//     bicycleThumbnails[idx].classList.add("active-btn");
//     if (current_bicycle_idx != idx) {
//         bicycleThumbnails[current_bicycle_idx].classList.remove("active-btn");
//     }
//     current_bicycle_idx = idx;
//     bicycleText.innerHTML = textStrings_bicycle[idx];
//     bicycleVideo.src = "./lvt-files/results/video-results/" + bicycleThumbnails[idx].id + ".mp4";
//     bicycleVideo.load();
// }

// Comp
function change_bicycle_comp_index (idx) {
    bicycleCompThumbnails[idx].classList.add("active-btn");
    if (current_bicycle_comp_idx != idx) {
        bicycleCompThumbnails[current_bicycle_comp_idx].classList.remove("active-btn");
    }
    current_bicycle_comp_idx = idx;
    bicycleCompText.innerHTML = textStrings_bicycle_comp[idx];
    bicycleCompVideo.src = "./lvt-files/results/video-results/" + bicycleCompThumbnails[idx].id + ".mp4";
    bicycleCompVideo.load();
}

function change_train_comp_index (idx) {
    trainCompThumbnails[idx].classList.add("active-btn");
    if (current_train_comp_idx != idx) {
        trainCompThumbnails[current_train_comp_idx].classList.remove("active-btn");
    }
    current_train_comp_idx = idx;
    trainCompText.innerHTML = textStrings_train_comp[idx];
    trainCompVideo.src = "./lvt-files/results/video-results/" + trainCompThumbnails[idx].id + ".mp4";
    trainCompVideo.load();
}

function change_glassbuilding_comp_index (idx) {
    glassbuildingCompThumbnails[idx].classList.add("active-btn");
    if (current_glassbuilding_comp_idx != idx) {
        glassbuildingCompThumbnails[current_glassbuilding_comp_idx].classList.remove("active-btn");
    }
    current_glassbuilding_comp_idx = idx;
    glassbuildingCompText.innerHTML = textStrings_comp[idx];
    glassbuildingCompVideo.src = "./lvt-files/results/video-results/" + glassbuildingCompThumbnails[idx].id + ".mp4";
    glassbuildingCompVideo.load();
}

function change_building_comp_index (idx) {
    buildingCompThumbnails[idx].classList.add("active-btn");
    if (current_building_comp_idx != idx) {
        buildingCompThumbnails[current_building_comp_idx].classList.remove("active-btn");
    }
    current_building_comp_idx = idx;
    buildingCompText.innerHTML = textStrings_comp[idx];
    buildingCompVideo.src = "./lvt-files/results/video-results/" + buildingCompThumbnails[idx].id + ".mp4";
    buildingCompVideo.load();
}

function change_temple_comp_index (idx) {
    templeCompThumbnails[idx].classList.add("active-btn");
    if (current_temple_comp_idx != idx) {
        templeCompThumbnails[current_temple_comp_idx].classList.remove("active-btn");
    }
    current_temple_comp_idx = idx;
    templeCompText.innerHTML = textStrings_comp[idx];
    templeCompVideo.src = "./lvt-files/results/video-results/" + templeCompThumbnails[idx].id + ".mp4";
    templeCompVideo.load();
}

window.HELP_IMPROVE_VIDEOJS = false;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

$(document).ready(function () {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");

  });

  var options = {
    slidesToScroll: 1,
    slidesToShow: 3,
    loop: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
  }

  // Initialize all div with carousel class
  var carousels = bulmaCarousel.attach('.carousel', options);

  // Loop on each carousel initialized
  for (var i = 0; i < carousels.length; i++) {
    // Add listener to  event
    carousels[i].on('before:show', state => {
      console.log(state);
    });
  }

  // Access to bulmaCarousel instance of an element
  var element = document.querySelector('#my-element');
  if (element && element.bulmaCarousel) {
    // bulmaCarousel instance is available as element.bulmaCarousel
    element.bulmaCarousel.on('before-show', function (state) {
      console.log(state);
    });
  }

  bulmaSlider.attach();


  $('.zoom-container').each(function() {
    const containerElement = $(this);
    zoomWidget = new ZoomWidget(containerElement);
  });

  $('.video-comparison').each(function () {
      const containerElement = $(this);
      comparisonWidget = new VideoComparison(containerElement);
  });

  $('.tabs-widget').each(function() {
    const containerElement = $(this);
    tabsWidget = new TabsWidget(containerElement);
  });

  //playPauseVideo();
});


class ZoomWidget {
  constructor(container) {
    this.container = container;
    this.canvas = container.find('canvas');
    this.context = this.canvas[0].getContext("2d");
    this.image = new Image();
    this.image.src = this.container.data('gt-img-src');
    this.zoomFactor = container.data('zoom-factor');
    this.defaultU = this.container.data('default-u');
    this.defaultV = this.container.data('default-v');
    let self = this;

    this.image.onload = function(){
      self.handleZoom(null, null, self.defaultU, self.defaultV);
    }

    this.canvas.mousemove(function(e) {
      let rect = self.canvas[0].getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      self.handleZoom(x, y);
    });
    this.canvas.on('resize', function(e) {
      self.handleZoom(null, null, self.defaultU, self.defaultV);
    })
    this.canvas.mouseleave(function(e) {
      self.handleZoom(null, null, self.defaultU, self.defaultV);
    });
  }

  handleZoom(x = null, y = null, u = null, v = null) {
    const containerElement = this.container;
    const zoomLensElements = containerElement.find('.zoom-lens');
    this.context.clearRect(0, 0, this.canvas[0].width, this.canvas[0].height);

    const imageWidth = this.canvas.parent().width();
    const imageHeight = imageWidth / this.image.width * this.image.height;
    this.canvas[0].width = imageWidth;
    this.canvas[0].height = imageHeight;
    this.context.drawImage(this.image, 0, 0, imageWidth, imageHeight);
  
    if (u && v) {
      x = u * this.canvas.width();
      y = v * this.canvas.height();
    } else {
      u = x / this.canvas.width()
      v = y / this.canvas.height()
    }
    console.log('u v', u, v)
    let naturalHeight = this.image.naturalHeight;
    let naturalWidth = this.image.naturalWidth;
    let zoomFullWidth = naturalWidth * this.zoomFactor;
    let zoomFullHeight = naturalHeight * this.zoomFactor;
  
    zoomLensElements.each(function () {
      let el = $(this);
      let zoomWindowWidth = el.width();
      let zoomWindowHeight = el.height();
      let maxZoomX = zoomFullWidth - zoomWindowWidth - 1;
      let maxZoomY = zoomFullHeight - zoomWindowHeight - 1;
      let zoomX = clamp(zoomFullWidth * u - zoomWindowWidth / 2, 0, maxZoomX);
      let zoomY = clamp(zoomFullHeight * v - zoomWindowHeight / 2, 0, maxZoomY);
  
      el.css('background-size',
        zoomFullWidth + 'px ' + zoomFullHeight + 'px');
      el.css('background-position',
        (-zoomX) + 'px ' + (-zoomY) + 'px');
    })
  
    let zoomWindowWidth = $(zoomLensElements[0]).width();
    let zoomWindowHeight = $(zoomLensElements[0]).height();
    let zoomCursorWidth = zoomWindowWidth / zoomFullWidth * this.canvas.width();
    let zoomCursorHeight = zoomWindowHeight / zoomFullHeight * this.canvas.height();
    this.context.strokeStyle = '#DB4437';
    this.context.lineWidth = 2;
    this.context.strokeRect(
      x - zoomCursorWidth / 2, y - zoomCursorHeight / 2, zoomCursorWidth, zoomCursorHeight);
  }
}


class TabsWidget {
  constructor(container) {
    this.container = container;
    this.activeIndex = 0;
    this.listItems = container.children('.tabs').children('ul').children('li');
    let self = this;
    this.listItems.click(function (e) {
      let index = $(this).index();
      self.update($(this), index);
    })

    this.update(this.listItems[this.activeIndex], this.activeIndex);
  }

  update(element, targetIndex) {
    this.activeIndex = targetIndex;
    const tabs = this.container.children('.tabs');
    const tabsContent = this.container.children('.tabs-content');
    this.listItems.each(function () {
      if ($(this).index() == targetIndex) {
        $(this).addClass('is-active');
      } else {
        $(this).removeClass('is-active');
      }
    });
    tabsContent.children().each(function () {
      if ($(this).index() == targetIndex) {
        $(this).show();
        $(this).find('*').each(function () {
          if ($(this).is(':visible')) {
            $(this).trigger('tab:show');
          }
        })
      } else {
        $(this).hide();
        $(this).find('*').trigger('tab:hide');
      }
    });
  }
}

function clamp(number, min, max) {
  return Math.min(Math.max(number, min), max);
}


// From: https://benfrain.com/automatically-play-and-pause-video-as-it-enters-and-leaves-the-viewport-screen/
function playPauseVideo() {
  let videos = document.querySelectorAll("video");
  videos.forEach((video) => {
      // We can only control playback without insteraction if video is mute
      video.muted = true;
      // Play is a promise so we need to check we have it
      let playPromise = video.play();
      if (playPromise !== undefined) {
          playPromise.then((_) => {
              let observer = new IntersectionObserver(
                  (entries) => {
                      entries.forEach((entry) => {
                          if (
                              entry.intersectionRatio !== 1 &&
                              !video.paused
                          ) {
                              video.pause();
                          } else if (video.paused) {
                              video.play();
                          }
                      });
                  },
                  { threshold: 0.5 }
              );
              observer.observe(video);
          });
      }
  });
}