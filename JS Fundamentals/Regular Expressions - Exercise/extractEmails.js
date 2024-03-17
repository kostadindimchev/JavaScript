function extractEmails(input) {
    let pattern = /(?<!\S)[a-z]+[\.\_\-]*[a-z]+@[a-z]+([\.\-]*[a-z]+)*\.[a-z]+/ig
    let emails = input.match(pattern)

    for (const email of emails) {
        if(email !==  null) {
            console.log(email);
        }
    }
}

extractEmails('Please contact us at: support@github.com.');
extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');
extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class.–- steve.parker@softuni.de.');