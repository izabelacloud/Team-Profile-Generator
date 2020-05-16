
function generateHTML(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile Generator</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
    </head>
  
  <body>

      <header>
        <nav class="navbar navbar-dark bg-primary">
          <a class="navbar-brand" href="#">My Team</a>
        </nav>
      </header>

      <main>


      </main>


      <div class="container" >
        <!-- User Cards -->
        <div class="row" id="title">
            <h4 class="flight-title #01579b light-blue darken-4 white-text"><i
                    class="material-icons left"></i></h2>
            </div>
        <!-- User Card 1 -->
        <div class="row" id="employees">
            <div class="col s12 m12 l4">
                <div class="card">
                    <span class="card-title" id="managername1">Name: ${data.managerName} </span>
                    <div id="employee1">
                      <img src="images/manager.png" />
                        <h6 id="managerrole1">Role: Manager </h6>
                        <h6 id="managerid1">Id: ${data.managerId} </h6>
                        <h6 id="manageremail1">Email: ${data.managerEmail} </h6>
                        <h6 id="managerofficenumber1">Office Number: ${data.managerOfficeNumber} </h6>
                    </div>
                </div>
            </div>
        <!-- User Card 2 -->
          <div class="col s12 m12 l4">
              <div class="card">
                  <span class="card-title" id="engineername1">Name: ${data.engineerName} </span>
                  <div id="employee2">
                    <img src="images/engineer.png" />
                      <h6 id="engineerrole1">Role: Engineer  </h6>
                      <h6 id="engineerid1">Id: ${data.engineerId} </h6>
                      <h6 id="engineer1">Email: ${data.engineerEmail} </h6>
                      <h6 id="engineergithub1">Github: ${data.engineerGithub} </h6>
                  </div>
              </div>
          </div>
        <!-- User Card 3 -->
        <div class="col s12 m12 l4">
          <div class="card">
              <span class="card-title" id="internname1">Name: ${data.internName} </span>
              <div id="employee3">
                <img src="images/student.png" />
                  <h6 id="internrole1">Role: Intern </h6>
                  <h6 id="internid1">Id: ${data.internId} </h6>
                  <h6 id="intern1">Email: ${data.internEmail} </h6>
                  <h6 id="internuniversity1">School: ${data.internSchool}  </h6>
              </div>
          </div>
      </div>


    </div>



    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </body>

  </html>
    `;

}


//export of the generateHTML to the main file
module.exports = generateHTML;