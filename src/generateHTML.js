const generateManager = function(manager) {

    return `
    <div class="row" id="employees">
    <div class="col s12 m12 l4">
        <div class="card">
            <span class="card-title" id="managername1">Name: ${manager.name} </span>
            <div id="employee1">
              <img src="images/manager.png" />
                <h6 id="managerrole1">Role: Manager </h6>
                <h6 id="managerid1">Id: ${manager.id} </h6>
                <h6 id="manageremail1">Email: ${manager.email} </h6>
                <h6 id="managerofficenumber1">Office Number: ${manager.officeNumber} </h6>
            </div>
        </div>
    </div>

    `;
}


const generateEngineer = function() {

}


const generateIntern = function() {

}


const generateCompletePage = function(employeeHTMLString) {
    return`
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
            
                <!-- Employee Cards -->
                ${employeeHTMLString}

            </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </body>

  </html>


    `
}




function generateHTML(data) {

    const finalHTMLArr = []
    console.log(data);

    //differentiate between roles
    for (let i = 0; i < data.length; i++) {
        const currentEmployee = data[i];
        const role = currentEmployee.getRole();
        console.log('current employee is:')
        console.log(currentEmployee);
        console.log('current role is:')
        console.log(role);

        if(role === "Manager") {
            const managerCardHtml = generateManager(currentEmployee)
            finalHTMLArr.push(managerCardHtml);
            console.log('entered Manger psuh bloci iono');
            console.log(managerCardHtml);
        }

        // else if


        
    }

    const employeeHTMLString = finalHTMLArr.join("")
    console.log('final HTML arr is:');
    console.log(finalHTMLArr);
    console.log('employee HTML string is:');
    console.log(employeeHTMLString);
    const finalHTMLString = generateCompletePage(employeeHTMLString);
    return finalHTMLString;

    //then call a different function




}


//export of the generateHTML to the main file
module.exports = generateHTML;