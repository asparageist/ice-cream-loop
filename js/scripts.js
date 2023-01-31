window.onload = function() {
  const flavors = ["chocolate", "mutton", "good books", "strawberry", "violin"];
  const ul = document.querySelector("p#icedCreams");
  flavors.forEach(function(flavor) {
    const li = document.createElement("li");
    li.append(flavor);
    ul.append(li);
  });
};