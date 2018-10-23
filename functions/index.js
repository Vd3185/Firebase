//  This creates a Blogger client and retrieves the details of a blog given the blog Id:
const functions = require('firebase-functions');
const { google } = require('googleapis')



exports.helloWorld = functions.https.onRequest((request, response) => {
 

  const blogger = google.blogger({
    version: 'v3',
    auth: 'AIzaSyBsyAL_Hl9OIOrCsUGWzK161QcEpkyeX2U'
  });
  
  const params = {
    blogId: 3213900
  };

  // get the blog details
   blogger.blogs.get(params, (err, res) => {
    if (err) {
      console.error(err);
      throw err;
    }
    response.send(`The blog url is ${res.data.url}`+"Hello from Firebase!");
  });
  //response.send();
});


  
