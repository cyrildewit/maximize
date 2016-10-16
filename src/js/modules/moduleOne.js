var moduleOne = {

    data: {
        persons: [
            ['John', 'Doe'],
            ['Jane', 'Doe'],
            ['Cyril', 'de Wit']
        ],
    },

    init: function() {
        this.printData(this.data.persons);
    },

    printData: function(data) {
        for (var ii = 0; ii < data.length; ii++) {
            for (var jj = 0; jj < data[ii].length; jj++) {
                console.log(data[ii][jj] + ' ' + data[ii][jj]);
            }
        }
    },

};
