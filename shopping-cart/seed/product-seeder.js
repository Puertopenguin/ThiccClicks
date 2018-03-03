var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');

var product = [

    new Product ({
    imagePath: 'https://www.keychatter.com/wp-content/uploads/2015/07/keychatter_2015-07-13_21-35-31.jpg',
    title: '4 Caps',
    description: 'Thiccclicks 4',
    price: 8

    }),
    new Product ({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Color-blue.JPG',
        title: 'Blue cap',
        description: 'Thiccclicks Blue',
        price: 5

    }),
    new Product ({
        imagePath: 'https://www.hudsonvalleylighting.com/media/green%20paper.jpg',
        title: 'Green cap',
        description: 'Thiccclicks Green',
        price: 5

    }),
    new Product ({
        imagePath: 'http://www.solidbackgrounds.com/images/2560x1440/2560x1440-pastel-pink-solid-color-background.jpg',
        title: 'Pink cap',
        description: 'Thiccclicks Pink',
        price: 5

    }),
    new Product ({
        imagePath: 'http://www.tate.org.uk/art/images/work/T/T07/T07292_10.jpg',
        title: 'Yellow cap',
        description: 'Thiccclicks Yellow',
        price: 5

    }),
    new Product ({
        imagePath: 'https://vignette.wikia.nocookie.net/phobia/images/5/5a/Red.jpg/revision/latest?cb=20161109225243',
        title: 'Red cap',
        description: 'Thiccclicks Red',
        price: 5

    })

];
var done = 0;
for (var i = 0; i < product.length; i++){
    product[i].save(function(err, result){
        done++;
        if(done === product.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}