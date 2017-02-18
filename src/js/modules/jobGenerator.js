var profileViewer = {

    settings: {
        table: document.getElementById('profiles')
    },

    data: {
        profiles: {
            USER_ID1: {
                firstName: 'Steven',
                lastName: 'Smith',
                phone: {
                    number: '6 2993 1323',
                    countryCode: '+31'
                },
                birthday: {
                    birthday: '1970-11-7',
                    age: 46
                    // age: this.calculateAge()
                },
                online: {
                    emailAddress: 'StevenSmith@mail.com'
                }
            },
            USER_ID2: {
                firstName: 'Roger',
                lastName: 'Cook',
                phone: {
                    number: '6 3882 3323',
                    countryCode: '+31'
                },
                birthday: {
                    birthday: '1980-11-7',
                    age: 36
                    // age: this.calculateAge()
                },
                online: {
                    emailAddress: 'StevenSmith@mail.com'
                }
            },
            USER_ID3: {
                firstName: 'Sandra',
                lastName: 'Miller',
                phone: {
                    number: '6 2993 1323',
                    countryCode: '+31'
                },
                birthday: {
                    birthday: '2001-3-15',
                    age: 15
                    // age: this.calculateAge()
                },
                online: {
                    emailAddress: 'StevenSmith@mail.com'
                }
            }
        }
    },

    init: function() {
        this.printData();
    },

    printData: function() {
        var profiles = this.data.profiles;
        var countedProfiles = this.objectLength(this.data.profiles);

        for (var i = 0 + 1; i < countedProfiles + 1; i++) {
            console.log('******************');
            // console.log('var i = ' + i);
            var userId = 'USER_ID' + i;
            console.log(userId);
            console.log(profiles[userId].firstName + ' ' + profiles[userId].lastName);
            console.log(profiles[userId].phone.countryCode + ' ' + profiles[userId].phone.number);
            // console.log(this.data.profiles.USER_ID + i + .firstName);

            ////////////////////////////////////////

            var countedProperties = this.objectLength(profiles[userId]);

            for (var a = 0; a < countedProperties; a++) {
                var newRow = document.createElement('tr');
                var countedSubProperties = this.objectLength(profiles);

                // create cells
                var firstNameCellShow = document.createElement('td');
                var firstNameCell = document.createElement('td');

                firstNameCellShow.innerHTML = 'First Name';
                firstNameCell.innerHTML = profiles[userId].firstName;

                newRow.appendChild(firstNameCellShow);
                newRow.appendChild(firstNameCell);

                var lastNameCellShow = document.createElement('td');
                var lastNameCell = document.createElement('td');

                lastNameCellShow.innerHTML = 'Last Name';
                lastNameCell.innerHTML = profiles[userId].lastName;

                newRow.appendChild(lastNameCellShow);
                newRow.appendChild(lastNameCell);

                this.settings.table.appendChild(newRow);
            }

        }


        // table row
        // for (var j = 0 + 1; j < countedProfiles; j++) {
        //     var row = document.createElement('tr');
        //     for (var xx = 0; xx < 5; xx++) {
        //
        //     }
        // }

        // this.settings.table.appendChild();


        // this.createTable();

        // var heading = document.createElement('h1'),
        //     text = document.createTextNode('just some text');
        // heading.appendChild(text);
        // this.settings.table.appendChild(heading);
    },

    // createTable: function() {
    //
    // },

    objectLength: function(object) {
        var length = 0;

        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                ++length;
            }
        }

        return length;
    }

};
