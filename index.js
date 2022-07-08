var chgd_img_txt,
  current_img,
  images,
  chgd_imgs,
  image_count,
  img_text,
  counter,
  total_imgs,
  j;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value;
  } else {
    return number_value;
  }
}

// Describe this function...
function initiate_images() {
  if (--window.LoopTrap <= 0) throw "Infinite loop.";
  copy_images();
  image_count = 1;
  current_img = chgd_imgs.shift();
  let element_img_count3 = document.getElementById("img_count");
  element_img_count3.innerText = image_count;
  let element_image3 = document.getElementById("image");
  element_image3.setAttribute("src", current_img);
}

// Describe this function...
function copy_images() {
  if (--window.LoopTrap <= 0) throw "Infinite loop.";
  images = [
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tree-in-a-field-at-sunset-royalty-free-image-1618333137.?crop=1.00xw:0.845xh;0,0.0238xh",
    "https://ipt.imgix.net/204611/x/0/ultimate-guide-to-sunrise-photography-1.jpg",
    "https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666_960_720.jpg",
    "https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_960_720.jpg",
    "https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276_960_720.jpg",
  ];
  chgd_imgs = images;
  chgd_img_txt = img_text;
  total_imgs = 5;
}

chgd_img_txt = [];
chgd_imgs = [];
img_text = [];
initiate_images();
let element_img_count = document.getElementById("img_count");
element_img_count.innerText = image_count;
let element_image = document.getElementById("image");
element_image.setAttribute("src", current_img);

document.getElementById("next").addEventListener("click", (event) => {
  current_img = chgd_imgs.shift();
  image_count = (typeof image_count === "number" ? image_count : 0) + 1;
  if (image_count <= total_imgs) {
    let element_img_count2 = document.getElementById("img_count");
    element_img_count2.innerText = image_count;
    let element_image2 = document.getElementById("image");
    element_image2.setAttribute("src", current_img);
  } else {
    initiate_images();
  }
});

document.getElementById("save").addEventListener("click", (event) => {
  let element_title = document.getElementById("title");
  element_title.innerText = getNumberOrString(
    document.getElementById("text").value
  );
});

document.getElementById("previous").addEventListener("click", (event) => {
  if (image_count != 1) {
    copy_images();
    counter = image_count;
    image_count = (typeof image_count === "number" ? image_count : 0) + -1;
    counter = image_count;
    var j_inc = 1;
    if (1 > counter) {
      j_inc = -j_inc;
    }
    for (j = 1; j_inc >= 0 ? j <= counter : j >= counter; j += j_inc) {
      if (--window.LoopTrap <= 0) throw "Infinite loop.";
      current_img = chgd_imgs.shift();
    }
    let element_image4 = document.getElementById("image");
    element_image4.setAttribute("src", current_img);
    let element_img_count4 = document.getElementById("img_count");
    element_img_count4.innerText = image_count;
  } else {
    copy_images();
    current_img = chgd_imgs.pop();
    image_count = total_imgs;
    let element_image5 = document.getElementById("image");
    element_image5.setAttribute("src", current_img);
    let element_img_count5 = document.getElementById("img_count");
    element_img_count5.innerText = image_count;
  }
});
