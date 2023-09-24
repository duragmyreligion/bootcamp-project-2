// var xhr = new XMLHttpRequest();
// xhr onload = function() {
//     if(xhr.status === 200) {
//         responseObject = JSON.parse(xhr.responseText);
//         var newContent = '',
//         for (var i = 0; i < responseObject.CSGO.length; i++) {
//             newContent += 'name' + responseObject.CSGO[i].name + '<br>';
//             newContent += 'title' + responseObject.CSGO[i].title + '<br>';
//             newContent += 'description' + responseObject.CSGO[i].description + '<br>';
//             newContent += '<hr>';
//         }
//         this.document.getElementById('content').innerHTML = newContent;
//     }
// };

// xhr.open('GET', 'http://localhost:3000/api/csgo', true);
// xhr.send(null);

// var xhr = new XMLHttpRequest();
// xhr.onload = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         var responseObject = JSON.parse(xhr.responseText);
//         var newContent = '';
//         for (var i = 0; i < responseObject.CSGO.length; i++) {
//             newContent += 'Name: ' + responseObject.CSGO[i].name + '<br>';
//             newContent += 'Title: ' + responseObject.CSGO[i].title + '<br>';
//             newContent += 'Description: ' + responseObject.CSGO[i].description + '<br>';
//             newContent += '<hr>';
//         }
//         document.getElementById('content').innerHTML = newContent;
//     }
// };

// xhr.open('GET', 'http://localhost:3001/api/forum/', true);
// xhr.send(null);

// JavaScript code using Handlebars.js
// var source = document.getElementById("post-template").innerHTML;
// var template = Handlebars.compile(source);

// var xhr = new XMLHttpRequest();
// xhr.onload = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     var responseObject = JSON.parse(xhr.responseText);

//     var newContent = '';
//     responseObject.CSGO.forEach(function (post) {
//       newContent += template(post);
//     });

//     document.getElementById('content').innerHTML = newContent;
//   }
// };

// xhr.open('GET', 'http://localhost:3000/api/csgo', true);
// xhr.send(null);

