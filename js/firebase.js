      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyDp5cZZvRKmvvcyGkekLRrdIWXdI9wfH2s",
        authDomain: "kalcifer-kirby.firebaseapp.com",
        databaseURL: "https://kalcifer-kirby.firebaseio.com",
        projectId: "kalcifer-kirby",
        storageBucket: "kalcifer-kirby.appspot.com",
        messagingSenderId: "126533458207"
      };
      
      firebase.initializeApp(config);

      function funChange(){
          const fb = firebase.database().ref();
          var dbname = document.getElementById("dbname").value;
          var email = document.getElementById("dbemail").value;
          console.log(dbname);
          console.log(email);
          var datamas = dbname;
          var data = {dbname, email};         
          console.log(datamas);
          console.log(data);
          fb.child('ggggg/').push(datamas);
          fb.child('ggggg/' + datamas + '/').set(data);
          funGet(datamas);
    }

    
    

      var ref = firebase.database().ref();
      ref.on("value", function(snapshot) {
         console.log(snapshot.val());
         this.getName = snapshot.val();
      }, function (error) {
         console.log("Error: " + error.code);
      });



      function funGet(val){
          var x = new Object("getName.ggggg." + val + ".dbname");
          document.getElementById("pp").innerHTML = x;
          console.log(x);
      }